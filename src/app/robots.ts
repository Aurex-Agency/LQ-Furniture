import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // The wildcard rule already permits the AI crawlers, but a crawler that
  // finds its own name uses that group instead of the wildcard, so naming
  // them makes the permission explicit and survives any later tightening of
  // the wildcard. These are the crawlers behind ChatGPT, Claude and
  // Perplexity answers, which is where a growing share of "furniture store
  // in Tupelo" style questions now get answered.
  //
  // Training-only crawlers are deliberately not listed: this is about being
  // quotable in AI search, not about feeding model training.
  const AI_SEARCH_CRAWLERS = [
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "ClaudeBot",
    "PerplexityBot",
    "Google-Extended",
  ];

  const disallow = ["/style-guide", "/api/"];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // /style-guide also carries a page-level noindex. Disallow alone is
        // not enough: a disallowed URL can still be indexed from an external
        // link, because the crawler never fetches the page to see the
        // noindex.
        disallow,
      },
      ...AI_SEARCH_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow,
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
