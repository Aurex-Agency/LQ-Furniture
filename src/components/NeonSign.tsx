"use client";

import { useEffect, useState } from "react";
import { HOURS_BY_DAY } from "@/lib/store";

const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function fmt(hour: number): string {
  if (hour === 12) return "12pm";
  return hour < 12 ? `${hour}am` : `${hour - 12}pm`;
}

type SignState =
  | { lit: null } // before hydration: static sign, no open claim
  | { lit: true; line: string }
  | { lit: false; line: string };

function readClock(now: Date): SignState {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    weekday: "short",
    hour: "numeric",
    hour12: false,
  }).formatToParts(now);
  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "Sun";
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? "0") % 24;
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(weekday);
  if (day < 0) return { lit: null };

  const today = HOURS_BY_DAY[day];
  if (today && today.open !== null && today.close !== null) {
    if (hour >= today.open && hour < today.close) {
      return { lit: true, line: `Til ${fmt(today.close)} today` };
    }
    if (hour < today.open) {
      return { lit: false, line: `Back on at ${fmt(today.open)}` };
    }
  }
  for (let ahead = 1; ahead <= 7; ahead++) {
    const next = (day + ahead) % 7;
    const h = HOURS_BY_DAY[next];
    if (h && h.open !== null) {
      const dayWord = ahead === 1 ? "tomorrow" : DAY_NAMES[next] ?? "";
      return { lit: false, line: `Back on ${dayWord} ${fmt(h.open)}` };
    }
  }
  return { lit: null };
}

// The gas-station sign. Lit and humming during store hours, tubes dark the
// rest of the week with the next lighting-up time underneath. Renders as a
// plain lit hours sign until the clock hydrates, so nothing shifts.
export default function NeonSign({ big = false }: { big?: boolean }) {
  const [state, setState] = useState<SignState>({ lit: null });
  const [flickerKey, setFlickerKey] = useState(0);

  useEffect(() => {
    const update = () => setState(readClock(new Date()));
    const raf = requestAnimationFrame(update);
    const t = setInterval(update, 60_000);
    return () => {
      cancelAnimationFrame(raf);
      clearInterval(t);
    };
  }, []);

  const lit = state.lit !== false;
  const headline =
    state.lit === true ? "We're open" : state.lit === false ? "Closed" : "Open Wed thru Sun";
  const subline =
    state.lit === null ? "10 to 6 · Sun 12 to 6" : state.line;

  return (
    <button
      type="button"
      aria-live="polite"
      key={flickerKey}
      onClick={() => setFlickerKey((k) => k + 1)}
      title="Give the sign a tap"
      className={`inline-block cursor-pointer rounded-[10px] px-5 py-4 text-center ${
        lit ? "neon-box neon neon-on neon-buzz bg-night/80" : "neon-dim bg-night/80"
      }`}
    >
      <p
        className={`display ${big ? "text-h2" : "text-h3"} leading-none`}
      >
        {headline}
      </p>
      <p className={`label mt-2 ${lit ? "" : "opacity-80"}`}>{subline}</p>
    </button>
  );
}
