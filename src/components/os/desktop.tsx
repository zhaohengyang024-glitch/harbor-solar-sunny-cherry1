import { useEffect, useState } from "react";
import {
  BarChart3,
  BookOpen,
  Cake,
  CloudSun,
  Gift,
  GitCommit,
  Heart,
  Hourglass,
  Images,
  KeyRound,
  ListTodo,
  Mail,
  Map,
  RotateCcw,
  Shuffle,
  Sparkles,
  Star,
  Ticket,
  Trophy,
} from "lucide-react";
import { APPS, DOCK, SYSTEM_MESSAGES, type AppId } from "@/lib/archive";
import { elapsedSince, isBirthdayToday } from "@/lib/clock";
import { streakFrom, useGift } from "@/lib/gift-store";
import { Dust } from "@/components/gift/dust";

const ICONS: Record<string, typeof BookOpen> = {
  timeline: GitCommit,
  photos: Images,
  secrets: KeyRound,
  reasons: Heart,
  map: Map,
  stats: BarChart3,
  dictionary: BookOpen,
  coupons: Ticket,
  plans: ListTodo,
  capsules: Hourglass,
  replay: RotateCcw,
  weather: CloudSun,
  achievements: Trophy,
  letter: Mail,
  random: Shuffle,
  birthday: Cake,
  wishes: Star,
  scratch: Gift,
  fortune: Sparkles,
  hidden: KeyRound,
};

export function Desktop() {
  const config = useGift((s) => s.config);
  const visits = useGift((s) => s.visits);
  const visitDays = useGift((s) => s.visitDays);
  const setApp = useGift((s) => s.setApp);
  const markHidden = useGift((s) => s.markHidden);
  const [taps, setTaps] = useState(0);
  const now = useNow();
  const elapsed = elapsedSince(config.togetherSince, now);
  const birthday = isBirthdayToday(config.birthdayISO, now);
  const streak = streakFrom(visitDays);
  const message = SYSTEM_MESSAGES[now.getMinutes() % SYSTEM_MESSAGES.length]!;
  const clock = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

  function pingOs() {
    const n = taps + 1;
    setTaps(n);
    if (n >= 5) {
      markHidden();
      setApp("hidden");
      setTaps(0);
    }
  }

  return (
    <section className="relative isolate min-h-dvh overflow-hidden bg-bg text-fg">
      <img
        src="/images/stars.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/80 to-bg" />
      <Dust />
      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-lg flex-col px-5 pb-28 pt-16 sm:px-8">
        <header className="flex items-center justify-between text-xs tracking-[0.2em] text-subtle">
          <button
            type="button"
            onClick={pingOs}
            className="text-subtle"
            aria-label="系统"
          >
            YUNI OS
          </button>
          <span className="font-latin tabular-nums tracking-normal">{clock}</span>
        </header>

        <div className="mt-8">
          <p className="text-sm text-muted">我们已经相爱</p>
          <p className="mt-2 font-display text-4xl font-medium leading-tight sm:text-5xl">
            {elapsed.days}
            <span className="ml-2 text-xl text-muted">天</span>
          </p>
          <p className="mt-2 font-latin text-sm tabular-nums text-subtle">
            {String(elapsed.hours).padStart(2, "0")} 时{" "}
            {String(elapsed.minutes).padStart(2, "0")} 分{" "}
            {String(elapsed.seconds).padStart(2, "0")} 秒
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            这是你第 {Math.max(visits, 1)} 次打开这里。
            {streak > 1 ? ` 连续 ${streak} 天。` : " 我一直记得你每一次来。"}
          </p>
          {birthday ? (
            <button
              type="button"
              onClick={() => setApp("birthday")}
              className="mt-4 rounded-lg border border-primary/40 bg-primary/15 px-4 py-3 text-left text-sm text-fg"
            >
              A new version is available. 今天是你的生日。
            </button>
          ) : null}
          <p className="mt-3 text-xs text-subtle">{message}</p>
        </div>

        <ul className="mt-8 grid grid-cols-4 gap-3">
          {APPS.map((app) => (
            <li key={app.id}>
              <OsIcon
                id={app.id}
                label={app.label}
                onOpen={() => setApp(app.id)}
              />
            </li>
          ))}
        </ul>
      </div>

      <nav
        className="fixed inset-x-0 bottom-0 z-30 flex justify-center px-4"
        style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
        aria-label="快捷方式"
      >
        <ul className="flex w-full max-w-lg items-center justify-around rounded-2xl border border-border bg-bg-elevated/90 px-2 py-2">
          {DOCK.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => setApp(item.id)}
                className="flex min-h-11 min-w-16 flex-col items-center justify-center gap-1 px-2 py-1 text-xs text-muted"
              >
                <DockGlyph id={item.id} />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

function OsIcon({
  id,
  label,
  onOpen,
}: {
  id: AppId;
  label: string;
  onOpen: () => void;
}) {
  const Icon = ICONS[id] ?? BookOpen;
  return (
    <button
      type="button"
      onClick={onOpen}
      className="flex w-full flex-col items-center gap-2 py-1"
    >
      <span className="flex size-12 items-center justify-center rounded-xl bg-surface text-primary sm:size-14">
        <Icon className="size-5" />
      </span>
      <span className="text-center text-xs leading-tight text-muted">{label}</span>
    </button>
  );
}

function DockGlyph({ id }: { id: AppId }) {
  const Icon = ICONS[id] ?? BookOpen;
  return <Icon className="size-5 text-fg" />;
}

function useNow() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);
  return now;
}
