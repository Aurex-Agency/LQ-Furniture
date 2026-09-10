import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { STORE } from "@/lib/store";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

// The old lqfurniture.com pages are redirected, but a stale link or a mistyped
// URL still has to land somewhere useful. This page sends people to the two
// things they were most likely looking for, and gives them the phone number
// rather than a dead end.
export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="px-5 pb-24 pt-16 sm:px-10 sm:pt-24 lg:px-16">
          <p className="label text-fog">404</p>
          <h1 className="display mt-4 max-w-3xl text-display text-lamp">
            That page isn&apos;t here
          </h1>
          <p className="mt-5 max-w-xl text-body text-fog">
            The page you were after has moved or never existed. The floor
            changes every week, so here is where most people are headed.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/the-floor"
              className="label inline-flex min-h-12 items-center btn-glow rounded-ctl bg-lq-green px-7 text-night hover:bg-lq-press active:translate-y-px"
            >
              See the floor
            </Link>
            <Link
              href="/visit"
              className="label inline-flex min-h-12 items-center rounded-ctl border border-lamp/60 px-7 text-lamp hover:border-lamp active:translate-y-px"
            >
              Visit the store
            </Link>
          </div>

          <p className="mt-10 max-w-xl text-body text-fog">
            Or just call us at{" "}
            <a href={STORE.phoneHref} className="text-lamp underline">
              {STORE.phone}
            </a>
            . We answer during store hours.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
