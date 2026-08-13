import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { STORE } from "@/lib/store";
import { FINANCING_PARTNERS } from "@/lib/financing";
import FaqList from "@/components/FaqList";
import { FAQS } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Financing",
  description:
    "Four ways to finance furniture at LQ Furniture in Tupelo, MS: Synchrony and Tower Loans with up to 12 months no interest, plus Acima and Snap with no credit check. Apply online or at the counter.",
};

export default function Financing() {
  return (
    <>
      <SiteHeader current="/financing" />
      <main>
        <section className="px-5 pt-10 sm:px-10 sm:pt-20 lg:px-16">
          <p className="neon-box neon neon-on label inline-block rounded-ctl px-4 py-3">
            Financing available
          </p>
          <h1 className="display mt-4 max-w-3xl text-display text-lamp">
            Take it home now. Pay as you go.
          </h1>
          <p className="mt-6 max-w-xl text-body-lg text-fog">
            Four partners, four ways to say yes. Up to 12 months with no
            interest if you have credit, and two roads that never run a
            credit check if you don&apos;t.
          </p>
        </section>

        {/* The partner board: the same four applications behind the QR
            codes at the counter. */}
        <section className="px-5 pt-14 sm:px-10 lg:px-16">
          <div className="grid gap-6 sm:grid-cols-2">
            {FINANCING_PARTNERS.map((p) => (
              <div
                key={p.name}
                className="flex flex-col rounded-ctl border border-night-3 bg-night-2 p-6 sm:p-8"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="display text-h3 text-lamp">{p.name}</h2>
                  <span
                    className={`label shrink-0 ${
                      p.kind === "No credit check" ? "text-lq-press" : "text-fog"
                    }`}
                  >
                    {p.kind}
                  </span>
                </div>
                <p className="display mt-5 text-h2 text-lamp">{p.headline}</p>
                <p className="mt-4 max-w-md grow text-body text-fog">
                  {p.detail}
                </p>
                <a
                  href={p.applyUrl}
                  target="_blank"
                  rel="noopener"
                  className="label mt-8 flex min-h-12 items-center justify-center self-start btn-glow rounded-ctl bg-lq-green px-7 text-night hover:bg-lq-press active:translate-y-px"
                >
                  Apply with {p.name}
                </a>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-body text-fog">
            These are the same applications behind the QR codes at the
            counter. Exact terms depend on your application and your ticket,
            and we&apos;ll go over them with you line by line before you sign
            anything.
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
          <div className="px-5 py-16 sm:px-10 lg:self-center lg:px-16">
            <h2 className="display max-w-xl text-h2 text-lamp">
              How it works in the store
            </h2>
            <div className="mt-6 max-w-md space-y-5 text-body text-fog">
              <p>
                Apply from your couch with the links above, or come in with a
                photo ID and a few minutes. We&apos;ll sit down at the counter,
                look at the options together, and you pick what fits. You&apos;ll
                know where you stand before you buy a thing.
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
                className="label flex min-h-12 items-center btn-glow rounded-ctl bg-lq-green px-7 text-night hover:bg-lq-press active:translate-y-px"
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
              <h3 className="display text-h3 text-lamp">Start anywhere</h3>
              <p className="mt-3 max-w-xs text-body text-fog">
                Apply from your phone before you visit or at the counter
                while you shop. Same applications either way.
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
                The person who rings you up is the person who helps with the
                plan, and nobody gets left guessing at the terms.
              </p>
            </div>
          </div>
        </section>
        <section className="border-t border-night-3 px-5 py-16 sm:px-10 lg:px-16">
          <h2 className="display max-w-2xl text-h2 text-lamp">
            Asked at the counter
          </h2>
          <div className="mt-8 max-w-3xl">
            <FaqList
              items={FAQS.filter((f) =>
                ["Do y'all really do financing?", "Is the tag price the price?", "Can I take it home the same day?"].includes(f.q),
              )}
            />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
