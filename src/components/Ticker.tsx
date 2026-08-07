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
    <span className="ticker-run flex shrink-0 items-center">
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
  return (
    <div
      className="ticker overflow-hidden border-y border-ink-line bg-ink-raised py-3"
      aria-label="Store hours, location and departments"
    >
      <div className="ticker-track flex w-max">
        <TickerRun />
        <span aria-hidden="true" className="contents">
          <TickerRun />
        </span>
      </div>
    </div>
  );
}
