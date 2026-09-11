// The weekly drop: the photos that go out with the SMS blast each week.
//
// This is the one file that changes on drop day. The page at /weekly-drop
// renders whatever is here, so updating the week means replacing PHOTOS and
// bumping WEEK_OF. The full procedure, including how the photos get from a
// Google Drive folder into public/photos/drops, is in docs/WEEKLY-DROP.md.
//
// ALT TEXT FOLLOWS THE STORE'S NAMING RULE (see src/lib/floor.ts): describe
// only what the photograph proves. Colour, upholstery where it is plainly
// fabric, and pieces you can count. No wood species, never "leather", no
// implied matching set. These go out to customers; a wrong claim here is the
// same wrong claim the owner already corrected once.

export type DropPhoto = {
  src: string;
  alt: string;
};

export type Drop = {
  // ISO date of the Monday the drop was posted. Drives the dateline and the
  // "updated" signal for crawlers.
  weekOf: string;
  // Optional line from the store about this week's load. Left out when there
  // is nothing true to say; never filled with invented hype.
  note?: string;
  photos: DropPhoto[];
};

export const CURRENT_DROP: Drop = {
  weekOf: "2026-09-11",
  photos: [],
};

// Long-form date for display, rendered in Central time so it matches the
// store's own week rather than the server's timezone.
export function dropDateLabel(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${iso}T12:00:00Z`));
}
