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
- Palette (replacement world, August 2026): the client rejected the original dark rendition after seeing it built, which supersedes the earlier dark mandate. The site now runs on a bright warm field: paper #FAF7F1, cream #F1EBDF, sand #E2D9C7, ink #1B1A16 text, stone #6D675A secondary, lq-green #6BB22E as the action color, lq-press #588F24 pressed, lq-deep #3E6B1A as the only green used as text on light. Bright green never appears as text on the light field (2.4:1). Green surfaces always take ink text, never white.
- Typography: Archivo display (a touch wide at 115%, uppercase for display and the lower-third caption bars), Newsreader body. DM Mono was retired with the dark world. Via next/font/google, latin subset.
- Visual world: the HGTV reveal grammar (direction roll 3f585062). Bright lit-set field, big warm floor photography, lower-third labels on photos, wipe reveals, the SOLD badge pop. Chosen unattended after the client rejected the dark build and the structured direction question went unanswered; treat as standing until the client says otherwise.
- Client explicitly rejected anything that looks AI-generated: no gradients, glows, glassmorphism, icon feature grids, numbered marker sequences, testimonial carousels, fabricated testimonials, emoji, stock or AI imagery. Radius 0 structural, 2px max on inputs and buttons.
- Motion (client updated the original one-moment rule): unique, fun, authored animations are wanted; the experience should not feel like other furniture sites. Motion must stay in the warehouse world's grammar (stamps, tickers, freight), never generic fade-up-on-scroll on every section, and all of it disabled under prefers-reduced-motion.
- Voice: plain, warm, direct, like a person in North Mississippi wrote it. No em dashes. No marketing filler (elevate, curated, seamless, transform, unlock, discover). Sentence case headings; display headlines uppercase. Buttons say what happens.

## Evidence on Hand

- 51 real showroom photos at assets/photos/IMG_8587.jpg through IMG_8637.jpg (converted from HEIC, 2200px wide). Sectionals, dining sets, recliners, bedroom sets, Shema Sleep mattress gallery, lamp walls, wide warehouse aisles.
- Transparent logo at assets/source/logo/lq-logo.png.
- No testimonials, press, or case studies on hand. Do not fabricate any.
- No street address, phone, or hours on hand yet. Do not invent them; ask.

## Product Principles

- The showroom is the product. Every page ends at one of two doors: join the text list or get pre-approved.
- Urgency must be true. Limited quantities is a fact of the business; say it plainly and never fake scarcity.
- Compliance is content. TCPA disclosure text is part of the design, not fine print to hide.
- Fast beats fancy. Rural 4G is the baseline; every kilobyte earns its place.
- Their words, not ours. Real tagline, real photos, real inventory language.

## Accessibility & Inclusion

All tap targets at least 48x48px with at least 8px spacing. Visible keyboard focus rings on everything interactive. All motion disabled under prefers-reduced-motion. Contrast: green only on near-black (7.49:1); green buttons take ink text (white on green fails at 2.61:1).
