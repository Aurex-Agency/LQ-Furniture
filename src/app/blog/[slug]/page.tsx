import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { getPost, POSTS } from "@/lib/posts";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.description };
}

function fmtDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <SiteHeader current="/blog" />
      <main>
        <article className="pool px-5 pt-16 sm:px-10 sm:pt-20 lg:px-16">
          <p className="label text-fog">{fmtDate(post.date)}</p>
          <h1 className="display mt-4 max-w-3xl text-h1 text-lamp">
            {post.title}
          </h1>
          <div className="mt-10 max-w-2xl pb-16">
            {post.body.map((block, i) =>
              block.startsWith("## ") ? (
                <h2 key={i} className="display mt-10 text-h3 text-lamp">
                  {block.slice(3)}
                </h2>
              ) : (
                <p key={i} className="mt-5 text-body-lg leading-relaxed text-fog">
                  {block}
                </p>
              ),
            )}
          </div>
        </article>
        <section className="border-t border-night-3 px-5 py-14 sm:px-10 lg:px-16">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <p className="display max-w-xl text-h3 text-lamp">
              Want first crack at the next truckload?
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/text-list"
                className="label flex min-h-12 items-center rounded-ctl bg-lq-green px-7 text-night hover:bg-lq-press active:translate-y-px"
              >
                Join the text list
              </Link>
              <Link
                href="/blog"
                className="label flex min-h-12 items-center rounded-ctl border border-lamp/60 px-7 text-lamp hover:border-lamp hover:bg-night-2"
              >
                More notes
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
