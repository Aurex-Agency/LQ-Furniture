import type { Metadata } from "next";
import Image from "next/image";
import FloorBoard from "@/components/FloorBoard";
import OpenNow from "@/components/OpenNow";
import Reveal from "@/components/Reveal";
import SmsForm from "@/components/SmsForm";
import Ticker from "@/components/Ticker";
import { HOURS, STORE } from "@/lib/store";

export const metadata: Metadata = {
  description:
    "LQ Furniture is a furniture warehouse at 589 N Coley Rd in Tupelo, MS. Sectionals, dining, bedroom, recliners and mattresses at volume prices. Limited Quantities + Unlimited Savings. Open Wed thru Sat 10 to 6, Sun 12 to 6.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  name: STORE.name,
  slogan: STORE.tagline,
  telephone: "+1-662-841-5959",
  address: {
    "@type": "PostalAddress",
    streetAddress: STORE.address,
    addressLocality: STORE.city,
    addressRegion: STORE.state,
    postalCode: STORE.zip,
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "12:00",
      closes: "18:00",
    },
  ],
  image: "/photos/IMG_8606.jpg",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Masthead */}
      <header className="flex flex-wrap items-center justify-between gap-x-4 px-5 py-4 sm:px-10 lg:px-16">
        <a href="#top" className="order-1">
          <Image
            src="/brand/lq-logo.png"
            alt="LQ Furniture"
            width={712}
            height={548}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </a>
        <nav
          aria-label="Sections"
          className="lower-third order-3 flex w-full items-center gap-6 text-tag sm:order-2 sm:ml-auto sm:w-auto sm:pr-6"
        >
          <a href="#floor" className="flex min-h-12 items-center text-ink hover:text-lq-deep">
            The floor
          </a>
          <a href="#financing" className="flex min-h-12 items-center text-ink hover:text-lq-deep">
            Financing
          </a>
          <a href="#visit" className="flex min-h-12 items-center text-ink hover:text-lq-deep">
            Visit
          </a>
        </nav>
        <a
          href="#text-list"
          className="display order-2 flex min-h-12 items-center rounded-ctl bg-lq-green px-5 text-[0.9375rem] tracking-wide text-ink shadow-lift hover:bg-lq-press active:translate-y-px sm:order-3"
        >
          Join the text list
        </a>
      </header>

      <main id="top">
        {/* Hero: the opening shot */}
        <section>
          <div className="relative overflow-hidden">
            <div className="hero-camera">
              <Image
                src="/photos/IMG_8606.jpg"
                alt="Inside the LQ Furniture warehouse in Tupelo, a long bright aisle of furniture and decor under string lights"
                width={2200}
                height={1650}
                priority
                sizes="100vw"
                className="h-[48svh] w-full object-cover sm:h-[42svh]"
              />
            </div>
            <p
              className="lower-third hero-rise absolute bottom-3 left-3 bg-lq-green px-3 py-2 text-tag text-ink sm:bottom-4 sm:left-4"
              style={{ animationDelay: "500ms" }}
            >
              The floor · 589 N Coley Rd, Tupelo
            </p>
          </div>
          <div className="px-5 pb-12 pt-8 sm:px-10 lg:px-16">
            <h1
              className="display hero-rise max-w-6xl text-display text-ink"
              style={{ animationDelay: "150ms" }}
            >
              Limited quantities + unlimited savings
            </h1>
            <p
              className="hero-rise mt-5 max-w-xl text-body-lg text-stone"
              style={{ animationDelay: "300ms" }}
            >
              LQ Furniture is a warehouse full of living rooms, dining sets,
              bedrooms and mattresses in Tupelo, Mississippi. New loads roll
              in, prices stay low, and when something sells out, it&apos;s gone.
            </p>
            <div
              className="hero-rise mt-8 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "450ms" }}
            >
              <a
                href="#text-list"
                className="display flex min-h-12 items-center rounded-ctl bg-lq-green px-7 text-[1rem] tracking-wide text-ink shadow-lift hover:bg-lq-press active:translate-y-px"
              >
                Join the text list
              </a>
              <a
                href="#financing"
                className="display flex min-h-12 items-center rounded-ctl border-2 border-ink px-7 text-[1rem] tracking-wide text-ink hover:bg-cream"
              >
                How financing works
              </a>
            </div>
          </div>
        </section>

        <Ticker />

        {/* The floor */}
        <section id="floor" className="scroll-mt-6 pt-14 sm:pt-16">
          <div className="px-5 sm:px-10 lg:px-16">
            <h2 className="display text-h1 text-ink">This week&apos;s floor</h2>
            <p className="mt-4 max-w-xl text-body text-stone">
              Real photos from our aisles, not a catalog. The floor turns over
              every week, and prices live on the tags, so the only way to know
              what something costs is to come see it.
            </p>
          </div>
          <div className="mt-8">
            <FloorBoard />
          </div>
        </section>

        {/* Why the prices are low */}
        <section className="mt-16 bg-cream px-5 py-16 sm:mt-20 sm:px-10 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-12">
            <h2 className="display text-h1 text-ink lg:col-span-5">
              Why our prices look like a typo
            </h2>
            <div className="max-w-xl space-y-6 text-body text-ink lg:col-span-6 lg:col-start-7">
              <p>
                We buy by the truckload. Whole factory loads at volume prices,
                rolled straight onto the floor with a warehouse markup, not a
                showroom markup.
              </p>
              <p>
                We don&apos;t sit on stock. Furniture that sits costs money, so we
                price it to leave. That&apos;s why the floor looks different every
                time you come in.
              </p>
              <p>
                And when the last one sells, it&apos;s gone. Most sets never come
                back. If you love it, today is the day.
              </p>
            </div>
          </div>
        </section>

        {/* Financing */}
        <section id="financing" className="scroll-mt-6">
          <div className="grid lg:grid-cols-2">
            <Reveal className="relative order-2 min-h-[320px] lg:order-1">
              <Image
                src="/photos/IMG_8589.jpg"
                alt="A gray sectional on the LQ floor beneath the store's financing available banner"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </Reveal>
            <div className="order-1 px-5 py-16 sm:px-10 lg:order-2 lg:self-center lg:px-16">
              <h2 className="display max-w-2xl text-h1 text-ink">
                Financing available
              </h2>
              <p className="mt-5 max-w-md text-body text-ink">
                Says so on the banner in the store, and it&apos;s true. You don&apos;t
                need perfect credit to leave with furniture. Come in or call,
                and we&apos;ll walk you through the payment options before you buy
                a thing.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={STORE.phoneHref}
                  className="display flex min-h-12 items-center rounded-ctl bg-lq-green px-7 text-[1rem] tracking-wide text-ink shadow-lift hover:bg-lq-press active:translate-y-px"
                >
                  Call {STORE.phone}
                </a>
                <a
                  href="#visit"
                  className="display flex min-h-12 items-center rounded-ctl border-2 border-ink px-7 text-[1rem] tracking-wide text-ink hover:bg-cream"
                >
                  Come see us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Text list */}
        <section
          id="text-list"
          className="scroll-mt-6 bg-cream px-5 py-16 sm:px-10 sm:py-20 lg:px-16"
        >
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="display text-h1 text-ink">
                Hear about it before it&apos;s gone
              </h2>
              <p className="mt-5 max-w-md text-body text-stone">
                New truckloads and markdowns, straight to your phone, about 4
                to 6 texts a month. The best pieces never last the weekend, so
                the text list hears first.
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <SmsForm />
            </div>
          </div>
        </section>

        {/* Visit */}
        <section id="visit" className="scroll-mt-6">
          <div className="grid lg:grid-cols-2">
            <div className="px-5 py-16 sm:px-10 lg:px-16">
              <h2 className="display text-h1 text-ink">Come walk the floor</h2>
              <div className="mt-6">
                <OpenNow />
              </div>
              <address className="mt-6 max-w-md text-body not-italic text-ink">
                {STORE.name}
                <br />
                {STORE.address}
                <br />
                {STORE.city}, {STORE.state} {STORE.zip}
              </address>
              <ul className="mt-8 max-w-md border-t border-sand">
                {HOURS.map((h) => (
                  <li
                    key={h.days}
                    className="flex items-baseline justify-between border-b border-sand py-3"
                  >
                    <span className="text-body text-ink">{h.days}</span>
                    <span className="lower-third text-tag text-stone">{h.label}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={STORE.directionsUrl}
                  target="_blank"
                  rel="noopener"
                  className="display flex min-h-12 items-center rounded-ctl bg-lq-green px-7 text-[1rem] tracking-wide text-ink shadow-lift hover:bg-lq-press active:translate-y-px"
                >
                  Get directions
                </a>
                <a
                  href={STORE.phoneHref}
                  className="display flex min-h-12 items-center rounded-ctl border-2 border-ink px-7 text-[1rem] tracking-wide text-ink hover:bg-cream"
                >
                  Call the store
                </a>
              </div>
            </div>
            <Reveal className="relative min-h-[320px]">
              <Image
                src="/photos/IMG_8608.jpg"
                alt="Rows of reclining sofas stretching toward the back of the LQ warehouse"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-sand bg-cream px-5 py-10 sm:px-10 lg:px-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Image
              src="/brand/lq-logo.png"
              alt="LQ Furniture"
              width={712}
              height={548}
              className="h-10 w-auto"
            />
            <p className="lower-third mt-4 text-tag text-stone">
              {STORE.address} · {STORE.city}, {STORE.state} {STORE.zip} ·{" "}
              <a href={STORE.phoneHref} className="inline-flex min-h-12 items-center text-ink hover:text-lq-deep">
                {STORE.phone}
              </a>
            </p>
          </div>
          <nav aria-label="Legal" className="lower-third text-tag">
            <a href="/privacy" className="inline-flex min-h-12 items-center text-ink underline-offset-4 hover:text-lq-deep">
              Privacy policy
            </a>
          </nav>
        </div>
        <p className="lower-third mt-4 text-tag text-stone">
          Nothing on this site is for sale online. The store is the store.
        </p>
      </footer>
    </>
  );
}
