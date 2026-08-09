import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import OpenNow from "@/components/OpenNow";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { STORE } from "@/lib/store";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Reach LQ Furniture in Tupelo, MS. Call (662) 841-5959 during store hours, send a message, or come by 589 N Coley Rd. Open Wed thru Sat 10 to 6, Sun 12 to 6.",
};

export default function Contact() {
  return (
    <>
      <SiteHeader current="/contact" />
      <main>
        <section className="px-5 pt-10 sm:px-10 sm:pt-20 lg:px-16">
          <h1 className="display max-w-3xl text-display text-lamp">
            Talk to a person
          </h1>
          <p className="mt-6 max-w-xl text-body-lg text-fog">
            The fastest answer is always the phone during store hours,
            especially about a piece on the floor. For everything else,
            leave a message with your number.
          </p>
        </section>

        <section className="px-5 py-14 sm:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="max-w-md lg:col-span-5">
              <OpenNow />
              <a
                href={STORE.phoneHref}
                className="neon-box neon neon-on display mt-4 inline-block rounded-[10px] px-5 py-4 text-h2 leading-none hover:opacity-90"
              >
                {STORE.phone}
              </a>
              <address className="mt-6 text-body not-italic text-fog">
                {STORE.name}
                <br />
                {STORE.address}
                <br />
                {STORE.city}, {STORE.state} {STORE.zip}
              </address>
              <p className="mt-6 text-body text-fog">
                Wed thru Sat 10 to 6 · Sun 12 to 6
              </p>
              <a
                href={STORE.directionsUrl}
                target="_blank"
                rel="noopener"
                className="label mt-8 inline-flex min-h-12 items-center btn-glow rounded-ctl bg-lq-green px-7 text-night hover:bg-lq-press active:translate-y-px"
              >
                Get directions
              </a>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <ContactForm />
            </div>
          </div>
        </section>

        <section className="border-t border-night-3">
          <Reveal className="relative min-h-[300px] sm:min-h-[380px]">
            <Image
              src="/photos/IMG_8605.jpg"
              alt="The lamp wall at LQ Furniture, shelves of lit table lamps in every color"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
