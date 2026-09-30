const PARTNERS = [
  { host: "synchrony.com", partner: "Synchrony" },
  { host: "towerloan.com", partner: "Tower Loans" },
  { host: "acima.com", partner: "Acima" },
  { host: "snapfinance.com", partner: "Snap" },
] as const;

// Match the destination, not a provider name appearing in a query string.
// Return only non-personal classification data to analytics.
export function classifyStoreLink(href: string, base: string): {
  event: "click_to_call" | "get_directions" | "financing_apply";
  partner?: string;
} | undefined {
  if (href.startsWith("tel:")) return { event: "click_to_call" };
  let url: URL;
  try { url = new URL(href, base); } catch { return; }
  if (url.protocol !== "https:" && url.protocol !== "http:") return;
  if ((url.hostname === "google.com" || url.hostname === "www.google.com") &&
      (url.pathname === "/maps" || url.pathname.startsWith("/maps/"))) {
    return { event: "get_directions" };
  }
  const match = PARTNERS.find(({ host }) => url.hostname === host || url.hostname.endsWith(`.${host}`));
  if (match) return { event: "financing_apply", partner: match.partner };
}
