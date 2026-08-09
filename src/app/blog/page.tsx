import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { POSTS } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Notes from the floor",
  description:
    "Notes from the LQ Furniture floor in Tupelo, MS: how warehouse pricing works, how to shop the floor, and what's moving through the building.",
};

function fmtDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function Blog() {
  return (
    <>
      <SiteHeader current="/blog" />
      <main>
        <section className="pool px-5 pt-16 sm:px-10 sm:pt-20 lg:px-16">
          <h1 className="display max-w-3xl text-display text-lamp">
            Notes from the floor
          </h1>
          <p className="mt-6 max-w-xl text-body-lg text-fog">
            How the warehouse works, how to shop it, and what&apos;s moving
            through the building. Written by the people who work here.
          </p>
        </section>

        <section className="px-5 py-14 sm:px-10 lg:px-16">
          <ul className="max-w-3xl border-t border-night-3">
            {POSTS.map((post) => (
              <li key={post.slug} className="border-b border-night-3 py-10">
                <p className="label text-fog">{fmtDate(post.date)}</p>
                <h2 className="display mt-3 text-h2 text-lamp">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="underline-offset-8 hover:underline"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-4 max-w-xl text-body text-fog">
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="label mt-6 inline-flex min-h-12 items-center text-lamp underline-offset-4 hover:underline"
                >
                  Read the note
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
