# Wild Free Gallery Website

Next.js application for the Wild Free Gallery MVP.

**Architecture:** [FOUNDATION.md](./FOUNDATION.md) — authoritative reference for components, tokens, and design intake.

## Design vs application

- **Design references** — Google Stitch Cinematic Light exports archived in `assets/visual-exploration/cinematic-light/`
- **Application** — This codebase (`src/`) implements designs as a robust React app with CSS tokens and composable components

Stitch is input for visual direction. It is not the source of truth for structure, styling, or behavior. See DEC-019 in `agents/decisions.md`.

## Integrating design updates

When Stitch or other design tools produce new or revised screens:

1. Archive exports via [scripts/README.md](./scripts/README.md) (Stitch MCP)
2. Review the diff against `DESIGN.md` and the design system
3. Map changes to tokens → components → pages in `src/`
4. Run `npm run build` (and optional visual comparison in `comparison/`)

Do not blind-run `stitch-to-tsx.py`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Purpose |
| ------- | ------- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm run content:check` | Validate content links and manifest drift |
| `npm run start` | Production server |
| `npm run screenshots` | Capture app screenshots (requires dev server; uses Playwright) |

First-time screenshot setup: `npx playwright install chromium`

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS v4 + CSS design tokens
- shadcn/ui (minimal)
- Inter + Manrope via `next/font`

Per DEC-016: static-first, no database, no auth, no CMS for MVP.

## Deploy

**Target:** Vercel (Root Directory = `website`).

```bash
npm run build
npm run content:check   # recommended before deploy
```

See [docs/operations/vercel-deployment.md](../docs/operations/vercel-deployment.md) for dashboard setup, CLI deploy, and checklist.

Post-MVP CI, branch protection, and security hardening: [docs/operations/post-mvp-engineering-hardening.md](../docs/operations/post-mvp-engineering-hardening.md).
