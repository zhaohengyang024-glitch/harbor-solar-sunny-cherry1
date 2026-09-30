import { useMemo, useState } from "react";
import {
  BRANCHES,
  COMMITS,
  PHOTOS,
  PLACES,
  SECRETS,
} from "@/lib/archive";
import { REASONS } from "@/lib/gift-content";
import { formatDot } from "@/lib/clock";
import { useGift } from "@/lib/gift-store";
import { AppFrame } from "@/components/os/frame";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function TimelineApp() {
  return (
    <AppFrame kicker="git log" title="提交记录">
      <p className="text-sm text-muted">把恋爱写成还在开发的仓库。</p>
      <ol className="mt-6 flex flex-col gap-6">
        {COMMITS.map((c) => (
          <li key={c.id} className="border-l border-border pl-4">
            <p className="font-latin text-xs text-subtle">
              {formatDot(c.date)} · {c.hash} · {c.branch}
            </p>
            <p className="mt-1 font-display text-lg text-fg">commit: {c.title}</p>
            <ul className="mt-2 text-sm text-muted">
              {c.adds.map((line) => (
                <li key={line}>+ {line}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
      <div className="mt-10 rounded-lg border border-border bg-surface p-4 text-sm text-muted">
        <p>Branches</p>
        <ul className="mt-2 font-latin text-xs text-subtle">
          {BRANCHES.map((b) => (
            <li key={b}>├── {b}</li>
          ))}
        </ul>
        <p className="mt-4 text-xs">
          main branch is still under development.
          <br />
          Next release: 未来的我们
        </p>
      </div>
    </AppFrame>
  );
}

export function PhotosApp() {
  const [openId, setOpenId] = useState<string | null>(null);
  const photo = PHOTOS.find((p) => p.id === openId);

  return (
    <AppFrame kicker="album" title="回忆相册">
      <p className="text-sm text-muted">表面只有日期。点开才有没说的话。</p>
      <ul className="mt-6 grid grid-cols-2 gap-3">
        {PHOTOS.map((p) => (
          <li key={p.id}>
            <button
              type="button"
              onClick={() => setOpenId(p.id)}
              className="w-full overflow-hidden rounded-lg bg-surface text-left"
            >
              <img src={p.image} alt="" className="aspect-photo w-full object-cover" />
              <span className="block px-3 py-2 text-xs tracking-[0.2em] text-subtle">
                {formatDot(p.date)}
              </span>
            </button>
          </li>
        ))}
      </ul>
      {photo ? (
        <div className="mt-6 paper-sheet rounded-xl px-5 py-6">
          <p className="text-xs tracking-[0.2em] text-ink-muted">
            {formatDot(photo.date)} · {photo.place}
          </p>
          <p className="mt-2 font-display text-xl text-ink">{photo.title}</p>
          <p className="mt-1 text-xs text-ink-muted">心情 · {photo.mood}</p>
          <p className="mt-4 text-sm leading-relaxed text-ink">{photo.whisper}</p>
          <Button
            type="button"
            variant="ghost"
            className="mt-4 text-ink-muted"
            onClick={() => setOpenId(null)}
          >
            收起
          </Button>
        </div>
      ) : (
        <p className="mt-6 text-sm text-subtle">点一张照片，看背面。</p>
      )}
    </AppFrame>
  );
}

export function SecretsApp() {
  const opened = useGift((s) => s.openedSecrets);
  const openSecret = useGift((s) => s.openSecret);
  const count = SECRETS.filter((s) => opened[s.id]).length;

  return (
    <AppFrame kicker="secret" title="你不知道的我">
      <p className="text-sm text-muted">
        已解锁 {count} / {SECRETS.length} 个秘密
      </p>
      <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {SECRETS.map((secret, i) => {
          const on = Boolean(opened[secret.id]);
          return (
            <li key={secret.id} className="h-36">
              <button
                type="button"
                onClick={() => openSecret(secret.id)}
                className={cn("flip-card h-full w-full", on && "is-flipped")}
                aria-pressed={on}
              >
                <span className="flip-inner block h-full">
                  <span className="flip-face flex h-full flex-col justify-between rounded-lg border border-border bg-surface p-4 text-left">
                    <span className="font-display text-sm text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-base text-fg">
                      {on ? secret.title : "未翻开"}
                    </span>
                  </span>
                  <span className="flip-back flip-face flex h-full items-center rounded-lg bg-paper p-4 text-left">
                    <span className="text-sm leading-relaxed text-ink">
                      {secret.body}
                    </span>
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </AppFrame>
  );
}

export function ReasonsApp() {
  const flipped = useGift((s) => s.flipped);
  const toggleFlip = useGift((s) => s.toggleFlip);

  return (
    <AppFrame kicker="why" title="因为">
      <p className="text-sm text-muted">十二件很小的事。点开看背面。</p>
      <ul className="mt-6 grid grid-cols-2 gap-3">
        {REASONS.map((reason, i) => {
          const on = Boolean(flipped[reason.id]);
          return (
            <li key={reason.id} className="h-40">
              <button
                type="button"
                onClick={() => toggleFlip(reason.id)}
                className={cn("flip-card h-full w-full", on && "is-flipped")}
                aria-pressed={on}
              >
                <span className="flip-inner block h-full">
                  <span className="flip-face flex h-full flex-col justify-between rounded-lg border border-border bg-surface p-4 text-left">
                    <span className="font-display text-sm text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-base leading-snug text-fg">
                      {reason.title}
                    </span>
                  </span>
                  <span className="flip-back flip-face flex h-full flex-col justify-center rounded-lg bg-paper p-4 text-left">
                    <span className="text-sm leading-relaxed text-ink">
                      {reason.body}
                    </span>
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </AppFrame>
  );
}

export function MapApp() {
  const [id, setId] = useState(PLACES[0]!.id);
  const place = PLACES.find((p) => p.id === id) ?? PLACES[0]!;

  return (
    <AppFrame kicker="map" title="恋爱地图">
      <p className="text-sm text-muted">去过的地方会亮着。问号留给以后。</p>
      <div className="relative mt-6 aspect-photo overflow-hidden rounded-xl bg-surface">
        <img
          src="/images/morning.jpg"
          alt=""
          className="size-full object-cover opacity-40"
        />
        {PLACES.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setId(p.id)}
            className="absolute size-8 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            aria-label={p.name}
          >
            <span
              className={cn(
                "block size-3 rounded-full",
                p.visited ? "bg-primary" : "bg-subtle",
                id === p.id && "size-4",
              )}
            />
          </button>
        ))}
      </div>
      <article className="mt-5 rounded-xl border border-border bg-bg-elevated p-5">
        <p className="text-xs tracking-[0.2em] text-subtle">
          {place.visited ? formatDot(place.date ?? "") : "未点亮"}
        </p>
        <h2 className="mt-2 font-display text-2xl">{place.name}</h2>
        {place.visited ? (
          <dl className="mt-3 space-y-1 text-sm text-muted">
            <p>{place.event}</p>
            {place.weather ? <p>天气 · {place.weather}</p> : null}
            {place.steps ? <p>步数 · {place.steps}</p> : null}
            {place.food ? <p>吃了 · {place.food}</p> : null}
          </dl>
        ) : null}
        <p className="mt-3 text-sm leading-relaxed text-muted">{place.note}</p>
      </article>
    </AppFrame>
  );
}

export function ReplayApp() {
  const [step, setStep] = useState(0);
  const lines = useMemo(
    () => [...COMMITS.map((c) => c.title), "现在", "我还是会走向你。"],
    [],
  );
  const done = step >= lines.length - 1;

  return (
    <AppFrame kicker="rerun" title="如果重新认识你一次">
      <p className="text-sm text-muted">如果人生可以重新运行一次程序……</p>
      <ol className="mt-8 flex flex-col gap-3">
        {lines.slice(0, step + 1).map((line, i) => (
          <li key={`${line}-${i}`} className="rise-in">
            <p
              className={cn(
                "font-display text-xl",
                i === lines.length - 1 ? "text-primary" : "text-fg",
              )}
            >
              {line}
            </p>
            {i < step && i < lines.length - 2 ? (
              <p className="text-subtle">↓</p>
            ) : null}
          </li>
        ))}
      </ol>
      <Button
        type="button"
        variant="paper"
        className="mt-8"
        onClick={() => setStep((s) => Math.min(lines.length - 1, s + 1))}
        disabled={done}
      >
        {step === 0 ? "重新运行" : done ? "已走向你" : "下一步"}
      </Button>
    </AppFrame>
  );
}
