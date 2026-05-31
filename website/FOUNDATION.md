# Website Foundation (v1)

This document defines the **application architecture** for the Wild Free Gallery website. It is the authoritative reference for how the Next.js app is structured, styled, and evolved.

## Design vs application

| Layer | Role | Source of truth |
| ----- | ---- | --------------- |
| **Design** | Visual exploration, layout intent, copy drafts | Google Stitch exports, Figma, wireframes, `DESIGN.md` |
| **Application** | Runtime implementation | This repo: React components, CSS tokens, hooks, pages |

**Google Stitch is design input only.** Stitch HTML exports in `assets/visual-exploration/cinematic-light/` are archived references — not runtime code, not the application structure, and not a code generator target.

The website is a **robust Next.js/React application** built to industry best practices:

- Composable React components (`components/`, `components/sections/`)
- Semantic CSS design tokens in `globals.css` (not copied Tailwind config from exports)
- React-native animation patterns (CSS utilities + client hooks), not pasted Stitch `<script>` blocks
- Route-level layouts, metadata, and accessibility as first-class concerns
- Static-first architecture per DEC-016

When new designs arrive — from Stitch revisions, Figma, or future tools — they are **integrated into this application architecture**, not swapped in wholesale. The goal is optimal implementation quality, not pixel-perfect HTML transplant.

## Principles

1. **Application architecture is authoritative** — Components, tokens, and patterns in `website/src/` define how the product is built.
2. **Design tools inform; they do not dictate structure** — Stitch/Figma express intent; engineers map intent to components and tokens.
3. **Tokens before literals** — Colors, typography, spacing, and motion live in CSS variables (`globals.css`). Pages and components consume tokens; avoid hard-coded hex or one-off magic numbers.
4. **Components over monoliths** — Pages compose section components. Repeated patterns become shared components; page files stay thin orchestrators.
5. **Motion is a first-class layer** — Animations use shared CSS utilities and React hooks (`useScrollReveal`, etc.), not inline scripts from design exports.
6. **Regeneration is input, not output** — `stitch-to-tsx.py` may produce drafts for diffing. The maintained app is never blind-overwritten.

## Architecture

```
src/
  app/
    layout.tsx              # Root shell: fonts, Navigation, flex wrapper
    globals.css             # Design tokens, themes, animation utilities
    page.tsx                # Home — composes section components
    story|journey|artifacts|about/
      layout.tsx            # Route theme + metadata
      page.tsx              # Page composition (sections only)
  components/
    navigation.tsx          # Shared nav (variant props per route)
    footer.tsx              # Minimal footer (branding + copyright; nav is header-only)
    page-theme-shell.tsx    # Applies theme CSS classes
    scroll-reveal.tsx       # Client motion controller (uses hook)
    ui/studio-image.tsx     # Accessible image wrapper
    sections/               # Page section components
      story/                # Story page sections (pilot extraction)
      about/                # About page motion wiring
  hooks/
    use-scroll-reveal.ts    # Shared scroll/motion IntersectionObserver hook
  lib/
    site.ts                 # NAV_ITEMS, GITHUB_URL, shared constants
```

### Canonical design references

Implementation should align with, in order of authority for **engineering**:

1. DEC-016 — Static-first Next.js architecture
2. `docs/design/design-system-foundation.md` — Token semantics and visual language
3. Root `DESIGN.md` — Implementation-facing design specification
4. Stitch / Figma exports — Visual reference for fidelity checks

## Design tokens

Tokens are defined once in `globals.css` and cascade through Tailwind v4 `@theme inline`.

| Category | Mechanism | Example |
| -------- | --------- | ------- |
| Color | CSS custom properties | `--primary`, `--text-secondary`, `--daybreak-sage` |
| Typography | `--fs-*` cascade variables | `--fs-headline-lg`, overridden per theme |
| Spacing | Tailwind spacing scale | `--spacing-lg`, `px-lg`, `py-4xl` |
| Layout | Max-width utilities | `max-w-content-width` (1200px), `max-w-reading-width` (760px), `max-w-copy-*` for prose |

