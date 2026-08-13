import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { STORE } from "@/lib/store";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How LQ Furniture in Tupelo, MS handles your phone number, text message consent, and personal information.",
};

export default function Privacy() {
  return (
    <>
    <SiteHeader />
    <main className="px-5 py-14 sm:px-10 lg:px-16">
      <header>
        <h1 className="display max-w-3xl text-h1 text-lamp">
          Privacy policy
        </h1>
        <p className="mt-4 label text-fog">
          Effective August 13, 2026
        </p>
      </header>

      <div className="mt-12 max-w-2xl space-y-10 text-body text-lamp">
        <section>
          <h2 className="display text-h3 text-lamp">Who we are</h2>
          <p className="mt-3">
            LQ Furniture, a trade name of {STORE.legalName}, is a furniture
            store at {STORE.address}, {STORE.city}, {STORE.state} {STORE.zip}.
            You can reach us at {STORE.phone} or {STORE.email}. This policy
            covers this website and our text message program.
          </p>
        </section>

        <section>
          <h2 className="display text-h3 text-lamp">What we collect</h2>
          <p className="mt-3">
            If you join our text list, we collect the mobile number you give
            us, plus a record of your consent: the version of the consent
            language you agreed to, the date and time, the page you signed up
            on, your IP address, and the state of the consent checkbox. We
            keep that record so we can prove you asked for the texts and so we
            can honor your opt-out.
          </p>
          <p className="mt-3">
            If you send a message through the contact page, we collect the
            name, phone number, and message you give us so we can call you
            back. We use that information to answer you and for nothing
            else.
          </p>
          <p className="mt-3">
            We do not sell anything online, so this site never collects
            payment information.
          </p>
        </section>

        <section>
          <h2 className="display text-h3 text-lamp">Cookies and tracking</h2>
          <p className="mt-3">
            This website does not use tracking cookies, advertising pixels,
            or third-party analytics to follow you around the web. We don&apos;t
            build an ad profile on you, because we don&apos;t collect the
            browsing data that would take. If that ever changes, we&apos;ll
            update this policy first and say so plainly.
          </p>
        </section>

        <section>
          <h2 className="display text-h3 text-lamp">
            How we protect your information
          </h2>
          <p className="mt-3">
            Every page on this site, including the sign-up form, is served
            over an encrypted HTTPS connection, so anything you submit is
            encrypted in transit. Consent records and contact submissions
            are stored within our hosting provider&apos;s secured systems, and
            access is limited to the people at LQ Furniture and our website
            operator who need it to run the store and the text program.
          </p>
        </section>

        <section>
          <h2 className="display text-h3 text-lamp">
            Text messages and your consent
          </h2>
          <p className="mt-3">
            Our text list sends recurring automated marketing messages, about
            4 to 6 a month. Consent is not a condition of purchase. Message
            and data rates may apply.
          </p>
          <p className="mt-3">
            You can leave the list at any time. Reply STOP, QUIT, REVOKE, OPT
            OUT, CANCEL, UNSUBSCRIBE, or END to any message, tell us in the
            store, or call us at {STORE.phone}. However you tell us, we will
            honor it, and no later than 10 business days after you ask. Reply
            HELP to any message for help.
          </p>
        </section>

        <section>
          <h2 className="display text-h3 text-lamp">
            What we never do with your number
          </h2>
          <p className="mt-3">
            No mobile information will be shared with third parties or
            affiliates for marketing or promotional purposes. All the above
            categories exclude text messaging originator opt-in data and
            consent; this information will not be shared with or sold to
            any third parties.
          </p>
          <p className="mt-3">
            Your number is used for the LQ Furniture text program and
            nothing else. Service providers that deliver our texts may
            process your number solely to send messages on our behalf, and
            are not permitted to use it for their own purposes.
          </p>
        </section>

        <section>
          <h2 className="display text-h3 text-lamp">Terms of the program</h2>
          <p className="mt-3">
            The full terms of the text message program, including message
            frequency, opt-out keywords, and carrier disclosures, are in
            our{" "}
            <a
              href="/terms"
              className="text-lamp underline underline-offset-4 hover:text-lq-press"
            >
              terms and conditions
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="display text-h3 text-lamp">Questions</h2>
          <p className="mt-3">
            Call us at {STORE.phone} or come by the store. We are at{" "}
            {STORE.address} in {STORE.city}, open Wednesday through Saturday
            10am to 6pm and Sunday 12pm to 6pm.
          </p>
        </section>
      </div>

    </main>
    <section className="border-t border-night-3">
      <Reveal className="relative min-h-[260px] sm:min-h-[340px]">
        <Image
          src="/photos/IMG_8606.jpg"
          alt="The accessories aisle at LQ Furniture, crate tables of lamps and decor under string lights"
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
