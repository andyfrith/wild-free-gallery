# Vercel Deployment

**Project:** Wild Free Gallery  
**Application:** `website/` (Next.js)  
**Status:** Active  
**Last Updated:** 2026-05-31

---

## Overview

The MVP website deploys to **Vercel** per DEC-016 and the MVP technical architecture. The Next.js app lives in the `website/` subdirectory of the monorepo; Vercel must use that folder as the **Root Directory**.

Production flow:

```text
Git push to master (GitHub)
        ↓
Vercel build (website/)
        ↓
Production deployment
```

Rollback: revert the Git commit and redeploy, or use Vercel instant rollback in the dashboard.

---

## Prerequisites

- GitHub repository: [andyfrith/wild-free-gallery](https://github.com/andyfrith/wild-free-gallery)
- Vercel account linked to GitHub
- Node.js 20+ locally for verification

No environment variables are required for the static-first MVP (no database, auth, or API secrets).

---

## First-time setup (Vercel Dashboard)

1. Open [vercel.com/new](https://vercel.com/new) → **Import** `andyfrith/wild-free-gallery`.
2. Configure the project:

   | Setting | Value |
   | ------- | ----- |
   | **Root Directory** | `website` |
   | **Framework Preset** | Next.js (auto-detected) |
   | **Build Command** | `npm run build` (default) |
   | **Install Command** | `npm install` (default) |
   | **Output Directory** | *(leave default — do not set for App Router)* |
   | **Production Branch** | `master` |

3. Deploy. Vercel assigns a `*.vercel.app` URL.
4. Optional: add a custom domain under **Project → Settings → Domains**.

**Production URL (2026-05-31):** https://wild-free-gallery.vercel.app

GitHub is connected with **Root Directory = `website`**. Pushes to `master` trigger production builds.

---

## CLI deployment (alternative)

From the repository:

```bash
cd website
npm install
npm run build          # verify locally first
npm run content:check  # optional content drift check
vercel link            # first time: link to new or existing project
vercel                 # preview deployment
vercel --prod          # production deployment
```

The CLI creates `website/.vercel/` (gitignored). Prefer Git-connected production deploys for continuous delivery.

---

## Pre-deploy checklist

- [ ] `npm run build` succeeds in `website/`
- [ ] `npm run content:check` passes (if content changed)
- [ ] Visual sign-off complete (`website/docs/VISUAL-REVIEW.md`)
- [ ] Changes committed and pushed to `master` (for Git-triggered deploys)
- [ ] No secrets in committed files (`.env*` gitignored)

---

## Configuration files

| File | Purpose |
| ---- | ------- |
| `website/vercel.json` | Framework hint for Vercel |
| `website/next.config.ts` | Security headers (baseline) |
| `website/.gitignore` | Ignores `.vercel`, `.next`, `.env*` |

---

## Security (MVP baseline)

Included now:

- Baseline HTTP security headers in `next.config.ts`
- No server secrets in the repository
- Static-first architecture (minimal attack surface)

Deferred to post-MVP hardening — see [post-mvp-engineering-hardening.md](./post-mvp-engineering-hardening.md):

- Branch protection on `master`
- GitHub Actions CI (build, lint, content check)
- Dependency update automation
- Preview deployment requirements for PRs

---

## Troubleshooting

### Build fails: cannot find module

Run `npm install` in `website/`. Ensure **Root Directory** is `website`, not the repo root.

### Wrong app or 404 on routes

Confirm Root Directory is `website`, not `/`. The Next.js app is not at the repository root.

### Images or fonts fail in production

Remote image domains must be allowlisted in `next.config.ts` if moving from external URLs to `next/image` restrictions. Current MVP uses configured remote patterns or standard assets.

---

## Related documents

- [mvp-technical-architecture.md](../architecture/mvp-technical-architecture.md)
- [website/FOUNDATION.md](../../website/FOUNDATION.md)
- [post-mvp-engineering-hardening.md](./post-mvp-engineering-hardening.md)
