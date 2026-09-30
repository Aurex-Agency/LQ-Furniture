import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import DepartmentLinks from "@/components/DepartmentLinks";
import FaqList from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { DEPARTMENTS, getDepartment } from "@/lib/departments";
import { FLOOR_ITEMS } from "@/lib/floor";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { STORE } from "@/lib/store";

export const dynamicParams = false;

export function generateStaticParams() {
  return DEPARTMENTS.map(({ slug }) => ({ department: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ department: string }> }): Promise<Metadata> {
  const { department } = await params;
  const item = getDepartment(department);
  if (!item) return {};
  return pageMetadata({ title: item.title, description: item.description, path: `/${item.slug}` });
}

export default async function DepartmentPage({ params }: { params: Promise<{ department: string }> }) {
  const { department } = await params;
  const item = getDepartment(department);
  if (!item) notFound();
  const photos = FLOOR_ITEMS.filter((photo) => photo.category === item.category);
  const hero = photos[0];

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "The floor", path: "/the-floor" }, { name: item.label, path: `/${item.slug}` }])} />
      <JsonLd data={faqSchema(item.faqs)} />
      <SiteHeader current="/the-floor" />
      <main>
        <section className="grid gap-8 px-5 py-12 sm:px-10 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-16">
          <div>
            <h1 className="display max-w-2xl text-h1 text-lamp">{item.title}</h1>
            <p className="mt-6 max-w-xl text-body-lg text-fog">{item.intro}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/visit" className="label inline-flex min-h-12 items-center btn-glow rounded-ctl bg-lq-green px-7 text-night hover:bg-lq-press">Plan a visit</Link>
              <a href={STORE.phoneHref} className="label inline-flex min-h-12 items-center rounded-ctl border border-lamp/60 px-7 text-lamp hover:bg-night-2">Call about the floor</a>
            </div>
          </div>
          {hero && <figure>
            <Image src={hero.src} alt={hero.alt} width={2200} height={1650} priority sizes="(min-width: 1024px) 50vw, 100vw" className="window-photo aspect-[4/3] w-full object-cover" />
            <figcaption className="mt-3 text-body text-fog">Photographed on our floor. Call to confirm current availability and pricing.</figcaption>
          </figure>}
        </section>
        <DepartmentLinks current={item.slug} />
        <section className="px-5 py-14 sm:px-10 lg:px-16">
          <div className="max-w-3xl space-y-10">
            {item.sections.map((section) => <div key={section.title}>
              <h2 className="display text-h2 text-lamp">{section.title}</h2>
              <p className="mt-4 text-body-lg leading-relaxed text-fog">{section.text}</p>
            </div>)}
          </div>
          {photos.length > 1 && <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {photos.slice(1).map((photo) => <figure key={photo.id}>
              <Image src={photo.src} alt={photo.alt} width={2200} height={1650} sizes="(min-width: 640px) 50vw, 100vw" className="window-photo aspect-[4/3] w-full object-cover" />
              <figcaption className="mt-3 text-body text-fog">Floor photo · selection changes</figcaption>
            </figure>)}
          </div>}
        </section>
        <section className="border-t border-night-3 px-5 py-14 sm:px-10 lg:px-16">
          <h2 className="display text-h2 text-lamp">Before you choose</h2>
          <div className="mt-6 max-w-3xl"><FaqList items={item.faqs} /></div>
          <ul className="mt-8 space-y-3">
            {item.guides.map((guide) => <li key={guide.slug}><Link href={`/blog/${guide.slug}`} className="inline-flex min-h-12 items-center text-body-lg text-lq-green underline underline-offset-4">{guide.title}</Link></li>)}
          </ul>
        </section>
        <section className="border-t border-night-3 px-5 py-14 sm:px-10 lg:px-16">
          <h2 className="display text-h2 text-lamp">Come compare in Tupelo</h2>
          <p className="mt-5 max-w-2xl text-body-lg text-fog">{STORE.address}, {STORE.city}, {STORE.state} {STORE.zip}. Open Wednesday through Saturday 10am to 6pm and Sunday noon to 6pm. Purchases happen in the store. Bring your measurements and call ahead about a particular piece.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={STORE.directionsUrl} className="label inline-flex min-h-12 items-center btn-glow rounded-ctl bg-lq-green px-7 text-night hover:bg-lq-press">Get directions</a>
            <Link href="/financing" className="label inline-flex min-h-12 items-center rounded-ctl border border-lamp/60 px-7 text-lamp hover:bg-night-2">Review financing options</Link>
            <Link href="/text-list" className="label inline-flex min-h-12 items-center px-4 text-lq-green underline underline-offset-4">Hear about new loads</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
