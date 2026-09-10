import type { Metadata } from "next";

// Builds a page's metadata from its title, description, and path.
//
// Next merges metadata one top-level key at a time, so a page that declares
// its own `openGraph` replaces the root object outright rather than adding to
// it: siteName, type and locale would silently disappear from that page. This
// helper rebuilds the whole object every time so no page can lose them, and
// keeps the canonical and the Open Graph URL from drifting apart.
//
// Paths are site-relative. metadataBase in the root layout makes them absolute
// in the rendered tags.
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}): Metadata {
  // The root layout's title template does not apply to the root page: a
  // layout and the page beside it are the same route segment, so the homepage
  // has to carry the brand in its own title. Pages that already name the brand
  // must not have it appended twice.
  const social = title.includes("LQ Furniture") ? title : `${title} | LQ Furniture`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      siteName: "LQ Furniture",
      locale: "en_US",
      url: path,
      title: social,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: social,
      description,
    },
  };
}
