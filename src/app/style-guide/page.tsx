import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Brand foundation",
  robots: { index: false },
};

const palette = [
  { token: "night", hex: "#131311", role: "page field, warm charcoal", cls: "bg-night" },
  { token: "night-2", hex: "#1C1C19", role: "raised surfaces, inputs", cls: "bg-night-2" },
  { token: "night-3", hex: "#2A2A25", role: "borders and dividers", cls: "bg-night-3" },
  { token: "lamp", hex: "#F4F2EC", role: "primary text", cls: "bg-lamp" },
  { token: "fog", hex: "#A3A094", role: "secondary text", cls: "bg-fog" },
  { token: "lq-green", hex: "#6BB22E", role: "primary action, night text on it", cls: "bg-lq-green" },
  { token: "lq-press", hex: "#7EC93C", role: "hover on green", cls: "bg-lq-press" },
  { token: "neon", hex: "#8ADE4A", role: "sign devices and glow only", cls: "bg-neon" },
] as const;

const contrast = [
  { pair: "lamp on night", ratio: "16.6 : 1" },
  { pair: "fog on night", ratio: "7.1 : 1" },
  { pair: "fog on night-2", ratio: "6.5 : 1" },
  { pair: "night on lq-green", ratio: "7.3 : 1" },
  { pair: "neon on night", ratio: "11.2 : 1" },
] as const;

const motion = [
  "the sign flickers on, then hums",
  "the hero photograph settles from a slight zoom",
  "photographs open like lit displays, once each",
  "content rises clean, once per section",
  "tap the sign and it flickers again",
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
          className="h-24 w-auto sm:h-28"
        />
        <p className="label mt-6 text-fog">
          Brand foundation · The lit sign on a clean shop
        </p>
        <h1 className="display mt-10 max-w-4xl text-display text-lamp">
          Limited quantities. Unlimited savings.
        </h1>
        <p className="mt-6 max-w-xl text-body-lg text-fog">
          Their words, set heavy and tight on crisp charcoal. The character
          lives in the working neon: signs that know the store clock,
          fixtures you can tap, glow on the buttons that matter.
        </p>
      </header>

      <section className="mt-16 border-t border-night-3 px-5 py-14 sm:px-10 lg:px-16">
        <h2 className="display text-h1 text-lamp">The palette</h2>
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {palette.map((c) => (
            <div key={c.token}>
              <div className={`h-20 rounded-ctl border border-night-3 ${c.cls}`} />
              <p className="label mt-3 text-lamp">{c.token}</p>
              <p className="mt-1 text-[0.9375rem] text-fog">{c.hex}</p>
              <p className="mt-1 text-[0.9375rem] leading-snug text-fog">{c.role}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 max-w-md">
          <h3 className="label text-fog">Measured contrast</h3>
          <ul className="mt-4 border-t border-night-3">
            {contrast.map((c) => (
              <li
                key={c.pair}
                className="flex items-baseline justify-between gap-6 border-b border-night-3 py-3"
              >
                <span className="text-body text-lamp">{c.pair}</span>
                <span className="label text-fog">{c.ratio}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-night-3 px-5 py-14 sm:px-10 lg:px-16">
        <h2 className="display text-h1 text-lamp">The type</h2>
        <p className="mt-4 max-w-xl text-body text-fog">
          One family, Schibsted Grotesk. Display runs at 800, set tight, in
          sentence case. Body runs regular, and the small caps labels do the
          signage.
        </p>
        <div className="mt-12 space-y-12">
          <div>
            <p className="label text-fog">display · Schibsted 800 · 44 to 84px</p>
            <p className="display mt-3 text-display text-lamp">
              Warehouse prices, showroom floor
            </p>
          </div>
          <div>
            <p className="label text-fog">h2 · Schibsted 800 · 28 to 40px</p>
            <p className="display mt-3 text-h2 text-lamp">
              When it&apos;s gone, it&apos;s gone
            </p>
          </div>
          <div className="max-w-2xl">
            <p className="label text-fog">body · Schibsted · 17px</p>
            <p className="mt-3 text-body text-lamp">
              The floor turns over fast. A sectional that came in on Tuesday
              can be loaded in somebody&apos;s truck by Saturday, and when the
              last one sells, it is gone. Volume buying keeps the price down,
              limited quantities keep it honest.
            </p>
          </div>
          <div>
            <p className="label text-fog">label · Schibsted semibold caps</p>
            <p className="label mt-3 text-lamp">Priced on the floor · Tupelo, MS</p>
          </div>
          <div>
            <p className="label text-fog">the sign family · lit, dark, and drawn</p>
            <p className="neon-box neon label mt-3 inline-block rounded-ctl px-4 py-3">
              Open Wed thru Sun
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-night-3 px-5 py-14 sm:px-10 lg:px-16">
        <h2 className="display text-h1 text-lamp">Controls</h2>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button
            type="button"
            className="label min-h-12 btn-glow rounded-ctl bg-lq-green px-7 text-night hover:bg-lq-press active:translate-y-px"
          >
            Join the text list
          </button>
          <button
            type="button"
            className="label min-h-12 rounded-ctl border border-lamp/60 px-7 text-lamp hover:border-lamp hover:bg-night-2"
          >
            Call the store
          </button>
          <button
            type="button"
            aria-pressed="true"
            className="label min-h-12 border-b-2 border-lq-green pt-0.5 text-lamp"
          >
            Dining · active
          </button>
          <button
            type="button"
            className="label min-h-12 border-b-2 border-transparent pt-0.5 text-fog hover:text-lamp"
          >
            Bedroom
          </button>
        </div>
        <div className="mt-12 max-w-sm">
          <label htmlFor="phone-sample" className="label text-fog">
            Mobile number
          </label>
          <input
            id="phone-sample"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="Your mobile number"
            className="mt-3 block min-h-12 w-full rounded-ctl border border-night-3 bg-night-2 px-4 text-body text-lamp placeholder:text-fog"
          />
        </div>
      </section>

      <section className="border-t border-night-3 px-5 py-14 sm:px-10 lg:px-16">
        <h2 className="display text-h1 text-lamp">Motion</h2>
        <p className="mt-4 max-w-xl text-body text-fog">
          Crisp and physical: the sign flickers on and hums, photographs
          open once and drift gently with scroll, content rises clean. All
          of it goes still under reduced motion.
        </p>
        <ul className="mt-8 max-w-md border-t border-night-3">
          {motion.map((m) => (
            <li key={m} className="border-b border-night-3 py-3 text-body text-lamp">
              {m}
            </li>
          ))}
        </ul>
      </section>

      <footer className="border-t border-night-3 px-5 py-10 sm:px-10 lg:px-16">
        <p className="label text-fog">
          The living record of this system is DESIGN.md at the repo root.
        </p>
      </footer>
    </main>
  );
}
