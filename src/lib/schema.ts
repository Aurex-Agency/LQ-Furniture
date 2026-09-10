import { HOURS_BY_DAY, STORE } from "@/lib/store";
import { absoluteUrl, SITE_URL } from "@/lib/site";

// Structured data, built from the verified facts in store.ts.
//
// The discipline here matches that file: assert only what is known. Three
// fields Google likes are deliberately absent because nobody has supplied a
// trustworthy value yet, and a confident wrong answer is worse than silence:
//
//   geo         needs the exact pin from the Google Business Profile.
//               Geocoding "589 N Coley Rd" returns street-level matches
//               several kilometres apart, which would misplace the store.
//   sameAs      needs the real Facebook and Google Business Profile URLs.
//   priceRange  needs the store's own answer, not a guess.
//
// Add them to STORE and thread them through here once the client confirms.

const ORG_ID = `${SITE_URL}/#store`;

const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

function pad(h: number): string {
  return `${String(h).padStart(2, "0")}:00`;
}

// Derived from HOURS_BY_DAY rather than written out again, so the schema can
// never drift from the hours the site actually displays. Days that share an
// open/close pair are grouped into one specification.
function openingHours() {
  const groups = new Map<string, { open: number; close: number; days: string[] }>();
  HOURS_BY_DAY.forEach((h, day) => {
    if (h.open === null || h.close === null) return;
    const name = DAY_NAMES[day];
    if (!name) return;
    const key = `${h.open}-${h.close}`;
    const group = groups.get(key);
    if (group) group.days.push(name);
    else groups.set(key, { open: h.open, close: h.close, days: [name] });
  });
  return [...groups.values()].map(({ open, close, days }) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: days,
    opens: pad(open),
    closes: pad(close),
  }));
}

export function storeSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",
    "@id": ORG_ID,
    name: STORE.name,
    legalName: STORE.legalName,
    slogan: STORE.tagline,
    url: SITE_URL,
    telephone: "+1-662-841-5959",
    email: STORE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: STORE.address,
      addressLocality: STORE.city,
      addressRegion: STORE.state,
      postalCode: STORE.zip,
      addressCountry: "US",
    },
    // Absolute URLs: a relative path here is silently discarded by consumers.
    image: [absoluteUrl("/opengraph-image.jpg")],
    logo: absoluteUrl("/brand/lq-logo.png"),
    hasMap: STORE.directionsUrl,
    areaServed: [
      { "@type": "City", name: "Tupelo" },
      { "@type": "AdministrativeArea", name: "Lee County, Mississippi" },
      { "@type": "AdministrativeArea", name: "North Mississippi" },
    ],
    currenciesAccepted: "USD",
    openingHoursSpecification: openingHours(),
  };
}

// A breadcrumb trail for interior pages. The home crumb is always first.
export function breadcrumbSchema(
  trail: ReadonlyArray<{ name: string; path: string }>,
) {
  const items = [{ name: "Home", path: "/" }, ...trail];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function blogPostingSchema(post: {
  slug: string;
  title: string;
  description: string;
  date: string;
  image?: string;
}) {
  const url = absoluteUrl(`/blog/${post.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#post`,
    headline: post.title,
    description: post.description,
    datePublished: `${post.date}T12:00:00Z`,
    dateModified: `${post.date}T12:00:00Z`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    // The store itself is the author and publisher. There is no individual
    // byline on these posts, and inventing one would be a false E-E-A-T
    // signal, so the organization carries the authorship.
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    ...(post.image ? { image: [absoluteUrl(post.image)] } : {}),
  };
}

// Google retired FAQ rich results for all sites in May 2026, so this no longer
// earns a SERP feature. It is kept because answer engines still read it, and
// it costs nothing.
export function faqSchema(faqs: ReadonlyArray<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

// Single place that renders JSON-LD, so escaping is handled once. The `<`
// escape prevents a stray sequence in content from closing the script tag.
export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
