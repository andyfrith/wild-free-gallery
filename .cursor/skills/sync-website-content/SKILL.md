---
name: sync-website-content
description: >-
  Keep Wild Free Gallery website copy aligned with repository documentation.
  Use when updating agents/current-state.md, project dashboard, decisions,
  audits, roadmap, or docs/ — or when asked to sync, refresh, or validate
  website content.
---

# Sync Website Content

Wild Free Gallery website copy lives in **curated TypeScript modules**, not auto-generated from markdown. When documentation changes, update the relevant content files and run validation.

## Authority model

| Layer | Location | Role |
| ----- | -------- | ---- |
| Source evidence | `docs/`, `agents/`, root `DESIGN.md`, `AGENTS.md` | What happened; inspectable artifacts |
| Operational snapshot | `agents/current-state.md`, `docs/dashboard/project-dashboard-v1.md` | Current phase, health, objectives |
| Website presentation | `website/src/lib/*-content.ts`, `website/src/lib/site.ts` | Curated copy and structured facts for the MVP site |

**Do not** auto-generate narrative prose from markdown. **Do** sync structured facts, links, counts, timeline entries, and audit rows.

## When to apply this skill

Apply after changes to:

- `agents/current-state.md` or `docs/dashboard/project-dashboard-v1.md`
- `agents/decisions.md` (new accepted decisions worth surfacing on Journey)
- `docs/audits/` (new or updated audits)
- `docs/charter/`, `docs/prd/`, `docs/roadmap/`, major `docs/design/` or `docs/architecture/` artifacts
- Project phase or milestone transitions

## Content file map

| Source change | Update these files |
| ------------- | ------------------ |
| Phase, health, objective, milestone | `website/src/lib/site.ts` → `PROJECT_STATUS`; `HOME_PROGRESS_METRICS` via home-content |
| Dashboard timeline / recent milestones | `website/src/lib/home-content.ts` → `HOME_JOURNEY_SNAPSHOT`; `website/src/lib/journey-content.ts` → `JOURNEY_TIMELINE` |
| New audit published | `website/src/lib/artifacts-content.ts` → `ARTIFACT_AUDIT_ROWS`, `ARTIFACT_AUDIT_LINKS`; `journey-content.ts` → `JOURNEY_AUDIT_SUMMARIES`; update manifest |
| New strategic decision (DEC-*) | `website/src/lib/journey-content.ts` → `JOURNEY_PIVOTS` (keep to 3–5 surfaced items) |
| Featured / home artifacts | `website/src/lib/home-content.ts` → `HOME_ARTIFACT_CARDS` |
| Primary blueprint on Artifacts page | `website/src/lib/artifacts-content.ts` → `ARTIFACTS_PRIMARY_BLUEPRINT` |
| Artifact category counts | `website/src/lib/artifacts-content.ts` → `ARTIFACT_CATEGORIES` |
| Published artifact total | `website/src/lib/site.ts` → `PUBLISHED_ARTIFACT_COUNT`; `website/scripts/content-manifest.json` → `publishedArtifacts` |
| Story / About narrative | `story-content.ts`, `about-content.ts` — **only when explicitly requested or materially changed** |

## Workflow

```
1. Read agents/current-state.md and the changed source doc(s)
2. Identify structured facts vs narrative copy
3. Update website/src/lib/*-content.ts (and site.ts if status changed)
4. If artifact count or audit list changed → update website/scripts/content-manifest.json
5. Run: cd website && npm run content:check
6. Run: cd website && npm run build
7. If milestone-level change → update agents/current-state.md and dashboard
```

## Validation

```bash
cd website && npm run content:check
```

The script checks:

- All `repoFileUrl()` paths in `website/src/lib/` exist on disk
- `PUBLISHED_ARTIFACT_COUNT` matches `content-manifest.json`
- Audit IDs in content match manifest and audit files exist
- `PROJECT_STATUS` aligns with `agents/current-state.md` (warnings on drift)

Fix all errors before marking work complete. Warnings require human judgment.

## Link conventions

Use helpers from `website/src/lib/site.ts`:

- `repoFileUrl("docs/...")` — links to files in this repository
- `GITHUB_URL`, `GITHUB_DOCS_URL`, `GITHUB_AGENTS_URL` — folder links

Never hardcode `github.com/.../blob/main/...` outside `site.ts`.

## Do not

- Blind-sync Story or About prose from charter/PRD without editorial review
- Add MDX pipeline or auto-generators unless explicitly requested (see DEC-016, Audit A-003)
- Change `PUBLISHED_ARTIFACT_COUNT` without updating `content-manifest.json`
- Surface every new doc on the homepage — curate 4 featured artifacts max

## Related documents

- `website/FOUNDATION.md` — Content stewardship section
- `website/scripts/content-manifest.json` — artifact manifest for validation
- `website/scripts/README.md` — script usage
