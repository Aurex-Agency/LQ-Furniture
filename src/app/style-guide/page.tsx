import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Brand foundation",
  robots: { index: false },
};

const palette = [
  { token: "ink", hex: "#0C0C0B", role: "page field", cls: "bg-ink" },
  {
    token: "ink-raised",
    hex: "#171714",
    role: "raised surfaces, tag backgrounds",
    cls: "bg-ink-raised",
  },
  {
    token: "ink-line",
    hex: "#26251F",
    role: "hairlines, dividers, input borders",
    cls: "bg-ink-line",
  },
  { token: "bone", hex: "#EFEDE6", role: "primary text on dark", cls: "bg-bone" },
  { token: "ash", hex: "#9B9A93", role: "secondary text", cls: "bg-ash" },
] as const;

const greens = [
  { token: "lq-green", hex: "#6BB22E", role: "brand green, signal only", cls: "bg-lq-green" },
  { token: "lq-lime", hex: "#8FC120", role: "logo highlight, tiny accents", cls: "bg-lq-lime" },
  { token: "lq-press", hex: "#588F24", role: "pressed and hover on green", cls: "bg-lq-press" },
] as const;

const contrast = [
  { pair: "bone on ink", ratio: "16.7 : 1" },
  { pair: "ash on ink", ratio: "6.9 : 1" },
  { pair: "lq-green on ink", ratio: "7.5 : 1" },
  { pair: "ink on lq-green", ratio: "7.5 : 1" },
  { pair: "white on lq-green", ratio: "2.6 : 1, never used" },
] as const;

const greenRules = [
  "the primary button",
  "the SOLD stamp",
  "the active filter chip",
  "the days-on-floor numeral",
  "one hairline under the wordmark",
] as const;

