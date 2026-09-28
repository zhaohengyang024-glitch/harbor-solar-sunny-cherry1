type Voice = {
  osc: OscillatorNode;
};

const BPM = 70;
const BEAT = 60 / BPM;
const LOOP_BEATS = 16;

/** Original music-box phrase in MIDI. Loops every 16 beats. */
const PHRASE: Array<[note: number, start: number, length: number]> = [
  [76, 0, 1],
  [74, 1, 1],
  [72, 2, 1.5],
  [69, 3.5, 0.5],
  [72, 4, 1],
  [74, 5, 1],
  [76, 6, 2],
  [79, 8, 1],
  [76, 9, 1],
  [74, 10, 1],
  [72, 11, 1],
  [69, 12, 2],
  [67, 14, 2],
];

function midiHz(note: number) {
  return 440 * 2 ** ((note - 69) / 12);
}

export class MusicBox {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private timer: number | null = null;
  private voices: Voice[] = [];
  private scheduled = new Set<string>();
  private startedAt = 0;
  playing = false;

  async start() {
    if (this.playing) return;
    const ctx = this.ctx ?? new AudioContext();
    this.ctx = ctx;
    if (ctx.state === "suspended") await ctx.resume();

    const master = ctx.createGain();
    master.gain.value = 0.07;
    master.connect(ctx.destination);
    this.master = master;
    this.startedAt = ctx.currentTime + 0.08;
    this.scheduled.clear();
    this.playing = true;
    this.schedule();
    this.timer = window.setInterval(() => this.schedule(), 400);
  }

  stop() {
    this.playing = false;
    if (this.timer != null) {
      window.clearInterval(this.timer);
      this.timer = null;
    }
    this.scheduled.clear();
    for (const voice of this.voices) {
      try {
        voice.osc.stop();
      } catch {
        /* already stopped */
      }
    }
    this.voices = [];
    if (this.master && this.ctx) {
      const now = this.ctx.currentTime;
      this.master.gain.cancelScheduledValues(now);
      this.master.gain.setValueAtTime(Math.max(this.master.gain.value, 0.0001), now);
      this.master.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);
    }
    this.master = null;
  }

  private schedule() {
    const ctx = this.ctx;
    const master = this.master;
    if (!ctx || !master || !this.playing) return;

    const elapsed = ctx.currentTime - this.startedAt;
    const beatsNow = elapsed / BEAT;
    const from = beatsNow - 0.02;
    const to = beatsNow + 4;
    const loopFrom = Math.floor(from / LOOP_BEATS);
    const loopTo = Math.floor(to / LOOP_BEATS);

    for (let loop = loopFrom; loop <= loopTo; loop++) {
      for (const [note, start, length] of PHRASE) {
        const absBeat = loop * LOOP_BEATS + start;
        if (absBeat < from || absBeat > to) continue;
        const key = `${loop}:${start}:${note}`;
        if (this.scheduled.has(key)) continue;
        const when = this.startedAt + absBeat * BEAT;
        if (when < ctx.currentTime - 0.02) continue;
        this.scheduled.add(key);
        this.pluck(ctx, master, midiHz(note), when, length * BEAT);
      }
    }
  }

  private pluck(
    ctx: AudioContext,
    master: GainNode,
    freq: number,
    when: number,
    dur: number,
  ) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(freq, when);

    gain.gain.setValueAtTime(0.0001, when);
    gain.gain.exponentialRampToValueAtTime(0.22, when + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, when + Math.max(dur * 0.92, 0.12));

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(1800, when);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(master);
    osc.start(when);
    osc.stop(when + dur + 0.05);
    this.voices.push({ osc });
    osc.onended = () => {
      this.voices = this.voices.filter((v) => v.osc !== osc);
    };
  }
}

let box: MusicBox | null = null;

export function getMusicBox() {
  box = box ?? new MusicBox();
  return box;
}
