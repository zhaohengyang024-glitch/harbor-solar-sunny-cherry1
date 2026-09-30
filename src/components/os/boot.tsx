import { useEffect, useState } from "react";
import { BOOT_LINES } from "@/lib/archive";

export function BootScreen({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      onDone();
      return;
    }
    if (step >= BOOT_LINES.length) {
      const t = window.setTimeout(onDone, 420);
      return () => window.clearTimeout(t);
    }
    const t = window.setTimeout(() => setStep((s) => s + 1), 520);
    return () => window.clearTimeout(t);
  }, [step, onDone]);

  return (
    <section
      className="flex min-h-dvh cursor-pointer flex-col justify-center bg-bg px-6 text-fg"
      onClick={onDone}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onDone();
      }}
      role="button"
      tabIndex={0}
      aria-label="跳过启动"
    >
      <div className="mx-auto w-full max-w-md font-latin text-sm leading-7 text-muted">
        <p className="mb-6 text-xs tracking-[0.3em] text-subtle">YUNI OS</p>
        {BOOT_LINES.slice(0, step + 1).map((line, i) => (
          <p key={line} className="rise-in">
            {line}
            {i < BOOT_LINES.length - 1 && i === step ? (
              <span className="ml-3 text-primary">ok</span>
            ) : i < step ? (
              <span className="ml-3 text-primary">100%</span>
            ) : null}
          </p>
        ))}
        {step >= BOOT_LINES.length ? (
          <p className="mt-8 font-display text-lg text-fg">System ready.</p>
        ) : null}
        <p className="mt-12 text-xs text-subtle">点任意处继续</p>
      </div>
    </section>
  );
}