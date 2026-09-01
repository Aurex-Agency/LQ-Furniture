// The text list sign-up's one non-required question. Answers ride along to
// the CRM so LQ can tell a first-timer from a regular. Keep the values and
// the order in sync with whatever the CRM maps them to.

export const TENURE_OPTIONS = [
  "Just found y'all",
  "Been in once or twice",
  "Couple years now",
  "Since way back",
] as const;

export type Tenure = (typeof TENURE_OPTIONS)[number];

export function isTenure(value: unknown): value is Tenure {
  return (
    typeof value === "string" &&
    (TENURE_OPTIONS as readonly string[]).includes(value)
  );
}
