---
name: LQ Furniture
description: Bright lit-set marketing site for a Tupelo, MS furniture warehouse. Limited Quantities + Unlimited Savings.
colors:
  lq-green: "#6BB22E"
  lq-press: "#588F24"
  lq-deep: "#3E6B1A"
  paper: "#FAF7F1"
  cream: "#F1EBDF"
  sand: "#E2D9C7"
  ink: "#1B1A16"
  stone: "#6D675A"
typography:
  display:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(2.5rem, 0.75rem + 7vw, 5.5rem)"
    fontWeight: 700
    lineHeight: 0.97
    letterSpacing: "-0.012em"
    fontVariation: "'wdth' 115"
  h1:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(2.25rem, 1.3rem + 4.2vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 115"
  h2:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(1.75rem, 1.1rem + 2.6vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.12
    fontVariation: "'wdth' 115"
  h3:
    fontFamily: "Archivo, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.3
  body-lg:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "1.3125rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.65
  tag:
    fontFamily: "Archivo, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.06em"
    fontVariation: "'wdth' 110"
rounded:
  ctl: "6px"
spacing:
  gutter-sm: "20px"
  gutter-md: "40px"
  gutter-lg: "64px"
  section-y: "64px"
  section-y-lg: "80px"
  tap-min: "48px"
components:
  button-primary:
    backgroundColor: "{colors.lq-green}"
    textColor: "{colors.ink}"
    rounded: "{rounded.ctl}"
    padding: "0 28px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.lq-press}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.ctl}"
    padding: "0 28px"
    height: "48px"
  button-secondary-hover:
    backgroundColor: "{colors.cream}"
  chip:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    typography: "{typography.tag}"
    rounded: "{rounded.ctl}"
    padding: "0 16px"
    height: "48px"
  chip-hover:
    backgroundColor: "{colors.sand}"
  chip-active:
    backgroundColor: "{colors.lq-green}"
    textColor: "{colors.ink}"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.ctl}"
    padding: "0 16px"
    height: "48px"
  lower-third-name:
    backgroundColor: "{colors.lq-green}"
    textColor: "{colors.ink}"
    typography: "{typography.tag}"
    padding: "8px 12px"
  lower-third-category:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.tag}"
    padding: "8px 12px"
  sold-badge:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.lq-deep}"
    typography: "{typography.h3}"
    padding: "2px 12px"
---

# Design System: LQ Furniture

## Overview

**Creative North Star: "The Lit Set"**

The site is the furniture makeover show, playing on a bright set. This world replaced an earlier dark ink-field rendition that the client rejected after seeing it built; nothing from that world survives here. A warm paper field carries big square photographs of the real warehouse floor in Tupelo, and the whole system exists to make that photography glow: cream and sand do the quiet structural work, warm ink talks, and one working green marks where something happens. Photos are labeled the way television labels people, with lower-third caption bars, and scarcity is stamped on with a SOLD badge because the scarcity is real. The visual world is the HGTV reveal grammar (direction roll 3f585062); the homepage structure is the filterable deal board retained from surface roll 6e5352b2.

Type carries the show's two registers: Archivo set a touch wide (115% width, bold, uppercase) is the episode title, and the same face at 110% semibold caps is the lower-third caption voice; Newsreader talks like a person from North Mississippi in between. DM Mono was retired with the dark world and does not appear.

Motion is the reveal grammar in five authored moments and nothing else: the hero settles like a locked-off camera move, photos wipe in once like a segment cut, lower-thirds rise behind them, the SOLD badge pops, and a broadcast ticker runs store facts under the hero until the visitor hits Stop. Everything collapses under `prefers-reduced-motion` with the content left visible.

The rejections are confirmed client positions, not taste: nothing that looks AI-generated (gradients, glows, glassmorphism, icon feature grids, numbered marker sequences, carousels, fabricated testimonials, emoji, stock or AI imagery), and no dark field.

