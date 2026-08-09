import Image from "next/image";
import Link from "next/link";
import { STORE } from "@/lib/store";

export default function SiteFooter() {
  return (
    <footer className="border-t border-night-3 px-5 py-12 sm:px-10 lg:px-16">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/brand/lq-logo.png"
            alt="LQ Furniture"
            width={712}
            height={548}
            className="h-10 w-auto"
          />
          <p className="mt-4 max-w-xs text-[0.9375rem] leading-relaxed text-fog">
            A furniture warehouse in Tupelo, Mississippi. Limited Quantities +
            Unlimited Savings.
          </p>
        </div>
        <div>
          <p className="label text-fog">Find us</p>
          <address className="mt-3 text-[0.9375rem] not-italic leading-relaxed text-lamp">
            {STORE.address}
            <br />
            {STORE.city}, {STORE.state} {STORE.zip}
          </address>
          <a
            href={STORE.phoneHref}
            className="mt-2 inline-flex min-h-12 items-center text-[0.9375rem] text-lamp underline-offset-4 hover:underline"
          >
            {STORE.phone}
          </a>
        </div>
        <div>
          <p className="label text-fog">Hours</p>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-lamp">
            Wednesday to Saturday, 10am to 6pm
            <br />
            Sunday, 12pm to 6pm
            <br />
            Closed Monday and Tuesday
          </p>
        </div>
        <div>
          <p className="label text-fog">Pages</p>
          <ul className="mt-3 space-y-2">
            {[
              { href: "/the-floor", label: "The floor" },
              { href: "/financing", label: "Financing" },
              { href: "/text-list", label: "Join the text list" },
              { href: "/visit", label: "Visit the store" },
              { href: "/blog", label: "Notes from the floor" },
              { href: "/contact", label: "Contact us" },
              { href: "/privacy", label: "Privacy policy" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-flex min-h-12 items-center text-[0.9375rem] text-lamp underline-offset-4 hover:underline"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="label mt-12 text-fog">
        Nothing on this site is for sale online. The store is the store.
      </p>
    </footer>
  );
}
