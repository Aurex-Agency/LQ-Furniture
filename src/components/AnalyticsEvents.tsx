"use client";

import { useEffect } from "react";
import { trackOutbound } from "@/lib/analytics";

// One delegated click listener for the actions that are plain links.
//
// Phone numbers appear on seven pages and directions on four. Wiring each one
// by hand would mean editing every page and would quietly miss the next link
// somebody adds. Listening once on the document catches all of them, including
// links rendered later, and keeps the tracking out of the page markup.
//
// Bound in the capture phase so the event is recorded even if something else
// stops propagation on the way up.
export default function AnalyticsEvents() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a");
      if (!link) return;

      const href = link.getAttribute("href") ?? "";
      if (!href) return;

      if (href.startsWith("tel:")) {
        trackOutbound("click_to_call", {
          link_location: pageArea(link),
          page_path: window.location.pathname,
        });
        return;
      }

      if (href.includes("google.com/maps")) {
        trackOutbound("get_directions", {
          link_location: pageArea(link),
          page_path: window.location.pathname,
        });
        return;
      }

      // Financing applications are the other outbound intent worth counting.
      // Matched by host so a changed campaign query string cannot break it.
      const financingHost = FINANCING_HOSTS.find((h) => href.includes(h.host));
      if (financingHost) {
        trackOutbound("financing_apply", {
          partner: financingHost.partner,
          page_path: window.location.pathname,
        });
      }
    }

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}

const FINANCING_HOSTS = [
  { host: "synchrony.com", partner: "Synchrony" },
  { host: "towerloan.com", partner: "Tower Loans" },
  { host: "acima.com", partner: "Acima" },
  { host: "snapfinance.com", partner: "Snap" },
] as const;

// Which part of the page the link sat in, so the store can tell a tap on the
// header number from one at the bottom of the financing page.
function pageArea(el: Element): string {
  if (el.closest("header")) return "header";
  if (el.closest("footer")) return "footer";
  return "body";
}
