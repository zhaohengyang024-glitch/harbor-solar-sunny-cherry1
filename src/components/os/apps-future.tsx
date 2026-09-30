import { useEffect, useState } from "react";
import {
  ACHIEVEMENTS,
  BIRTHDAY_LINES,
  BOOT_LINES,
  CAPSULES,
  COMMITS,
  HIDDEN_LETTER,
  PHOTOS,
  PLANS,
  SECRETS,
  type AppId,
} from "@/lib/archive";
import {
  addDays,
  elapsedSince,
  isBirthdayToday,
  nextBirthdayDate,
  remainingUntil,
} from "@/lib/clock";
import { fillTemplate, REASONS, WISH_EDGES, WISHES } from "@/lib/gift-content";
import { useGift } from "@/lib/gift-store";
import { AppFrame } from "@/components/os/frame";
import { Button } from "@/components/ui/button";
import { Dust } from "@/components/gift/dust";
import { cn } from "@/lib/utils";

export function PlansApp() {
  const done = useGift((s) => s.donePlans);
  const toggle = useGift((s) => s.togglePlan);

  return (
    <AppFrame kicker="todo" title="未来计划">
      <p className="text-sm text-muted">完成后可以勾选。会留下日期。</p>
      <ul className="mt-6 space-y-3">
        {PLANS.map((plan) => {
          const when = done[plan.id];
          return (
            <li key={plan.id}>
              <button
                type="button"
                onClick={() => toggle(plan.id)}
                className="flex w-full items-start gap-3 rounded-lg border border-border bg-surface px-4 py-4 text-left"
              >
                <span
                  className={cn(
                    "mt-1 size-4 shrink-0 rounded-sm border",
                    when ? "border-primary bg-primary" : "border-subtle",
                  )}
                />
                <span>
                  <span className="block font-display text-lg">{plan.title}</span>
                  <span className="mt-1 block text-sm text-muted">{plan.body}</span>
                  {when ? (
                    <span className="mt-2 block text-xs text-primary">
                      完成于 {when}
                    </span>
                  ) : null}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </AppFrame>
  );
}

export function CapsulesApp() {
  const config = useGift((s) => s.config);
  const opened = useGift((s) => s.openedCapsules);
  const openCapsule = useGift((s) => s.openCapsule);
  const days = elapsedSince(config.togetherSince).days;
  const birthday = isBirthdayToday(config.birthdayISO);

  return (
    <AppFrame kicker="time" title="给未来的她">
      <p className="text-sm text-muted">有的信要等到那一天。</p>
      <ul className="mt-6 space-y-4">
        {CAPSULES.map((c) => {
          const unlocked =
            c.unlock === "now" ||
            (c.unlock === "days" && days >= (c.days ?? 0)) ||
            (c.unlock === "birthday" && birthday);
          const seen = Boolean(opened[c.id]);
          return (
            <li key={c.id} className="rounded-xl border border-border bg-surface p-5">
              <p className="font-display text-xl">{c.title}</p>
              <p className="mt-2 text-sm text-muted">{c.preview}</p>
              {unlocked ? (
                seen ? (
                  <p className="mt-4 font-display text-base leading-relaxed whitespace-pre-line">
                    {fillTemplate(c.body, config)}
                  </p>
                ) : (
                  <Button
                    type="button"
                    variant="paper"
                    className="mt-4"
                    onClick={() => openCapsule(c.id)}
                  >
                    打开
                  </Button>
                )
              ) : c.unlock === "days" ? (
                <p className="mt-3 text-xs text-subtle">
                  还差 {Math.max(0, (c.days ?? 0) - days)} 天 · 解锁日{" "}
                  {addDays(config.togetherSince, c.days ?? 0)}
                </p>
              ) : (
                <p className="mt-3 text-xs text-subtle">生日当天自动解锁。</p>
              )}
            </li>
          );
        })}
      </ul>
    </AppFrame>
  );
}

export function WishesApp() {
  const revealed = useGift((s) => s.revealed);
  const revealWish = useGift((s) => s.revealWish);
  const [active, setActive] = useState<string | null>(null);
  const current = WISHES.find((w) => w.id === active);
  const count = WISHES.filter((w) => revealed[w.id]).length;

  return (
    <AppFrame kicker="stars" title="她的星图">
      <p className="text-sm text-muted">
        点亮一颗星。已点亮 {count} / {WISHES.length}
      </p>
      <div className="relative mt-6 aspect-constellation w-full sm:aspect-photo">
        <svg viewBox="0 0 100 80" className="absolute inset-0 size-full" aria-hidden="true">
          {WISH_EDGES.map(([a, b]) => {
            const pa = WISHES.find((w) => w.id === a);
            const pb = WISHES.find((w) => w.id === b);
            if (!pa || !pb) return null;
            const lit = revealed[a] && revealed[b];
            return (
              <line
                key={`${a}-${b}`}
                x1={pa.x}
                y1={pa.y}
                x2={pb.x}
                y2={pb.y}
                stroke={lit ? "var(--color-primary)" : "var(--color-subtle)"}
                strokeOpacity={lit ? 0.85 : 0.28}
                strokeWidth="0.28"
              />
            );
          })}
        </svg>
        {WISHES.map((wish) => {
          const lit = Boolean(revealed[wish.id]);
          return (
            <button
              key={wish.id}
              type="button"
              onClick={() => {
                revealWish(wish.id);
                setActive(wish.id);
              }}
              className={cn(
                "absolute flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full",
                !lit && "star-idle",
              )}
              style={{ left: `${wish.x}%`, top: `${wish.y}%` }}
              aria-label={wish.title}
            >
              <span
                className={cn(
                  "block rounded-full",
                  lit ? "size-3 bg-primary" : "size-2 bg-fg/80",
                )}
              />
            </button>
          );
        })}
      </div>
      <div className="mt-4 min-h-24 rounded-lg border border-border bg-bg-elevated/80 px-5 py-4">
        {current ? (
          <>
            <p className="font-display text-lg">{current.title}</p>
            <p className="mt-1 text-sm text-muted">{current.body}</p>
          </>
        ) : (
          <p className="text-sm text-muted">从任意一颗星开始。</p>
        )}
      </div>
    </AppFrame>
  );
}

export function AchievementsApp() {
  const opened = useGift((s) => s.opened);
  const revealed = useGift((s) => s.revealed);
  const usedCoupons = useGift((s) => s.usedCoupons);
  const foundHidden = useGift((s) => s.foundHidden);
  const visitDays = useGift((s) => s.visitDays);
  const flags: Record<string, boolean> = {
    a1: true,
    a2: true,
    a3: true,
    a4: true,
    a5: opened,
    a6: opened,
    a7: Object.keys(revealed).length > 0,
    a8: Object.keys(usedCoupons).length > 0,
    a9: visitDays.length >= 3,
    a10: foundHidden,
  };

  return (
    <AppFrame kicker="badge" title="成就">
      <ul className="mt-2 space-y-3">
        {ACHIEVEMENTS.map((a) => {
          const on = Boolean(flags[a.id]);
          return (
            <li
              key={a.id}
              className="rounded-lg border border-border bg-surface px-4 py-4"
            >
              <p className="font-display text-lg">
                {a.hidden && !on ? "????" : a.title}
              </p>
              <p className="mt-1 text-sm text-muted">
                {on ? a.body : a.hidden ? "条件未知" : "尚未解锁"}
              </p>
            </li>
          );
        })}
      </ul>
    </AppFrame>
  );
}

export function BirthdayApp() {
  const config = useGift((s) => s.config);
  const candleOut = useGift((s) => s.candleOut);
  const blowCandle = useGift((s) => s.blowCandle);
  const played = useGift((s) => s.birthdayPlayed);
  const mark = useGift((s) => s.markBirthdayPlayed);
  const today = isBirthdayToday(config.birthdayISO);
  const next = nextBirthdayDate(config.birthdayISO);
  const [phase, setPhase] = useState(played || !today ? 3 : 0);
  const [line, setLine] = useState(0);

  useEffect(() => {
    if (phase === 0) {
      const t = window.setTimeout(() => setPhase(1), 900);
      return () => window.clearTimeout(t);
    }
    if (phase === 1) {
      const t = window.setTimeout(() => setPhase(2), 1600);
      return () => window.clearTimeout(t);
    }
    if (phase === 2) {
      const t = window.setTimeout(() => {
        setPhase(3);
        mark();
      }, 2200);
      return () => window.clearTimeout(t);
    }
  }, [phase, mark]);

  useEffect(() => {
    const id = window.setInterval(
      () => setLine((n) => (n + 1) % BIRTHDAY_LINES.length),
      3200,
    );
    return () => window.clearInterval(id);
  }, []);

  if (!config.birthdayISO) {
    return (
      <AppFrame kicker="birthday" title="生日模式">
        <p className="text-sm text-muted">
          还没有写下生日。左下角铅笔里补上日期，到那天会自动切换。
        </p>
      </AppFrame>
    );
  }

  if (phase < 3 && today) {
    return (
      <section
        className="flex min-h-dvh cursor-pointer flex-col justify-center bg-bg px-6 text-fg"
        onClick={() => {
          setPhase(3);
          mark();
        }}
      >
        <div className="mx-auto w-full max-w-md font-latin text-sm leading-7 text-muted">
          {phase === 0 ? (
            <p className="font-display text-2xl text-fg">A new version is available.</p>
          ) : null}
          {phase >= 1 ? <p>Updating...</p> : null}
          {phase === 2
            ? BOOT_LINES.map((l) => (
                <p key={l}>
                  {l} <span className="text-primary">100%</span>
                </p>
              ))
            : null}
          <p className="mt-12 text-xs text-subtle">点任意处继续</p>
        </div>
      </section>
    );
  }

  const remain = next ? remainingUntil(next) : null;

  return (
    <section className="relative isolate min-h-dvh overflow-hidden">
      <img
        src="/images/dusk.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-bg/70" />
      <div className="fw-layer" aria-hidden="true">
        {Array.from({ length: 12 }, (_, i) => (
          <span key={i} className={`fw fw-${(i % 4) + 1}`} />
        ))}
      </div>
      <Dust />
      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-lg flex-col px-5 pb-24 pt-16">
        <Button
          type="button"
          variant="ghost"
          className="self-start"
          onClick={() => useGift.getState().setApp("desktop")}
        >
          返回桌面
        </Button>
        <p className="mt-6 text-xs tracking-[0.3em] text-subtle">BIRTHDAY BUILD</p>
        <h1 className="mt-4 font-display text-4xl font-medium">
          {config.herName}，生日快乐
        </h1>
        <p className="mt-6 font-display text-xl text-primary">
          {BIRTHDAY_LINES[line]}
        </p>
        {!today && remain ? (
          <p className="mt-6 text-sm text-muted">
            距离生日还有 {remain.days} 天 {remain.hours} 时 {remain.minutes} 分
          </p>
        ) : null}
        <button
          type="button"
          onClick={blowCandle}
          className="mt-10 flex flex-col items-center gap-3 self-center"
          aria-label="吹蜡烛"
        >
          <span className={cn("candle", candleOut && "is-out")} />
          <span className="text-sm text-muted">
            {candleOut ? "愿望收到了。" : "点蜡烛，许一个愿。"}
          </span>
        </button>
      </div>
    </section>
  );
}

export function HiddenApp() {
  return (
    <AppFrame kicker="/secret" title="隐藏档案">
      <article className="paper-sheet rounded-xl px-6 py-10">
        <p className="font-display text-lg leading-8 whitespace-pre-line text-ink">
          {HIDDEN_LETTER}
        </p>
      </article>
    </AppFrame>
  );
}

export function RandomApp() {
  const setApp = useGift((s) => s.setApp);
  const pool: { app: AppId; title: string; body: string }[] = [
    ...COMMITS.map((c) => ({
      app: "timeline" as const,
      title: c.title,
      body: c.adds.join(" · "),
    })),
    ...PHOTOS.map((p) => ({
      app: "photos" as const,
      title: p.title,
      body: p.whisper,
    })),
    ...SECRETS.map((s) => ({
      app: "secrets" as const,
      title: s.title,
      body: s.body,
    })),
    ...REASONS.map((r) => ({
      app: "reasons" as const,
      title: r.title,
      body: r.body,
    })),
    ...PLANS.map((p) => ({
      app: "plans" as const,
      title: p.title,
      body: p.body,
    })),
  ];
  const [item, setItem] = useState(() => pool[Math.floor(Math.random() * pool.length)]!);

  return (
    <AppFrame kicker="shuffle" title="随机回忆">
      <p className="text-sm text-muted">你抽到了：</p>
      <article className="paper-sheet mt-6 rounded-xl px-6 py-8">
        <p className="font-display text-2xl text-ink">{item.title}</p>
        <p className="mt-4 text-sm leading-relaxed text-ink">{item.body}</p>
      </article>
      <div className="mt-6 flex gap-3">
        <Button
          type="button"
          variant="paper"
          onClick={() =>
            setItem(pool[Math.floor(Math.random() * pool.length)]!)
          }
        >
          再抽一次
        </Button>
        <Button type="button" variant="ghost" onClick={() => setApp(item.app)}>
          去看完整的
        </Button>
      </div>
    </AppFrame>
  );
}
