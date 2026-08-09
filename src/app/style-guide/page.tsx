import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Brand foundation",
  robots: { index: false },
};

const palette = [
  { token: "paper", hex: "#FAF7F1", role: "page field", cls: "bg-paper" },
  { token: "cream", hex: "#F1EBDF", role: "raised bands and surfaces", cls: "bg-cream" },
  { token: "sand", hex: "#E2D9C7", role: "borders, dividers, hover fills", cls: "bg-sand" },
  { token: "ink", hex: "#1B1A16", role: "primary text", cls: "bg-ink" },
  { token: "stone", hex: "#6D675A", role: "secondary text", cls: "bg-stone" },
] as const;

const greens = [
  { token: "lq-green", hex: "#6BB22E", role: "action color, always ink text", cls: "bg-lq-green" },
  { token: "lq-press", hex: "#588F24", role: "pressed and hover on green", cls: "bg-lq-press" },
  { token: "lq-deep", hex: "#3E6B1A", role: "the only green used as text", cls: "bg-lq-deep" },
] as const;

const contrast = [
  { pair: "ink on paper", ratio: "16.2 : 1" },
  { pair: "stone on paper", ratio: "5.3 : 1" },
  { pair: "stone on cream", ratio: "4.8 : 1" },
  { pair: "ink on lq-green", ratio: "6.8 : 1" },
  { pair: "lq-deep on paper", ratio: "5.9 : 1" },
  { pair: "lq-green as text on paper", ratio: "2.4 : 1, never used" },
] as const;

const motion = [
  "the hero's slow settle zoom, once on load",
  "photos wipe in once, like a segment cut",
  "lower-third labels slide up behind them",
  "the SOLD badge pops on arrival",
  "the ticker runs until you hit Stop",
] as const;

