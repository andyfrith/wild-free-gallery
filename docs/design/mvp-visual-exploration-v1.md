# MVP Visual Exploration

**Project:** Wild Free Gallery
**Document:** MVP Visual Exploration
**Location:** docs/design/mvp-visual-exploration-v1.md
**Version:** 0.1
**Status:** Draft for Review
**Last Updated:** 2026-05-30

---

# Purpose

This document begins visual exploration for the Wild Free Gallery MVP.

It translates the approved product context, user experience blueprint, wireframe specification, design system foundation, and `DESIGN.md` guidance into visual directions that can be evaluated before implementation.

The purpose is not to create an expansive brand system.

The purpose is to identify a focused MVP visual direction that supports:

- Evidence over claims
- Progressive disclosure
- Human-led AI
- Living documentation
- Product craftsmanship
- Build-in-public transparency

---

# Source Inputs Reviewed

- `agents/project-context.md`
- `agents/current-state.md`
- `agents/decisions.md`
- `DESIGN.md`
- `docs/design/design-system-foundation.md`
- `docs/design/v1-user-experience-blueprint.md`
- `docs/design/v1-wireframe-specification.md`
- `docs/dashboard/project-dashboard-v1.md`

---

# Visual Exploration Goal

Create an MVP visual system that makes Wild Free Gallery feel like an active product studio where creative work, product thinking, engineering execution, documentation, audits, and AI collaboration are part of one living system.

The MVP should feel:

- Clear
- Trustworthy
- Calm
- Contemporary
- Evidence-first
- Human
- Lightly creative

It should not feel:

- Like a marketing landing page
- Like a generic portfolio template
- Like an AI product gimmick
- Like a decorative art site
- Like a dense documentation portal

---

# Recommended Exploration Frame

The approved design system recommends **Product Studio** as the primary visual direction.

This visual exploration keeps Product Studio as the anchor and explores three MVP-feasible treatments within that territory:

1. Product Studio Editorial
2. Product Studio Dashboard
3. Product Studio Field Notes

Each direction uses the same MVP structure and required components.

The difference is visual emphasis, not scope.

---

# Direction 1 — Product Studio Editorial

## Summary

A calm, editorial product experience where typography, spacing, and artifact hierarchy carry most of the visual weight.

## Visual Character

- Large, confident page titles
- Strong reading rhythm
- Minimal card styling
- Thin dividers
- Subtle metadata systems
- Ample whitespace

## Best For

- Product leadership credibility
- Readability
- Fast MVP implementation
- Documentation quality

## Risks

- May feel too restrained
- Creative identity may be under-expressed
- Progress may feel less operational

## Suggested Palette

```yaml
background:
  primary: "#FAFAF8"
  secondary: "#F1F0EC"
  raised: "#FFFFFF"

text:
  primary: "#171717"
  secondary: "#525252"
  muted: "#737373"

accent:
  primary: "#2F6F73"
  soft: "#DDEBEC"

border:
  subtle: "#DDD9D1"
```

## Typography Direction

- H1: Large, composed, high confidence
- H2: Section-oriented and readable
- Body: Generous line height
- Metadata: Small uppercase or compact title case

## Homepage Treatment

Hero should feel like the opening page of a serious product case study.

Primary visual emphasis:

1. What Wild Free Gallery is
2. Current phase
3. Evidence paths

The hero should avoid decorative image or illustration dependency for MVP.

---

# Direction 2 — Product Studio Dashboard

## Summary

A product-operating-system style experience that foregrounds progress, artifacts, audits, and current state.

## Visual Character

- Structured sections
- Compact status modules
- Dashboard-like progress surfaces
- Clear artifact cards
- More visible system state
- Slightly denser layout than Direction 1

## Best For

- Evidence visibility
- Build-in-public transparency
- Product management signal
- Current-state comprehension within two minutes

## Risks

- Can become too utilitarian
- Needs restraint to avoid looking like internal tooling
- About and Story pages need warmth to balance the system feel

## Suggested Palette

```yaml
background:
  primary: "#F7F8F6"
  secondary: "#ECEFEB"
  raised: "#FFFFFF"

text:
  primary: "#111827"
  secondary: "#4B5563"
  muted: "#6B7280"

accent:
  primary: "#365F54"
  secondary: "#8A5A44"
  soft: "#E1EAE5"

border:
  subtle: "#D7DDD5"
```

## Typography Direction

