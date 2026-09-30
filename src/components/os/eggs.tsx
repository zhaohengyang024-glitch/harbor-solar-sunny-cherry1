import { useEffect } from "react";
import { useGift } from "@/lib/gift-store";

export function EasterEggs() {
  const keyword = useGift((s) => s.config.hiddenKeyword);
  const setApp = useGift((s) => s.setApp);
  const markHidden = useGift((s) => s.markHidden);

  useEffect(() => {
    console.info(
      "%c如果你看到了这里，\n说明你真的很喜欢研究这个网站。\n那我也告诉你一件事：\n我比你想象中更喜欢你。",
      "color:#c48b7a;font-family:serif;font-size:14px;line-height:1.7",
    );
  }, []);

  useEffect(() => {
    const target = (keyword.trim() || "yuni").toLowerCase();
    let buf = "";
    function onKey(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key.length !== 1) return;
      buf = (buf + e.key.toLowerCase()).slice(-Math.max(target.length, 8));
      if (buf.endsWith(target)) {
        markHidden();
        setApp("hidden");
        buf = "";
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [keyword, markHidden, setApp]);

  return null;
}
