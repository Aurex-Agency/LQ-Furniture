# October 2026 SEO release

Four complete selection guides cover recliner clearance, dining layout, upholstery for households with pets and children, and mattress/support compatibility. Manufacturer references illustrate why model-specific instructions matter; they do not claim that a referenced brand is currently stocked.

Two category pages cover sofas/sectionals and dining, supported by multiple existing floor photographs in each category. Recliners and mattresses remain on the floor and in their dedicated guides rather than receiving category pages based on a single photograph. No price, stock, material or warranty is invented. The floor explicitly distinguishes photographs from live inventory.

Each floor piece can start an availability/dimensions inquiry. Only an existing public photo ID can prefill the contact form; arbitrary query values cannot become prefilled copy. The form retains its existing validation, spam field and delivery endpoint. Contact and SMS forms now prevent same-tick or accepted duplicate submissions and require an affirmative JSON success response before counting a lead. Failed attempts remain retryable.

GA4 and Metricool load only on Vercel production deployments, keeping local and branch-preview traffic out of reporting. Existing production event names remain. Delivered forms and text-list joins are separate from phone, directions and financing intent; none proves a sale. Existing production CSP and framing protections remain unchanged.

Next.js and eslint-config-next are patched to 16.4.3 with compatible transitive updates. The dependency audit is clean at implementation. Sitemap dates no longer claim every unchanged page was updated on every deployment.

Validation: ESLint, TypeScript, eight behavioral/content tests, production build and 24 rendered sitemap pages. Rendered checks include unique titles, one H1, canonicals, JSON-LD, preview analytics isolation, valid/invalid inquiry references, a legacy redirect and genuine 404s. Desktop and 390px mobile review confirmed category layout and the item-to-contact handoff. No real form was submitted. CI repeats the release checks.

Account follow-up: reconcile delivered inquiries with store records, investigate unassigned traffic and campaign tagging, and verify GBP/Bing details and current financing-provider terms. Those account and business-record actions are not completed by this PR. More category pages require sufficient maintainable evidence and inventory ownership.