- H1: Clear, product-led, direct
- Section labels: Useful for orientation
- Dashboard values: Slightly stronger weight
- Body: Plain and readable

## Homepage Treatment

Hero should combine orientation with operational state.

Suggested above-the-fold elements:

- Concise project definition
- Current phase indicator
- Two CTAs: Explore the Journey, View Artifacts
- Compact status strip with phase, health, objective, milestone

---

# Direction 3 — Product Studio Field Notes

## Summary

A warmer product studio experience with light creative texture through notes, sketches, reflections, and Bizarro-adjacent moments.

## Visual Character

- Editorial base
- Occasional note-style callouts
- Slightly warmer surfaces
- More visible creative layer
- Human reflections integrated into evidence sections

## Best For

- Differentiation
- Human connection
- Creative identity
- Build-in-public storytelling

## Risks

- Can distract from evidence if overused
- Needs disciplined placement
- Bizarro must remain subtle

## Suggested Palette

```yaml
background:
  primary: "#FBFAF7"
  secondary: "#F0EEE7"
  raised: "#FFFFFF"

text:
  primary: "#1F1D1B"
  secondary: "#5F5A54"
  muted: "#7A746C"

accent:
  primary: "#496A81"
  secondary: "#7A6342"
  soft: "#E7EEF2"

border:
  subtle: "#DDD6CA"
```

## Typography Direction

- H1: Editorial but slightly more personal
- Body: Strong long-form readability
- Notes: Smaller, restrained, never whimsical
- Metadata: Calm and compact

## Homepage Treatment

Hero should remain product-first.

Creative expression should appear below the initial orientation layer, likely as a small reflection module near Journey Snapshot or Story.

---

# Recommended MVP Direction

## Recommendation

Proceed with **Direction 2 — Product Studio Dashboard** as the primary MVP direction, borrowing warmth from **Direction 3 — Product Studio Field Notes**.

## Rationale

This combination best supports the approved experience hierarchy:

1. Orientation
2. Progress
3. Evidence
4. Understanding
5. Inspiration

It also supports the current Phase 1C objective because it can move directly into implementation without requiring custom illustration, complex animation, or brand-heavy visual production.

## Working Name

**Living Product Studio**

---

# Living Product Studio Visual System

## Core Idea

The interface should feel like a public-facing product studio dashboard with enough editorial warmth to remain human.

It should make the project feel active, inspectable, and thoughtfully led.

---

# Visual Principles

## 1. State Is Design

Current phase, project health, milestones, recent artifacts, audits, and next actions should be visible design elements.

## 2. Evidence Has Hierarchy

Artifacts should be easy to scan before they require deep reading.

Each artifact card should answer:

- What is this?
- Why does it matter?
- What can I inspect?

## 3. Creativity Is Subtle

Creative identity should appear through tone, small observations, and selective visual texture.

It should not compete with product evidence.

## 4. AI Is Ambient

AI collaboration should be visible through process notes and artifact history.

Avoid AI-themed decoration.

## 5. Calm Beats Clever

The MVP should feel polished, direct, and confident.

Novelty should never reduce comprehension.

---

# Proposed MVP Tokens

These tokens are exploration candidates, not final implementation tokens.

```yaml
color:
  background:
    page: "#F7F8F6"
    section: "#ECEFEB"
    surface: "#FFFFFF"
    subtle: "#F2F4F1"

  text:
    primary: "#111827"
    secondary: "#4B5563"
    muted: "#6B7280"
    inverse: "#F9FAFB"

  accent:
    product: "#365F54"
    creative: "#8A5A44"
    information: "#386C8F"
    success: "#2F7D5C"
    warning: "#A16207"
    error: "#B42318"

  border:
    subtle: "#D7DDD5"
    strong: "#AEB8AD"

typography:
  family:
    primary: "system-ui"
    mono: "ui-monospace"

  scale:
    hero: "56px"
    h1: "48px"
    h2: "36px"
    h3: "24px"
    body: "17px"
    small: "14px"
    meta: "12px"

layout:
  max_content_width: "1200px"
  max_reading_width: "760px"
  section_spacing_desktop: "96px"
  section_spacing_mobile: "56px"

radius:
  small: "4px"
  medium: "8px"
  large: "12px"

border:
  default: "1px solid"

motion:
  duration: "150ms"
  easing: "ease-out"
```

---

# Component Visual Treatments

## Navigation

