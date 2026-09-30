import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dust } from "@/components/gift/dust";
import { getMusicBox } from "@/lib/music";
import { useGift } from "@/lib/gift-store";
import { cn } from "@/lib/utils";

export function LockScreen() {
  const config = useGift((s) => s.config);
  const musicOn = useGift((s) => s.musicOn);
  const pass = () => useGift.setState({ secretPassed: true, opened: true });
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const needsAnswer = Boolean(config.secretQuestion.trim());

  function enter() {
    if (leaving) return;
    if (musicOn) void getMusicBox().start();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      pass();
      return;
    }
    setLeaving(true);
    window.setTimeout(() => pass(), 560);
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    const ok =
      value.trim().toLowerCase() === config.secretAnswer.trim().toLowerCase() &&
      value.trim().length > 0;
    if (!ok) {
      setError(true);
      return;
    }
    enter();
  }

  return (
    <section className="relative isolate min-h-dvh overflow-hidden bg-bg text-fg">
      <img
        src="/images/envelope.jpg"
        alt=""
        className={cn(
          "absolute inset-0 size-full object-cover transition-[transform,filter,opacity] duration-500 ease-out",
          leaving ? "scale-105 opacity-40 blur-sm" : "scale-100 opacity-100",
        )}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-bg/30" />
      <Dust />
      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-md flex-col items-center justify-end px-6 pb-24 pt-20 text-center sm:justify-center sm:pb-16">
        <p className="rise-in text-xs tracking-[0.35em] text-muted uppercase">
          Archive OS
        </p>
        <p className="rise-in mt-6 font-display text-sm text-muted">致</p>
        <h1 className="rise-in mt-2 font-display text-4xl font-medium tracking-wide sm:text-5xl">
          {config.herName}
        </h1>
        <div className="rise-in mt-8 h-px w-16 bg-primary/70" />
        {needsAnswer ? (
          <form onSubmit={submit} className="rise-in mt-8 w-full text-left">
            <p className="text-center text-sm leading-relaxed text-muted">
              {config.secretQuestion}
            </p>
            <Input
              className="mt-4 bg-bg/50"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                setError(false);
              }}
              placeholder="写在这里"
              autoComplete="off"
              aria-invalid={error}
            />
            {error ? (
              <p className="mt-2 text-center text-sm text-primary">
                再想想，这一天对我很重要。
              </p>
            ) : null}
            <Button type="submit" variant="paper" className="mt-4 w-full">
              进入
            </Button>
          </form>
        ) : (
          <>
            <p className="rise-in mt-8 max-w-xs text-sm leading-relaxed text-muted">
              一份只属于你们的数字档案。轻轻揭开火漆就好。
            </p>
            <div className="rise-in mt-10">
              <button
                type="button"
                onClick={enter}
                className="group flex flex-col items-center gap-4"
                aria-label="进入档案"
              >
                <span
                  className={cn("wax-seal", leaving && "is-pressing")}
                  aria-hidden="true"
                >
                  予
                </span>
                <span className="text-sm tracking-wide text-fg/90">进入系统</span>
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
