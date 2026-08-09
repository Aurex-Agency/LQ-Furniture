import Image from "next/image";
import Link from "next/link";

const LINKS = [
  { href: "/the-floor", label: "The floor" },
  { href: "/financing", label: "Financing" },
  { href: "/visit", label: "Visit" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export default function SiteHeader({ current }: { current?: string }) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-x-6 border-b border-night-3 px-5 py-4 sm:px-10 lg:px-16">
      <Link href="/" className="order-1">
        <Image
          src="/brand/lq-logo.png"
          alt="LQ Furniture"
          width={712}
          height={548}
          priority
          className="h-11 w-auto sm:h-12"
        />
      </Link>
      <nav
        aria-label="Pages"
        className="order-3 flex w-full items-center gap-x-6 gap-y-0 sm:order-2 flex-wrap sm:ml-auto sm:w-auto sm:pr-8"
      >
        {LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            aria-current={current === l.href ? "page" : undefined}
            className={`label flex min-h-12 items-center border-b-2 pt-0.5 ${
              current === l.href
                ? "border-lq-green text-lamp"
                : "border-transparent text-fog hover:text-lamp"
            }`}
          >
            {l.label}
          </Link>
        ))}
      </nav>
      <Link
        href="/text-list"
        className="label order-2 flex min-h-12 items-center rounded-ctl bg-lq-green px-5 text-night hover:bg-lq-press active:translate-y-px sm:order-3"
      >
        Join the text list
      </Link>
    </header>
  );
}
