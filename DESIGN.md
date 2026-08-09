---
name: LQ Furniture
description: The lit sign on a clean shop. A crisp dark warehouse site for LQ Furniture in Tupelo, MS, whose character lives in working neon. Limited Quantities + Unlimited Savings.
colors:
  night: "#131311"
  night-2: "#1b1b18"
  night-3: "#2b2b26"
  lamp: "#f4f2ec"
  fog: "#a3a094"
  lq-green: "#6bb22e"
  lq-press: "#7ec93c"
  neon: "#8ade4a"
typography:
  display:
    fontFamily: "Schibsted Grotesk"
    fontSize: "clamp(2.75rem, 1.2rem + 5.6vw, 5.25rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  h1:
    fontFamily: "Schibsted Grotesk"
    fontSize: "clamp(2.25rem, 1.3rem + 3.8vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  h2:
    fontFamily: "Schibsted Grotesk"
    fontSize: "clamp(1.75rem, 1.2rem + 2.2vw, 2.5rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  h3:
    fontFamily: "Schibsted Grotesk"
    fontSize: "1.375rem"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  body-lg:
    fontFamily: "Schibsted Grotesk"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Schibsted Grotesk"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Schibsted Grotesk"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  ctl: "6px"
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

**Creative North Star: "The lit sign on a clean shop"**

The site is a clean, fast, obviously professional shop at night with one working neon sign burning on the wall. The field is crisp flat charcoal structured by hairlines; the text is lamp and fog; the merchandise is real floor photographs seated in deep shadow; and all of the character lives in the sign system: a live open/closed sign that knows the store clock, hums while the store is open, and re-flickers when you tap it, static neon signs leading page headers, a drawn tube arrow pointing at the signup form, and a tube glow that primary buttons borrow on hover. The fixtures are interactive by client demand: FAQ accordions, a floor lightbox, live filter counts, a today-lit hours table.

This world is a client-pinned refinement of the previous "showroom at night" rendition (direction rolls e1b2fdb5 and 6e5352b2 are retained for the world lineage and the floor-board structure). The client pinned four words: neon vibe, clean and professional, character, interactive. The palette token set carried over unchanged (night, night-2, night-3, lamp, fog, lq-green, lq-press, neon), but the atmosphere changed: the radial lamp pools are gone, the Caslon serif voice is gone, and the room is now crisp and flat with a single grotesk family doing every job. The older anti-references still hold: no cream field, no brutalist ink build, no white e-commerce grid, no glassmorphism, no icon feature grids, no numbered marker sequences, no testimonial carousels.

The architecture is multi-page: home, /the-floor, /financing, /text-list, /visit, /blog (with /blog/[slug]), /contact, /privacy, plus a non-indexed /style-guide. All pages share the sticky SiteHeader and the SiteFooter. Every page ends at one of two doors: join the text list, or call/visit/finance in person. Nothing is ever purchasable online.

**Key Characteristics:**
- Crisp flat charcoal field with hairline night-3 structure; no atmospheric pools, no washes
- One family, Schibsted Grotesk (variable, with italic): heavy tight display in sentence case, regular body, small semibold caps labels
- A working neon sign system is the character: the live tappable sign, static signs, the tube arrow, glow on primary green actions
- Photographs presented as lit displays: square-cornered, deep soft shadows, brightness lift on hover
- Interactive fixtures built on native elements: details/summary FAQs, a dialog lightbox, data-driven filter counts, a Central-time clock
- Rural-4G light: no animation/UI/icon libraries, real floor photos only

## Colors

A single warm-dark neutral family under lamp-colored text, with one brand green that behaves like a lit sign.

