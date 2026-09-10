import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // /style-guide also carries a page-level noindex. Disallow alone is not
      // enough: a disallowed URL can still be indexed from an external link,
      // because the crawler never fetches the page to see the noindex.
      disallow: ["/style-guide", "/api/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
