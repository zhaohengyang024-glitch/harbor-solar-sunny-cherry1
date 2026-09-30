import { create } from "zustand";
import { persist } from "zustand/middleware";
import { DEFAULT_CONFIG, type GiftConfig } from "@/lib/gift-content";
import type { AppId } from "@/lib/archive";
import { isSameDay } from "@/lib/clock";

type GiftState = {
  opened: boolean;
  chapter: number;
  flipped: Record<string, boolean>;
  revealed: Record<string, boolean>;
  unwrapped: Record<string, boolean>;
  reply: string;
  replySaved: boolean;
  secretPassed: boolean;
  musicOn: boolean;
  config: GiftConfig;
  app: AppId | "desktop";
  visits: number;
  lastVisit: string;
  visitDays: string[];
  usedCoupons: Record<string, boolean>;
  donePlans: Record<string, string>;
  openedCapsules: Record<string, boolean>;
  openedSecrets: Record<string, boolean>;
  scratched: boolean;
  fortuneSeen: string;
  foundHidden: boolean;
  candleOut: boolean;
  birthdayPlayed: boolean;
  open: () => void;
  setChapter: (n: number) => void;
  toggleFlip: (id: string) => void;
  revealWish: (id: string) => void;
  unwrap: (id: string) => void;
  setReply: (value: string) => void;
  saveReply: () => void;
  patchConfig: (patch: Partial<GiftConfig>) => void;
  setMusicOn: (on: boolean) => void;
  setApp: (app: AppId | "desktop") => void;
  touchVisit: () => void;
  useCoupon: (id: string) => void;
  togglePlan: (id: string) => void;
  openCapsule: (id: string) => void;
  openSecret: (id: string) => void;
  setScratched: () => void;
  markFortune: (day: string) => void;
  markHidden: () => void;
  blowCandle: () => void;
  markBirthdayPlayed: () => void;
  reseal: () => void;
  resetProgress: () => void;
};

function todayISO() {
  const n = new Date();
  const m = String(n.getMonth() + 1).padStart(2, "0");
  const d = String(n.getDate()).padStart(2, "0");
  return `${n.getFullYear()}-${m}-${d}`;
}

export function streakFrom(days: string[]) {
  if (days.length === 0) return 0;
  const sorted = [...days].sort();
  let streak = 1;
  for (let i = sorted.length - 1; i > 0; i--) {
    const a = new Date(sorted[i]!);
    const b = new Date(sorted[i - 1]!);
    const diff = Math.round((a.getTime() - b.getTime()) / 86400000);
    if (diff === 1) streak += 1;
    else break;
  }
  const last = new Date(sorted[sorted.length - 1]!);
  const now = new Date();
  if (!isSameDay(last, now)) {
    const y = new Date(now);
    y.setDate(y.getDate() - 1);
    if (!isSameDay(last, y)) return 0;
  }
  return streak;
}

export const useGift = create<GiftState>()(
  persist(
    (set, get) => ({
      opened: false,
      chapter: 0,
      flipped: {},
      revealed: {},
      unwrapped: {},
      reply: "",
      replySaved: false,
      secretPassed: false,
      musicOn: true,
      config: DEFAULT_CONFIG,
      app: "desktop",
      visits: 0,
      lastVisit: "",
      visitDays: [],
      usedCoupons: {},
      donePlans: {},
      openedCapsules: {},
      openedSecrets: {},
      scratched: false,
      fortuneSeen: "",
      foundHidden: false,
      candleOut: false,
      birthdayPlayed: false,
      open: () => set({ opened: true, app: "desktop" }),
      setChapter: (n) => set({ chapter: n }),
      toggleFlip: (id) =>
        set((s) => ({ flipped: { ...s.flipped, [id]: !s.flipped[id] } })),
      revealWish: (id) =>
        set((s) => ({ revealed: { ...s.revealed, [id]: true } })),
      unwrap: (id) =>
        set((s) => ({ unwrapped: { ...s.unwrapped, [id]: true } })),
      setReply: (value) => set({ reply: value, replySaved: false }),
      saveReply: () => set({ replySaved: true }),
      patchConfig: (patch) =>
        set((s) => ({ config: { ...s.config, ...patch } })),
      setMusicOn: (on) => set({ musicOn: on }),
      setApp: (app) => set({ app }),
      touchVisit: () => {
        const day = todayISO();
        const s = get();
        if (s.lastVisit === day) return;
        const days = s.visitDays.includes(day)
          ? s.visitDays
          : [...s.visitDays, day].slice(-120);
        set({
          visits: s.visits + 1,
          lastVisit: day,
          visitDays: days,
        });
      },
      useCoupon: (id) =>
        set((s) => ({ usedCoupons: { ...s.usedCoupons, [id]: true } })),
      togglePlan: (id) =>
        set((s) => {
          const next = { ...s.donePlans };
          if (next[id]) delete next[id];
          else next[id] = todayISO();
          return { donePlans: next };
        }),
      openCapsule: (id) =>
        set((s) => ({ openedCapsules: { ...s.openedCapsules, [id]: true } })),
      openSecret: (id) =>
        set((s) => ({ openedSecrets: { ...s.openedSecrets, [id]: true } })),
      setScratched: () => set({ scratched: true }),
      markFortune: (day) => set({ fortuneSeen: day }),
      markHidden: () => set({ foundHidden: true }),
      blowCandle: () => set({ candleOut: true }),
      markBirthdayPlayed: () => set({ birthdayPlayed: true }),
      reseal: () =>
        set({
          opened: false,
          chapter: 0,
          secretPassed: false,
          app: "desktop",
        }),
      resetProgress: () =>
        set({
          opened: false,
          chapter: 0,
          flipped: {},
          revealed: {},
          unwrapped: {},
          reply: "",
          replySaved: false,
          secretPassed: false,
          app: "desktop",
          visits: 0,
          lastVisit: "",
          visitDays: [],
          usedCoupons: {},
          donePlans: {},
          openedCapsules: {},
          openedSecrets: {},
          scratched: false,
          fortuneSeen: "",
          foundHidden: false,
          candleOut: false,
          birthdayPlayed: false,
        }),
    }),
    {
      name: "yuni-os-v1",
      merge: (persisted, current) => {
        const p = (persisted ?? {}) as Partial<GiftState>;
        return {
          ...current,
          ...p,
          config: { ...DEFAULT_CONFIG, ...current.config, ...p.config },
        };
      },
    },
  ),
);

export function visitStreak() {
  return streakFrom(useGift.getState().visitDays);
}
