import type { Metadata } from "next";
import Image from "next/image";
import HoursTable from "@/components/HoursTable";
import NeonSign from "@/components/NeonSign";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { STORE } from "@/lib/store";

export const metadata: Metadata = {
  title: "Visit the store",
  description:
    "Visit LQ Furniture at 589 N Coley Rd, Tupelo, MS 38801. Open Wednesday through Saturday 10 to 6 and Sunday 12 to 6. Call (662) 841-5959.",
};

export default function Visit() {
  return (
    <>
      <SiteHeader current="/visit" />
      <main>
        <section className="px-5 pt-10 sm:px-10 sm:pt-20 lg:px-16">
          <NeonSign big />
          <h1 className="display mt-6 max-w-3xl text-display text-lamp">
            Come walk the floor
          </h1>
          <p className="mt-6 max-w-xl text-body-lg text-fog">
            The website is the window. The store is the store. Bring your
            measurements, bring the truck if you&apos;ve got one, and give
            yourself an hour.
          </p>
        </section>

        <section className="mt-14 grid lg:grid-cols-2">
          <div className="px-5 pb-16 sm:px-10 lg:px-16">
            <address className="display max-w-md text-h2 not-italic text-lamp">
              {STORE.address}
              <br />
              {STORE.city}, {STORE.state} {STORE.zip}
            </address>
            <div className="mt-8">
              <HoursTable />
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={STORE.directionsUrl}
                target="_blank"
                rel="noopener"
                className="label flex min-h-12 items-center btn-glow rounded-ctl bg-lq-green px-7 text-night hover:bg-lq-press active:translate-y-px"
              >
                Get directions
              </a>
              <a
                href={STORE.phoneHref}
                className="label flex min-h-12 items-center rounded-ctl border border-lamp/60 px-7 text-lamp hover:border-lamp hover:bg-night-2"
              >
                Call {STORE.phone}
              </a>
            </div>
          </div>
          <Reveal className="relative min-h-[340px]">
            <Image
              src="/photos/IMG_8608.jpg"
              alt="Rows of reclining sofas stretching toward the back of the LQ warehouse"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </Reveal>
        </section>

        <section className="border-t border-night-3 px-5 py-16 sm:px-10 lg:px-16">
          <h2 className="display max-w-2xl text-h2 text-lamp">
            What to expect when you get here
          </h2>
          <div className="mt-6 grid max-w-4xl gap-8 sm:grid-cols-2">
            <p className="text-body text-fog">
              It&apos;s a real warehouse, so wear comfortable shoes. The aisles
              run deep: living rooms up front, dining and bedrooms in the
              middle, the Shema Sleep mattress gallery and the lamp wall
              toward the back. Prices are on the tags, and the tag price is
              the price.
            </p>
            <p className="text-body text-fog">
              See something you love, tell one of us and it&apos;s yours. We&apos;ll help you load it or hold it while you sort
              out delivery. And if you&apos;re financing, give yourself a few
              extra minutes at the counter on the way in.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
