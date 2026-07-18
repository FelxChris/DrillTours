# Drill Tours Ltd — Website

A luxury African tourism site built with Next.js (App Router), React, Tailwind CSS,
and Framer Motion, for Drill Tours Ltd, Accra, Ghana.

## Stack

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS** — brand tokens (`ink`, `ivory`, `gold`, `forest`, `kente`) defined in `tailwind.config.js`
- **Framer Motion** — used in `components/Mark.js` for the self-drawing logo animation on load

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Project structure

```
app/
  layout.js              — root layout: fonts, metadata, Watermark and SupportButton (site-wide, every page)
  page.js                — homepage: Hero, MissionStrip, PackagesTeaser, Corporate, Testimonials, Blog
  globals.css            — Tailwind directives + brand-specific utility classes (.cdt-field, .cdt-label, .cdt-rule)
  about/page.js          — full About content
  destinations/page.js   — Destinations (5 regions) + Ghana Experiences (9 sites)
  packages/page.js       — full Packages list (all 8)
  gallery/page.js        — full photo Gallery
  reserve/page.js        — Reservation form, its own page
  contact/page.js        — Contact form + map + office details
  journal/               — journal index + 3 individual posts
  privacy-policy/page.js, terms/page.js
  api/reserve/, api/contact/ — backend routes (see SETUP.md)
  robots.js, sitemap.js  — Next.js metadata routes, generate /robots.txt and /sitemap.xml automatically

components/
  PageShell.js      — shared Nav + Footer wrapper used by every page except the homepage (which wraps itself in SplashScreen instead)
  Mark.js           — the brand mark (logo icon). Three render modes: icon-only (default), `badge` (rounded-rectangle pill lockup), `circle` (circular badge lockup, used by the splash screen)
  Wordmark.js       — standalone "DrillTours" text lockup, paired with the icon-only Mark in Nav/Footer (note: the logo artwork itself reads "DrillTOURS" — see BRAND-GUIDE.md for why these differ intentionally)
  SplashScreen.js   — first-load intro animation (see below)
  Watermark.js      — small fixed "©S" mark, bottom-right, every page
  SupportButton.js  — floating WhatsApp support button, bottom-left, every page
  Nav.js, Hero.js, MissionStrip.js, About.js, Divider.js,
  Destinations.js, GhanaExperiences.js, Packages.js, PackagesTeaser.js,
  Reservation.js, Corporate.js, Gallery.js, Plate.js,
  Testimonials.js, Blog.js, Contact.js, Footer.js

brand/
  BRAND-GUIDE.md     — full brand guide (logo rules, color, type, voice)
  logo-*.svg         — the delivered logo variants, including the circular badge
```

## Site map

| Page | Path | Notes |
|---|---|---|
| Home | `/` | Hero, mission strip, package teaser, corporate strip, testimonials, journal teaser |
| About | `/about` | Mission, vision, values |
| Destinations | `/destinations` | 5 regions + 9 Ghana sites |
| Packages | `/packages` | All 8 tour packages |
| Reserve | `/reserve` | Full reservation form |
| Gallery | `/gallery` | Photo gallery, filterable |
| Contact | `/contact` | Contact form, office details, map |
| Journal | `/journal` + 3 posts | Travel articles |
| Legal | `/privacy-policy`, `/terms` | |