MVP treatment:

- Persistent top navigation
- Quiet wordmark
- Center or right aligned page links
- GitHub CTA as restrained outline or text action
- Active state via subtle underline or accent marker

Avoid:

- Heavy nav chrome
- Large logo treatment
- Promotional CTA styling

---

## Hero

MVP treatment:

- Full-width section
- Large direct headline
- Supporting statement constrained to reading width
- Current phase chip
- Primary and secondary actions
- Compact status strip visible near the hero

Suggested headline pattern:

> Wild Free Gallery is a living product studio documenting how a real creative business is built with human-led AI collaboration.

The final copy can be refined, but the visual hierarchy should immediately answer what the project is.

---

## Progress Dashboard

MVP treatment:

- Four to five compact status panels
- Labels small and scannable
- Values direct and current
- Health indicator restrained
- No gamification

Required fields:

- Current Phase
- Project Health
- Current Objective
- Active Milestone
- Upcoming Milestone

---

## Artifact Cards

MVP treatment:

- Card radius: 8px maximum
- Light border
- Minimal shadow or none
- Category label
- Title
- One to two sentence summary
- Action link

Prioritize artifact credibility over decorative styling.

---

## Audit Cards

MVP treatment:

- Similar to artifact cards
- Emphasize findings and actions
- Include date and status
- Make audit seriousness visible through structure, not severity color overload

---

## Timeline

MVP treatment:

- Vertical timeline on mobile
- Split or single-column timeline on desktop
- Dates compact
- Milestones readable
- Outcomes visible

Avoid complex interactive timelines for MVP.

---

## Bizarro / Creative Notes

MVP treatment:

- Small reflection modules
- Low visual priority
- One per long page at most for launch
- Never above primary orientation, progress, or evidence

Possible label:

`Studio Note`

Avoid:

- Mascot UI
- Chat bubbles
- Decorative character art
- Dominant illustration

---

# Page-Level Visual Direction

## Home

Visual priority:

1. Orientation
2. Current status
3. Featured evidence
4. Journey preview
5. Human-led AI model

Home should feel like the project control room and public front door.

---

## Story

Visual priority:

1. Why this exists
2. Product philosophy
3. Creative philosophy
4. Vision

Story should be more editorial than dashboard-like.

This is where warmth can increase.

---

## Journey

Visual priority:

1. Current state
2. Timeline
3. Decisions
4. Audits
5. Learnings

Journey should make momentum inspectable.

---

## Artifacts

Visual priority:

1. Featured evidence
2. Artifact categories
3. Audits
4. Repository access

Artifacts should feel like a curated evidence library.

---

## About

Visual priority:

1. Person behind the work
2. Product perspective
3. Creative perspective
4. Working principles
5. Connection path

About should avoid resume layout and let trust emerge through philosophy and evidence.

---

# MVP Visual Acceptance Criteria

The selected visual direction should pass the following checks:

## 30-Second Check

A first-time visitor can understand what Wild Free Gallery is without scrolling deeply.

## 2-Minute Check

A visitor can understand current project status, progress, and momentum.

## 5-Minute Check

A visitor can find and inspect meaningful evidence.

## 10-Minute Check

A visitor can understand the quality of product thinking, documentation, design discipline, engineering intent, and human-led AI collaboration.

## Scope Check

The direction can be implemented for the MVP without:

- Custom illustration dependency
- Complex animation
- Search
- Authentication
- Interactive gallery systems
- AI chat interfaces
- Content management infrastructure

---

# Open Visual Questions

1. Should the MVP use a mostly light interface only, or include dark-mode-ready tokens from the start?
2. Should artifact cards link directly to repository files, rendered site pages, or both?
3. How much of Bizarro's voice should appear in the MVP launch version?
4. Should the homepage hero include a visual status panel above the fold, or should status begin immediately after the hero?
5. Should the initial implementation use system fonts only, or introduce one web font after performance and licensing review?

---

# Recommended Next Steps

1. Select or revise the **Living Product Studio** direction.
2. Create a homepage visual concept using the selected direction.
3. Validate the concept against the MVP visual acceptance criteria.
4. Translate selected tokens into implementation-ready CSS variables.
5. Begin MVP implementation planning with visual scope locked.

---

# Status

Visual exploration has begun.

No final visual direction has been formally accepted yet.

The current recommendation is to proceed toward **Living Product Studio** unless review identifies a stronger alternative.
