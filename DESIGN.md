---
name: LQ Furniture
description: Dark warehouse-floor marketing site for a Tupelo, MS furniture warehouse. Limited Quantities + Unlimited Savings.
colors:
  ink: "#0C0C0B"
  ink-raised: "#171714"
  ink-line: "#26251F"
  bone: "#EFEDE6"
  ash: "#9B9A93"
  lq-green: "#6BB22E"
  lq-lime: "#8FC120"
  lq-press: "#588F24"
typography:
  display:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(2.5rem, 0.75rem + 7vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 125"
  h1:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(2.5rem, 1.4rem + 4.6vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 125"
  h2:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(1.75rem, 1.1rem + 2.6vw, 2.5rem)"
    fontWeight: 600
    lineHeight: 1.15
  h3:
    fontFamily: "Archivo, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.65
  body-lg:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "1.3125rem"
    fontWeight: 400
    lineHeight: 1.6
  tag:
    fontFamily: "DM Mono, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.04em"
rounded:
  structural: "0px"
  ctl: "2px"
spacing:
  gutter-sm: "20px"
  gutter-md: "40px"
  gutter-lg: "64px"
  section-y: "64px"
  section-y-lg: "80px"
  hairline: "1px"
  tap-min: "48px"
components:
  button-primary:
    backgroundColor: "{colors.lq-green}"
    textColor: "{colors.ink}"
    typography: "{typography.display}"
    rounded: "{rounded.ctl}"
    padding: "0 28px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.lq-press}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    typography: "{typography.display}"
    rounded: "{rounded.ctl}"
    padding: "0 28px"
    height: "48px"
  button-secondary-hover:
    backgroundColor: "{colors.ink-raised}"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    typography: "{typography.tag}"
    rounded: "{rounded.ctl}"
    padding: "0 16px"
    height: "48px"
  chip-active:
    backgroundColor: "transparent"
    textColor: "{colors.lq-green}"
    typography: "{typography.tag}"
    rounded: "{rounded.ctl}"
    padding: "0 16px"
    height: "48px"
  input:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bone}"
    typography: "{typography.body}"
    rounded: "{rounded.ctl}"
    padding: "0 16px"
    height: "48px"
  caption-plate:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bone}"
    typography: "{typography.tag}"
    padding: "8px 12px"
  stamp:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.lq-green}"
    typography: "{typography.h3}"
    padding: "2px 12px"
---

# Design System: LQ Furniture

## Overview

**Creative North Star: "The Deal Board"**

The site is the weekly furniture circular, reprinted on a warehouse wall. A near-black ink field carries full-bleed photographs of the real floor in Tupelo; type does the selling in three distinct voices (a shouting expanded display face, a talking serif, a bookkeeping mono); one working green, sampled from the LQ logo, appears only where something is happening. Nothing is decorated: no cards, no gradients, no glows, no blur, no icons, no shadows. Depth is a second shade of ink and a one-pixel hairline. The world is brief-pinned by the client, and the homepage structure (the filterable deal board) came from concept-seed roll 6e5352b2: the deal board from the weekly furniture circular.

Motion is three authored moments in warehouse grammar, and nothing else: the hero opens like a roll-up freight door, a conveyor ticker runs store facts under it, and SOLD stamps land on photographs as they scroll into view. Every animation zeroes out under `prefers-reduced-motion`, with stamps left visible.

The rejections are confirmed, not stylistic preference: the client explicitly refused anything that looks AI-generated (gradients, glows, glassmorphism, icon feature grids, numbered marker sequences, carousels, emoji, stock or AI imagery) and the cream-and-serif furniture-boutique template. Urgency is factual because the business is factual: when the last one sells, it is gone.

