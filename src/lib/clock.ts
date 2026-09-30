export function parseISO(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return null;
  return new Date(y, m - 1, d);
}

export function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function formatDot(iso: string) {
  return iso.replaceAll("-", ".");
}

export function addDays(iso: string, days: number) {
  const date = parseISO(iso);
  if (!date) return iso;
  date.setDate(date.getDate() + days);
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function elapsedSince(iso: string, now = new Date()) {
  const from = parseISO(iso);
  if (!from) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const ms = Math.max(0, now.getTime() - from.getTime());
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor((ms % 86400000) / 3600000),
    minutes: Math.floor((ms % 3600000) / 60000),
    seconds: Math.floor((ms % 60000) / 1000),
  };
}

export function remainingUntil(date: Date, now = new Date()) {
  const ms = Math.max(0, date.getTime() - now.getTime());
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor((ms % 86400000) / 3600000),
    minutes: Math.floor((ms % 3600000) / 60000),
    seconds: Math.floor((ms % 60000) / 1000),
  };
}

export function nextBirthdayDate(iso: string, now = new Date()) {
  const born = parseISO(iso);
  if (!born) return null;
  const today = startOfDay(now);
  const next = new Date(today.getFullYear(), born.getMonth(), born.getDate());
  if (next.getTime() < today.getTime()) {
    next.setFullYear(next.getFullYear() + 1);
  }
  return next;
}

export function isBirthdayToday(iso: string, now = new Date()) {
  const born = parseISO(iso);
  if (!born) return false;
  return now.getMonth() === born.getMonth() && now.getDate() === born.getDate();
}

export function dayIndex(now = new Date()) {
  const start = new Date(now.getFullYear(), 0, 0);
  return Math.floor((now.getTime() - start.getTime()) / 86400000);
}
