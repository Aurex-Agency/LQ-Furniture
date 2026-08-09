import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { STORE } from "@/lib/store";

export const metadata: Metadata = {
  title: "Financing",
  description:
    "Financing is available in the store at LQ Furniture in Tupelo, MS. You don't need perfect credit to leave with furniture. Come in or call (662) 841-5959 and we'll walk you through the options.",
};

export default function Financing() {
  return (
    <>
      <SiteHeader current="/financing" />
      <main>
        <section className="pool px-5 pt-16 sm:px-10 sm:pt-20 lg:px-16">
          <p className="label text-fog">Financing</p>
          <h1 className="display mt-4 max-w-3xl text-display text-lamp">
            Take it home now. Pay as you go.
          </h1>
          <p className="mt-6 max-w-xl text-body-lg text-fog">
            The banner in the store says financing available, and it&apos;s true.
            You don&apos;t need perfect credit, and you don&apos;t need to figure it
            out alone.
          </p>
        </section>

        <section className="mt-14 grid lg:grid-cols-2">
          <Reveal className="relative min-h-[340px]">
            <Image
              src="/photos/IMG_8589.jpg"
              alt="A gray sectional on the LQ floor beneath the store's financing available banner"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </Reveal>
          <div className="pool-left px-5 py-16 sm:px-10 lg:self-center lg:px-16">
            <h2 className="display max-w-xl text-h2 text-lamp">
              How it works in the store
            </h2>
            <div className="mt-6 max-w-md space-y-5 text-body text-fog">
              <p>
                Come in with a photo ID and a few minutes. We&apos;ll sit down at
                the counter, look at the payment options together, and you
                pick what fits. Approval happens the same day, before you buy
                a thing.
              </p>
              <p>
                Rather sort it out before you drive over? Call us. We&apos;ll tell
                you exactly what to bring and answer the awkward questions on
                the phone, where nobody&apos;s watching.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={STORE.phoneHref}
                className="label flex min-h-12 items-center rounded-ctl bg-lq-green px-7 text-night hover:bg-lq-press active:translate-y-px"
              >
                Call {STORE.phone}
              </a>
              <a
                href={STORE.directionsUrl}
                target="_blank"
                rel="noopener"
                className="label flex min-h-12 items-center rounded-ctl border border-lamp/60 px-7 text-lamp hover:border-lamp hover:bg-night-2"
              >
                Get directions
              </a>
            </div>
          </div>
        </section>

        <section className="border-t border-night-3 px-5 py-16 sm:px-10 lg:px-16">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <h3 className="display text-h3 text-lamp">Same day</h3>
              <p className="mt-3 max-w-xs text-body text-fog">
                The paperwork happens at the counter while you shop. Most
                folks walk out with a plan the day they walk in.
              </p>
            </div>
            <div>
              <h3 className="display text-h3 text-lamp">No pressure</h3>
              <p className="mt-3 max-w-xs text-body text-fog">
                Getting approved doesn&apos;t obligate you to buy anything. Know
                your number, then shop like you mean it.
              </p>
            </div>
            <div>
              <h3 className="display text-h3 text-lamp">Real people</h3>
              <p className="mt-3 max-w-xs text-body text-fog">
                No portals, no hold music. The person who rings you up is the
                person who helps with the plan.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