**Key Characteristics:**
- Dark ink field (#0C0C0B) everywhere; light surfaces do not exist in this world
- Green is a signal with a five-item allowlist, never a fill; it covers roughly 2% of any screen
- Three type voices with deliberately far-apart scale steps: display shouts, body talks, mono keeps the books
- Full-bleed photography of the actual floor; photos are never boxed, padded, or carded
- Flat construction: hairlines and a single raised ink shade instead of shadows or borders-as-decoration
- Exactly three motion moments, all in freight/warehouse grammar, all reduced-motion safe

## Colors

Eight client-pinned colors sampled from the LQ logo: five working neutrals carry everything, three greens carry the signal.

### Primary
- **LQ Green** (#6BB22E): the working brand green. Signal only, never a fill or a wash. Appears exclusively in the five allowlisted places below. 7.5:1 against ink in both directions, so it works as text on ink and as a surface under ink text.
- **LQ Press** (#588F24): the pressed/hover state of LQ Green. Only ever appears as the hover and active background of something that is already green.
- **LQ Lime** (#8FC120): lives inside the logo asset only. Never used in layout, text, or controls.

### Neutral
- **Ink** (#0C0C0B): the page field. `html` and `body` background; also the plate color that headlines and captions sit on when they overlap photography.
- **Ink Raised** (#171714): the only raised surface. Ticker band, text-list section band, tag backgrounds, secondary-button hover fill, error plates. Depth in this system is this color, not a shadow.
- **Ink Line** (#26251F): every hairline: section dividers, hours-table rules, input borders, inactive chip borders, the 1px grout in the board grid, the scrollbar.
- **Bone** (#EFEDE6): primary text on dark (16.7:1 on ink). Also the focus ring, the text caret, the checkbox accent, and the inverted `::selection` background.
- **Ash** (#9B9A93): secondary text (6.9:1 on ink): supporting paragraphs, mono labels, nav links at rest, placeholders. Hovers to bone.

### Named Rules
**The Signal Green Rule.** Green appears in exactly five places: the primary button, the SOLD stamp, the active filter chip, the days-on-floor numeral, and one hairline under the wordmark. Nowhere else. Not icons, not borders, not headings, not hover states on things that are not already green. New surfaces inherit the allowlist, not the color.

**The Ink-on-Green Rule.** Green surfaces always take ink text (7.5:1). White on green measures 2.6:1 and is never used.

**The Dark Field Rule.** The site is dark because the brand green is unreadable on a light field. There is no light theme and no light section; every page sits on ink.

## Typography

**Display Font:** Archivo (variable width axis, via next/font, latin subset)
**Body Font:** Newsreader (normal + italic, via next/font, latin subset)
**Label/Mono Font:** DM Mono (400, 500, via next/font, latin subset)

**Character:** Three voices with real distance between them. Archivo stretched to 125% width, bold, uppercase, tight-tracked, is the shout of a circular headline. Newsreader at 18px talks like a person from North Mississippi. DM Mono, small and uppercase and letter-spaced, handles tags, hours, addresses, and anything that reads as data.

The display voice is a reusable class, `.display`: `font-family: Archivo; font-stretch: 125%; font-weight: 700; text-transform: uppercase`. It is applied to display and h1 headlines, primary/secondary button labels, the SOLD stamp, and confirmation headings.

### Hierarchy
- **Display** (700, clamp 40–96px, line-height 0.95, tracking -0.015em, `.display` uppercase): the hero headline and the tagline. One per page at most.
- **H1** (700, clamp 40–64px, line-height 1.02, tracking -0.01em, `.display` uppercase): big section headlines ("Why our prices look like a typo", "Financing available") and page titles.
- **H2** (600 semibold, clamp 28–40px, line-height 1.15, sentence case, normal width): working section headings ("What's on the floor", "Come walk the floor"). Not uppercase; this is the calm tier.
- **H3** (600 or `.display` 700, 24px, line-height 1.3): subsection headings on prose pages and the confirmation plate heading.
- **Body-lg** (Newsreader 400, 21px, line-height 1.6): the hero standfirst paragraph only.
- **Body** (Newsreader 400, 18px, line-height 1.65, max-width ~36rem/`max-w-xl`): all running copy. Italic Newsreader is kept for asides and nothing louder.
- **Tag** (DM Mono 400, 13px, line-height 1.4, tracking 0.04em, uppercase): labels, captions, nav links, hours, footer lines, ticker items, chip labels.
- **Fine print** (15px / 0.9375rem, currently an arbitrary value in markup): TCPA consent text, form errors, swatch role notes, and the compact nav CTA label. Button labels use 16px / 1rem the same way. These two steps are real and reused; they just are not tokens yet.

### Named Rules
**The Far-Apart Steps Rule.** The scale steps are deliberately distant: data whispers at 13px, body talks at 18px, display shouts at up to 96px. Do not invent in-between sizes to smooth the jump; the jump is the design.

**The Sentence Case Rule.** Display and H1 are uppercase via `.display`. H2 and everything below are sentence case. Uppercase outside the display voice happens only in DM Mono tag text.

## Layout

Full-width dark canvas, no boxed container. Content is held by page gutters that step up with the viewport: 20px (`px-5`), 40px from 640px (`sm:px-10`), 64px from 1024px (`lg:px-16`). Photography and the board grid ignore the gutters and run edge to edge; captions and headings re-enter the gutter on top of them.

Vertical rhythm is section-scale: 64px padding (`py-16`), 80px on larger screens (`sm:py-20`), with each section opened by a 1px `ink-line` top border. Two-column sections use either a straight `lg:grid-cols-2` split (photo half + text half, photo `min-h-[320px]`) or a 12-column grid with content at `col-span-5` and `col-span-6 col-start-7`, leaving a structural gap in the middle.

The deal board is an asymmetric mosaic: `grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6` with `gap-px` over an `ink-line` background, so the grout between photos is a 1px hairline. Items span 2 or 3 of the 6 large columns in an intentionally uneven rhythm; every photo is `aspect-[4/3] object-cover`.

Lists of facts (hours) are hairline tables: `border-t` on the list, `border-b` per row, label in body bone on the left, value in mono tag ash on the right, `justify-between` with `items-baseline`.

Breakpoints in use are Tailwind defaults `sm` (640px) and `lg` (1024px) only. The hero image is `62svh` tall on mobile, `70svh` from 640px, with the ink headline plate pulled up over its bottom edge (`-mt-24` / `sm:-mt-32`).

## Elevation & Depth

No shadows anywhere, and none are permitted. Depth is tonal and linear: `ink-raised` (#171714) is the single "up one" surface (ticker band, section band, plates, tag backgrounds), and `ink-line` (#26251F) hairlines do all separation. Photographs supply the only visual richness; the chrome around them stays flat. Blur, glassmorphism, and gradients are confirmed client rejections.

**The Flat World Rule.** If a surface needs to come forward, it becomes `ink-raised` or gains a 1px `ink-line` border. It never gains a shadow, a gradient, or a blur.

## Shapes

Radius 0 on everything structural: sections, photos, plates, stamps, grids, tables. Only interactive controls (buttons, chips, inputs) may round, and only to 2px (`rounded-ctl`). Never `rounded-xl`, never pills, never circles. The recurring silhouettes are the hard-edged plate (an ink or ink-raised rectangle carrying type over a photo) and the hairline: 1px lines used as dividers, table rules, grid grout, borders, and the single green accent under the wordmark. The ticker separators are 4px squares of `ink-line`, not dots or bullets.

## Components

There are no cards. The vocabulary is buttons, chips, plates, stamps, hairline tables, the ticker, and the board grid.

### Buttons
- **Shape:** 2px radius (`rounded-ctl`), minimum 48px height (`min-h-12`), flex-centered label.
- **Voice:** labels are `.display` (Archivo expanded, uppercase) at 16px with `tracking-wide`, and they say what happens: "Join the text list", "Call (662) 841-5959", "Get directions".
- **Primary:** LQ Green fill, ink text, 28px horizontal padding (`px-7`; the compact masthead variant uses `px-5` at 15px). Hover fills LQ Press; active nudges down 1px (`active:translate-y-px`).
- **Secondary:** transparent with a 1px bone border, bone text, same metrics. Hover fills `ink-raised`. No third tier exists.
- **Disabled:** 60% opacity while submitting.

### Chips (filter row)
- **Style:** transparent, 1px border, 2px radius, 48px min height, DM Mono tag uppercase label, 16px horizontal padding.
- **State:** inactive is `ink-line` border with bone text, hover moves the border to ash; active (via `aria-pressed`) is LQ Green border with LQ Green text: no fill change. This is the allowlisted "active filter chip" use of green.

### Caption plates
- **Style:** hard-edged ink rectangle (`bg-ink`, 12px x 8px padding) carrying DM Mono tag uppercase text, sitting flush on a photo's bottom-left edge; a second ash plate for the category joins it with a 1px gap. The style-guide photo caption uses the same plate in `ink-raised`.

### SOLD stamp
- **Style:** `.display` text in LQ Green on an ink plate with a 3px LQ Green border (4px in the large style-guide specimen), rotated -6deg, pinned to a photo's top-right corner. `aria-hidden` where decorative; text is literally "Sold".
- **Behavior:** renders visible for no-JS visitors; after mount, stamps below the fold hide and land (see Motion) when 60% scrolled into view.

### Inputs / Fields
- **Style:** 1px `ink-line` border, 2px radius, 48px min height, 16px horizontal padding, body-size bone text, ash placeholder. On the ink field the input is `bg-ink`; caret is bone.
- **Focus:** the global ring: `outline: 2px solid bone; outline-offset: 2px` on `:focus-visible`, everywhere.
- **Error:** a plate, not a toast: `role="alert"`, 1px `ink-line` border, `ink-raised` fill, 15px bone text. Error copy is plain and human ("That number doesn't look right. Ten digits, like 662 555 0142.").
- **Checkbox:** native, 20px (`size-5`), `accent-color` bone, wrapped in a 48px-tall label so the whole line is the tap target.

### Navigation
- **Masthead:** logo (h-12/h-14) over a 1px LQ Green hairline (the allowlisted wordmark hairline), with DM Mono tag uppercase anchor links in ash hovering to bone, hidden on mobile, plus the compact green CTA. Every link is a 48px tap target (`min-h-12`).
- **Footer:** hairline-topped, logo, mono address line, a privacy link, and the mono sign-off "Nothing on this site is for sale online. The store is the store."

### Ticker (signature)
A conveyor of store facts between hero and board: `ink-raised` band with `ink-line` borders top and bottom, min 48px tall, DM Mono tag uppercase ash items separated by 4px `ink-line` squares. The track is the content duplicated once (`aria-hidden` on the copy) translating to -50% over 36s, linear, infinite. It pauses on hover and focus-within, and a bordered Stop/Play button (48x48px, `aria-pressed`) sits flush right. A visually hidden h2 labels it for screen readers.

### The board grid (signature)
The deal board described in Layout: hairline-grouted asymmetric photo mosaic, caption plates bottom-left, SOLD stamps top-right, filter chips above, and a mono footnote below ("Shot on our floor. Sold means somebody beat you to it."). Filtering is instant show/hide by category; there are no prices anywhere, because prices live on the physical tags.

### Motion (the warehouse day)
Three authored moments; nothing else animates, and no section fades up on scroll.

- **Roll-up door** (`.hero-door`): hero photo reveals via `clip-path: inset(55% 0 0 0)` to `inset(0)`, 700ms `cubic-bezier(0.65, 0, 0.25, 1)`. It starts 45% open so the LCP image paints on the first frame. Headline, standfirst, and buttons follow with `.hero-rise` (22px rise + fade, 650ms `cubic-bezier(0.2, 0.8, 0.2, 1)`) staggered at 350/480/600ms.
- **Conveyor ticker** (`.ticker-track`): 36s linear infinite translate to -50%, pausable by hover, focus, and the Stop button.
- **Stamp landing** (`.stamp-land`): 480ms `cubic-bezier(0.16, 1, 0.3, 1)`, scale 1.8 at 3deg falling through 0.92 at -8deg to rest at 1 and -6deg, triggered once per stamp by IntersectionObserver at 0.6 threshold.

**The Three Moments Rule.** New motion must be one of these three moments or speak their freight grammar (stamps, tickers, doors, loads). Generic fade-up-on-scroll, parallax, and hover zooms are outside the world.

**The Reduced Motion Rule.** Under `prefers-reduced-motion: reduce`, all four animation classes are set to `animation: none`, `.hero-rise` and `.stamp-hidden` resolve to fully visible, stamps keep their resting -6deg rotation, and a global rule zeroes all remaining animation and transition durations. Content is never lost when motion is off.

## Do's and Don'ts

### Do:
- **Do** keep the TCPA/SMS consent language verbatim from `src/lib/consent.ts` (`SMS_CONSENT_TEXT`, versioned as `SMS_CONSENT_VERSION`). It is regulated content: never shortened, reworded, or restructured for conversion, always beside an unchecked checkbox, with the version bumped on any legally reviewed change.
- **Do** give every interactive element a 48px minimum tap target (`min-h-12` / `min-w-12`), even inline footer links, and rely on the global 2px bone focus ring.
- **Do** run photography full bleed and real: photos are shot on the LQ floor (IMG_8587–8637 set, 2200px wide, 4:3 crop, `object-cover`), never stock, never AI, never boxed in a padded card.
- **Do** write copy in the store's voice: plain, warm, direct, sentence case, "their words not ours" (the tagline is "Limited Quantities + Unlimited Savings"). Buttons say what happens. Urgency must be factually true.
- **Do** end every page at one of the two doors: join the text list or get pre-approved/financing. The store is the store; the site sells the visit.
- **Do** keep pages light: no animation, UI, icon, or state libraries; rural 4G is the baseline (LCP < 2.0s, CLS < 0.05, first-load JS < 120KB gzipped).

### Don't:
- **Don't** use green outside the five allowlisted signals, and never put white text on green.
- **Don't** add gradients, glows, shadows, blur, glassmorphism, icons, emoji, carousels, numbered marker sequences, or icon feature grids. All are confirmed client rejections.
- **Don't** round structural corners; 2px on controls is the ceiling. Never `rounded-xl`.
- **Don't** imply anything can be bought online, show prices, or fabricate testimonials, reviews, or scarcity.
- **Don't** use em dashes or marketing filler (elevate, curated, seamless, transform, unlock, discover) in copy.
- **Don't** add scroll-triggered motion beyond the three moments, and don't ship any motion that survives `prefers-reduced-motion`.
