import { useEffect, useRef, useState } from "react";
import {
  COUPONS,
  FORTUNES,
  STAT_FACTS,
  WORDS,
} from "@/lib/archive";
import { dayIndex, elapsedSince } from "@/lib/clock";
import { fillTemplate } from "@/lib/gift-content";
import { useGift } from "@/lib/gift-store";
import { AppFrame } from "@/components/os/frame";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export function LetterApp() {
  const config = useGift((s) => s.config);
  const reply = useGift((s) => s.reply);
  const replySaved = useGift((s) => s.replySaved);
  const setReply = useGift((s) => s.setReply);
  const saveReply = useGift((s) => s.saveReply);
  const letter = fillTemplate(config.letter, config);
  const typed = useTyped(letter);

  return (
    <AppFrame kicker="mail" title="写给你">
      <article
        className="paper-sheet cursor-pointer rounded-xl px-6 py-8 sm:px-10"
        onClick={typed.skip}
      >
        <p className="font-display text-lg leading-8 whitespace-pre-line text-ink">
          {typed.text}
          {typed.done ? null : <span className="caret" aria-hidden="true" />}
        </p>
        {typed.done ? (
          <p className="mt-8 font-display text-base leading-8 whitespace-pre-line text-ink">
            {fillTemplate(config.promise, config)}
          </p>
        ) : (
          <p className="mt-4 text-xs text-ink-muted">点一下信纸，可以一次看完。</p>
        )}
      </article>
      <div className="mt-6 rounded-xl border border-border bg-bg-elevated p-5">
        <p className="text-sm text-muted">如果你愿意，可以把想说的话留在这里。</p>
        <Textarea
          className="mt-3 border-transparent bg-paper font-display text-ink"
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          placeholder="写给未来的我们。"
        />
        <div className="mt-3 flex items-center gap-3">
          <Button
            type="button"
            variant="paper"
            onClick={saveReply}
            disabled={!reply.trim()}
          >
            留下
          </Button>
          {replySaved ? <span className="text-sm text-primary">我收到了。</span> : null}
        </div>
      </div>
    </AppFrame>
  );
}

function useTyped(source: string) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setCount(source.length);
      return;
    }
    setCount(0);
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= source.length) window.clearInterval(id);
    }, 24);
    return () => window.clearInterval(id);
  }, [source]);
  return {
    text: source.slice(0, count),
    done: count >= source.length,
    skip: () => setCount(source.length),
  };
}

