---
name: LQ Furniture
description: The showroom at night. A Tupelo, MS furniture warehouse presented as lit window displays after hours. Limited Quantities + Unlimited Savings.
colors:
  night: "#131311"
  night-2: "#1C1C19"
  night-3: "#2A2A25"
  lamp: "#F4F2EC"
  fog: "#A3A094"
  lq-green: "#6BB22E"
  lq-press: "#7EC93C"
  neon: "#8ADE4A"
typography:
  display:
    fontFamily: "Libre Caslon Display, Georgia, serif"
    fontSize: "clamp(2.75rem, 1.2rem + 6vw, 5.75rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.005em"
  h1:
    fontFamily: "Libre Caslon Display, Georgia, serif"
    fontSize: "clamp(2.5rem, 1.4rem + 4.2vw, 4.25rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.005em"
  h2:
    fontFamily: "Libre Caslon Display, Georgia, serif"
    fontSize: "clamp(1.875rem, 1.2rem + 2.4vw, 2.75rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.005em"
  h3:
    fontFamily: "Libre Caslon Display, Georgia, serif"
    fontSize: "1.625rem"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-0.005em"
  body-lg:
    fontFamily: "Libre Caslon Text, Georgia, serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.65
  body:
    fontFamily: "Libre Caslon Text, Georgia, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
  small:
    fontFamily: "Libre Caslon Text, Georgia, serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Libre Caslon Text, Georgia, serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.12em"
rounded:
  ctl: "4px"
spacing:
  gutter: "20px"
  gutter-sm: "40px"
  gutter-lg: "64px"
  section-y: "64px"
  section-y-lg: "96px"
  tap: "48px"
  tap-gap: "8px"
components:
  button-primary:
    backgroundColor: "{colors.lq-green}"
    textColor: "{colors.night}"
    typography: "{typography.label}"
    rounded: "{rounded.ctl}"
    height: "48px"
    padding: "0 28px"
  button-primary-hover:
    backgroundColor: "{colors.lq-press}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.lamp}"
    typography: "{typography.label}"
    rounded: "{rounded.ctl}"
    height: "48px"
    padding: "0 28px"
  button-ghost-hover:
    backgroundColor: "{colors.night-2}"
  input:
    backgroundColor: "{colors.night-2}"
    textColor: "{colors.lamp}"
    typography: "{typography.body}"
    rounded: "{rounded.ctl}"
    height: "48px"
    padding: "0 16px"
---

# Design System: LQ Furniture

## Overview

**Creative North Star: "The showroom at night"**

The site is LQ's warehouse after hours: a warm charcoal room where the overhead lamps are still on over the furniture, photographs sit in the dark like lit window displays, and one green neon sign burns per page. It is premium and unhurried where the business itself is high-volume and fast; the calm presentation is the contrast that makes the warehouse prices land. Everything a visitor sees is either the room (night surfaces, lamp light, fog secondary text), the merchandise (real floor photographs), or the sign (LQ green).

This is the third world for this client (direction roll e1b2fdb5), built after two rejected predecessors: a dark brutalist ink build and a bright cream "lit set" build ("no cream color crap", "looks ai"). Both are dead. Nothing from them survives here: no cream field, no bold condensed grotesk display, no flat-poster color blocking. The confirmed anti-references also include the white e-commerce grid, glassmorphism, icon feature grids, numbered marker sequences, and testimonial carousels.

The architecture is multi-page by client demand: home, /the-floor (a deal-board surface, roll 6e5352b2), /financing, /visit, /privacy, plus a non-indexed /style-guide. All pages share SiteHeader (with `aria-current` nav) and SiteFooter. Every page ends at one of two doors: join the text list or deal with financing/visiting in person. Nothing is ever purchasable online.

**Key Characteristics:**
- Warm charcoal night field, always lit by radial lamp pools, never flat black
- One Caslon family: display voice in sentence case over Libre Caslon Text body with small engraved-caps labels
- LQ green appears only as the primary action and the single neon sign per page
- Photographs presented as lit window displays: square-cornered, deep soft shadows
- Motion is lighting, not decoration: each moment happens once, then the room holds still
- Rural-4G light: no animation/UI/icon libraries, real photos only

## Colors

A single warm-dark neutral family lit by lamp tones, with one brand green that behaves like a lit sign.

