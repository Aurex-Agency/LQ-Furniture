// The canonical origin, in one place.
//
// It was previously written out by hand in sitemap.ts and robots.ts, which is
// how a migration ends up with a sitemap on one host and canonicals on
// another. Everything that needs an absolute URL reads it from here.
//
// Apex, not www: www redirects to apex at the platform edge, so every emitted
// canonical, sitemap entry, and Open Graph URL points at the destination
// rather than at a redirect.
//
// NEXT_PUBLIC_SITE_URL lets a preview deployment describe itself accurately
// instead of claiming to be production; it is not set in production, where the
// apex is the answer.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://lqfurniture.com";

// Builds an absolute URL from a site-relative path.
export function absoluteUrl(path = "/"): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
