// GA4 event tracking.
//
// Every call is a no-op unless gtag has actually loaded. That matters more
// than it sounds: this audience arrives from Facebook on phones, ad and
// tracker blockers are common, and a blocked analytics script must never take
// a form submission or a phone call down with it. Nothing here throws, and
// nothing here is awaited by anything a visitor is waiting on.

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID = "G-DZ7R9W7GJH";

// The conversions that matter for a furniture store people drive to. Calls and
// directions are the ones the owner feels; the forms are the ones that build
// the list.
export type AnalyticsEvent =
  | "generate_lead" // contact form delivered
  | "join_text_list" // SMS opt-in delivered
  | "click_to_call"
  | "get_directions"
  | "financing_apply";

export function track(
  event: AnalyticsEvent,
  params: Record<string, string | number | boolean> = {},
): void {
  if (typeof window === "undefined") return;
  try {
    window.gtag?.("event", event, params);
  } catch {
    // Analytics must never surface to a visitor.
  }
}

// Click-to-call and directions are links, and a link can navigate before the
// beacon leaves. GA4's transport uses sendBeacon, which survives the unload,
// so no artificial delay is needed and the tap stays instant.
export function trackOutbound(
  event: AnalyticsEvent,
  params: Record<string, string | number | boolean> = {},
): void {
  track(event, { ...params, transport_type: "beacon" });
}
