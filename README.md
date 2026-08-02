# Binary One Solutions — Website

Production website for **Binary One Solutions Ltd** (binaryone.co.ke) — a Nairobi
Managed IT, ERP consulting and Digital Products (NAWIRI loyalty, Agentic AI,
Custom Software) consultancy.

A pixel-exact build of the approved design system: a **TEAL two-skin** palette
(corporate / product / nawiri / policy) rendered on a fixed **1440px** canvas.

## Stack

| Concern    | Choice |
|------------|--------|
| Framework  | Next.js 16 (App Router) + React 19 |
| Language   | TypeScript (strict) |
| Styling    | Tailwind CSS v4 (arbitrary values; `@theme` for fonts only) |
| Fonts      | `next/font` — Sora, Inter, JetBrains Mono, Caveat (self-hosted) |
| Package mgr| pnpm |

## Local development

```bash
pnpm install
pnpm dev            # http://localhost:3000
```

Other scripts:

```bash
pnpm build          # production build (also runs the type-check)
pnpm start          # serve the production build locally
```

> **Dev note (Tailwind v4 + Turbopack):** after adding a *new* page file, its
> unique arbitrary classes may not be emitted until the CSS entry is touched
> (symptom: headings collapse to 16px). Save `app/globals.css` to force a
> re-scan. `pnpm build` always scans fresh, so this never affects production.

## Structure

```
app/                 Routes (App Router) + layout, globals.css, icon.svg
components/
  chrome/            SiteHeader, SiteFooter, ProductsDropdown, NawiriNav
  forms/             Contact / assessment forms + Boardroom Advisory booking
  overlays/          Diagnostic modal
  tools/             Interactive engines (self-checks, reasoning trace, DSAR…)
content/             All copy + data, one file per page (single source of truth)
public/assets/       Images (logos, photography, marks)
design-refs/         Original .dc.html design files + Developer Guide (reference)
```

## Routes (15 pages / 14 public routes)

Home · Managed IT (+ Readiness) · ERP Consulting (+ Pitfalls Guide) ·
Digital Products hub · Agentic AI · Custom Software · NAWIRI (+ Loyalty
Self-Score) · About · Insights · Contact · Data Protection.

All routes currently prerender as **static** content.

## Deployment — Cloudflare Pages

This repo connects to Cloudflare Pages for continuous deployment: every push to
`main` triggers a build.

**Cloudflare Pages → Create project → Connect to Git**, then:

| Setting             | Value |
|---------------------|-------|
| Framework preset    | Next.js |
| Build command       | `pnpm build` |
| Build output        | (set during forms milestone — see below) |
| Node version        | `20` (or newer) |

### Build-output / adapter — decided at the forms milestone

The site is 100% static today, but the **contact and Boardroom Advisory forms**
(Microsoft Graph calendar invite + email to `info@binaryone.co.ke`) are the next
milestone and need server-side execution. The adapter choice depends on that:

- **If forms use Next server actions** → deploy with `@opennextjs/cloudflare`
  (full Next.js runtime; `next/image` optimisation works).
- **If forms are a separate endpoint** (Cloudflare Pages Function or a form
  service) → the app can ship as a static export (`output: 'export'`,
  `images.unoptimized: true`) served directly by Pages.

Until then the config is left runtime-agnostic so the decision isn't pre-empted.

## Roadmap

- [ ] Contact + Boardroom Advisory server actions (Graph invite + form mail)
- [ ] Responsive breakpoints (currently a fixed 1440px canvas + zoom shim)
- [ ] GEO layer (robots, llms.txt, JSON-LD, redirects)
- [ ] Apple-touch icon PNG (SVG favicon already shipped)
