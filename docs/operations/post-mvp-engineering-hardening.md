# Post-MVP Engineering Hardening

**Project:** Wild Free Gallery  
**Status:** Planned  
**Last Updated:** 2026-05-31

---

## Purpose

The MVP intentionally prioritizes speed and simplicity (DEC-003, DEC-016). This document captures **deferred** engineering practices to introduce after the first public deployment—without blocking launch.

---

## Current MVP posture

| Area | MVP state |
| ---- | --------- |
| Branch protection | Not configured |
| GitHub Actions CI | Not configured |
| Preview deploy gates | Not required |
| Dependency automation | Not configured |
| Security review cadence | Ad hoc |
| Analytics | Not integrated |

Acceptable for initial launch given static-first architecture and no auth/database.

---

## Recommended phases

### Phase A — CI baseline (first after launch)

Add `.github/workflows/website-ci.yml`:

- Trigger: pull requests and pushes to `master` affecting `website/`
- Steps: `npm ci`, `npm run lint`, `npm run build`, `npm run content:check`
- Fail fast on broken builds before Vercel deploy

**Outcome:** Every change to the app is verified automatically.

---

### Phase B — Branch protection

On GitHub repository settings for `master`:

- Require pull request before merge (optional solo workflow: require self-review checklist)
- Require status checks to pass (`website-ci`)
- Disallow force push to `master`

**Outcome:** Production branch stays deployable.

---

### Phase C — Dependency and supply chain

- Enable GitHub Dependabot for `website/package.json`
- Review major dependency updates before merge
- Consider `npm audit` in CI (warn first, fail later)

**Outcome:** Known vulnerabilities surface early.

---

### Phase D — Deployment safety

- Require Vercel preview deployments for PRs
- Promote to production only from `master`
- Document rollback procedure (already in [vercel-deployment.md](./vercel-deployment.md))

Optional later:

- Vercel deployment protection
- Custom domain + HTTPS (automatic on Vercel)

---

### Phase E — Security and accessibility

- Expand security headers / CSP when analytics is added
- Playwright e2e smoke tests on critical routes
- Accessibility audit (keyboard, contrast, landmarks) — noted in Audit A-003
- Rate limiting only if API routes are introduced (not MVP scope)

---

## Decision trigger

Introduce Phase A when:

- More than one contributor merges to `master`, **or**
- First post-launch feature ships, **or**
- A production incident traces to an unverified merge

Introduce Phase B when CI is stable for two weeks.

---

## Out of scope (until product requires it)

- Authentication / authorization
- Secrets management beyond Vercel env vars
- WAF / DDoS beyond Vercel defaults
- SOC2 / formal compliance

---

## Related documents

- [vercel-deployment.md](./vercel-deployment.md)
- [A-003 MVP Build Review](../audits/A-003-mvp-build-review.md)
- [agents/decisions.md](../../agents/decisions.md) — DEC-016