### Primary
- **LQ Green** (#6BB22E): the primary action color, and nothing else. Solid button fills (Join the text list, Get directions, Walk the floor), the active filter/nav underline, checkbox accent, input caret, and text selection background. Always carries night text.
- **LQ Press** (#7EC93C): the hover state of green fills, and the text color of the "Open now" status line. Never a surface at rest.
- **Neon** (#8ADE4A): the lit tube. Text-and-border color of the one neon sign per page (`.neon` glow text-shadow + `.neon-box` glowing border). Appears nowhere else, ever.

### Neutral
- **Night** (#131311): the page field, a warm charcoal. Also the text color on every green surface. `themeColor` and `html`/`body` background.
- **Night 2** (#1C1C19): raised surfaces: inputs, ghost-button hover fill, the SMS success/error panels, the scrim behind the hero neon sign.
- **Night 3** (#2A2A25): every border and divider: section rules, hairline table rows, input borders, panel borders, scrollbar thumb.
- **Lamp** (#F4F2EC): primary text, headings, focus-ring outline, ghost button text/border (borders at 60% alpha, full on hover).
- **Fog** (#A3A094): secondary text: supporting paragraphs, labels, inactive nav/filter tabs, placeholders, captions.

Measured contrast (recorded on /style-guide): lamp on night 16.6:1, fog on night 7.1:1, fog on night-2 6.5:1, night on lq-green 7.3:1, neon on night 11.2:1.

### Named Rules
**The Night Text Rule.** Green surfaces always carry night text, never white. White on LQ green fails contrast at 2.6:1; night on LQ green passes at 7.3:1. There are no exceptions on any surface.

**The One Sign Rule.** Exactly one neon element per page: `neon-box` + `neon` + `label`, flickering on once via `neon-on`. It is a lit object from the store's world (an hours sign, a "Financing available" sign), not a decorative accent. A second neon element on a page is a defect.

**The Lit Field Rule.** The night field must never read flat. At least one section per page carries a lamp pool (`.pool`: radial `rgb(244 232 205 / 0.13)` fading from the top center; `.pool-left`: the same light from the upper left), or the section sits against a lit photograph. Decorative gradient washes stay banned; these radials are the room's own overhead lighting and are the only sanctioned gradients besides photo scrims.

**The Dark Band Rule.** Hero photographs get a two-layer night scrim (a radial vignette to `rgb(19 19 17 / 0.97)` at the edges plus a bottom linear ramp to `rgb(19 19 17 / 0.93)`). The scrim geometry must keep the band behind the mobile headline under roughly 55 mean luminance so lamp text stays legible over any photo. Re-check this whenever the hero photo or scrim stops changes.

## Typography

**Display Font:** Libre Caslon Display (with Georgia, serif), weight 400 only, loaded via next/font/google as `--font-caslon`
**Body Font:** Libre Caslon Text 400/700 with italic (Georgia, serif fallback), loaded via next/font/google as `--font-caslon-text`

**Character:** One old-style family end to end. The display face speaks quietly in sentence case; the text face carries warmth through the body copy and stiffens into small engraved caps for the signage. Nothing on the page steps outside the Caslon voice.

### Hierarchy
- **Display** (400, clamp 44 to 92px, 1.02): the page statement. One per page, in the hero or page header. Sentence case, `.display` class, -0.005em tracking.
- **H1** (400, clamp 40 to 68px, 1.05): major section statements on the home page (editorial intro, financing, text list).
- **H2** (400, clamp 30 to 44px, 1.12): section headings and closing CTA statements.
- **H3** (400, 26px, 1.25): card and item titles: floor item names, financing points, privacy sections, form success headline.
- **Body Large** (400, 20px, 1.65): the supporting paragraph directly under a display heading. Fog colored.
- **Body** (400, 17px, 1.7): running text, max width around `max-w-xl` (36rem). Fog for supporting text, lamp for content the visitor came to read (privacy body, hours table).
- **Small** (400, 15px, relaxed): footer text, TCPA consent copy, form error messages.
- **Label** (700, 12px, 0.12em tracking, uppercase): the `.label` voice, engraved serif caps like brass signage. Nav links, buttons, form labels, captions, the neon sign text, status lines. The only uppercase in the system.

### Named Rules
**The Sentence Case Rule.** The Caslon display voice is always sentence case, never uppercase, never bold (the face loads at 400 only). Uppercase belongs exclusively to the 12px tracked `.label` voice.

**The No Eyebrow Rule.** No eyebrow or kicker labels above headings. The single neon sign is the only element that may sit above a page's H1, and it is a lit object, not a category label. Headings stand on their own.

## Layout

Full-bleed sections separated by night-3 hairlines, with a shared gutter rhythm: 20px padding on mobile, 40px from the `sm` breakpoint (640px), 64px from `lg` (1024px). Vertical section padding runs 64px, stepping to 80 to 96px on larger screens. There is no boxed container; content width is governed by per-element `max-w-*` caps (headlines `max-w-3xl`, paragraphs `max-w-xl`/`max-w-md`).

Editorial sections use a 12-column grid with deliberate asymmetry: heading in columns 1 to 6, supporting text in columns 8 to 12, so the two voices sit offset rather than stacked. Split sections (financing, visit) are 2-column at `lg`, one side a full-bleed photograph (min-height 340px), the other a `pool-left` lit text column, self-centered.

The floor board (deal-board surface) runs 1 column on mobile, 2 at `sm`, 3 at `lg`, with 24 to 32px column gaps and 48px row gaps. Its rhythm is a repeating 6-slot cycle: slots 0 and 4 are wide 3:2 photographs spanning 2 columns, slots 1 and 3 are 3:4 portraits, all other slots are 4:3. That yields paired rows of one wide piece and one portrait at matched heights, a plain trio every third row, sides alternating, with no voids.

Every interactive element is at least 48px tall (`min-h-12`) with at least 8px spacing from its neighbors. The hero occupies 68svh on mobile, 76svh at `sm`, with the statement and both conversion doors anchored to the bottom-left over the scrim.

## Elevation & Depth

Depth in this system is light, not stacking. Surfaces themselves are flat and hairline-bordered; the sense of dimension comes from the radial lamp pools over the charcoal and from photographs glowing brighter than the room around them. There is exactly one shadow token.

### Shadow Vocabulary
- **Deep** (`box-shadow: 0 2px 6px rgb(0 0 0 / 0.4), 0 24px 64px rgb(0 0 0 / 0.5)`): the `.window-photo` treatment. Photographs sit in the dark like lit window displays; this soft double shadow is what seats them in the room. Used under gallery photographs only.

### Named Rules
**The Window Display Rule.** Shadows exist to present merchandise, never to elevate UI. Buttons, inputs, panels, and the header cast no shadow; a shadowed card or dropdown is out of world. Deep soft photo shadows are in; hard offset shadows do not exist here.

## Shapes

Structural corners are square: sections, photographs, panels, tables, the footer, all 0 radius. The one radius in the system is 4px (`rounded-ctl`), applied to controls only: buttons, inputs, and the neon sign box. Imagery is straight-edged and uncropped by shape: fixed aspect ratios (4:3, 3:2, 3:4) with `object-cover`, no rounded photos, no circles, no masks other than the one-time reveal clip. Lines are hairlines: 1px night-3 rules for section borders and the hours table, a 2px underline (transparent, lq-green when active) for nav and filter tabs, 1.5px for the neon tube border.

## Components

Motion note for every component below: this world's motion grammar is lighting. Five moments, each once per page, all defined in globals.css: `lights-up` (1100ms page-arrival fade on the hero block), `settle` (1400ms hero photo settling from scale 1.08), `mask-open` (900ms clip-path reveal on scrolled-to photographs, from `inset(6% 6% 6% 6%)` at 0.4 opacity), `line-rise`/`rise-go` (700 to 800ms text rise from 18px below with a 6px blur-to-sharp), and `neon-on` (1600ms flicker, 400ms delay, once). Hero text lines stagger by inline `animationDelay` (350/550/750ms). All of it collapses under `prefers-reduced-motion` with content fully visible (opacity 1, clip removed). Nothing loops, and no generic fade-up is applied per section.

### Buttons
- **Shape:** gently squared (4px radius), 48px minimum height, label voice (12px tracked caps).
- **Primary:** LQ green fill, night text, 28px horizontal padding. Hover shifts the fill to LQ press; active nudges down 1px (`active:translate-y-px`). The label says what happens: "Join the text list", "Get directions", "Call (662) 841-5959".
- **Ghost (secondary):** transparent fill, lamp text, 1px lamp border at 60% alpha. Hover brings the border to full lamp and fills night-2. Same size and voice as primary.
- **Focus:** the global ring: 2px lamp outline, 3px offset, on `:focus-visible` only.
- Buttons come in pairs: every closing section offers a green door and a ghost door.

### Tabs / Nav links
- **Style:** label voice, 48px tall, 2px bottom border. Inactive: transparent border, fog text, lamp on hover. Active: lq-green border, lamp text.
- **Nav** (SiteHeader) marks the active page with `aria-current="page"`; the floor filters (FloorBoard) mark the active department with `aria-pressed`. Same visual treatment for both.

### Cards / Containers
- **Corner Style:** square. Panels (SMS success, form errors) are night-2 fills with 1px night-3 borders and 16 to 28px internal padding. No shadows (see The Window Display Rule).
- **Figures:** a photograph is captioned by a baseline-justified row: Caslon H3 item name left, fog label right ("Priced on the floor", the department). Sold floor items keep their photo at 55% opacity and 0.6 saturation with an italic lowercase "sold" beside the name.

### Inputs / Fields
- **Style:** night-2 fill, 1px night-3 border, 4px radius, 48px tall, 16px side padding, lamp text, fog placeholder, lq-green caret.
- **Checkbox:** native, 20px, `accent-color` LQ green, wrapped in a 48px-tall clickable label.
- **Errors:** a night-2/night-3 panel with `role="alert"`, small lamp text, plain-spoken copy; the input gets `aria-invalid` and `aria-describedby`. No red exists in the palette; the words carry the error.

### Navigation
- **SiteHeader:** hairline bottom border, logo left (44 to 48px tall), label nav links, green "Join the text list" button right. On mobile the nav wraps to a full-width second row below logo and button.
- **SiteFooter:** hairline top border, 4-column grid (logo + tagline, address/phone, hours, page links) collapsing to 2 then 1. Small lamp text with underline-on-hover links, closing with the label line "Nothing on this site is for sale online. The store is the store."

### The Neon Sign (signature)
One per page. A `label`-voice phrase in a 4px-radius `neon-box` (1.5px neon border, outer and inset green glow) with `neon` text (neon color, two-layer green text-shadow), flickering on once via `neon-on`. On the home hero it floats top-right over the photo on a night/80 scrim; on subpages it leads the page header. The copy is a true sign from the store's world: "Open Wed thru Sun", "Financing available", "New loads weekly".

### Photo Reveal (signature)
Scroll-triggered photographs use the one-time mask reveal, implemented in `src/components/Reveal.tsx` (and inline in FloorBoard for its figures plus `rise-go` captions). The contract: render visible for no-JS visitors; on mount, only elements still below the viewport are set hidden; an IntersectionObserver at 0.3 threshold plays `mask-open` once and disconnects. The clip-path must live on an inner wrapper, never on the observed element, because Chromium computes IntersectionObserver geometry after clip-path (a clipped observed element can never intersect). FloorBoard clears all reveal state when a filter remounts the figures so nothing strands clipped.

### Open Now (signature)
A client-only status line (`OpenNow`) computing against store hours in America/Chicago regardless of the visitor's clock. Open state renders in lq-press, closed states in fog ("Closed now, opens tomorrow 10am"), reserved at one line height (`min-h-[1.4em]`) so hydration never shifts layout, with `aria-live="polite"`.

## Do's and Don'ts

### Do:
- **Do** keep the field lit: every page needs its lamp pools or lit photographs; bare stretches of flat #131311 read as a bug, not restraint.
- **Do** put night text (#131311) on every green surface, per The Night Text Rule (7.3:1).
- **Do** give every tap target 48px minimum height and 8px minimum spacing, with the global lamp focus ring intact.
- **Do** use the store's own words and real floor photographs: "Limited Quantities + Unlimited Savings", tag-price language, photos from assets/photos only. No stock, no AI imagery, no fabricated testimonials.
- **Do** write buttons that say what happens, in sentence-case plain speech: "Walk the floor", "Get directions", "Call (662) 841-5959".
- **Do** keep the TCPA consent language verbatim from `src/lib/consent.ts` wherever an SMS opt-in appears; it is regulated content, not copy. Any change goes through legal review and bumps `SMS_CONSENT_VERSION`.
- **Do** end every page at one of the two doors: join the text list, or call/visit/finance in person.
- **Do** collapse every animation under `prefers-reduced-motion` with the content left fully visible.

### Don't:
- **Don't** imply anything can be bought online. No prices on the site (prices live on the tags), no carts, no "shop" or "buy" language. The footer's closing line is doctrine: the store is the store.
- **Don't** set the Caslon display voice in uppercase or bold, and don't add eyebrow/kicker labels above headings.
- **Don't** use more than one neon element per page, or use the neon color (#8ADE4A) anywhere but the sign.
- **Don't** add decorative gradients, glassmorphism or backdrop blur, icon grids, numbered marker sequences, testimonial carousels, or emoji. The lamp pools and photo scrims are the only gradients.
- **Don't** round structural corners or shadow UI chrome; 4px is for controls, the deep shadow is for photographs.
- **Don't** use em dashes or marketing filler (elevate, curated, seamless, transform, unlock, discover), and don't make operational claims the store hasn't verified. Urgency must be factual: limited quantities is true, so say it plainly and never fake scarcity.
- **Don't** treat the `sold` flags in `src/lib/floor.ts` as live inventory; they are placeholder demonstration data pending the client's real board.
- **Don't** add runtime dependencies (animation, UI, icon, or state libraries) without asking; rural 4G is the baseline and the budget is LCP under 2.0s, CLS under 0.05, first-load JS under 120KB gzipped.
