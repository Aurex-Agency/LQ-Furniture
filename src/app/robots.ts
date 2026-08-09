import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/style-guide", "/api/"] },
    sitemap: "https://lqfurniture.com/sitemap.xml",
  };
}
