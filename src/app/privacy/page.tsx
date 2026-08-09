import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { STORE } from "@/lib/store";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How LQ Furniture in Tupelo, MS handles your phone number, text message consent, and personal information.",
};

export default function Privacy() {
  return (
    <main className="px-5 py-14 sm:px-10 lg:px-16">
      <header>
        <Link href="/">
          <Image
            src="/brand/lq-logo.png"
            alt="LQ Furniture"
            width={712}
            height={548}
            className="h-12 w-auto"
          />
        </Link>
        <h1 className="display mt-10 max-w-3xl text-h1 text-lamp">
          Privacy policy
        </h1>
        <p className="mt-4 label text-fog">
          Effective August 7, 2026
        </p>
      </header>

      <div className="mt-12 max-w-2xl space-y-10 text-body text-lamp">
        <section>
          <h2 className="display text-h3 text-lamp">Who we are</h2>
          <p className="mt-3">
            LQ Furniture is a furniture store at {STORE.address}, {STORE.city},{" "}
            {STORE.state} {STORE.zip}. You can reach us at {STORE.phone}. This
            policy covers this website and our text message program.
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
            We do not sell anything online, so this site never collects
            payment information.
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
            Mobile phone numbers and text messaging consent are not shared
            with or sold to third parties or affiliates for their marketing
            purposes. Your number is used for the LQ Furniture text program
            and nothing else. Service providers that deliver our texts may
            process your number solely to send messages on our behalf.
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

      <footer className="mt-16 border-t border-night-3 pt-8">
        <Link
          href="/"
          className="label text-fog underline-offset-4 hover:text-lamp"
        >
          Back to the homepage
        </Link>
      </footer>
    </main>
  );
}