**Key Characteristics:**
- Bright warm paper field (#FAF7F1) everywhere; the dark world is dead and must not return
- One working green as the action color; green surfaces always carry ink text, and only lq-deep may appear as green text on the light field
- Two type voices from one show: Archivo wide shouting episode titles and captioning photos, Newsreader talking
- Square full-bleed floor photography labeled by lower-third caption bars, never boxed in cards
- Depth is one soft lift shadow on raised controls only; everything else separates with 1px sand hairlines
- Five authored motion moments in reveal grammar, all reduced-motion safe

## Colors

Eight colors: five warm neutrals build the set, three greens are one action color in three states.

### Primary
- **LQ Green** (#6BB22E): the action color. Fills the primary buttons, the active filter chip, the lower-third name plate on photos, the ticker's separator dots, and the text `::selection` highlight. Always carries ink text (6.8:1). Never used as text on the light field: it measures 2.4:1 there.
- **LQ Press** (#588F24): the pressed and hover state of anything already green, the input caret, the checkbox `accent-color`, and the SOLD badge's border. Never a resting fill of its own.
- **LQ Deep** (#3E6B1A): the only green permitted as text on light surfaces (5.9:1 on paper). Carries the SOLD badge text, the "Open now" status line, and green link-hover states. Never a background.

### Neutral
- **Paper** (#FAF7F1): the page field. `html` and `body` background, the input fill, the raised confirmation and error plates, the category caption plate, and the SOLD badge fill.
- **Cream** (#F1EBDF): raised bands and surfaces one step off the field: the ticker band, the "why prices are low" and text-list section bands, the footer, resting filter chips, and the secondary button's hover fill.
- **Sand** (#E2D9C7): every hairline and quiet fill: section borders, hours-table rules, input borders, chip and ticker-button hover fills, the scrollbar thumb.
- **Ink** (#1B1A16): primary text (16.2:1 on paper), the secondary button's 2px border, the focus ring, and the text sitting on every green surface.
- **Stone** (#6D675A): secondary text (5.3:1 on paper, 4.8:1 on cream): supporting paragraphs, labels, placeholders, hours values, footer lines.

### Named Rules
**The Ink-on-Green Rule.** Green surfaces always take ink text (6.8:1). White on green measures 2.6:1 and is never used.

**The Deep Green Text Rule.** On the light field, the only green that may be text is lq-deep. Bright lq-green as text on paper measures 2.4:1 and never ships; when a green accent must read, it reads in lq-deep.

**The Lit Set Rule.** The field stays bright and warm so the floor photography does the selling. No dark sections, no dark theme, no washes or gradients over photos; the client rejected the dark rendition after seeing it built.

## Typography

**Display Font:** Archivo (variable width axis via next/font, latin subset)
**Body Font:** Newsreader (normal + italic loaded, via next/font, latin subset)

**Character:** One broadcast face in two registers plus a talking serif. Archivo stretched to 115% width, bold, uppercase (`.display`) is the episode title; Archivo at 110% width, semibold, uppercase, letter-spaced 0.06em (`.lower-third`) is the TV caption bar that labels photos, nav links, hours values, and form labels. Newsreader at 18px carries all running copy in a plain North Mississippi voice. DM Mono was retired with the dark world.

The two voices are reusable classes in `src/app/globals.css`: `.display` (`font-stretch: 115%; font-weight: 700; text-transform: uppercase`) and `.lower-third` (`font-stretch: 110%; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em`).

### Hierarchy
- **Display** (`.display`, 700, clamp 40-88px, line-height 0.97, tracking -0.012em): the hero headline. One per page.
- **H1** (`.display`, 700, clamp 36-60px, line-height 1.02, tracking -0.01em): section headlines ("This week's floor", "Financing available") and interior page titles.
- **H2** (clamp 28-40px, line-height 1.12): a declared middle step in the scale, reserved for denser interior pages; the shipped homepage jumps straight from display/h1 to h3.
- **H3** (24px, line-height 1.3): subsection headings on prose pages (semibold Archivo, sentence case), the confirmation-plate heading, and the SOLD badge size (both in the `.display` voice).
- **Body-lg** (Newsreader 400, 21px, line-height 1.6): the hero standfirst paragraph only.
- **Body** (Newsreader 400, 18px, line-height 1.65, max width `max-w-xl`/~36rem): all running copy.
- **Tag** (13px, line-height 1.4, tracking 0.06em, always with `.lower-third`): caption bars, nav links, hours values, form labels, ticker items, chip labels, footer lines.
- **Button label** (16px / `text-[1rem]`, `.display` with `tracking-wide`) and **fine print** (15px / `text-[0.9375rem]`: TCPA consent text, form errors, swatch notes, the compact masthead CTA): two deliberate non-token steps, reused consistently in markup as arbitrary values. Keep them at exactly these sizes; do not promote them to tokens or round them to neighbors.

### Named Rules
**The Two Registers Rule.** Uppercase happens only in the two Archivo voices: `.display` shouts, `.lower-third` captions. Newsreader is always sentence case and never uppercase, bold, or letter-spaced.

**The Caption Bar Rule.** A photo is labeled by a `.lower-third` plate sitting on its bottom-left edge, in the tag size, never by a caption below it or text over an unplated image.

## Layout

Full-width bright canvas, no boxed container. Content sits in page gutters that step up with the viewport: 20px (`px-5`), 40px from 640px (`sm:px-10`), 64px from 1024px (`lg:px-16`). The hero photo, the board grid, and the split-section photos run wider than the gutters; text re-enters the gutter.

Vertical rhythm is section-scale: 64px padding (`py-16`), 80px on larger screens (`sm:py-20`). Sections alternate between the paper field and full-bleed cream bands (`bg-cream`) instead of using divider lines; hairlines (`border-sand`) appear inside sections on tables and around the ticker. Anchored sections use `scroll-mt-6`.

Two-column sections use either a straight `lg:grid-cols-2` split (photo half at `min-h-[320px]` + text half) or a 12-column grid with content at `col-span-5` and `col-span-6 col-start-7`, leaving a structural gap in the middle. The hero image is `48svh` tall on mobile, `42svh` from 640px, full bleed, with its lower-third plate pinned bottom-left and the headline block on the paper field beneath it.

The deal board is an asymmetric mosaic: `grid-cols-2 sm:grid-cols-4 lg:grid-cols-6` with 8px gaps (12px from `sm`) and a slim 8px outer inset (`px-2 sm:px-3`), items spanning 2 or 3 of the 6 large columns in an uneven rhythm, every photo `aspect-[4/3] object-cover`.

Lists of facts (hours) are hairline tables: `border-t` on the list, `border-b border-sand` per row, body ink label left, `.lower-third` tag stone value right, `justify-between items-baseline`.

Breakpoints in use are Tailwind defaults `sm` (640px) and `lg` (1024px) only.

**The First Viewport Adaptation.** The direction contract promises both conversion doors (text list and financing) in the first viewport. As built, the hero's two buttons sit below a 42svh photo plus headline and standfirst: the promise holds at 1440x900 and taller, and on phones. On shorter desktop viewports the two doors are carried instead by the always-visible masthead, whose green "Join the text list" button and "Financing" nav link are in view at every height. This is an accepted adaptation, not a defect: shrinking the hero photo further would break the reveal grammar's opening shot, so the masthead holds the doors.

## Elevation & Depth

One shadow exists: **lift** (`box-shadow: 0 1px 2px rgb(27 26 22 / 0.06), 0 8px 24px rgb(27 26 22 / 0.1)`), a soft warm-ink lift under raised controls and plates: green primary buttons, the paper category caption plate on photos, and the paper confirmation card on the cream band. Everything else is flat; separation comes from the cream/sand surface steps and 1px sand hairlines. No gradients, glows, or blur anywhere; all are confirmed client rejections.

**The Raised Control Rule.** `shadow-lift` appears only on something a visitor can press or on a paper plate sitting over a photo or a cream band. Sections, photos, tables, and text never cast shadows.

## Shapes

Structural corners are square: sections, photos, plates, bands, tables, and the SOLD badge all sit at 0 radius. Interactive controls (buttons, chips, inputs, plates that confirm an action) round to exactly 6px (`rounded-ctl`); nothing rounds further. No pills, no circles as containers; the only circular mark is the 6px green separator dot inside the ticker. Photography is square-cornered and full bleed at 4:3. The one rotated element in the world is the SOLD badge, resting at -3deg with a 3px lq-press border, like a stamp pressed on a photo.

## Components

There are no cards. The vocabulary is buttons, chips, lower-third caption plates, the SOLD badge, hairline tables, the ticker, and the board grid.

### Buttons
- **Shape:** 6px radius, minimum 48px height (`min-h-12`), flex-centered label.
- **Voice:** labels are `.display` at 16px with `tracking-wide` and say what happens: "Join the text list", "Call (662) 841-5959", "Get directions".
- **Primary:** lq-green fill, ink text, 28px horizontal padding (`px-7`), `shadow-lift`. Hover fills lq-press; active nudges down 1px (`active:translate-y-px`). The compact masthead variant uses `px-5` at 15px.
- **Secondary:** transparent with a 2px ink border, ink text, same metrics, no shadow. Hover fills cream. No third tier exists.
- **Disabled:** 60% opacity while submitting.

### Chips (filter row)
- **Style:** 6px radius, 48px min height, `.lower-third` tag label, 16px horizontal padding, no border.
- **State:** resting is cream fill with ink text, hover fills sand; active (via `aria-pressed`) is lq-green fill with ink text. Filtering resets all reveal states so remounted figures render static, never stranded clipped.

### Lower-third caption plates
- **Style:** `.lower-third` tag text in ink on plates pinned to a photo's bottom-left edge: the name plate on lq-green (12px x 8px padding), joined by a paper category plate with `shadow-lift` (hidden on mobile, where the name plate compacts to 11px text). The hero's plate is a single green lower-third carrying location.

### SOLD badge
- **Style:** `.display` text reading "Sold" at h3 size in lq-deep on a paper plate with a 3px lq-press border, rotated -3deg, pinned to a photo's top-right corner.
- **Behavior:** renders visible (resting rotation) for no-JS visitors; after mount, badges below the fold hide and pop in with their figure's reveal. The `sold` flags in `src/lib/floor.ts` are placeholder data authored to demonstrate the moment; confirm real sold status with LQ before launch and keep the flags in sync with the floor after that.

### Inputs / Fields
- **Style:** 1px sand border, 6px radius, 48px min height, 16px horizontal padding, paper fill, body-size ink text, stone placeholder, lq-press caret.
- **Focus:** the global ring: `outline: 2px solid ink; outline-offset: 2px` on `:focus-visible`, everywhere.
- **Error:** a plate, not a toast: `role="alert"`, 1px sand border, paper fill, 15px ink text, plain human copy ("That number doesn't look right. Ten digits, like 662 555 0142.").
- **Checkbox:** native, 20px (`size-5`), `accent-color` lq-press, wrapped in a 48px-tall label so the whole consent line is the tap target.
- **Confirmation:** a paper plate with `shadow-lift`, `.display` h3 heading, body stone copy.

### Navigation
- **Masthead:** logo (h-12/h-14) linking to `#top`, `.lower-third` tag anchor links in ink hovering to lq-deep (wrapping below the logo on mobile rather than hiding), and the compact green CTA. Every link is a 48px tap target. The masthead is the fallback carrier of both conversion doors on short viewports.
- **Footer:** sand-hairline-topped cream band with logo, `.lower-third` address and phone line, the privacy link, and the sign-off "Nothing on this site is for sale online. The store is the store."
- **Open-now line:** a `.lower-third` tag line in lq-deep computed in America/Chicago regardless of the visitor's clock, `aria-live="polite"`, reserved to one line height (`min-h-[1.4em]`) so hydration never shifts the column.

### Ticker (signature)
A broadcast strip of store facts directly under the hero: cream band with sand borders top and bottom, min 48px tall, `.lower-third` tag ink items separated by 6px round lq-green dots. The track is the content duplicated once (`aria-hidden` on the copy) translating to -50% over 36s, linear, infinite; it pauses on hover and focus-within, and a Stop/Play button (48px, `aria-pressed`, sand hover) sits flush right behind a soft mask fade so words exit under a gradient edge instead of hard-clipping. A visually hidden h2 labels it for screen readers.

### The board grid (signature)
The deal board described in Layout: asymmetric photo mosaic, lower-third caption plates bottom-left, SOLD badges top-right, cream filter chips above, and a `.lower-third` footnote below ("Shot on our floor. Sold means somebody beat you to it."). Filtering is instant show/hide by category. There are no prices anywhere, because prices live on the physical tags.

### Motion (the reveal grammar)
Five authored moments; nothing else animates, and no section fades up on scroll.

- **Hero settle** (`.hero-camera`): the hero photo settles from scale 1.06 to 1 over 9s, `cubic-bezier(0.2, 0.6, 0.3, 1)`, once on load, like a locked-off camera move. Headline, standfirst, buttons, and the hero plate follow with `.hero-rise` (20px rise + fade, 650ms `cubic-bezier(0.2, 0.8, 0.2, 1)`) staggered at 150/300/450/500ms.
- **Photo wipe** (`.wipe-hidden` / `.wipe-in`): section and board photos wipe in left-to-right once, `clip-path: inset(0 92% 0 0)` to `inset(0)`, 750ms `cubic-bezier(0.65, 0, 0.25, 1)`, triggered by IntersectionObserver at 0.35 threshold. Only elements below the viewport at mount are hidden, so no-JS visitors and above-the-fold content always render visible.
- **Lower-third rise** (`.third-up`): the caption plate rises 12px and fades in over 450ms, delayed 350ms behind its photo's wipe.
- **SOLD pop** (`.sold-pop`): scale 1.6 at 4deg falling through 0.95 to rest at 1 and -3deg, 480ms `cubic-bezier(0.16, 1, 0.3, 1)`, delayed 500ms behind the wipe.
- **Broadcast ticker** (`.ticker-track`): 36s linear infinite, pausable by hover, focus, and the Stop/Play button.

**The Inner Wrapper Rule.** Chromium computes IntersectionObserver geometry after `clip-path`, so a fully clipped observed element never intersects. Wipes therefore always clip an inner wrapper while the observed outer element stays unclipped (see `src/components/Reveal.tsx` and `FloorBoard.tsx`). Never put `wipe-hidden` on the element the observer watches.

**The Five Moments Rule.** New motion must be one of these five moments or speak the reveal grammar (settles, wipes, lower-thirds, badge pops, tickers). Generic fade-up-on-scroll on every section, parallax, and hover zooms are outside the world.

**The Reduced Motion Rule.** Under `prefers-reduced-motion: reduce`, every animation class is set to `animation: none`, hidden states resolve to fully visible, wipe clips resolve to `clip-path: none`, the SOLD badge keeps its resting -3deg, and a global rule zeroes all remaining animation and transition durations. Content is never lost when motion is off.

## Do's and Don'ts

### Do:
- **Do** keep the TCPA/SMS consent language verbatim from `src/lib/consent.ts` (`SMS_CONSENT_TEXT`, versioned as `SMS_CONSENT_VERSION`). It is regulated content, not marketing copy: never shortened, reworded, or restructured for conversion, always beside an unchecked checkbox, with the version bumped on any legally reviewed change.
- **Do** give every interactive element a 48px minimum tap target (`min-h-12` / `min-w-12`), even inline footer links, and rely on the global 2px ink focus ring.
- **Do** run photography square, full bleed, and real: shot on the LQ floor (IMG_8587-8637 set, 2200px wide, 4:3, `object-cover`), never stock, never AI, never boxed in a padded card, always labeled by a lower-third.
- **Do** write copy in the store's voice: plain, warm, direct, sentence case, their words not ours (the tagline is "Limited Quantities + Unlimited Savings"). No em dashes. No marketing filler (elevate, curated, seamless, transform, unlock, discover). Buttons say what happens. Urgency must be factually true.
- **Do** end every page at one of the two doors: join the text list or financing. The store is the store; the site sells the visit.
- **Do** keep pages light: no animation, UI, icon, or state libraries; rural 4G is the baseline (LCP < 2.0s, CLS < 0.05, first-load JS < 120KB gzipped).

### Don't:
- **Don't** put lq-green text on the light field (2.4:1) or white text on green (2.6:1); green text on light is always lq-deep, and green surfaces always take ink.
- **Don't** reintroduce anything from the dead dark world: no ink page fields, no dark sections, no DM Mono.
- **Don't** add gradients, glows, glassmorphism, blur, icons, emoji, carousels, numbered marker sequences, icon feature grids, or fabricated testimonials. All are confirmed client rejections.
- **Don't** round anything past 6px, round structural corners at all, or put `shadow-lift` on non-raised surfaces.
- **Don't** imply anything can be bought online, show prices, or fake scarcity; `sold` flags come from the real floor, not from copywriting.
- **Don't** ship motion outside the five moments, clip an IntersectionObserver target directly, or let any animation survive `prefers-reduced-motion`.
