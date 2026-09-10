import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { getPost, POSTS } from "@/lib/posts";
import PostBody from "@/components/PostBody";
import { blogPostingSchema, breadcrumbSchema, jsonLdScript } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

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
  return {
    ...pageMetadata({
      title: post.title,
      description: post.description,
      path: `/blog/${post.slug}`,
      type: "article",
    }),
    openGraph: {
      type: "article",
      siteName: "LQ Furniture",
      locale: "en_US",
      url: `/blog/${post.slug}`,
      title: `${post.title} | LQ Furniture`,
      description: post.description,
      publishedTime: `${post.date}T12:00:00Z`,
      images: [{ url: post.image.src, alt: post.image.alt }],
    },
  };
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(
            blogPostingSchema({
              slug: post.slug,
              title: post.title,
              description: post.description,
              date: post.date,
              updated: post.updated,
              author: post.author,
              image: post.image.src,
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(
            breadcrumbSchema([
              { name: "Notes from the floor", path: "/blog" },
              { name: post.title, path: `/blog/${post.slug}` },
            ]),
          ),
        }}
      />
      <SiteHeader current="/blog" />
      <main>
        <article className="px-5 pt-16 sm:px-10 sm:pt-20 lg:px-16">
          <h1 className="display max-w-3xl text-h1 text-lamp">
            {post.title}
          </h1>
          {/* Byline and dates. Both Google and the answer engines weigh who
              stands behind a claim and how fresh it is, and a shop's own
              floor knowledge is a truthful thing to attribute to the shop. */}
          <p className="mt-3 text-[0.9375rem] italic text-fog">
            By {post.author} &middot;{" "}
            <time dateTime={post.date}>{fmtDate(post.date)}</time>
            {post.updated ? (
              <>
                {" "}&middot; Updated{" "}
                <time dateTime={post.updated}>{fmtDate(post.updated)}</time>
              </>
            ) : null}
          </p>
          <div className="mt-10 overflow-hidden">
            <Image
              src={post.image.src}
              alt={post.image.alt}
              width={2200}
              height={1650}
              sizes="(min-width: 1024px) 75vw, 100vw"
              priority
              className="drift window-photo max-h-[52svh] w-full object-cover"
            />
          </div>
          <div className="mt-12 max-w-2xl pb-16">
            <PostBody body={post.body} />
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
                className="label flex min-h-12 items-center btn-glow rounded-ctl bg-lq-green px-7 text-night hover:bg-lq-press active:translate-y-px"
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