export default function StyleGuide() {
  return (
    <main className="min-h-screen">
      {/* Wordmark */}
      <header className="px-5 pt-14 sm:px-10 lg:px-16">
        <Image
          src="/brand/lq-logo.png"
          alt="LQ Furniture"
          width={712}
          height={548}
          priority
          className="h-24 w-auto sm:h-32"
        />
        <div className="mt-6 h-px w-40 bg-lq-green" aria-hidden />
        <p className="mt-6 font-mono text-tag uppercase text-ash">
          Brand foundation · Tupelo, Mississippi
        </p>
      </header>

      {/* Tagline as display type proof */}
      <section className="px-5 pt-20 sm:px-10 lg:px-16">
        <h1 className="display max-w-5xl text-display text-bone">
          Limited quantities + unlimited savings
        </h1>
        <p className="mt-8 max-w-xl text-body-lg text-ash">
          Their words, not ours. This is the display voice: Archivo, expanded
          wide, set tight, on the ink field. It only has to do one job, and
          that job is volume.
        </p>
      </section>

      {/* Palette */}
      <section className="mt-24 border-t border-ink-line px-5 py-16 sm:px-10 lg:px-16">
        <h2 className="font-display text-h2 font-semibold text-bone">The palette</h2>
        <p className="mt-4 max-w-xl text-body text-ash">
          The site is dark because the brand green is unreadable on a light
          field. Five working neutrals carry everything. Green appears on
          about two percent of the pixels, and that restraint is what makes
          it loud.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-px bg-ink-line sm:grid-cols-5">
          {palette.map((c) => (
            <div key={c.token} className="bg-ink">
              <div className={`h-28 border border-ink-line ${c.cls}`} />
              <div className="px-3 py-4">
                <p className="font-mono text-tag uppercase text-bone">{c.token}</p>
                <p className="mt-1 font-mono text-tag text-ash">{c.hex}</p>
                <p className="mt-2 text-[0.9375rem] leading-snug text-ash">{c.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-px grid grid-cols-3 gap-px bg-ink-line sm:max-w-[60%]">
          {greens.map((c) => (
            <div key={c.token} className="bg-ink">
              <div className={`h-14 border border-ink-line ${c.cls}`} />
              <div className="px-3 py-4">
                <p className="font-mono text-tag uppercase text-bone">{c.token}</p>
                <p className="mt-1 font-mono text-tag text-ash">{c.hex}</p>
                <p className="mt-2 text-[0.9375rem] leading-snug text-ash">{c.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-md">
          <h3 className="font-mono text-tag uppercase text-ash">Measured contrast</h3>
          <ul className="mt-4 border-t border-ink-line">
            {contrast.map((c) => (
              <li
                key={c.pair}
                className="flex items-baseline justify-between gap-6 border-b border-ink-line py-3"
              >
                <span className="text-body text-bone">{c.pair}</span>
                <span className="font-mono text-tag text-ash">{c.ratio}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 max-w-md">
          <h3 className="font-mono text-tag uppercase text-ash">
            Where green is allowed
          </h3>
          <ul className="mt-4 border-t border-ink-line">
            {greenRules.map((rule) => (
              <li key={rule} className="border-b border-ink-line py-3 text-body text-bone">
                {rule}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-body text-ash">
            Nowhere else. Not icons, not borders, not headings, not hover
            states on things that are not already green.
          </p>
        </div>
      </section>

      {/* Type scale */}
      <section className="border-t border-ink-line px-5 py-16 sm:px-10 lg:px-16">
        <h2 className="font-display text-h2 font-semibold text-bone">The type scale</h2>
        <p className="mt-4 max-w-xl text-body text-ash">
          Three voices. Archivo expanded shouts the headlines, Newsreader
          talks like a person, DM Mono keeps the books. The steps are far
          apart on purpose.
        </p>

        <div className="mt-12 space-y-14">
          <div>
            <p className="font-mono text-tag uppercase text-ash">
              display · Archivo expanded · 48 to 96px
            </p>
            <p className="display mt-3 text-display text-bone">Warehouse prices</p>
          </div>

          <div>
            <p className="font-mono text-tag uppercase text-ash">
              h1 · Archivo expanded · 40 to 64px
            </p>
            <p className="display mt-3 text-h1 text-bone">
              When it&apos;s gone, it&apos;s gone
            </p>
          </div>

          <div>
            <p className="font-mono text-tag uppercase text-ash">
              h2 · Archivo · 28 to 40px · sentence case
            </p>
            <p className="mt-3 font-display text-h2 font-semibold text-bone">
              What&apos;s on the floor this week
            </p>
          </div>

          <div className="max-w-2xl">
            <p className="font-mono text-tag uppercase text-ash">
              body · Newsreader · 18px
            </p>
            <p className="mt-3 text-body text-bone">
              The floor turns over fast. A sectional that came in on Tuesday
              can be loaded in somebody&apos;s truck by Saturday, and when the
              last one sells, it is gone. That is the whole deal. Volume
              buying keeps the price down, limited quantities keep it honest.
            </p>
          </div>

          <div>
            <p className="font-mono text-tag uppercase text-ash">
              tag · DM Mono · 13px · tags and data
            </p>
            <p className="mt-3 font-mono text-tag uppercase text-bone">
              Sectionals · Dining · Bedroom · Recliners · Mattresses
            </p>
          </div>

          <div>
            <p className="font-mono text-tag uppercase text-ash">
              days-on-floor numeral · DM Mono · green signal
            </p>
            <p className="mt-3 font-mono text-h1 text-lq-green">
              14<span className="ml-3 text-h3 text-ash">days on the floor</span>
            </p>
          </div>
        </div>
      </section>

      {/* Photo treatment */}
      <section className="border-t border-ink-line pt-16">
        <div className="px-5 sm:px-10 lg:px-16">
          <h2 className="font-display text-h2 font-semibold text-bone">Photographs run edge to edge</h2>
          <p className="mt-4 max-w-xl text-body text-ash">
            Real photos of the real floor, full bleed, never boxed in a
            padded card. The warehouse is the proof.
          </p>
        </div>
        <div className="relative mt-10">
          <Image
            src="/photos/IMG_8606.jpg"
            alt="The LQ Furniture warehouse floor in Tupelo, aisles of furniture under string lights"
            width={2200}
            height={1650}
            sizes="100vw"
            className="h-[420px] w-full object-cover sm:h-[520px]"
          />
          <p className="pointer-events-none absolute bottom-4 left-5 bg-ink-raised px-3 py-2 font-mono text-tag uppercase text-bone sm:left-10 lg:left-16">
            The floor · Tupelo, MS
          </p>
          {/* The SOLD stamp: the site's single animated moment lands here in a
              later phase. Static form shown for approval. */}
          <p
            className="display pointer-events-none absolute right-8 top-10 -rotate-6 border-4 border-lq-green bg-ink px-4 py-1 text-h2 text-lq-green sm:right-16"
            aria-hidden
          >
            Sold
          </p>
        </div>
      </section>

      {/* Controls */}
      <section className="border-t border-ink-line px-5 py-16 sm:px-10 lg:px-16">
        <h2 className="font-display text-h2 font-semibold text-bone">Controls</h2>
        <p className="mt-4 max-w-xl text-body text-ash">
          Buttons say what happens. Green takes ink text, never white. Corners
          stay at 2px, tap targets stay at 48px, and the focus ring is always
          visible from the keyboard.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button
            type="button"
            className="display min-h-12 rounded-ctl bg-lq-green px-7 text-[1rem] tracking-wide text-ink hover:bg-lq-press active:bg-lq-press"
          >
            Join the text list
          </button>
          <button
            type="button"
            className="display min-h-12 rounded-ctl border border-bone px-7 text-[1rem] tracking-wide text-bone hover:border-ash hover:text-ash"
          >
            Get pre-approved
          </button>
          <button
            type="button"
            className="min-h-12 rounded-ctl border border-ink-line bg-ink-raised px-5 font-mono text-tag uppercase text-bone"
          >
            Sectionals
          </button>
          <button
            type="button"
            aria-pressed="true"
            className="min-h-12 rounded-ctl border border-lq-green bg-ink-raised px-5 font-mono text-tag uppercase text-lq-green"
          >
            Dining · active
          </button>
        </div>

        <div className="mt-12 max-w-sm">
          <label
            htmlFor="phone-sample"
            className="font-mono text-tag uppercase text-ash"
          >
            Mobile number
          </label>
          <input
            id="phone-sample"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="Your mobile number"
            className="mt-2 block min-h-12 w-full rounded-ctl border border-ink-line bg-ink-raised px-4 text-body text-bone placeholder:text-ash"
          />
          <p className="mt-3 text-[0.9375rem] text-ash">
            The full opt-in form ships with its TCPA disclosure and an
            unchecked checkbox beside it. That copy is fixed and does not get
            shortened for looks.
          </p>
        </div>
      </section>

      <footer className="border-t border-ink-line px-5 py-10 sm:px-10 lg:px-16">
        <p className="font-mono text-tag uppercase text-ash">
          Phase 1 of the build. Pages come next, after this foundation is
          approved.
        </p>
      </footer>
    </main>
  );
}
