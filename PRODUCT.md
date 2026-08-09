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
- Undecided (ask the client): financing partner(s) and application link, SMS platform/provider.

## Brand Commitments

- Name: LQ Furniture. Tagline: "Limited Quantities + Unlimited Savings." Use their language, not invented language.
- Logo: green oval mark, white LQ with green Q counter, FURNITURE bar. Transparent PNG at assets/source/logo/lq-logo.png (1800x600).
- Palette (third world, August 2026): the client rejected both the dark brutalist build and the bright cream build ("no cream color crap", "looks ai"). The site now runs on the showroom-at-night world: warm charcoal night #131311 lit in radial lamp pools (never flat black), night-2 #1C1C19 raised, night-3 #2A2A25 lines, lamp #F4F2EC text, fog #A3A094 secondary, lq-green #6BB22E primary action with night text, lq-press #7EC93C hover, neon #8ADE4A reserved for the one lit-sign device per page. Green surfaces always carry night text.
- Typography (client asked for "better fonts"): Libre Caslon Display for sentence-case display, Hanken Grotesk for body and tracked-caps labels. Archivo, Newsreader and DM Mono are all retired. Via next/font/google, latin subset.
- Visual world: the showroom at night (direction roll e1b2fdb5, third world). Premium after-hours retail: lit charcoal room, photographs presented like window displays with deep soft shadows, serif statements in sentence case, one neon sign per page, motion as lighting (lights up, settle, mask reveals, blur-to-sharp rises, one neon flicker). Chosen after the client demanded a premium, unique, multi-page site with no cream; treat as standing until the client says otherwise.
- The site is multi-page by client demand: home, /the-floor, /financing, /visit, /privacy.
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