export default function StyleGuide() {
  return (
    <main className="min-h-screen">
      <header className="px-5 pt-14 sm:px-10 lg:px-16">
        <Image
          src="/brand/lq-logo.png"
          alt="LQ Furniture"
          width={712}
          height={548}
          priority
          className="h-24 w-auto sm:h-32"
        />
        <p className="lower-third mt-6 text-tag text-stone">
          Brand foundation · Tupelo, Mississippi
        </p>
      </header>

      <section className="px-5 pt-16 sm:px-10 lg:px-16">
        <h1 className="display max-w-5xl text-display text-ink">
          Limited quantities + unlimited savings
        </h1>
        <p className="mt-8 max-w-xl text-body-lg text-stone">
          Their words, not ours. The set is bright and warm so the floor
          photography does the selling. Green is the action color, and it
          always carries ink text.
        </p>
      </section>

      {/* Palette */}
      <section className="mt-20 border-t border-sand px-5 py-14 sm:px-10 lg:px-16">
        <h2 className="display text-h1 text-ink">The palette</h2>
        <p className="mt-4 max-w-xl text-body text-stone">
          Warm paper, cream and sand doing the quiet work, warm ink talking,
          and one working green. Bright green never appears as text on the
          light field; lq-deep carries that job.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-5">
          {palette.map((c) => (
            <div key={c.token}>
              <div className={`h-24 rounded-ctl border border-sand ${c.cls}`} />
              <p className="lower-third mt-3 text-tag text-ink">{c.token}</p>
              <p className="mt-1 text-[0.9375rem] text-stone">{c.hex}</p>
              <p className="mt-1 text-[0.9375rem] leading-snug text-stone">{c.role}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3 sm:max-w-[60%]">
          {greens.map((c) => (
            <div key={c.token}>
              <div className={`h-14 rounded-ctl border border-sand ${c.cls}`} />
              <p className="lower-third mt-3 text-tag text-ink">{c.token}</p>
              <p className="mt-1 text-[0.9375rem] text-stone">{c.hex}</p>
              <p className="mt-1 text-[0.9375rem] leading-snug text-stone">{c.role}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-md">
          <h3 className="lower-third text-tag text-stone">Measured contrast</h3>
          <ul className="mt-4 border-t border-sand">
            {contrast.map((c) => (
              <li
                key={c.pair}
                className="flex items-baseline justify-between gap-6 border-b border-sand py-3"
              >
                <span className="text-body text-ink">{c.pair}</span>
                <span className="lower-third text-tag text-stone">{c.ratio}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Type */}
      <section className="border-t border-sand px-5 py-14 sm:px-10 lg:px-16">
        <h2 className="display text-h1 text-ink">The type</h2>
        <p className="mt-4 max-w-xl text-body text-stone">
          Two voices. Archivo, set a touch wide, handles episode titles and
          the lower-third caption bars. Newsreader talks like a person.
        </p>

        <div className="mt-12 space-y-12">
          <div>
            <p className="lower-third text-tag text-stone">
              display · Archivo wide · 40 to 88px
            </p>
            <p className="display mt-3 text-display text-ink">Warehouse prices</p>
          </div>

          <div>
            <p className="lower-third text-tag text-stone">
              h1 · Archivo wide · 36 to 60px
            </p>
            <p className="display mt-3 text-h1 text-ink">
              When it&apos;s gone, it&apos;s gone
            </p>
          </div>

          <div className="max-w-2xl">
            <p className="lower-third text-tag text-stone">body · Newsreader · 18px</p>
            <p className="mt-3 text-body text-ink">
              The floor turns over fast. A sectional that came in on Tuesday
              can be loaded in somebody&apos;s truck by Saturday, and when the
              last one sells, it is gone. That is the whole deal. Volume
              buying keeps the price down, limited quantities keep it honest.
            </p>
          </div>

          <div>
            <p className="lower-third text-tag text-stone">
              lower-third · Archivo semibold · labels on photos
            </p>
            <p className="mt-3 flex flex-wrap items-center gap-px">
              <span className="lower-third bg-lq-green px-3 py-2 text-tag text-ink">
                Driftwood bedroom set
              </span>
              <span className="lower-third bg-paper px-3 py-2 text-tag text-ink shadow-lift">
                Bedroom
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="border-t border-sand px-5 py-14 sm:px-10 lg:px-16">
        <h2 className="display text-h1 text-ink">Controls</h2>
        <p className="mt-4 max-w-xl text-body text-stone">
          Buttons say what happens. Green takes ink text, never white.
          Corners stay at 6px, tap targets stay at 48px, and the focus ring
          is always visible from the keyboard.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button
            type="button"
            className="display min-h-12 rounded-ctl bg-lq-green px-7 text-[1rem] tracking-wide text-ink shadow-lift hover:bg-lq-press active:translate-y-px"
          >
            Join the text list
          </button>
          <button
            type="button"
            className="display min-h-12 rounded-ctl border-2 border-ink px-7 text-[1rem] tracking-wide text-ink hover:bg-cream"
          >
            Call the store
          </button>
          <button
            type="button"
            className="lower-third min-h-12 rounded-ctl bg-cream px-4 text-tag text-ink hover:bg-sand"
          >
            Sectionals
          </button>
          <button
            type="button"
            aria-pressed="true"
            className="lower-third min-h-12 rounded-ctl bg-lq-green px-4 text-tag text-ink"
          >
            Dining · active
          </button>
        </div>

        <div className="mt-12 max-w-sm">
          <label htmlFor="phone-sample" className="lower-third text-tag text-stone">
            Mobile number
          </label>
          <input
            id="phone-sample"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="Your mobile number"
            className="mt-2 block min-h-12 w-full rounded-ctl border border-sand bg-paper px-4 text-body text-ink placeholder:text-stone"
          />
        </div>
      </section>

      {/* Motion */}
      <section className="border-t border-sand px-5 py-14 sm:px-10 lg:px-16">
        <h2 className="display text-h1 text-ink">Motion</h2>
        <p className="mt-4 max-w-xl text-body text-stone">
          The reveal grammar, borrowed from the shows this audience already
          watches. Five moments, nothing else moves, and all of it goes
          still when a visitor asks for reduced motion.
        </p>
        <ul className="mt-8 max-w-md border-t border-sand">
          {motion.map((m) => (
            <li key={m} className="border-b border-sand py-3 text-body text-ink">
              {m}
            </li>
          ))}
        </ul>
      </section>

      <footer className="border-t border-sand px-5 py-10 sm:px-10 lg:px-16">
        <p className="lower-third text-tag text-stone">
          The living record of this system is DESIGN.md at the repo root.
        </p>
      </footer>
    </main>
  );
}
