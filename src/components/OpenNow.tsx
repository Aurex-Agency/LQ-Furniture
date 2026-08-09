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

function statusLine(now: Date): string {
  // Store runs on Central time regardless of the visitor's clock.
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    weekday: "short",
    hour: "numeric",
    hour12: false,
  }).formatToParts(now);
  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "Sun";
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? "0") % 24;
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(weekday);
  if (day < 0) return "";

  const today = HOURS_BY_DAY[day];
  if (today && today.open !== null && today.close !== null) {
    if (hour >= today.open && hour < today.close) {
      return `Open now, closes ${fmt(today.close)}`;
    }
    if (hour < today.open) {
      return `Closed now, opens today ${fmt(today.open)}`;
    }
  }
  for (let ahead = 1; ahead <= 7; ahead++) {
    const next = (day + ahead) % 7;
    const h = HOURS_BY_DAY[next];
    if (h && h.open !== null) {
      const dayWord = ahead === 1 ? "tomorrow" : (DAY_NAMES[next] ?? "");
      return `Closed now, opens ${dayWord} ${fmt(h.open)}`;
    }
  }
  return "";
}

export default function OpenNow() {
  const [line, setLine] = useState("");

  useEffect(() => {
    const update = () => setLine(statusLine(new Date()));
    const raf = requestAnimationFrame(update);
    const t = setInterval(update, 60_000);
    return () => {
      cancelAnimationFrame(raf);
      clearInterval(t);
    };
  }, []);

  // Always one line tall so the hydrated status never shifts the column.
  return (
    <p className={`label min-h-[1.4em] ${line.startsWith("Open") ? "neon" : "text-fog"}`} aria-live="polite">
      {line || " "}
    </p>
  );
}
