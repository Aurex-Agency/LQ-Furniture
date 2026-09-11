import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import NeonSign from "@/components/NeonSign";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { CURRENT_DROP, dropDateLabel } from "@/lib/drops";
import { STORE } from "@/lib/store";

// Deliberately absent from the header and footer navigation. The way in is
// the weekly text message, so the page has to stand on its own: it names the
// week, shows the load, and puts the store's address and phone within reach
// without assuming the visitor has seen any other page.
export const metadata: Metadata = pageMetadata({
  title: "This week's drop",
  description:
    "The newest furniture on the floor at LQ Furniture in Tupelo, MS, updated every week. Limited quantities: when the last one sells, it's gone.",
  path: "/weekly-drop",
});

export default function WeeklyDrop() {
  const { weekOf, note, photos } = CURRENT_DROP;
  const posted = dropDateLabel(weekOf);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "This week's drop", path: "/weekly-drop" },
        ])}
      />
      <SiteHeader />
      <main>
        <section className="px-5 pt-10 sm:px-10 sm:pt-16 lg:px-16">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <p className="neon-box neon neon-on label inline-block rounded-ctl px-4 py-3">
                New this week
              </p>
              <h1 className="display mt-6 max-w-3xl text-display text-lamp">
                This week&apos;s drop
              </h1>
              <p className="label mt-4 text-fog">
                Week of {posted}
              </p>
            </div>
            <div className="hidden sm:block">
              <NeonSign />
            </div>
          </div>
          <p className="mt-6 max-w-xl text-body-lg text-fog">
            {note ??
              "Straight off this week's trucks and onto the floor. Limited quantities, so when the last one sells, it's gone."}
          </p>
        </section>

        {photos.length > 0 ? (
          <section className="px-5 py-14 sm:px-10 sm:py-16 lg:px-16">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
              {photos.map((photo, i) => (
                <Reveal
                  key={photo.src}
                  className="relative"
                  inner=""
                  delay={(i % 3) * 120}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={2200}
                    height={1650}
                    priority={i < 3}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="window-photo aspect-[4/3] w-full object-cover"
                  />
                </Reveal>
              ))}
            </div>
            <p className="label mt-10 text-fog">
              Everything here is priced on the floor. Nothing on this site is
              for sale online.
            </p>
          </section>
        ) : (
          // Between drops. Says so plainly rather than showing an empty grid
          // or last week's load pretending to be this week's.
          <section className="px-5 py-14 sm:px-10 sm:py-16 lg:px-16">
            <div className="max-w-xl rounded-ctl border border-night-3 bg-night-2 p-7">
              <p className="display text-h3 text-lamp">
                This week&apos;s photos go up shortly
              </p>
              <p className="mt-3 text-body text-fog">
                The next load is being set on the floor. Come walk the aisles
                in the meantime, or call and we&apos;ll tell you what just came
                off the truck.
              </p>
            </div>
          </section>
        )}

        {/* Both doors, for a visitor who arrived from a text and has never
            seen the rest of the site. */}
        <section className="border-t border-night-3 px-5 py-14 sm:px-10 lg:px-16">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <p className="display max-w-xl text-h2 text-lamp">
                {STORE.address}, {STORE.city}
              </p>
              <p className="mt-3 text-body text-fog">
                Wed thru Sat 10 to 6 · Sun 12 to 6
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
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
              <Link
                href="/the-floor"
                className="label flex min-h-12 items-center rounded-ctl border border-lamp/60 px-7 text-lamp hover:border-lamp hover:bg-night-2"
              >
                See the whole floor
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
