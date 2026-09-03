# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js 16 App Router (client approved the upgrade from 15), TypeScript strict, Tailwind v4, deployed on Vercel. No additional runtime dependencies without asking first: no animation library, no UI component library, no icon library, no state management library.

## Users

North Mississippi families, roughly ages 28 to 60, arriving on mobile from Facebook. Many use financing. They are shopping for real furniture at warehouse prices and will complete the purchase in the physical showroom in Tupelo, Mississippi. Rural mobile connections are the norm, so pages must be light and fast.

## Product Purpose

Marketing site for LQ Furniture, a high-volume furniture warehouse in Tupelo, Mississippi. No e-commerce, ever. The site exists to do three things: build local SEO, capture SMS opt-ins into a text campaign, and get shoppers pre-approved for financing before they walk into the showroom. Success is measured in text-list signups, financing pre-approvals, and showroom foot traffic, not online sales.

## Positioning

A true warehouse operation. Inventory moves fast, quantities are limited, and prices reflect volume buying. Their real tagline is "Limited Quantities + Unlimited Savings." The urgency is factual, not manufactured: when a set sells out it is gone. Neighboring stores cannot truthfully copy the warehouse floor, the turnover, or the pricing.

## Operating Context

Shoppers browse on a phone, often from a Facebook ad or post, then drive to the showroom. Financing pre-approval happens before or during the visit. The SMS list is the retention channel: about 4 to 6 messages a month announcing new truckloads and markdowns. In-store signage already says "Financing available" and "100% warranties," and the showroom walls carry the brand green striping visible in the photo set.

## Capabilities and Constraints

