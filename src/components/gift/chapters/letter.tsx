import { useEffect, useState } from "react";
import { fillTemplate } from "@/lib/gift-content";
import { useGift } from "@/lib/gift-store";

export function LetterChapter() {
  const config = useGift((s) => s.config);
  const letter = fillTemplate(config.letter, config);
  const typed = useTyped(letter);

  return (
    <section className="mx-auto grid min-h-dvh w-full max-w-5xl gap-8 px-5 pb-28 pt-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <figure className="relative hidden overflow-hidden rounded-xl lg:block">
        <img
          src="/images/flowers.jpg"
          alt=""
          className="aspect-photo size-full object-cover"
        />
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg/80 to-transparent px-5 py-4 text-sm text-muted">
          写给你，也只写给你。
        </figcaption>
      </figure>
      <div className="flex min-h-0 flex-col">
        <p className="text-xs tracking-[0.3em] text-subtle">II · 信</p>
        <h1
          className="mt-3 font-display text-3xl font-medium text-fg"
          tabIndex={-1}
        >
          写给你
        </h1>
        <article
          className="paper-sheet mt-8 flex-1 rounded-xl px-6 py-8 sm:px-10 sm:py-10"
          onClick={typed.skip}
        >
          <p className="font-display text-lg leading-8 whitespace-pre-line text-ink">
            {typed.text}
            {typed.done ? null : <span className="caret" aria-hidden="true" />}
          </p>
        </article>
        {typed.done ? null : (
          <p className="mt-3 text-xs text-subtle">点一下信纸，可以一次看完。</p>
        )}
      </div>
    </section>
  );
}

function useTyped(source: string) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
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
    }, 28);
    return () => window.clearInterval(id);
  }, [source]);

  return {
    text: source.slice(0, count),
    done: count >= source.length,
    skip: () => setCount(source.length),
  };
}
