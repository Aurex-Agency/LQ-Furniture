import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FloorBoard from "@/components/FloorBoard";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { STORE } from "@/lib/store";
import { ARCHIVE_ITEMS } from "@/lib/archive";
import { CATEGORY_LABELS } from "@/lib/floor";

export const metadata: Metadata = {
  title: "The floor this week",
  description:
    "What's on the floor at LQ Furniture in Tupelo, MS this week: sectionals, dining sets, bedrooms, recliners, mattresses and lamps at warehouse prices. Limited quantities, priced on the tags.",
};

export default function TheFloor() {
  return (
    <>
      <SiteHeader current="/the-floor" />
      <main>
        <section className="px-5 pt-16 sm:px-10 sm:pt-20 lg:px-16">
          <p className="neon-box neon neon-on label inline-block rounded-ctl px-4 py-3">
            New loads weekly
          </p>
          <h1 className="display mt-4 max-w-3xl text-display text-lamp">
            What&apos;s here this week
          </h1>
          <p className="mt-6 max-w-xl text-body-lg text-fog">
            Real photos from our aisles, not a catalog. The floor turns over
            every week and prices live on the tags, so the only way to know
            what something costs is to come see it.
          </p>
        </section>
        <div className="mt-12 pb-20">
          <FloorBoard />
        </div>
        {/* The running record */}
        <section className="border-t border-night-3 px-5 py-16 sm:px-10 lg:px-16">
          <h2 className="display max-w-2xl text-h1 text-lamp">
            What came through
          </h2>
          <p className="mt-5 max-w-xl text-body text-fog">
            The running record of the floor. Most of these are already in
            somebody&apos;s living room, which is exactly how it&apos;s supposed to
            work. If a piece like one of these is what you&apos;re after, join
            the text list and catch the next load.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {ARCHIVE_ITEMS.map((item) => (
              <figure key={item.id} className="group m-0">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={2200}
                  height={1650}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 34vw, 50vw"
                  className="window-photo aspect-square w-full object-cover transition-[filter] duration-500 group-hover:brightness-110"
                />
                <figcaption className="mt-2 flex items-baseline justify-between gap-3">
                  <span className="text-[0.9375rem] text-lamp">{item.name}</span>
                  <span className="label hidden shrink-0 text-fog sm:inline">
                    {CATEGORY_LABELS[item.category]}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="border-t border-night-3 px-5 py-16 sm:px-10 lg:px-16">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <p className="display max-w-xl text-h2 text-lamp">
              See something you like? It won&apos;t wait long.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/text-list"
                className="label flex min-h-12 items-center btn-glow rounded-ctl bg-lq-green px-7 text-night hover:bg-lq-press active:translate-y-px"
              >
                Join the text list
              </Link>
              <a
                href={STORE.phoneHref}
                className="label flex min-h-12 items-center rounded-ctl border border-lamp/60 px-7 text-lamp hover:border-lamp hover:bg-night-2"
              >
                Call {STORE.phone}
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
