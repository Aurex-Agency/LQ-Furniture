"use client";

import { useEffect } from "react";
import { classifyStoreLink } from "@/lib/link-events";
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

      const action = classifyStoreLink(href, window.location.origin);
      if (action) {
        trackOutbound(action.event, {
          link_location: pageArea(link),
          page_path: window.location.pathname,
          ...(action.partner ? { partner: action.partner } : {}),
        });
      }
    }

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}

// Which part of the page the link sat in, so the store can tell a tap on the
// header number from one at the bottom of the financing page.
function pageArea(el: Element): string {
  if (el.closest("header")) return "header";
  if (el.closest("footer")) return "footer";
  return "body";
}
