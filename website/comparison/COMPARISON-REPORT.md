# Stitch vs App Comparison Report

**Purpose:** Visual fidelity verification only. Stitch exports are design references; the Next.js application architecture is defined in [FOUNDATION.md](../FOUNDATION.md) and DEC-019. Gaps listed here inform token/component updates — not HTML transplant.

**Date:** 2026-05-31  
**Stitch source:** Wild Free Gallery — Cinematic Light screens (archived design)  
**App source:** Next.js website (localhost:3001, production build)  
**Viewport:** 1280px desktop  

Screenshots saved in:
- `stitch-screenshots/` — Google Stitch design exports
- `app-screenshots/` — Playwright captures of the running app

---

## Executive Summary

| Page | Match | Notes |
|------|-------|-------|
| **Home** | **Strong (~92%)** | Layout, nav, hero, dashboard, artifacts grid, timeline, and Symbiotic Studio all align |
| **Story** | **Good (~85%)** | Daybreak palette and sections match; origin block layout differs |
| **Journey** | **Strong (~90%)** | Metrics, timeline, sidebar, and epilogue banner align |
| **Artifacts** | **Good (~88%)** | Hero, bento grid, audit table, and governance cards align |
| **About** | **Strong (~90%)** | Hero, skills, Bizarro, principles, and connect sections align |

The app now closely follows the Stitch Cinematic Light direction after the design-token and per-page navigation fixes. Remaining gaps are mostly content labels, footer richness, and a few layout details.

---

## Home

### Matches
- Frosted fixed navigation with primary "View Source" CTA
- Full-bleed hero with daybreak studio image and gradient overlay
- White progress dashboard strip (phase / health / objective / milestone)
- Two-column "New Paradigm of Proof" editorial section
- Four-column Recent Artifacts grid with grayscale hover images
- Journey Snapshot timeline with primary accent node
- Dark green Symbiotic Studio section with Human/AI domain cards
- Standard footer

### Remaining gaps
- Hero headline scale: Stitch uses 72px/800 weight; app now uses updated tokens but may render slightly smaller on some breakpoints
- Secondary CTA uses glass blur — aligned
- Footer copyright year differs (Stitch: 2023, App: dynamic current year)

---

## Story

### Matches
- Daybreak-white frosted nav with GitHub CTA
- Centered manifesto hero with fade-in treatment
- Full-width hero image with rounded corners
- Core Values / Product Philosophy three-card grid on sage tint
- Bento layout: forest image card + Compass card
- Horizon section with keyword row

### Remaining gaps
- **Origin section layout:** Stitch uses a two-column grid (copy left, pull-quote card right). App stacks quote below copy.
- Quote card styling: Stitch uses a flat gray card; app uses sage-tinted left border treatment (close but not identical)
- Manifesto label: Stitch shows "OUR MANIFESTO"; app shows "THE MANIFESTO"

---

## Journey

### Matches
- Fixed frosted nav with Source Code pill inside link row
- Chronicle badge + serif hero headline
- Four metric instrument cards with progress indicators
- Timeline + Strategic Pivots + Audit Summaries two-column layout
- Dark green quote block with lightbulb icon
- Epilogue banner with concentric tunnel image

### Remaining gaps
- Chronicle version label (Stitch v1.2, App v1.4) — placeholder content
- Stability card sub-label (Stitch "MARGINAL", App shows bar only)
- Footer utility icons in Stitch (globe/cart/profile) not implemented — out of MVP scope

---

## Artifacts

### Matches
- Sticky nav with outline "GitHub Access" button and underline active state
- Hero with metadata label, title, CTAs, and archive drawer image
- Strategic Blueprints bento grid with primary document + category cards
- Audit Repository search/filter + data table
- Transparency Commitments (green) + Technical Source cards

### Remaining gaps
- Secondary category cards: Stitch shows version/date metadata; app shows artifact counts
- Table columns: Stitch leads with DATE; app leads with REF ID (same data, different emphasis)
- Footer: Stitch has multi-column Resources/Legal/Connect; app uses shared simple footer

---

## About

### Matches
- Surface-blur nav with GitHub CTA and mobile menu affordance
- Split hero with Project Lead badge, portrait, and status card
- Three skill cards with icon squares
- Meet Bizarro section with mascot photo and stat boxes
- Dark green Working Principles band
- Let's connect link row

### Remaining gaps
- Badge copy: Stitch "PRODUCT CASE" vs App "PROJECT LEAD"
- Secondary CTA: Stitch "Contact Founder" vs App "Contact Inquiries"
- Mascot label: Stitch "OUR LEAD MASCOT" vs App "Chief Joy Officer"
- Footer: Stitch uses centered minimal footer; app uses shared multi-row footer

---

## Structural HTML Comparison

Section counts match on all five pages (6/4/3/3/5). Class-level diffs are minor:

| Page | Notable class diff |
|------|-------------------|
| Home | Symbiotic section: Stitch `bg-[#1d473d]`, App `bg-primary` (same color) |
| Journey | Epilogue: Stitch includes `w-full`; App uses `group` for hover scale |
| About | Connect section: Stitch has `reveal-on-scroll` animation |

---

## Important: Dev Server Note

Capturing against **port 3000** produced an unstyled page (CSS not loading correctly on that instance). **Port 3001** (current dev) and **port 3002** (production) render correctly with full Tailwind styling. Use:

```bash
cd website && npm run dev    # or npm run build && npm run start
```

---

## Recommended Next Steps (by impact)

1. **Story origin section** — Switch to two-column grid to match Stitch layout
2. **Shared footer variants** — Artifacts/About could use richer Stitch footers post-MVP
3. **Placeholder content sync** — Align labels (Chronicle version, manifesto tagline) with approved copy
4. **Scroll reveal** — Add optional `reveal-on-scroll` for About connect section
