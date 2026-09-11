// Verified store facts. Source: LQ Furniture's own Facebook posts and
// Google listing, checked August 2026.

export const STORE = {
  name: "LQ Furniture",
  legalName: "LQ, LLC",
  address: "589 North Coley Rd",
  city: "Tupelo",
  state: "MS",
  zip: "38801",
  // The number live on the store's Google Business Profile, confirmed by the
  // client September 2026. Three shapes, one source: the display string, the
  // dial link, and E.164 for structured data. Anything that needs the number
  // reads it from here, never a literal, so the site and the profile cannot
  // drift apart again.
  phone: "(662) 841-5959",
  phoneE164: "+16628415959",
  phoneHref: "tel:+16628415959",
  email: "businessoffice@lqfurniture.com",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=LQ+Furniture+589+N+Coley+Rd+Tupelo+MS+38801",
  tagline: "Limited Quantities + Unlimited Savings",
} as const;

// Central time. Day numbers follow Date.getDay(): 0 Sunday through 6 Saturday.
export const HOURS: ReadonlyArray<{
  days: string;
  open: number | null;
  close: number | null;
  label: string;
}> = [
  { days: "Monday", open: null, close: null, label: "Closed" },
  { days: "Tuesday", open: null, close: null, label: "Closed" },
  { days: "Wednesday", open: 10, close: 18, label: "10am to 6pm" },
  { days: "Thursday", open: 10, close: 18, label: "10am to 6pm" },
  { days: "Friday", open: 10, close: 18, label: "10am to 6pm" },
  { days: "Saturday", open: 10, close: 18, label: "10am to 6pm" },
  { days: "Sunday", open: 12, close: 18, label: "12pm to 6pm" },
];

// Indexed by Date.getDay()
export const HOURS_BY_DAY: ReadonlyArray<{ open: number | null; close: number | null }> = [
  { open: 12, close: 18 }, // Sun
  { open: null, close: null }, // Mon
  { open: null, close: null }, // Tue
  { open: 10, close: 18 }, // Wed
  { open: 10, close: 18 }, // Thu
  { open: 10, close: 18 }, // Fri
  { open: 10, close: 18 }, // Sat
];
