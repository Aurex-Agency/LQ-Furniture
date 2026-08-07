"use client";

import { useState } from "react";

const ITEMS = [
  "Open Wed thru Sat 10 to 6, Sun 12 to 6",
  "589 N Coley Rd, Tupelo",
  "Sectionals",
  "Dining",
  "Bedroom",
  "Recliners",
  "Mattresses",
  "Limited Quantities + Unlimited Savings",
  "Financing available in store",
];

function TickerRun() {
  return (
    <span className="flex shrink-0 items-center">
      {ITEMS.map((item) => (
        <span
          key={item}
          className="flex items-center whitespace-nowrap font-mono text-tag uppercase text-ash"
        >
          {item}
          <span className="mx-6 inline-block h-1 w-1 bg-ink-line" aria-hidden />
        </span>
      ))}
    </span>
  );
}

export default function Ticker() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="relative min-h-12 border-y border-ink-line bg-ink-raised">
      <h2 className="sr-only">Store hours, location and departments</h2>
      <div className="ticker flex min-h-12 items-center overflow-hidden pr-14">
        <div
          className="ticker-track flex w-max"
          style={paused ? { animationPlayState: "paused" } : undefined}
        >
          <TickerRun />
          <span aria-hidden="true" className="contents">
            <TickerRun />
          </span>
        </div>
      </div>
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-pressed={paused}
        className="absolute inset-y-0 right-0 min-h-12 min-w-12 border-l border-ink-line bg-ink-raised px-3 font-mono text-tag uppercase text-ash hover:text-bone"
      >
        {paused ? "Play" : "Stop"}
      </button>
    </section>
  );
}
