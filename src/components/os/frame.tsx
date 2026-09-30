import type { ReactNode } from "react";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGift } from "@/lib/gift-store";

export function AppFrame({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  const setApp = useGift((s) => s.setApp);

  return (
    <section className="mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-5 pb-24 pt-16 sm:px-8">
      <div className="mb-6 flex items-center gap-2">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => setApp("desktop")}
          aria-label="返回桌面"
        >
          <ChevronLeft className="size-5" />
        </Button>
        <div>
          <p className="text-xs tracking-[0.3em] text-subtle">{kicker}</p>
          <h1 className="font-display text-2xl font-medium text-fg sm:text-3xl">
            {title}
          </h1>
        </div>
      </div>
      {children}
    </section>
  );
}
