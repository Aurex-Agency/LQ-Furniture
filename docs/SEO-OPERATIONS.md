# SEO operations

Implemented September 30, 2026 on the local SEO growth branch.

## Website changes

Five stable department URLs support commercial searches: `/sectionals-sofas`, `/recliners`, `/bedroom-furniture`, `/dining-room-furniture` and `/mattresses`. Real floor photos illustrate the departments without claiming live stock. Four new buying guides link to the departments, store visit page and contact actions. Existing URLs remain intact.

Before updating photos, verify names and materials against actual tags. Confirm stock and prices with the floor team. Do not add Product offers or review ratings without accurate underlying data. Keep department pages useful when a particular piece sells.

The sitemap includes every new route. General pages without reliable editorial dates omit lastModified rather than claiming a change on every deployment. Article dates change only when the content materially changes.

## Measurement

| Event | Meaning | Not evidence of |
|---|---|---|
| click_to_call | Visitor selected a telephone link | A connected call or sale |
| get_directions | Visitor selected a Google Maps directions link | An actual store visit |
| financing_apply | Visitor selected a provider application link | A completed or approved application |
| generate_lead | Contact endpoint returned success | A completed furniture purchase |
| join_text_list | SMS opt-in endpoint returned success | A subsequent text delivery or sale |

All five events were visible in GA4 Recent events and were marked as key events in the LQ Furniture Tupelo property on September 30, 2026. The saved Key events table was verified. This account configuration is already active, separate from this branch. Historical reports do not become a retrospective conversion baseline simply because an event is marked today. Keep calls and directions separate from completed form leads when reporting.

Run `node --test tests/link-events.test.mjs` on Node 24 or newer to check destination classification. Run `npm run lint` and `npm run build` before deployment. Do not send live test form submissions or finance applications to verify layout.

## Business Profile and store workflow

These require the actual profile or staff operations and are not created by a Git push:

- Confirm the real business category, phone, address, regular hours and holiday hours in Google Business Profile.
- Add `utm_source=google&utm_medium=organic&utm_campaign=gbp` to the profile website link while keeping site canonical URLs clean.
- Publish genuine floor photos and useful stock updates weekly. Verify availability before making an in-stock claim.
- Ask all customers consistently for an honest review without incentives or screening for positive responses.
- Ask at checkout how the shopper first found the store and what prompted the trip; track the answer in the existing sales system.
- Compare a consistent 28-day baseline of nonbranded GSC clicks, organic landing sessions, distinct store-intent sessions and attributed store sales.

No outreach messages, customer review requests, paid link purchases or recurring automations are sent by this implementation.

## Financing and editorial corrections

Application links remain the store-provided links. Provider descriptions now direct shoppers to current agreement terms instead of promising no checks, guaranteed approval or universally free financing. Public sources checked September 30, 2026:

- https://www.acima.com/en/support/
- https://snapfinance.com/partner-lp

Acima describes lease purchase costs and conditions. Snap says it obtains consumer reporting information. Confirm the actual offer for a customer's purchase; do not infer merchant-specific promotional terms from a general provider page.

Transport and humidity articles now avoid universal vehicle-fit tables, unsupported climate prescriptions and DIY repair guarantees. Mattress copy no longer attributes medical benefits to adjustable bases. Existing article URLs are retained.

## Deployment and follow-up

This branch is intended for review before a production merge. After deployment, confirm the canonical URLs return 200, the legacy redirects still reach the appropriate page, the sitemap contains the nine new pages, and GA4 receives ordinary real-user events. Search Console will discover new sitemap URLs on recrawl; indexing is not guaranteed by submission.

The full account-data research report and editorial source drafts remain local under `docs/seo/`; they are excluded from Git because they contain account performance data. The website content is maintained in `src/lib/seo-posts.ts`, `src/lib/posts.ts` and `src/lib/departments.ts`.

## Validation completed

ESLint and the two destination-classification tests passed. The production build passed with `npm run build -- --webpack`; Turbopack could not bind its CSS-worker port in the local environment. All nine new routes returned 200 with their canonical URLs, sitemap entries and parseable JSON-LD. Unknown department URLs returned 404. The four specific mobile legacy URLs returned 301 to their intended destinations. Desktop and 390px mobile layouts were reviewed.
