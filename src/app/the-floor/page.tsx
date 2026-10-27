import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import Link from "next/link";
import Image from "next/image";
import FloorBoard from "@/components/FloorBoard";
import NeonIcon from "@/components/NeonIcon";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { STORE } from "@/lib/store";
import { ARCHIVE_ITEMS } from "@/lib/archive";
import { CATEGORY_LABELS } from "@/lib/floor";

export const metadata: Metadata = pageMetadata({
  title: "Furniture floor photos in Tupelo",
  description:
    "Explore real LQ Furniture floor photos in Tupelo: sectionals, dining, bedrooms, recliners and mattresses. Ask about current availability before your visit.",
  path: "/the-floor",
});

export default function TheFloor() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "The floor this week", path: "/the-floor" }])}
      />
      <SiteHeader current="/the-floor" />
      <main>
        <section className="px-5 pt-10 sm:px-10 sm:pt-20 lg:px-16">
          <p className="neon-box neon neon-on label inline-block rounded-ctl px-4 py-3">
            New loads weekly
          </p>
          <h1 className="display mt-4 max-w-3xl text-display text-lamp">
            Explore the furniture floor
          </h1>
          <p className="mt-6 max-w-xl text-body-lg text-fog">
            Real photos from our aisles in Tupelo, not a catalog. The floor turns over
            every week. Photos are not live inventory. Ask about current availability,
            dimensions and tag prices before making a special trip.
          {" "}
            Newest load first on{" "}
            <Link href="/weekly-drop" className="text-lq-green underline underline-offset-2">
              this week&apos;s drop
            </Link>
            .
          </p>
        </section>
        <div aria-hidden className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 px-5 sm:gap-x-12 sm:px-10 lg:px-16">
          <NeonIcon kind="sofa" className="w-12 sm:w-16" />
          <NeonIcon kind="dining" className="w-12 sm:w-16" />
          <NeonIcon kind="bed" className="w-12 sm:w-16" />
          <NeonIcon kind="recliner" className="w-12 sm:w-16" />
          <NeonIcon kind="mattress" className="w-12 sm:w-16" />
          <NeonIcon kind="lamp" className="w-12 sm:w-16" />
        </div>
        <div className="mt-10 pb-20 sm:mt-12">
          <nav aria-label="Furniture buying guides" className="flex flex-wrap gap-6 px-5 py-8 sm:px-10 lg:px-16">
          <Link href="/furniture/sofas-sectionals" className="inline-flex min-h-12 items-center text-lq-green underline">Sofas and sectionals</Link>
          <Link href="/furniture/dining" className="inline-flex min-h-12 items-center text-lq-green underline">Dining furniture</Link>
          <Link href="/visit" className="inline-flex min-h-12 items-center text-lq-green underline">Hours and directions</Link>
        </nav>
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
                {/* Department only. Product names are not claimed here:
                    see the note in src/lib/archive.ts. */}
                <figcaption className="label mt-2 text-fog">
                  {CATEGORY_LABELS[item.category]}
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
