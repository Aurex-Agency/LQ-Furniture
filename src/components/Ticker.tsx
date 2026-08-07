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
          className="lower-third flex items-center whitespace-nowrap text-tag text-ink"
        >
          {item}
          <span className="mx-6 inline-block h-1.5 w-1.5 rounded-full bg-lq-green" aria-hidden />
        </span>
      ))}
    </span>
  );
}

export default function Ticker() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="relative min-h-12 border-y border-sand bg-cream">
      <h2 className="sr-only">Store hours, location and departments</h2>
      <div className="ticker flex min-h-12 items-center overflow-hidden pr-16">
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
        className="lower-third absolute inset-y-0 right-0 min-h-12 min-w-12 border-l border-sand bg-cream px-3 text-tag text-ink hover:bg-sand"
      >
        {paused ? "Play" : "Stop"}
      </button>
    </section>
  );
}
