import { useEffect } from "react";
import { Music2, Music4 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getMusicBox } from "@/lib/music";
import { useGift } from "@/lib/gift-store";

export function Soundtrack() {
  const opened = useGift((s) => s.opened);
  const musicOn = useGift((s) => s.musicOn);

  useEffect(() => {
    const box = getMusicBox();
    if (opened && musicOn) {
      void box.start();
    } else {
      box.stop();
    }
  }, [opened, musicOn]);

  useEffect(() => {
    function onVis() {
      const box = getMusicBox();
      if (document.hidden) box.stop();
      else if (useGift.getState().opened && useGift.getState().musicOn) {
        void box.start();
      }
    }
    document.addEventListener("visibilitychange", onVis);
    return () => {
      document.removeEventListener("visibilitychange", onVis);
      getMusicBox().stop();
    };
  }, []);

  return null;
}

export function MusicToggle() {
  const opened = useGift((s) => s.opened);
  const musicOn = useGift((s) => s.musicOn);
  const setMusicOn = useGift((s) => s.setMusicOn);

  if (!opened) return null;

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="fixed top-4 right-4 z-40 text-subtle opacity-50 hover:opacity-100"
      aria-label={musicOn ? "关闭八音盒" : "打开八音盒"}
      aria-pressed={musicOn}
      onClick={() => setMusicOn(!musicOn)}
    >
      {musicOn ? <Music4 className="size-4" /> : <Music2 className="size-4" />}
    </Button>
  );
}