**Tailwind v4 width trap:** Custom `--spacing-lg` makes `max-w-lg` resolve to 1.5rem unless you define `--max-width-lg` in `@theme` (done in `globals.css`). Use `max-w-copy-*` for prose columns; avoid raw `max-w-sm|md|lg|xl|2xl` on layout.
| Motion | Shared utilities + hooks | `fade-in`, `reveal-on-scroll`, `useScrollReveal` |

### Page themes

Route themes adjust token overrides for screen-specific visual direction. Themes are applied in route `layout.tsx` via `PageThemeShell`:

| Route | Theme class | Key overrides |
| ----- | ----------- | ------------- |
| `/` | `home-theme` | 72px headlines, felt texture |
| `/story` | `story-theme` | daybreak-white, #1A1C1B text |
| `/journey` | `journey-theme` | sage primary #2d5a4e, warm background |
| `/artifacts` | `artifacts-theme` | sanctuary bg #fdfdfb, lighter body weight |
| `/about` | `about-theme` | studio bg #F7F8F6 |

Non-home routes receive `theme-standard-type` (64px headlines, 18px body). Theme names describe visual intent; they are not tied to Stitch screen IDs at runtime.

## Design intake workflow

When designs are created or updated (Stitch, Figma, or other):

```
New/updated design export
        ↓
Archive to assets/visual-exploration/ (reference only)
        ↓
Review against DESIGN.md + design-system-foundation.md
        ↓
Map changes to: tokens → components → page composition
        ↓
Implement in React; verify with build + optional visual comparison
        ↓
Update FOUNDATION.md / component docs if architecture changes
```

**Do not:**

- Treat Stitch HTML as the application source of truth
- Blind-run `stitch-to-tsx.py` and commit output
- Copy inline `<script>` blocks from exports into pages
- Add route-specific one-off CSS when a token or component variant would scale

See [scripts/README.md](./scripts/README.md) for Stitch MCP export steps.

## Component design guidelines

- **Sections** — One component per major page block (`EditorialHero`, `PhilosophyCardGrid`, etc.). Props carry content; layout and styling stay internal.
- **Shell** — `Navigation` and `Footer` are identical on every route; `PageThemeShell` applies per-route visual themes to page content only.
- **Buttons** — Use `Button` / `buttonVariants` from `components/ui/button` (always `rounded-lg`). Variants: `default`, `outline`, `surface`, `toolbar`, `link`. Sizes: `cta`, `ctaMd`, `nav`, `sm`.
- **Client boundaries** — Keep `"use client"` at the smallest scope (hooks, interactive widgets). Pages and sections stay server components where possible.
- **Accessibility** — Semantic HTML, meaningful `alt` text, heading hierarchy, keyboard-navigable links. Design fidelity never overrides a11y.
- **Images** — Prefer `next/image` with configured remote patterns; external URLs are acceptable during MVP with proper `alt`.

## Evolution roadmap

| Priority | Work | Status |
| -------- | ---- | ------ |
| Done | Extract `components/sections/` — all five routes | Complete |
| Done | Motion layer (CSS + `useScrollReveal`) | Story, About, Journey |
| Done | Lint hardening | 1 warning (Material Symbols link in layout) |
| **Now** | **Visual review (eyes-on)** | See [docs/VISUAL-REVIEW.md](./docs/VISUAL-REVIEW.md) |
| Soon | Production copy + Vercel deploy | Launch blockers |
| Later | Playwright visual regression + e2e | Post-baseline sign-off |

## Visual review

After architecture changes, run a manual pass before formal testing:

1. [docs/VISUAL-REVIEW.md](./docs/VISUAL-REVIEW.md) — checklist and workflow
2. `npm run dev` → review all five routes at 1280px
3. `npm run screenshots` (with dev server running) → refresh `comparison/app-screenshots/`

## Related documents

- [scripts/README.md](./scripts/README.md) — Design export workflow
- [docs/VISUAL-REVIEW.md](./docs/VISUAL-REVIEW.md) — eyes-on review checklist
- [../docs/design/design-system-foundation.md](../docs/design/design-system-foundation.md)
- [../DESIGN.md](../DESIGN.md)
- [../agents/decisions.md](../agents/decisions.md) — DEC-016, DEC-019
