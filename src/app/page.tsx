import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import OpenNow from "@/components/OpenNow";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import SmsForm from "@/components/SmsForm";
import { STORE } from "@/lib/store";
import { FLOOR_ITEMS } from "@/lib/floor";

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

const previewIds = ["8587", "8620", "8602", "8610"];

export default function Home() {
  const preview = FLOOR_ITEMS.filter((i) => previewIds.includes(i.id));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      <main>
        {/* Hero: the lit window */}
        <section className="relative">
          <div className="lights-up relative overflow-hidden">
            <div className="settle">
              <Image
                src="/photos/IMG_8606.jpg"
                alt="Inside the LQ Furniture warehouse in Tupelo at night, aisles of furniture under string lights"
                width={2200}
                height={1650}
                priority
                sizes="100vw"
                className="h-[76svh] w-full object-cover"
              />
            </div>
            {/* The room goes dark at the edges so the floor reads as lit. */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(110% 85% at 68% 22%, transparent 22%, rgb(19 19 17 / 0.62) 62%, rgb(19 19 17 / 0.97) 100%)",
              }}
              aria-hidden
            />
            <div
              className="absolute inset-x-0 bottom-0 h-[55%]"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 0%, rgb(19 19 17 / 0.55) 45%, rgb(19 19 17 / 0.92) 100%)",
              }}
              aria-hidden
            />
            <p className="neon-box neon neon-on label absolute right-5 top-5 rounded-ctl bg-night/80 px-4 py-3 sm:right-10 sm:top-8">
              Open Wed thru Sun
            </p>
            <div
              className="absolute inset-x-0 bottom-0 px-5 pb-12 sm:px-10 lg:px-16"
              style={{ textShadow: "0 2px 28px rgb(0 0 0 / 0.65)" }}
            >
              <h1
                className="display line-rise max-w-3xl text-display text-lamp"
                style={{ animationDelay: "350ms" }}
              >
                Limited quantities.
                <br />
                Unlimited savings.
              </h1>
              <p
                className="line-rise mt-5 max-w-xl text-body-lg text-lamp/85"
                style={{ animationDelay: "550ms" }}
              >
                A warehouse full of living rooms, dining sets, bedrooms and
                mattresses in Tupelo, Mississippi. When the last one sells,
                it&apos;s gone.
              </p>
              <div
                className="line-rise mt-8 flex flex-wrap items-center gap-4"
                style={{ animationDelay: "750ms" }}
              >
                <Link
                  href="/the-floor"
                  className="label flex min-h-12 items-center rounded-ctl bg-lq-green px-7 text-night hover:bg-lq-press active:translate-y-px"
                >
                  Walk the floor
                </Link>
                <Link
                  href="/financing"
                  className="label flex min-h-12 items-center rounded-ctl border border-lamp/60 px-7 text-lamp hover:border-lamp hover:bg-night-2"
                >
                  How financing works
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial intro */}
        <section className="pool px-5 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-12">
            <h2 className="display text-h1 text-lamp lg:col-span-6">
              The floor changes every week. The prices are the reason people
              keep coming back.
            </h2>
            <div className="max-w-xl space-y-6 text-body text-fog lg:col-span-5 lg:col-start-8">
              <p>
                We buy whole factory loads at volume prices and roll them
                straight onto the floor with a warehouse markup, not a
                showroom markup. Furniture that sits costs money, so we price
                it to leave.
              </p>
              <p>
                That&apos;s the whole trick. There isn&apos;t one. Come walk the
                aisles and read the tags yourself.
              </p>
            </div>
          </div>
        </section>

        {/* Floor preview */}
        <section className="px-5 pb-20 sm:px-10 sm:pb-24 lg:px-16">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="display text-h2 text-lamp">On the floor right now</h2>
            <Link
              href="/the-floor"
              className="label inline-flex min-h-12 items-center gap-2 text-fog hover:text-lamp"
            >
              See everything
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:gap-x-8">
            {preview.map((item, i) => (
              <figure key={item.id} className={`m-0 ${i === 0 || i === 3 ? "sm:mt-16" : ""}`}>
                <Reveal className="relative" inner="">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={2200}
                    height={1650}
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="window-photo aspect-[4/3] w-full object-cover"
                  />
                </Reveal>
                <figcaption className="mt-4 flex items-baseline justify-between gap-4">
                  <span className="display text-h3 text-lamp">{item.name}</span>
                  <span className="label shrink-0 text-fog">
                    Priced on the floor
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Financing */}
        <section className="border-y border-night-3">
          <div className="grid lg:grid-cols-2">
            <Reveal className="relative min-h-[340px]">
              <Image
                src="/photos/IMG_8589.jpg"
                alt="A gray sectional on the LQ floor beneath the store's financing available banner"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </Reveal>
            <div className="pool-left px-5 py-20 sm:px-10 lg:self-center lg:px-16">
              <h2 className="display mt-4 max-w-xl text-h1 text-lamp">
                You don&apos;t need perfect credit to leave with furniture.
              </h2>
              <p className="mt-5 max-w-md text-body text-fog">
                Financing is available in the store, same day. Come in or
                call, and we&apos;ll walk you through the payment options before
                you buy a thing.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/financing"
                  className="label flex min-h-12 items-center rounded-ctl bg-lq-green px-7 text-night hover:bg-lq-press active:translate-y-px"
                >
                  How it works
                </Link>
                <a
                  href={STORE.phoneHref}
                  className="label flex min-h-12 items-center rounded-ctl border border-lamp/60 px-7 text-lamp hover:border-lamp hover:bg-night-2"
                >
                  Call {STORE.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Text list */}
        <section id="text-list" className="scroll-mt-6 px-5 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="display mt-4 text-h1 text-lamp">
                Hear about it before it&apos;s gone.
              </h2>
              <p className="mt-5 max-w-md text-body text-fog">
                New truckloads and markdowns, straight to your phone, about 4
                to 6 texts a month. The best pieces never last the weekend.
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <SmsForm />
            </div>
          </div>
        </section>

        {/* Visit strip */}
        <section className="border-t border-night-3 px-5 py-16 sm:px-10 lg:px-16">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <div>
              <OpenNow />
              <p className="display mt-3 text-h2 text-lamp">
                {STORE.address}, {STORE.city}
              </p>
              <p className="mt-2 text-body text-fog">
                Wed thru Sat 10 to 6 · Sun 12 to 6
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={STORE.directionsUrl}
                target="_blank"
                rel="noopener"
                className="label flex min-h-12 items-center rounded-ctl bg-lq-green px-7 text-night hover:bg-lq-press active:translate-y-px"
              >
                Get directions
              </a>
              <Link
                href="/visit"
                className="label flex min-h-12 items-center rounded-ctl border border-lamp/60 px-7 text-lamp hover:border-lamp hover:bg-night-2"
              >
                Plan a visit
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