Every page (except the homepage's own splash-wrapped layout) shares the same `PageShell` — same Nav, same Footer — so navigation, the watermark, and the support button are consistent everywhere.

## Splash screen, watermark, and support button

- **Watermark** (`components/Watermark.js`): small "©S" mark, fixed bottom-right, on every page. Purely decorative, `aria-hidden` and non-interactive.
- **Support button** (`components/SupportButton.js`): floating circular button, fixed bottom-left (so it never overlaps the watermark), on every page. Opens a small card with a direct WhatsApp link to +233 24 636 1258.
- **Top loading bar**: `nextjs-toploader`, wired in `app/layout.js`, shows a thin gold progress bar at the top of the screen during page navigation — relevant now that switching pages is a real navigation, not an instant same-page scroll.

## Things to wire up before going live

- **Email + Sheets logging** — `app/api/reserve/route.js` and `app/api/contact/route.js` already send real email via Resend and log to Google Sheets; they just need real credentials. See `SETUP.md` for the full walkthrough (Resend API key, domain verification, Google service account).
- **Domain verification in Resend** — `drilltours.com` is owned, but the `from:` addresses (`reservations@drilltours.com`, `contact@drilltours.com`) won't actually send until the domain is verified inside Resend specifically — see `SETUP.md` §1.
- **Social links** — Instagram (`@cliffdrills`) and a TripAdvisor search link are in the footer. The TripAdvisor link goes to a search results page, not a confirmed direct listing URL — update it in `Footer.js` if you have the exact listing link.
- **Journal articles** — two of the three journal posts (`five-days-gold-coast`, `understanding-kente`) are placeholder "coming soon" pages. Drop in real content whenever it's ready.
- **Fonts need network access at build time** (Google Fonts via `next/font/google`). If you're building somewhere offline, self-host the three typefaces instead.

## Brand assets

See `/brand/BRAND-GUIDE.md` for full usage rules. Quick reference:

| Token | Hex |
|---|---|
| Ink | `#0F0F0F` |
| Ivory | `#FAF8F3` |
| Logo Red (peaks 1 & 2) | `#E5302F` / `#D62A2A` |
| Logo Gold (peak 3) | `#F2B705` |
| Logo Green (peak 4) | `#1E8A3C` |
| Rare accent | `#8B1538` |

## Hero slideshow

`components/HeroSlideshow.js` renders a full-bleed background slideshow behind the hero copy. The hero section is now sized to roughly the full viewport height (`min-h-screen`) so the slideshow reads as a genuine first impression rather than a strip.

- **Auto-advances** every 5 seconds.
- **Press and hold** (mouse or touch, anywhere on the hero) pauses on the current slide; releasing resumes the rotation.
- Respects `prefers-reduced-motion` by disabling autoplay (the dots remain clickable).
- Images are the company's own photography, supplied by the CEO and stored in `/public/photos`: the Volta Hotel aerial, Aburi Botanical Gardens' Royal Palm Avenue, Wli Falls, a lakeside resort aerial, a lakeside terrace, and resort grounds with a peacock. These replaced an earlier placeholder set of stock photography now that real company photography is available.
- To swap in more of your own photography: drop a file in `/public/photos` and add/replace an entry in the `SLIDES` array in `HeroSlideshow.js`. No other code changes needed — captions and dot navigation update automatically based on array length.
- Two source images (`lakeside-terrace.png`, `lakeside-lawn.png`) were originally frames extracted from video and had black letterbox bars; these were auto-cropped before being added here. If you have the original un-letterboxed stills, swap them in for slightly higher quality.
- Not yet used on the site, but included in `/public/photos` for later: `accra-architecture.jpg` (striking modern tower architecture, good for a future city-tours section) and `buffet-spread.jpg` (traditional buffet setup, good for a Cultural Experiences section).

## Splash screen

`components/SplashScreen.js` wraps the homepage and shows a brief full-screen intro on first load each browser session: the circular badge logo on black, then an expanding circular "droplet" reveal uncovers the homepage. See `/brand/BRAND-GUIDE.md` §5 for the design intent, and the comments at the top of the component for the SSR-timing tradeoff (a brief, expected flash of the real homepage before hydration decides whether to show the splash — this is normal for any sessionStorage-gated intro on a server-rendered site, not a bug).

To adjust timing, edit `LOGO_HOLD_MS` (how long the logo sits before the wipe starts) and `WIPE_DURATION_S` in that file.

## Domain

`drilltours.com` is owned. To go live:

1. Deploy this project to Vercel (or your host of choice).
2. In Vercel → Project → Settings → Domains, add `drilltours.com`.
3. Vercel gives you DNS records to add wherever the domain is registered.
4. Separately, verify the same domain inside Resend (see `SETUP.md` §1) so outgoing email actually sends — these are two independent verification steps, both required.

## Legal pages

`/privacy-policy` and `/terms` describe exactly what the reservation and contact forms collect (name, email, phone, country, destination, travel date, package, notes) and how it's used — accurate to the actual code in `app/api/reserve/route.js` and `app/api/contact/route.js`, not generic boilerplate. Both are linked from the footer and from a short notice under the reservation form's submit button.

The terms page includes an honest note that it isn't a substitute for review by a lawyer familiar with Ghanaian tourism and consumer protection law — worth doing once the business is taking real bookings and payments, particularly for the liability and cancellation sections.

## SEO basics

- `app/robots.js` and `app/sitemap.js` are Next.js's standard metadata route conventions — they generate `/robots.txt` and `/sitemap.xml` automatically at build time, no manual file needed. The sitemap lists all 7 real pages (homepage, journal index, 3 journal posts, privacy policy, terms).
- If you add new pages later, add them to the array in `app/sitemap.js` or they won't be discovered as easily by search engines.

## Gallery

`components/Gallery.js` now uses the same 9 real photos that live in `/public/photos` (the same set the hero slideshow draws from), filterable by category: Ghana, Wildlife, Culture, Adventure. There's no "Beaches" category — none of the available real photos are actually beach shots, and labeling one as a beach photo when it isn't would be misleading. Add a real beach photo to `/public/photos` and a `Beaches` entry to both `CATEGORIES` and `ITEMS` in that file if one becomes available.

## Reservation confirmation, 404 page, OG images, breadcrumbs

- **Reservation confirmation** — submitting the reservation form now navigates to `/reserve/confirmed?name=...&destination=...` instead of swapping in an inline success message. The page is split into a server component (`app/reserve/confirmed/page.js`, so it can export `metadata`) and a client component (`components/ConfirmationContent.js`, which reads the URL params) — Next.js doesn't allow a `metadata` export from a Client Component, so this split is required, not optional. The confirmation page is excluded from the sitemap and disallowed in `robots.js` since it's only meant to be reached right after a real submission, not indexed or bookmarked.
- **404 page** — `app/not-found.js` is Next.js's file convention for this; it renders automatically for any unmatched route. Shows the icon-only mark and links to the most likely places someone meant to go.
- **Per-page Open Graph images** — every real page has its own `opengraph-image.js` (the file-convention Next.js uses to auto-generate social share previews), built from a shared template in `lib/og-image.js`. The mountain mark in these images is a simplified flat single-layer version, not the real two-layer offset design — the renderer behind this feature (Satori, via `next/og`) only supports a constrained subset of CSS/SVG, so this is a deliberate simplification, not a bug. If you add a new page later, copy the pattern from any existing `opengraph-image.js` file and give it its own eyebrow/title text.
- **Breadcrumbs** — `components/Breadcrumbs.js` is a small reusable trail (`Home / Section / Page`), added to every real page except the homepage and the 404 page, where it wouldn't add anything.
- **Top loading bar** — see the section above; relevant because navigation between pages is now real, not instant scrolling.

## Accessibility: focus states

`app/globals.css` now has a global `:focus-visible` rule (gold outline, on every link/button/input) so keyboard users — Tab key, screen magnifiers, anyone not using a mouse — can see where focus is, site-wide. It deliberately uses `:focus-visible` rather than plain `:focus`, so mouse users don't see an outline flash on every click, while keyboard navigation still shows it reliably (well-supported across browsers since 2022, no fallback needed). Form fields (`.cdt-field`) already had their own focus treatment (a border-color change) and explicitly suppress the new outline to avoid a doubled-up look.

This same pass also fixed two leftover references to the old muted-gold brand color (`#c8a44d`, from before the real logo's brighter palette was adopted) in `::selection` and `.cdt-rule` — cosmetic, but worth knowing those were stale rather than intentional.

## FAQ

`components/FAQ.js` is a simple accordion on the homepage, just above the footer. Content is real (visa requirements, how the reservation flow actually works, cancellation policy, response times) rather than generic filler, and links out to the full visa guide and terms page where there's more to say than fits in one FAQ answer. Add or edit entries in the `FAQS` array in that file — each one is a `{ q, a }` pair, and `a` can be plain text or JSX if it needs an inline link.

## Testimonials section

`components/Testimonials.js` does not use fabricated client quotes attributed to named people or organizations — that would be a false claim about the company's history. Instead it carousels through short brand-voice statements (`STATEMENTS` in that file) describing what to expect, each tagged by travel type rather than a fake name, and links out to the company's real Instagram (`@cliffdrills`) for actual traveler stories, photos, and video. Real client testimonials exist on Instagram as photos/videos, which can't be pulled or transcribed automatically — if you want real quotes in this carousel later, the text would need to be typed out from those posts/comments directly rather than sourced from a screenshot.

