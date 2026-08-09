import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/posts";

const BASE = "https://lqfurniture.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/the-floor", "/financing", "/text-list", "/visit", "/blog", "/contact", "/privacy"].map(
    (path) => ({
      url: `${BASE}${path}`,
      changeFrequency: (path === "/the-floor" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: path === "" ? 1 : path === "/the-floor" ? 0.9 : 0.7,
    }),
  );
  const posts = POSTS.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(`${p.date}T12:00:00Z`),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));
  return [...pages, ...posts];
}
