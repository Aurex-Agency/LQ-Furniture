import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import SmsForm from "@/components/SmsForm";

export const metadata: Metadata = {
  title: "Join the text list",
  description:
    "Join the LQ Furniture text list and hear about new truckloads and markdowns in Tupelo, MS before anyone else. About 4 to 6 texts a month. Reply STOP any time.",
};

export default function TextList() {
  return (
    <>
      <SiteHeader current="/text-list" />
      <main>
        <section className="pool px-5 pt-16 sm:px-10 sm:pt-20 lg:px-16">
          <p className="neon-box neon neon-on label inline-block rounded-ctl px-4 py-3">
            Sign up here
          </p>
          <h1 className="display mt-6 max-w-3xl text-display text-lamp">
            Hear about it before it&apos;s gone
          </h1>
          <p className="mt-6 max-w-xl text-body-lg text-fog">
            The floor doesn&apos;t hold your spot. When a truckload lands or a
            markdown hits, the text list hears first, and the best pieces
            never last the weekend.
          </p>
        </section>

        <section className="px-5 py-14 sm:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <SmsForm />
            </div>
            <div className="max-w-md lg:col-span-5 lg:col-start-8">
              <h2 className="display text-h3 text-lamp">What you&apos;ll get</h2>
              <ul className="mt-4 border-t border-night-3">
                <li className="border-b border-night-3 py-3 text-body text-lamp">
                  New truckload announcements
                </li>
                <li className="border-b border-night-3 py-3 text-body text-lamp">
                  Markdowns before they hit the floor tags
                </li>
                <li className="border-b border-night-3 py-3 text-body text-lamp">
                  About 4 to 6 texts a month, no more
                </li>
              </ul>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-fog">
                Reply STOP any time and the texts stop. That&apos;s the whole
                arrangement.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
