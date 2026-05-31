# Wild Free Gallery Agent Instructions

## Mission

Wild Free Gallery is an AI-native product initiative demonstrating product leadership, design thinking, engineering execution, and human-AI collaboration through a real business and public case study.

## Read First

Always review:

1. agents/project-context.md
2. agents/current-state.md
3. agents/decisions.md
4. docs/dashboard/project-dashboard-v1.md

## Product Principles

- Evidence over claims
- Progressive disclosure
- Human-led AI
- Living documentation
- Build in public
- Simplicity over complexity

## Design References

Primary design documents:

- DESIGN.md
- docs/design/design-system-foundation.md
- docs/design/v1-user-experience-blueprint.md
- docs/design/v1-wireframe-specification.md

Visual exploration archives (reference only, not runtime):

- assets/visual-exploration/cinematic-light/ — Google Stitch Cinematic Light exports

## Website Architecture

The website is a **Next.js/React application** — not a Stitch HTML transplant. See DEC-019 and `website/FOUNDATION.md`.

| Layer | Authority |
| ----- | --------- |
| Application (components, tokens, hooks, pages) | `website/src/`, `website/FOUNDATION.md` |
| Design (layout intent, visual direction) | Stitch/Figma exports, DESIGN.md, design-system-foundation.md |

Rules:

- Implement designs through **components and CSS tokens**, not by copying export HTML or scripts.
- New or updated designs are **integrated** into the existing architecture for optimal results.
- Stitch MCP exports update `assets/visual-exploration/` only; merge selectively into the app.
- Do not blind-run `stitch-to-tsx.py`.

## Website Content

When updating governance docs, audits, dashboard, or `agents/current-state.md`:

- Sync structured website facts in `website/src/lib/*-content.ts` (see `.cursor/skills/sync-website-content/SKILL.md`).
- Run `cd website && npm run content:check` before completing the task.
- Do not auto-generate Story/About narrative from markdown unless explicitly requested.

## Deployment

- Production: https://wild-free-gallery.vercel.app
- Setup and checklist: `docs/operations/vercel-deployment.md`
- Post-MVP CI/security: `docs/operations/post-mvp-engineering-hardening.md`

## Development Rules

- Do not introduce features outside approved MVP scope.
- Prefer simple solutions.
- Preserve documentation quality.
- Explain major decisions.
- Update documentation when decisions change.

## Documentation Stewardship

When creating significant artifacts:

- Update dashboard when appropriate.
- Update current-state when appropriate.
- Recommend audit updates when milestones are completed.

## Audit Philosophy

The project uses continuous audits to evaluate:

- Progress
- Product quality
- Design quality
- Technical quality
- Narrative coherence
- Risks
- Project drift

Audits should be honest and evidence-based.
