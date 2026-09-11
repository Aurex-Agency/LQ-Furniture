import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";

// Every entry carries a lastModified date. Without one a crawler has no signal
// about freshness and falls back to guessing, which on a small site means the
// floor page gets recrawled no more often than the privacy policy.
//
// The build date is an honest answer for pages whose content is compiled in:
// they genuinely change when the site is redeployed.
const BUILD_DATE = new Date();

type Entry = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

// /style-guide is deliberately absent: it is an internal brand reference,
// noindexed at the page level and disallowed in robots.
const PAGES: Entry[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/the-floor", changeFrequency: "weekly", priority: 0.9 },
  // Not in the navigation: the way in is the weekly text message. Still a
  // real public page with fresh local content, so it belongs here.
  { path: "/weekly-drop", changeFrequency: "weekly", priority: 0.6 },
  { path: "/visit", changeFrequency: "monthly", priority: 0.8 },
  { path: "/financing", changeFrequency: "monthly", priority: 0.8 },
  { path: "/text-list", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog", changeFrequency: "monthly", priority: 0.6 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = PAGES.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: BUILD_DATE,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  const posts = POSTS.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(`${p.updated ?? p.date}T12:00:00Z`),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...pages, ...posts];
}
