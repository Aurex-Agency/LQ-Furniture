"use client";

import { useEffect, useState } from "react";
import { HOURS } from "@/lib/store";

// The visit-page hours table, with today's row lit. Renders neutral on the
// server; the highlight arrives with the clock.
export default function HoursTable() {
  const [today, setToday] = useState<string | null>(null);

  useEffect(() => {
    const update = () => {
      const weekday = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Chicago",
        weekday: "long",
      }).format(new Date());
      setToday(weekday);
    };
    const raf = requestAnimationFrame(update);
    const t = setInterval(update, 60_000);
    return () => {
      cancelAnimationFrame(raf);
      clearInterval(t);
    };
  }, []);

  return (
    <ul className="max-w-md border-t border-night-3">
      {HOURS.map((h) => {
        const isToday = today === h.days;
        return (
          <li
            key={h.days}
            className={`flex items-baseline justify-between border-b border-night-3 py-3 ${
              isToday ? "border-b-lq-green" : ""
            }`}
          >
            <span className="text-body text-lamp">
              {h.days}
              {isToday ? (
                <span className="label ml-3 text-lq-press">Today</span>
              ) : null}
            </span>
            <span className={`label ${isToday ? "text-lamp" : "text-fog"}`}>
              {h.label}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
