# Visual Review Checklist

Use this after each baseline or design-integration pass — **before** formal Playwright/e2e CI.

## When to review

| Trigger | Review type |
| ------- | ------------- |
| Section extraction / architecture pass complete | Full five-route pass |
| Design export integrated (Stitch/Figma) | Affected routes only |
| Token or theme changes in `globals.css` | All routes |
| Pre-launch | Full pass + accessibility spot-check |

**Current milestone:** Baseline architecture pass complete → **eyes-on review now**.

## How to review

### 1. Run the app locally

```bash
cd website
npm run dev
```

Open each route at 1280px desktop width (primary design target):

- http://localhost:3000/
- http://localhost:3000/story
- http://localhost:3000/journey
- http://localhost:3000/artifacts
- http://localhost:3000/about

Also spot-check ~375px mobile on Home and Story.

### 2. Capture comparison screenshots (optional)

With dev server running on port 3000:

```bash
cd website/comparison
PORT=3000 node capture.mjs
```

Screenshots land in `comparison/app-screenshots/`. Compare against:

- `comparison/stitch-screenshots/` (if present), or
- `assets/visual-exploration/cinematic-light/*.html` opened in a browser

See `comparison/COMPARISON-REPORT.md` for known gaps (update after each review).

### 3. What to look for

| Check | Pass criteria |
| ----- | ------------- |
| Typography | Headlines/body match theme scale; no fallback fonts |
| Color / tokens | Primary, surfaces, daybreak palette consistent per route |
| Layout | Grids align; no horizontal scroll; sticky quote on Story lg+ |
| Motion | Scroll reveal fires once; hero fade-in on Story; no flash of unstyled content |
| Navigation / footer | Correct variant per route; active link styled |
| Images | Load; alt present; hover states on cards |
| Spacing | Section rhythm (`py-4xl`, content max-width) feels even |

### 4. Log issues

Record findings in `comparison/COMPARISON-REPORT.md` or a new audit note:

- **Blocker** — wrong layout, broken nav, unreadable text
- **Polish** — motion timing, copy, minor color drift
- **Defer** — post-MVP footer richness, placeholder content

### 5. After review

- Fix blockers in components/tokens (not Stitch HTML paste)
- Re-run `npm run build` and capture screenshots again
- When stable → agree baseline → add Playwright visual regression + a11y e2e

## Formal testing (post-baseline)

Planned after baseline sign-off:

- Playwright visual regression (`comparison/` in CI)
- Accessibility audit (axe or manual checklist)
- Smoke e2e (nav links, page load, no console errors)

Not in scope until baseline is agreed.
