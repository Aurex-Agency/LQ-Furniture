import { HOURS, STORE } from "@/lib/store";
import { POSTS } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";
import { FINANCING_PARTNERS } from "@/lib/financing";

// /llms.txt
//
// An honest note on what this is worth: Google has stated plainly that
// llms.txt is not used by Google Search and neither helps nor hurts
// visibility there. It is served because some non-Google AI systems do read
// it, and because the cost is one generated text file.
//
// It is generated from the same constants the site renders, so it cannot
// drift into describing a store with different hours than the one on /visit.

export const dynamic = "force-static";

export function GET() {
  const hours = HOURS.filter((h) => h.label !== "Closed")
    .map((h) => `${h.days} ${h.label}`)
    .join(", ");

  const body = `# LQ Furniture

> A furniture warehouse at ${STORE.address}, ${STORE.city}, ${STORE.state} ${STORE.zip}.
> ${STORE.tagline}. Sectionals, dining, bedroom, recliners, lamps and
> mattresses bought by the truckload and priced to leave. Nothing is sold
> online; the website shows what is on the floor, and the store is where
> furniture changes hands.

## Key facts

- Address: ${STORE.address}, ${STORE.city}, ${STORE.state} ${STORE.zip}
- Phone: ${STORE.phone}
- Hours: ${hours}. Closed Monday and Tuesday.
- Serves Tupelo, Lee County and North Mississippi
- The tag price is the price. No haggling, no online ordering.
- Limited quantities: stock usually cannot be reordered, and the floor turns
  over every week.

## Financing

${FINANCING_PARTNERS.map(
  (p) => `- ${p.name} (${p.kind}): ${p.headline}. ${p.detail}`,
).join("\n")}

## Pages

- [Home](${SITE_URL}/): what the store is and what is on the floor now
- [The floor](${SITE_URL}/the-floor): current inventory by category
- [Financing](${SITE_URL}/financing): the four ways to finance and how to apply
- [Visit](${SITE_URL}/visit): address, hours, and directions
- [Contact](${SITE_URL}/contact): phone and message form
- [Text list](${SITE_URL}/text-list): new truckload and markdown alerts
- [Notes from the floor](${SITE_URL}/blog): buying guides written by the store

## Guides

${POSTS.map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug}): ${p.description}`).join("\n")}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