- No e-commerce. Never imply anything on the site can be bought online.
- SMS opt-in is subject to TCPA and A2P 10DLC carrier rules. The compliance copy in the client brief (seller name, recurring-message authorization, "Consent is not a condition of purchase," msg and data rates, frequency, STOP/HELP) is binding and must not be shortened or restructured for conversion. Every submission logs consent text version, timestamp, IP, page URL, and checkbox state.
- /privacy must state that mobile numbers and consent are not shared or sold to third parties for marketing.
- Performance budget: LCP under 2.0s on 4G, CLS under 0.05, first-load JS under 120KB gzipped.
- Store facts (verified against the store's own Facebook posts and Google listing, Aug 2026): 589 North Coley Rd, Tupelo, MS 38801. Phone (662) 841-5959. Open Wednesday through Saturday 10am to 6pm, Sunday 12pm to 6pm, closed Monday and Tuesday. Existing domain: lqfurniture.com.
- Financing partners (client-confirmed, links in src/lib/financing.ts, same links as the in-store QR codes): Synchrony (up to 12 months no interest over $2,000, shorter windows below), Tower Loans (12 months no interest, occasional limited-time 24-month promos), Acima (90 days no interest, no credit check), Snap (100 days no interest, no credit check).
- SMS platform: GoHighLevel. Text list sign-ups POST from /api/sms-optin to a GHL inbound webhook whose URL lives in the GHL_SMS_WEBHOOK_URL environment variable (never in the repo, which is public). The sign-up collects first name, mobile number, and an optional "how long have you shopped with us" answer alongside the consent record.
- Analytics: Metricool, loaded sitewide from the root layout with next/script (afterInteractive) using the client's tracking hash. It is the only third party the site loads, and the privacy policy's cookies section must keep matching whatever is actually running.
- Delivery is NOT an LQ service. Approved wording, from the store: "We have partnered with a 3rd party vendor to provide you delivery services." Delivery is handled by that vendor and is not included in the tag price. Never write copy implying LQ delivers.
- Mattresses: approved wording, from the store: "We carry most of your favorite name brands at discounted prices." Do not show mattress photos in which a major national brand's logo is readable. The existing sleep-gallery photos are cleared by the owner and stay.
- Product naming rule, set by the owner in August 2026 after he marked wrong names on screenshots: name only what a photo proves. No wood species, never "leather", no implied matching set without matching pieces in frame. The /the-floor archive grid carries no product names at all, only the department. Real product names must come off the store's tags from LQ.
- Undecided (ask the client): where /api/contact messages should land (still log-only).

## Brand Commitments

- Name: LQ Furniture. Tagline: "Limited Quantities + Unlimited Savings." Use their language, not invented language.
- Logo: green oval mark, white LQ with green Q counter, FURNITURE bar. Transparent PNG at assets/source/logo/lq-logo.png (1800x600).
- Palette (third world, August 2026): the client rejected both the dark brutalist build and the bright cream build ("no cream color crap", "looks ai"). The site now runs on the clean-shop night palette: crisp charcoal night #131311 with hairline structure (no atmospheric pools), night-2 #1B1B18 raised, night-3 #2B2B26 lines, lamp #F4F2EC text, fog #A3A094 secondary, lq-green #6BB22E primary action with night text, lq-press #7EC93C hover, neon #8ADE4A reserved for sign devices: the live open/closed NeonSign, static signs, and the tube arrow (client asked to lean into the gas-station sign look, August 2026). Green surfaces always carry night text.
- Typography (fifth iteration, fonts supplied by the client): Bebas Neue for display and sign lettering (the American signage letter, inherently caps), Switzer for body and small tracked labels. Self-hosted via next/font/local from src/fonts. The client also supplied Zodiak and Boska; both serifs sit unused because the serif register was already rejected. All previous families retired.
- Visual world: the lit sign on a clean shop (client-pinned refinement of the night world, rolls e1b2fdb5 and 6e5352b2 retained). Crisp charcoal with hairline structure, no atmospheric pools, photographs as lit displays, heavy tight grotesk statements. The character lives in the working neon: the live tappable open/closed sign with tube buzz, static signs, the tube arrow, glow on primary actions. The site is interactive by client demand: FAQ accordions, floor lightbox, live filter counts, today-highlighted hours.
- FAQ content in src/lib/faq.ts must stay inside verified facts and established positioning; no operational claims without confirming with LQ.
- The site is multi-page by client demand: home, /the-floor (with the What Came Through archive), /financing, /text-list, /visit, /blog with typed posts, /contact, /privacy.
- Client explicitly rejected anything that looks AI-generated: no glassmorphism or backdrop blur, no icon feature grids, no numbered marker sequences, no testimonial carousels, no fabricated testimonials, no emoji, no stock or AI imagery. Decorative gradient washes stay banned; the night world's radial lamp pools and the neon device are lighting from the subject's world, not decoration, and are the only exceptions. Structural corners square, 4px on controls.
- Motion (client demanded better, more realistic animation and flow): authored moments in the world's own grammar (lighting, settling weight), never a generic fade-up on every section, each moment once per page, all of it disabled under prefers-reduced-motion with content left visible.
- Voice: plain, warm, direct, like a person in North Mississippi wrote it. No em dashes. No marketing filler (elevate, curated, seamless, transform, unlock, discover). Headings and display are sentence case in this world. Buttons say what happens.

## Evidence on Hand

- 51 real showroom photos at assets/photos/IMG_8587.jpg through IMG_8637.jpg (converted from HEIC, 2200px wide). Sectionals, dining sets, recliners, bedroom sets, Shema Sleep mattress gallery, lamp walls, wide warehouse aisles.
- Transparent logo at assets/source/logo/lq-logo.png.
- No testimonials, press, or case studies on hand. Do not fabricate any.
- Store facts are verified and recorded under Capabilities and Constraints; the sold flags in src/lib/floor.ts are placeholder demonstration data pending the client's real board.

## Product Principles

- The showroom is the product. Every page ends at one of two doors: join the text list or get pre-approved.
- Urgency must be true. Limited quantities is a fact of the business; say it plainly and never fake scarcity.
- Compliance is content. TCPA disclosure text is part of the design, not fine print to hide.
- Fast beats fancy. Rural 4G is the baseline; every kilobyte earns its place.
- Their words, not ours. Real tagline, real photos, real inventory language.

## Accessibility & Inclusion

All tap targets at least 48x48px with at least 8px spacing. Visible keyboard focus rings on everything interactive. All motion disabled under prefers-reduced-motion. Contrast law: green surfaces carry night text, never white (white on the brand green fails at 2.6:1); measured ratios for the current palette live in DESIGN.md and on /style-guide.
