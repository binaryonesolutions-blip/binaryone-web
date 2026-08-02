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

## Deployment — Cloudflare (Workers via OpenNext)

The app deploys to Cloudflare as a full Next.js runtime using the
[`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare) adapter — **not** a
static export — so server features (the upcoming contact / Boardroom Advisory
server actions) work without re-architecting. Connect the repo under
**Workers & Pages → Import a repository**; every push to `main` triggers a build.

Config lives in `wrangler.jsonc` (`nodejs_compat`, assets binding) and
`open-next.config.ts`.

| Cloudflare build setting | Value |
|--------------------------|-------|
| Build command            | `npx opennextjs-cloudflare build` |
| Deploy command           | `npx opennextjs-cloudflare deploy` |
| Non-production branches   | `npx wrangler versions upload` |

Local scripts:

```bash
pnpm preview    # build + run the Worker locally (workerd)
pnpm deploy     # build + deploy to Cloudflare
pnpm cf-typegen # regenerate Cloudflare env types
```

> **Windows note:** `pnpm preview` / `pnpm deploy` need symlink permission — enable
> **Windows Developer Mode** (Settings → System → For developers) or run elevated.
> Cloudflare's own build runs on Linux and is unaffected; Git-integration deploys
> work regardless of local OS.

## Roadmap

- [ ] Contact + Boardroom Advisory server actions (Graph invite + form mail)
- [ ] Responsive breakpoints (currently a fixed 1440px canvas + zoom shim)
- [ ] GEO layer (robots, llms.txt, JSON-LD, redirects)
- [ ] Apple-touch icon PNG (SVG favicon already shipped)
