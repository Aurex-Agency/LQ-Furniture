import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { STORE } from "@/lib/store";

export const metadata: Metadata = {
  title: "Terms and conditions",
  description:
    "Terms and conditions for the LQ Furniture website and text message program, including message frequency, opt-out instructions, and carrier disclosures.",
};

export default function Terms() {
  return (
    <>
      <SiteHeader />
      <main className="px-5 py-14 sm:px-10 lg:px-16">
        <header>
          <h1 className="display max-w-3xl text-h1 text-lamp">
            Terms and conditions
          </h1>
          <p className="mt-4 label text-fog">Effective August 13, 2026</p>
        </header>

        <div className="mt-12 max-w-2xl space-y-10 text-body text-lamp">
          <section>
            <h2 className="display text-h3 text-lamp">Who we are</h2>
            <p className="mt-3">
              LQ Furniture is a furniture store at {STORE.address},{" "}
              {STORE.city}, {STORE.state} {STORE.zip}. You can reach us at{" "}
              {STORE.phone}. These terms cover this website and the LQ
              Furniture text message program. By using the site or joining
              the text list, you agree to them.
            </p>
          </section>

          <section>
            <h2 className="display text-h3 text-lamp">
              The text message program
            </h2>
            <p className="mt-3">
              The LQ Furniture text list sends recurring automated marketing
              and promotional text messages, such as new truckload
              announcements and markdowns, from LQ Furniture. You join by
              submitting the sign-up form on this website or by opting in
              at the store. Consent is not a condition of any purchase.
            </p>
            <p className="mt-3">
              Message frequency is about 4 to 6 messages a month and may
              vary. Message and data rates may apply. If you have questions
              about your text plan or data plan, contact your wireless
              provider. Carriers are not liable for delayed or undelivered
              messages.
            </p>
            <p className="mt-3">
              You can cancel at any time. Reply STOP, QUIT, END, REVOKE, OPT
              OUT, CANCEL, or UNSUBSCRIBE to any message and you will be
              unsubscribed; you may receive one final message confirming
              your opt-out. You can also tell us in the store or call us at{" "}
              {STORE.phone}. However you ask, we will honor it no later than
              10 business days after you do.
            </p>
            <p className="mt-3">
              For help, reply HELP to any message, or call us at{" "}
              {STORE.phone}.
            </p>
            <p className="mt-3">
              By enrolling, you confirm that you are at least 18 years old,
              that you are the account holder for the mobile number you
              provided or have the account holder&apos;s permission, and that
              you will let us know if you change or give up that number.
            </p>
          </section>

          <section>
            <h2 className="display text-h3 text-lamp">The website</h2>
            <p className="mt-3">
              This website is informational. Nothing on it is for sale
              online; furniture changes hands at the store. Photographs show
              the floor as it looked when they were taken, and because we
              sell in limited quantities, prices and availability change on
              the floor without notice. The tag in the store is the final
              word.
            </p>
          </section>

          <section>
            <h2 className="display text-h3 text-lamp">Your privacy</h2>
            <p className="mt-3">
              How we handle your phone number and personal information,
              including our promise that mobile numbers and text consent are
              never shared with or sold to third parties for marketing, is
              spelled out in our{" "}
              <a
                href="/privacy"
                className="text-lamp underline underline-offset-4 hover:text-lq-press"
              >
                privacy policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="display text-h3 text-lamp">
              Changes to these terms
            </h2>
            <p className="mt-3">
              If we change these terms, we will post the new version here
              and update the effective date at the top. Staying on the text
              list or using the site after a change means you accept the
              updated terms.
            </p>
          </section>

          <section>
            <h2 className="display text-h3 text-lamp">Questions</h2>
            <p className="mt-3">
              Call us at {STORE.phone} or come by the store. We are at{" "}
              {STORE.address} in {STORE.city}, open Wednesday through
              Saturday 10am to 6pm and Sunday 12pm to 6pm.
            </p>
          </section>
        </div>
      </main>
      <section className="border-t border-night-3">
        <Reveal className="relative min-h-[260px] sm:min-h-[340px]">
          <Image
            src="/photos/IMG_8622.jpg"
            alt="Bed made up in a burnt orange comforter beside a five-drawer chest on the LQ floor"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </Reveal>
      </section>
      <SiteFooter />
    </>
  );
}
