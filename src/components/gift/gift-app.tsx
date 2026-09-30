import { useCallback, useEffect, useState } from "react";
import { CustomizeDialog } from "@/components/gift/customize-dialog";
import { MusicToggle, Soundtrack } from "@/components/gift/soundtrack";
import { AppScreen } from "@/components/os/apps";
import { BootScreen } from "@/components/os/boot";
import { Desktop } from "@/components/os/desktop";
import { EasterEggs } from "@/components/os/eggs";
import { LockScreen } from "@/components/os/lock";
import { isBirthdayToday } from "@/lib/clock";
import { useGift } from "@/lib/gift-store";

export function GiftApp() {
  const opened = useGift((s) => s.opened);
  const secretPassed = useGift((s) => s.secretPassed);
  const question = useGift((s) => s.config.secretQuestion);
  const birthdayISO = useGift((s) => s.config.birthdayISO);
  const birthdayPlayed = useGift((s) => s.birthdayPlayed);
  const app = useGift((s) => s.app);
  const touchVisit = useGift((s) => s.touchVisit);
  const setApp = useGift((s) => s.setApp);
  const needsSecret = Boolean(question.trim()) && !secretPassed;
  const locked = !opened || needsSecret;
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    if (!locked) touchVisit();
  }, [locked, touchVisit]);

  useEffect(() => {
    if (locked || !opened) return;
    if (isBirthdayToday(birthdayISO) && !birthdayPlayed) {
      setApp("birthday");
    }
  }, [locked, opened, birthdayISO, birthdayPlayed, setApp]);

  const finishBoot = useCallback(() => setBooted(true), []);

  return (
    <div className="min-h-dvh bg-bg text-fg">
      {/*
        这里本来想写很多复杂的功能，
        但后来发现，最重要的一句还是：
        我喜欢你。
      */}
      <Soundtrack />
      <EasterEggs />
      {locked ? (
        <LockScreen />
      ) : !booted ? (
        <BootScreen onDone={finishBoot} />
      ) : app === "desktop" ? (
        <Desktop />
      ) : (
        <AppScreen id={app} />
      )}
      <CustomizeDialog />
      <MusicToggle />
    </div>
  );
}
