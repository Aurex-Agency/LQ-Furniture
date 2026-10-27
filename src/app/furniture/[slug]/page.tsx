import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import JsonLd from "@/components/JsonLd";
import { FURNITURE_CATEGORIES } from "@/lib/furniture-categories";
import { FLOOR_ITEMS } from "@/lib/floor";
import { STORE } from "@/lib/store";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return FURNITURE_CATEGORIES.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = FURNITURE_CATEGORIES.find((item) => item.slug === slug);
  if (!category) return {};
  return pageMetadata({ title: category.title, description: category.description, path: `/furniture/${slug}` });
}
export default async function FurnitureCategory({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = FURNITURE_CATEGORIES.find((item) => item.slug === slug);
  if (!category) notFound();
  const items = FLOOR_ITEMS.filter((item) => item.category === category.floorCategory);
  return <>
    <JsonLd data={breadcrumbSchema([{ name: "The floor", path: "/the-floor" }, { name: category.title, path: `/furniture/${slug}` }])} />
    <SiteHeader current="/the-floor" />
    <main>
      <section className="px-5 py-12 sm:px-10 lg:px-16">
        <Link href="/the-floor" className="label inline-flex min-h-12 items-center text-lq-green underline">Explore the whole floor</Link>
        <h1 className="display mt-5 max-w-4xl text-display text-lamp">{category.title}</h1>
        <p className="mt-6 max-w-2xl text-body-lg text-fog">{category.description}</p>
        <p className="mt-4 max-w-2xl text-body text-fog">Floor photographs are examples, not live inventory. Confirm availability, dimensions, condition and price with the store.</p>
        <div className="mt-7 flex flex-wrap gap-4">
          <a href={STORE.phoneHref} className="label inline-flex min-h-12 items-center rounded-ctl bg-lq-green px-6 text-night">Call about availability</a>
          <Link href="/visit" className="label inline-flex min-h-12 items-center rounded-ctl border border-fog px-6 text-lamp">Hours and directions</Link>
        </div>
      </section>
      <section className="grid gap-8 px-5 pb-14 sm:grid-cols-2 sm:px-10 lg:px-16" aria-label="Photographed floor examples">
        {items.map((item) => <figure key={item.id}>
          <Image src={item.src} alt={item.alt} width={1200} height={900} sizes="(min-width: 640px) 50vw, 100vw" className="aspect-[4/3] w-full object-cover" />
          <figcaption className="mt-4">
            <h2 className="display text-h3 text-lamp">{item.name}</h2>
            <Link href={`/contact?item=${item.id}#contact-form`} className="inline-flex min-h-12 items-center text-lq-green underline">Ask about this piece</Link>
          </figcaption>
        </figure>)}
      </section>
      <section className="grid gap-10 border-t border-night-3 px-5 py-14 sm:grid-cols-2 sm:px-10 lg:px-16" aria-label="Planning your purchase">
        {category.sections.map((section) => <div key={section.heading}>
          <h2 className="display text-h2 text-lamp">{section.heading}</h2>
          <p className="mt-5 max-w-2xl text-body text-fog">{section.body}</p>
        </div>)}
      </section>
      <section className="border-t border-night-3 px-5 py-14 sm:px-10 lg:px-16">
        <h2 className="display text-h2 text-lamp">Bring better questions to the floor</h2>
        <ul className="mt-6 space-y-3">{category.guides.map((guide) => <li key={guide.slug}><Link href={`/blog/${guide.slug}`} className="inline-flex min-h-12 items-center text-lq-green underline">{guide.label}</Link></li>)}</ul>
        <p className="mt-7 text-body text-fog">Visit {STORE.name} at {STORE.address}, {STORE.city}. Check <Link href="/visit" className="text-lq-green underline">store hours and directions</Link> before your trip.</p>
      </section>
    </main>
    <SiteFooter />
  </>;
}