export function StatsApp() {
  const config = useGift((s) => s.config);
  const visits = useGift((s) => s.visits);
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);
  const t = elapsedSince(config.togetherSince, now);

  return (
    <AppFrame kicker="data" title="恋爱数据面板">
      <dl className="grid grid-cols-2 gap-3">
        <Stat label="相爱时间" value={`${t.days} 天`} />
        <Stat label="此刻" value={`${t.hours} 时 ${t.minutes} 分`} />
        <Stat label="访问次数" value={`${Math.max(visits, 1)}`} />
        <Stat label="说过晚安" value="无法统计" />
      </dl>
      <ul className="mt-8 space-y-3">
        {STAT_FACTS.map((row) => (
          <li
            key={row.label}
            className="flex items-end justify-between gap-4 border-b border-hairline pb-3"
          >
            <span className="text-sm text-muted">{row.label}</span>
            <span className="font-display text-lg text-fg">{row.value}</span>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm text-muted">
        系统结论：她仍然是这个项目唯一的管理员。权限：100%。
      </p>
    </AppFrame>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-surface px-4 py-4">
      <p className="text-xs text-subtle">{label}</p>
      <p className="mt-2 font-display text-xl">{value}</p>
    </div>
  );
}

export function DictionaryApp() {
  const [id, setId] = useState(WORDS[0]!.id);
  const word = WORDS.find((w) => w.id === id) ?? WORDS[0]!;

  return (
    <AppFrame kicker="lexicon" title="专属词典">
      <p className="text-sm text-muted">只有你们懂的词。</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {WORDS.map((w) => (
          <button
            key={w.id}
            type="button"
            onClick={() => setId(w.id)}
            className={cn(
              "rounded-full px-3 py-2 text-sm",
              w.id === id ? "bg-paper text-ink" : "bg-surface text-muted",
            )}
          >
            {w.word}
          </button>
        ))}
      </div>
      <article className="paper-sheet mt-6 rounded-xl px-5 py-6">
        <p className="font-display text-3xl text-ink">{word.word}</p>
        <p className="mt-1 text-xs tracking-[0.2em] text-ink-muted">{word.pos}</p>
        <p className="mt-4 text-sm leading-relaxed text-ink">{word.meaning}</p>
        <p className="mt-4 text-sm text-ink-muted">典型用法</p>
        <p className="mt-1 text-sm text-ink">{word.usage}</p>
        <p className="mt-4 text-xs text-ink-muted">关联词 · {word.related}</p>
      </article>
    </AppFrame>
  );
}

export function CouponsApp() {
  const used = useGift((s) => s.usedCoupons);
  const useCoupon = useGift((s) => s.useCoupon);

  return (
    <AppFrame kicker="ticket" title="兑换券">
      <p className="text-sm text-muted">可以兑现到现实里。点一下核销。</p>
      <ul className="mt-6 grid gap-3">
        {COUPONS.map((c) => {
          const spent = Boolean(used[c.id]);
          return (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => {
                  if (!spent) useCoupon(c.id);
                }}
                className={cn(
                  "flex w-full flex-col rounded-xl border px-4 py-4 text-left",
                  spent
                    ? "border-border bg-bg-elevated opacity-60"
                    : "border-primary/30 bg-surface",
                )}
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="font-display text-lg">{c.title}</span>
                  <span className="text-xs tracking-[0.2em] text-subtle">
                    {spent ? "已核销" : "领取"}
                  </span>
                </span>
                <span className="mt-2 text-sm text-muted">{c.body}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </AppFrame>
  );
}

export function FortuneApp() {
  const fortuneSeen = useGift((s) => s.fortuneSeen);
  const markFortune = useGift((s) => s.markFortune);
  const today = new Date();
  const key = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
  const line = FORTUNES[dayIndex(today) % FORTUNES.length]!;
  const shown = fortuneSeen === key;

  return (
    <AppFrame kicker="oracle" title="今日一签">
      <p className="text-sm text-muted">每天一句。不是打卡，只是遇见。</p>
      <div className="paper-sheet mt-8 rounded-xl px-6 py-10 text-center">
        {shown ? (
          <p className="font-display text-2xl leading-relaxed text-ink">{line}</p>
        ) : (
          <Button type="button" variant="ink" onClick={() => markFortune(key)}>
            抽签
          </Button>
        )}
      </div>
    </AppFrame>
  );
}

export function ScratchApp() {
  const scratched = useGift((s) => s.scratched);
  const setScratched = useGift((s) => s.setScratched);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || scratched) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const surface: HTMLCanvasElement = canvas;
    const brush: CanvasRenderingContext2D = ctx;
    const { width, height } = surface;
    brush.fillStyle = "#6b5e54";
    brush.fillRect(0, 0, width, height);
    brush.fillStyle = "#f3ebe1";
    brush.font = "20px serif";
    brush.fillText("刮开", width / 2 - 22, height / 2 + 6);

    let drawing = false;
    function pos(e: PointerEvent) {
      const r = surface.getBoundingClientRect();
      return {
        x: ((e.clientX - r.left) / r.width) * width,
        y: ((e.clientY - r.top) / r.height) * height,
      };
    }
    function scratchAt(e: PointerEvent) {
      const { x, y } = pos(e);
      brush.globalCompositeOperation = "destination-out";
      brush.beginPath();
      brush.arc(x, y, 18, 0, Math.PI * 2);
      brush.fill();
    }
    function down(e: PointerEvent) {
      drawing = true;
      surface.setPointerCapture(e.pointerId);
      scratchAt(e);
    }
    function move(e: PointerEvent) {
      if (drawing) scratchAt(e);
    }
    function up() {
      drawing = false;
      const data = brush.getImageData(0, 0, width, height).data;
      let clear = 0;
      for (let i = 3; i < data.length; i += 4) {
        if (data[i] === 0) clear += 1;
      }
      if (clear / (width * height) > 0.45) setScratched();
    }
    surface.addEventListener("pointerdown", down);
    surface.addEventListener("pointermove", move);
    surface.addEventListener("pointerup", up);
    return () => {
      surface.removeEventListener("pointerdown", down);
      surface.removeEventListener("pointermove", move);
      surface.removeEventListener("pointerup", up);
    };
  }, [scratched, setScratched]);

  return (
    <AppFrame kicker="scratch" title="刮刮卡">
      <p className="text-sm text-muted">涂层下面有一张今天的券外的话。</p>
      <div className="relative mt-6 overflow-hidden rounded-xl">
        <div className="paper-sheet flex min-h-48 items-center justify-center px-6 py-10 text-center">
          <p className="font-display text-xl leading-relaxed text-ink">
            你抽到了：一个不用解释的拥抱。
          </p>
        </div>
        {scratched ? null : (
          <canvas
            ref={canvasRef}
            width={640}
            height={280}
            className="absolute inset-0 size-full touch-none"
          />
        )}
      </div>
    </AppFrame>
  );
}

export function WeatherApp() {
  const hour = new Date().getHours();
  const sky = hour < 6 ? "夜里" : hour < 12 ? "晴" : hour < 18 ? "微风" : "适合想你";

  return (
    <AppFrame kicker="sky" title="恋爱天气">
      <p className="font-display text-4xl">{sky}</p>
      <ul className="mt-8 space-y-4 text-sm">
        <Meter label="幸福指数" value={98} />
        <Meter label="想念指数" value={86} />
        <Meter label="拥抱需求" value={100} />
        <Meter label="闹脾气概率" value={4} />
      </ul>
      <p className="mt-8 text-sm text-muted">当前天气：{sky}。推荐活动：抱一下。</p>
    </AppFrame>
  );
}

function Meter({ label, value }: { label: string; value: number }) {
  return (
    <li>
      <div className="mb-1 flex justify-between text-muted">
        <span>{label}</span>
        <span className="tabular-nums">{value}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-surface">
        <div
          className="h-full rounded-full bg-primary"
          style={{ width: `${value}%` }}
        />
      </div>
    </li>
  );
}
