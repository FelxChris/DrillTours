# Drill Tours Ltd — Brand Guide

*Exploring Africa. Creating Experiences.*

---

## 1. Brand Idea

Drill Tours is positioned as Africa's leading **indigenous** tourism house — built for diaspora travelers, luxury guests, and institutions who expect the polish of a private office with the grounding of someone who actually knows the terrain.

## 2. The Mark

The logo is the company's original design: **four overlapping mountain peaks**, each built from two layers —

1. A **colored silhouette** behind, in Ghana's flag colors in sequence: red, red, gold, green.
2. A **near-black silhouette** in front of it, slightly smaller and offset down-and-right, covering most of the colored shape underneath.

The result is a sliver of color showing along the upper-left edge of each peak — like a backing card peeking out from behind a black cutout. Each peak also carries a small jagged "ledge" notch on its descending slope, which must stay crisp in any reproduction.

Below the mountains sits a **rounded black badge** (a pill/rounded-rectangle shape) carrying the wordmark: **"Drill"** in regular weight immediately followed by **"TOURS"** in bold, same size, no space, in white, set in a clean grotesk sans-serif. The badge slightly overlaps the base of the mountain shape above it.

### Two ways to use the mark

- **Full badge lockup** — mountains + black badge + "DrillTOURS" wordmark, all as one self-contained unit. This is the primary, most recognizable form of the logo and matches the company's original artwork exactly. Use this in marketing contexts, the splash screen, social avatars, and anywhere the logo needs to stand alone.
- **Icon + separate wordmark** — the mountain icon alone (no badge), paired with a separately-styled "DrillTours" text element next to it. Use this in tight horizontal spaces like a website navigation bar or footer, where the full badge's proportions don't fit well at small sizes. Note the casing difference from the logo artwork: inside the badge/circle artwork itself, the wordmark reads "Drill" + "TOURS" (second word fully capitalized, matching the original logo file exactly). As a standalone text element next to the icon, it reads "Drill" + "Tours" (only the initial capitals), which reads slightly less shouty in running navigation and footer contexts. Both are correct — they're two different applications of the same name, not an inconsistency to fix.

### Variants delivered

| File | Use |
|---|---|
| `logo-primary-on-dark.svg` | Full badge lockup on a black background. Primary usage. |
| `logo-primary-on-light.svg` | Full badge lockup on an ivory/light background. The badge itself stays black regardless. |
| `icon-only-color.svg` | The two-layer mountain mark alone, no badge, no background. For pairing with a separate wordmark, or for contexts needing just the icon. |
| `icon-only-monochrome-black.svg` | Single-color flattened version of the mountains (the two-layer offset effect requires two colors to read, so this variant simplifies to one flat silhouette). Engraving, stamping, single-color print. |
| `logo-white-on-black.svg` | Full badge lockup in white/light grey on black, for contexts where the four-color version won't reproduce well. |

### Clear space & minimum size
Keep clear space around the full lockup roughly equal to the badge's height on all sides. Below about 40px tall, the notch detail on each peak and the badge's rounded corners both start to lose definition — use `icon-only-color.svg` instead at very small sizes, and below 24px, use `icon-only-monochrome-black.svg`.

### Don'ts
- Don't separate the badge from the mountains in the full lockup — they're one unit.
- Don't recolor the peaks outside the red/red/gold/green sequence.
- Don't change the offset amount between the colored layer and the black layer — too little and the color disappears, too much and the black mountain shape looks disconnected from its colored backing.
- Don't change "DrillTOURS" to "Drill Tours," "DRILLTOURS," or any spaced/differently-cased variant.
- Don't round off the notch detail on the peaks.

---

## 3. Color System

| Role | Name | Hex | Use |
|---|---|---|---|
| Primary ground | Ink | `#0F0F0F` | Backgrounds, primary text on light |
| Primary ground (inverse) | Ivory | `#FAF8F3` | Light section backgrounds |
| Logo — Peak 1 & 2 | Red | `#E5302F` / `#D62A2A` | Mountain mark only |
| Logo — Peak 3 | Gold | `#F2B705` | Mountain mark; also usable as a UI accent (links, CTAs, hairline rules) |
| Logo — Peak 4 | Green | `#1E8A3C` | Mountain mark; also usable for Ghana-specific sections, secondary CTAs |
| Logo black layer | Near-black | `#0A0A0A` | The mountain mark's front layer and the badge background — very slightly lighter than pure ink so it reads as intentional, not a rendering error |
| Rare accent | Deep Red | `#8B1538` | Reserved for single, deliberate emphasis moments, separate from the logo reds |

---

## 4. Typography

| Role | Typeface | Notes |
|---|---|---|
| Logo wordmark | Clean grotesk sans-serif | "Drill" regular + "TOURS" bold, one line, no gap, white, inside the black badge. Fixed — it's the logo. |
| Display | **Fraunces** (serif, variable optical size) | Headlines, pull quotes, section titles elsewhere on the site. |
| Body / UI | **Inter** | Paragraphs, navigation, buttons, form labels. |
| Utility / data | **IBM Plex Mono** | Coordinates, stats, eyebrow labels, captions. |

---

## 5. The Splash Screen

The site opens with a brief full-screen intro: black background, the full badge logo fades and scales in, holds for about 1.4 seconds, then the whole screen drains away through an expanding circular reveal centered on the logo — read as a droplet or ripple effect — uncovering the homepage underneath. It shows once per browser session, not on every page navigation.

---

## 6. Layout Principles

- **Editorial, not template.** Left-aligned headlines, asymmetric grids, numbered lists only where order is real.
- **Hairline gold rules**, never heavy borders or drop shadows.
- **The mountain icon as a recurring signature** — used as a section divider with a coordinate caption beneath it (icon-only form, not the full badge, to stay unobtrusive mid-page).
- **Generous whitespace** on ivory sections; tighter, denser rhythm on dark sections.

---

## 7. Voice

Direct, warm, unhurried. Drill Tours doesn't oversell with exclamation points or stacked superlatives — it states what it does and lets specificity do the convincing.

---

## 8. Application Notes

- **Vehicles & uniforms:** full badge lockup on ink ground for larger surfaces; icon-only color version for small/constrained spaces.
- **Business cards:** full badge lockup, primary-on-light or white-on-black.
- **Social avatars:** full badge lockup works well in a circular crop — this is already how it appears on the company's existing Instagram profile.
- **Billboards:** white-on-black lockup for single-color printing constraints; full-color primary-on-dark otherwise.
