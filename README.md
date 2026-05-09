# TuTu Fun Games — Website

Static marketing site for TuTu Fun Games Inc., built with Vite + React + Tailwind, deployed via AWS Amplify.

## Stack

- **Vite 6** + **React 18.3**
- **Tailwind CSS 3.4** with custom design tokens (yellow / black / cream)
- **react-router-dom** for client-side routing
- **react-helmet-async** for per-page SEO meta tags
- Fonts: **Limelight** (Art Deco display, used sparingly) + **Manrope** (body) + JetBrains Mono (labels)

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # produces /dist
npm run preview
```

## Project structure

```
src/
  components/      Header, Footer, Seo, ScrollToTop, DotBand, DecoShapes
  pages/           Home, About, Services, Games, JoinUs, Contact, NotFound
  data/
    company.js     Single source of truth for all content
  hooks/
    useRevealOnScroll.js
  styles/
    index.css
  App.jsx
  main.jsx
public/
  favicon.svg
  robots.txt
  sitemap.xml
  images/          Drop game covers and brand assets here
```

## Pages

- `/` Home — hero, services, selected work (2 live games), philosophy, CTA
- `/about` — capability metrics, services overview, all 3 games, advantages, timeline
- `/services` — 4 service practices with capabilities
- `/games` — full title list (Enso Block, Number Cross, Lumitris)
- `/join-us` — vision + criteria, no specific roles
- `/contact` — direct emails + form

## Pre-launch checklist

Open `src/data/company.js` and verify / update:

- [ ] `address` — currently `155 Queen St, Charlottetown, PE C1A 4B4`
- [ ] `business` and `hi` email addresses are set up and forwarding
- [ ] `metrics` — confirm `10+`, `Millions`, `Dozens` are accurate to use
- [ ] `games[].appStore` links — currently set for Enso Block and Number Cross
- [ ] Drop real cover images into `public/images/games/` and reference via `games[].cover`

In `src/pages/Contact.jsx`, replace `FORMSPREE_ENDPOINT` with the endpoint from your free Formspree account: <https://formspree.io>

In `index.html`, update the `og:image` meta once you have a hero image.

## Deploying to AWS Amplify

The repo includes `amplify.yml`. In the Amplify console:

1. Connect the GitHub repo
2. Build settings auto-detect from `amplify.yml`
3. Add SPA rewrite rule under "Rewrites and redirects":
   - Source: `</^[^.]+$|\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|woff2|ttf|map|json|webp)$)([^.]+$)/>`
   - Target: `/index.html`
   - Type: `200 (Rewrite)`

Without this rule, deep links (e.g. `/about`) will 404 on refresh.

## Design system

Defined in `tailwind.config.js`. Tokens:

- `cream` `#FAF7F0` — page background
- `ink` `#0A0A0A` — text and dark sections
- `yellow` `#FFD60A` — primary accent
- `yellow-deep` `#E8B900` — slightly muted yellow for inline emphasis
- `line` `#E5DFD0` — hairline dividers

Fonts:
- `font-sans` (Manrope) — all body text and most headings
- `font-display` (Limelight) — used **only** on per-page H1 emphasis word, the wordmark, and a handful of decorative spots
- `font-mono` (JetBrains Mono) — eyebrows and metadata

## Adding content

- New game: append to `games` in `src/data/company.js`
- New milestone: append to `milestones`
- New service capability: edit `services[].points`

No new components needed.