### Primary
- **LQ Green** (#6bb22e): the primary action color, and nothing else. Solid button fills (Join the text list, Walk the floor, Get directions), the active nav/filter underline, the today-row highlight in the hours table, checkbox accent, input caret, and text selection background. Always carries night text.
- **LQ Press** (#7ec93c): the hover state of green fills, the open-state text of the status line, the "Today" tag in the hours table, the active filter's count, and FAQ question hover. Never a surface at rest.
- **Neon** (#8ade4a): the lit tube. Text and border color of the sign system only: `.neon` glow text, `.neon-box` glowing border, `.neon-stroke` tube arrow. Primary buttons may borrow the tube's green glow on hover via `.btn-glow`, but never the neon color itself.

### Neutral
- **Night** (#131311): the page field, a warm charcoal, flat and unwashed. Also the text color on every green surface, the lightbox surface, and the `themeColor`.
- **Night 2** (#1b1b18): raised surfaces: inputs, ghost-button hover fill, success and error panels.
- **Night 3** (#2b2b26): every border and divider: the header hairline, section rules, FAQ and hours rows, input and panel borders, scrollbar thumb.
- **Lamp** (#f4f2ec): primary text, headings, focus-ring outline, ghost button text and border (border at 60% alpha, full on hover).
- **Fog** (#a3a094): secondary text: supporting paragraphs, form labels, inactive nav/filter tabs, placeholders, captions, the dark sign's `neon-dim` tubes (fog at 75%/35% alpha).

### Named Rules
**The Night Text Rule.** Green surfaces always carry night text, never white. White on LQ green fails contrast; night on LQ green passes. No exceptions on any surface.

**The Sign System Rule.** Neon is a lit object from the store's world, never a decorative accent. The device family is closed: the live NeonSign (lit `.neon-box .neon .neon-on .neon-buzz` during store hours, tubes dark via `.neon-dim` with the next lighting-up time when closed), static header signs (`.neon-box .neon .neon-on`), the drawn tube arrow (`.neon-stroke`), and the `.btn-glow` hover glow on green primary actions. One primary sign per page; the arrow may accompany it. Neon text or borders on things that are not signs are defects.

**The Flat Charcoal Rule.** The field is crisp, flat #131311 with hairline structure. No radial lamp pools, no ambient washes, no decorative gradients. The only gradients in the system are the scrims over hero photographs, which exist to keep text legible, not to decorate.

**The Dark Band Rule.** Hero photographs get a two-layer night scrim (a radial vignette to `rgb(19 19 17 / 0.97)` at the edges plus a bottom linear ramp to `rgb(19 19 17 / 0.93)`, the bottom layer 80% tall on mobile). The scrim geometry must keep the band behind the mobile headline dark enough that lamp text stays legible over any photo. Re-check whenever the hero photo or scrim stops change.

## Typography

**One Font:** Schibsted Grotesk (variable, normal + italic), loaded via next/font/google as `--font-schibsted`. There is no second family.

**Character:** One grotesk doing every job. At 800 and tight tracking it is the heavy painted shop-sign statement; at 400 it is plain, warm running text; at 600 small caps it is the label stenciled on the door. Italic appears only in small annotations (the lowercase "sold" stamp, blog dates).

### Hierarchy
- **Display** (800, clamp 44 to 84px, 0.98): the page statement, `.display` class + `text-display`. One per page, in the hero or page header. Sentence case, -0.02em tracking.
- **H1** (800, clamp 36 to 60px, 1.02): major section statements ("When it's gone, it's gone.", "Straight answers").
- **H2** (800, clamp 28 to 40px, 1.1): section headings and closing CTA statements; also the big sign's headline and the contact page's phone number.
- **H3** (800, 22px, 1.25): item names, FAQ questions, financing points, form success headlines.
- **Body Large** (400, 19px, 1.6): the supporting paragraph directly under a display heading. Fog colored.
- **Body** (400, 17px, 1.65): running text, capped around `max-w-xl`. Fog for supporting text, lamp for content the visitor came to read.
- **Small** (400, 15px, relaxed): footer text, TCPA consent copy, error messages, archive captions. Written as the arbitrary utility `text-[0.9375rem]`; reused but not a named token.
- **Label** (600, 12px, 1.4, 0.08em, uppercase): the `.label` voice. Nav links, buttons, form labels, filter tabs, captions, sign sublines, status lines. The only uppercase in the system.

### Named Rules
**The Sentence Case Rule.** The display voice is always sentence case, never uppercase. Uppercase belongs exclusively to the 12px semibold tracked `.label` voice.

**The No Eyebrow Rule.** No eyebrow or kicker labels above headings. The one element that may sit above a page's H1 is a neon sign ("Financing available", "New loads weekly", "Sign up here", or the live sign on /visit), and it is a lit object from the store's world, not a category label.

## Layout

Full-bleed sections separated by night-3 hairlines, with a shared gutter rhythm: 20px padding on mobile, 40px from `sm` (640px), 64px from `lg` (1024px). Vertical section padding runs 64 to 80px, stepping to 96px on the largest home sections. No boxed container; content width is governed by per-element `max-w-*` caps (headlines `max-w-3xl`, paragraphs `max-w-xl`/`max-w-md`).

Editorial sections use a 12-column grid with deliberate asymmetry: heading in columns 1 to 6, supporting text in columns 8 to 12. Split sections (financing, visit) are 2-column at `lg`, one side a full-bleed photograph (min-height 340px) wrapped in Reveal, the other a self-centered text column.

The floor board runs 1 column on mobile, 2 at `sm`, 3 at `lg`, with 24 to 32px column gaps and 48px row gaps, in a repeating 6-slot cycle: slots 0 and 4 are wide 3:2 photographs spanning 2 columns, slots 1 and 3 are 3:4 portraits, everything else 4:3. That yields paired rows of one wide piece and one portrait at matched heights, with a plain trio every third row. The home floor preview staggers its 2-up grid by pushing figures 1 and 4 down `sm:mt-16`.

The hero occupies 68svh on mobile, 76svh at `sm`, with the statement and both doors anchored bottom-left over the scrim and the live sign floating top-right. The header is sticky (top 0, z-40, night fill, hairline bottom border).

Every interactive element is at least 48px tall (`min-h-12`) with at least 8px spacing from its neighbors.

## Elevation & Depth

Surfaces are flat and hairline-bordered; nothing in the UI chrome stacks or floats. Depth comes from two kinds of light: photographs glowing brighter than the room and seated by one deep soft shadow, and the neon devices emitting green glow. Glow is light, not elevation.

### Shadow Vocabulary
- **Deep** (`box-shadow: 0 2px 6px rgb(0 0 0 / 0.4), 0 24px 64px rgb(0 0 0 / 0.5)`): the `.window-photo` treatment, used under gallery photographs only.
- **Tube glow** (`.neon-box`: `0 0 10px rgb(107 178 46 / 0.35), inset 0 0 10px rgb(107 178 46 / 0.2)` with a 1.5px neon border; `.neon` text: two-layer green text-shadow; `.neon-stroke`: two green drop-shadows): the lit sign's emission.
- **Button glow** (`.btn-glow:hover`: `0 0 12px rgb(107 178 46 / 0.45), 0 0 32px rgb(107 178 46 / 0.25)`, 250ms ease): primary green actions borrow the tube glow on approach. Rest state carries no shadow.

### Named Rules
**The Window Display Rule.** Shadows exist to present merchandise; glow exists to mark signs and the actions that matter. Buttons at rest, inputs, panels, the header, and the lightbox cast nothing; a shadowed card or dropdown is out of world. Hard offset shadows do not exist here.

## Shapes

Structural corners are square: sections, photographs, panels, tables, the footer, the lightbox frame, all 0 radius. Controls carry 6px (`rounded-ctl`): buttons, inputs, static neon signs, error panels. The one softer corner is the live NeonSign's 10px box, a sign shape, not a control token. Imagery is straight-edged at fixed aspect ratios (4:3, 3:2, 3:4, square in the archive, 5:2 in the blog list) with `object-cover`; no rounded photos, no circles, no masks other than the one-time reveal clip. Lines are hairlines: 1px night-3 rules everywhere, a 2px underline (transparent, lq-green when active) for nav and filter tabs, 1.5px for neon tube borders.

## Components

Motion grammar for everything below, all defined in globals.css: crisp and physical, no fog. `settle` (1200ms, hero photo scale 1.06 to 1), `rise`/`.line-rise`/`.rise-go` (500 to 550ms, 14px rise, opacity, no blur), `mask-open` (700ms clip-path reveal from `inset(4%)` at 0.5 opacity), `neon-on` (1600ms flicker, 400ms delay, once), `neon-buzz` (6s subtle opacity hum, infinite, 2200ms delay, lit sign only), and `drift` (scroll-driven photo drift via `animation-timeline: view()`, gated behind `@supports`). The standard ease is `cubic-bezier(0.16, 1, 0.3, 1)`; the mask uses `cubic-bezier(0.65, 0, 0.25, 1)`. Hero text lines stagger by inline `animationDelay` (350/550/750ms). Everything collapses under `prefers-reduced-motion` with content fully visible (opacity 1, clip removed, transitions off).

### Buttons
- **Shape:** gently squared (6px), 48px minimum height, label voice.
- **Primary:** LQ green fill, night text, 28px horizontal padding, `.btn-glow`. Hover shifts the fill to LQ press and lights the green glow; active nudges down 1px (`active:translate-y-px`); disabled drops to 60% opacity. The label says what happens: "Join the text list", "Walk the floor", "Get directions".
- **Ghost (secondary):** transparent fill, lamp text, 1px lamp border at 60% alpha. Hover brings the border to full lamp and fills night-2. Same size and voice as primary. No glow.
- **Focus:** the global ring: 2px lamp outline, 3px offset, `:focus-visible` only.
- Buttons come in pairs: closing sections offer a green door and a ghost door.

### Tabs / Nav links
- **Style:** label voice, 48px tall, 2px bottom border. Inactive: transparent border, fog text, lamp on hover. Active: lq-green border, lamp text.
- **Nav** (SiteHeader) marks the active page with `aria-current="page"`; the floor filters (FloorBoard) mark the active department with `aria-pressed`.
- **Filter counts:** every floor filter carries a live count computed from `FLOOR_ITEMS` (never hardcoded), rendered beside the label: lq-press on the active tab, fog at 70% otherwise.

### Cards / Containers
- **Panels** (form success, form errors): night-2 fill, 1px night-3 border, 16 to 28px internal padding, no shadow. Error panels use `role="alert"` with plain-spoken copy; no red exists in the palette, the words carry the error.
- **Figures:** a photograph is captioned by a baseline-justified row: display H3 item name left, fog label right (the department, "Priced on the floor"). Sold pieces keep their photo at 55% opacity and 0.6 saturation with an italic lowercase "sold" beside the name. Unsold photos brighten to 110% on hover (500ms filter transition).

### Inputs / Fields
- **Style:** night-2 fill, 1px night-3 border, 6px radius, 48px tall, 16px side padding, lamp text, fog placeholder, lq-green caret.
- **Checkbox:** native, 20px, `accent-color` LQ green, wrapped in a 48px-tall clickable label carrying the verbatim TCPA consent text.
- **Errors:** the input gets `aria-invalid` and `aria-describedby` pointing at the alert panel; ContactForm tracks which field failed.

### Navigation
- **SiteHeader:** sticky, night fill, hairline bottom border, logo left (44 to 48px tall), label nav links, green "Join the text list" button right. On mobile the nav wraps to a full-width 3-column second row below logo and button.
- **SiteFooter:** hairline top border, 4-column grid (logo + tagline, address/phone, hours, page links) collapsing to 2 then 1. Small lamp text with underline-on-hover links, closing with the label doctrine: "Nothing on this site is for sale online. The store is the store."

### The Live Neon Sign (signature)
`NeonSign` is the site's mascot: a tappable button (`title="Give the sign a tap"`) that re-runs its flicker on every tap by remounting via a key bump. It reads the store clock in America/Chicago every minute. Open: lit box (`neon-box neon neon-on neon-buzz` over `bg-night/80`, 10px radius), display headline "We're open", label subline "Til 6pm today". Closed: dark tubes (`neon-dim`, fog at reduced alpha), headline "Closed", subline naming the next lighting-up time ("Back on tomorrow 10am"). Before hydration it renders a neutral lit hours sign ("Open Wed thru Sun" / "10 to 6 · Sun 12 to 6") making no open claim, so nothing shifts and nothing lies. `aria-live="polite"`. It floats top-right on the home hero and leads /visit at `big` size (H2 headline).

### Static Signs and the Tube Arrow
Subpage headers open with a static sign: a label-voice phrase in a 6px `neon-box` with `neon` text, flickering on once via `neon-on`. The copy is a true sign from the store's world: "Financing available", "New loads weekly", "Sign up here". The home text-list section aims a hand-drawn SVG arrow (4px round-capped stroke, `.neon-stroke` glow) at the form, desktop only.

### FAQ Accordion (signature)
`FaqList` is native `details`/`summary` inside a hairline-ruled stack. The body animates open via the grid trick: `.faq-body` is a grid at `0fr` transitioning to `1fr` over 300ms with an overflow-hidden inner div. The `+` mark (`.faq-mark`, display voice, fog) rotates 45 degrees when open. Question and mark shift to lq-press on hover. Default markers are suppressed. Answers must stay inside verified store facts; `src/lib/faq.ts`'s header comment is the contract.

### Floor Lightbox (signature)
FloorBoard's zoom is a native `dialog` opened with `showModal()`: `min(96vw, 1100px)` wide, night surface, square corners, `backdrop:bg-night/90`, image at `object-contain` capped at 78svh, caption row with name, sold stamp, department, and a bordered Close button. Clicking the backdrop closes it (the click target is the dialog itself only outside the padded content). Every floor photo is a full-width button with `cursor-zoom-in` and an "See [name] bigger" label.

### Photo Reveal (signature)
Scroll-triggered photographs use the one-time mask reveal (`Reveal.tsx`, and inline in FloorBoard with `rise-go` captions). The contract: render visible for no-JS visitors; on mount, only elements still below the viewport are hidden; an IntersectionObserver at 0.3 threshold plays `mask-open` once and disconnects. The clip-path must live on an inner wrapper, never on the observed element, because Chromium computes IntersectionObserver geometry after clip-path (a clipped observed element can never intersect). FloorBoard clears all reveal state when a filter changes, since filtering remounts figures and stale hidden states would strand them clipped.

### Clock Fixtures
- **OpenNow:** a client-only status line computing against store hours in America/Chicago regardless of the visitor's clock, refreshed every minute. Open renders in lq-press ("Open now, closes 6pm"), closed in fog ("Closed now, opens tomorrow 10am"). Reserved at one line height (`min-h-[1.4em]`) so hydration never shifts layout; `aria-live="polite"`.
- **HoursTable:** the /visit hours list, hairline rows, renders neutral on the server; once the clock hydrates, today's row gets an lq-green bottom border, an lq-press "Today" tag, and lamp hours text.

## Do's and Don'ts

### Do:
- **Do** put night text (#131311) on every green surface, per The Night Text Rule.
- **Do** keep the field flat crisp charcoal with hairline night-3 structure; the character belongs to the sign system, not to washes.
- **Do** give every tap target 48px minimum height and 8px minimum spacing, with the global lamp focus ring intact.
- **Do** use the store's own words and real floor photographs: "Limited Quantities + Unlimited Savings", tag-price language, photos from the LQ floor only. No stock, no AI imagery, no fabricated testimonials.
- **Do** write buttons that say what happens, in plain speech: "Walk the floor", "Get directions", "Call (662) 841-5959".
- **Do** keep the TCPA consent language verbatim from `src/lib/consent.ts` wherever an SMS opt-in appears; it is regulated content. Any change goes through legal review and bumps `SMS_CONSENT_VERSION`.
- **Do** keep FAQ answers inside verified store facts, per the header contract in `src/lib/faq.ts`; no operational claims LQ hasn't confirmed.
- **Do** keep the hero scrim dark behind the mobile headline band (The Dark Band Rule) and re-check it when photos change.
- **Do** render clock-driven components (NeonSign, OpenNow, HoursTable) neutral before hydration, on America/Chicago time, reserved so nothing shifts.
- **Do** collapse every animation under `prefers-reduced-motion` with the content left fully visible.
- **Do** end every page at one of the two doors: join the text list, or call/visit/finance in person.

### Don't:
- **Don't** imply anything can be bought online. No prices on the site (prices live on the tags), no carts, no "shop" or "buy" language. The footer's closing line is doctrine: the store is the store.
- **Don't** reintroduce the radial lamp pools or any decorative gradient; the photo scrims are the only gradients. The prior serif rendition is retired, not dormant.
- **Don't** put neon (#8ade4a) on anything that is not a sign device, and don't give more than one primary sign to a page. The `.btn-glow` hover is the only neon the buttons get.
- **Don't** set the display voice in uppercase, and don't add eyebrow/kicker labels above headings; only a neon sign may lead an H1.
- **Don't** use em dashes or marketing filler (elevate, curated, seamless, transform, unlock, discover), and don't make unverified operational claims. Urgency must be factual: limited quantities is true, so say it plainly.
- **Don't** treat the `sold` flags in `src/lib/floor.ts` as live inventory; they are placeholder demonstration data pending the client's real board.
- **Don't** round structural corners or shadow UI chrome; 6px is for controls, the deep shadow is for photographs, glow is for signs.
- **Don't** add runtime dependencies (animation, UI, icon, or state libraries); rural 4G is the baseline.
