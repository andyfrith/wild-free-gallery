# DESIGN.md

Version: 1.0

Purpose: Agent-readable implementation specification.

---

# Design Philosophy

Wild Free Gallery is an evidence-first product studio experience.

Design priorities:

1. Clarity
2. Readability
3. Trust
4. Discoverability
5. Progressive Disclosure
6. Human-Led AI

Avoid:

- Marketing-heavy UI
- Decorative complexity
- Excessive animation
- Visual noise

---

# Typography Tokens

```yaml
typography:
  h1:
    size: 48-64px
    weight: 700

  h2:
    size: 32-40px
    weight: 600

  h3:
    size: 24-30px
    weight: 600

  body:
    size: 16-18px
    weight: 400

  small:
    size: 12-14px
    weight: 400
```

---

# Color Tokens

```yaml
colors:
  background:
    primary: neutral-0
    secondary: neutral-50

  text:
    primary: neutral-950
    secondary: neutral-700

  accent:
    primary: accent-500

  semantic:
    success: green
    warning: amber
    error: red
    info: blue
```

---

# Spacing Tokens

```yaml
spacing:
  xs: 4
  sm: 8
  md: 16
  lg: 24
  xl: 32
  2xl: 48
  3xl: 64
  4xl: 96
```

---

# Radius Tokens

```yaml
radius:
  sm: 4
  md: 8
  lg: 12
  xl: 16
```

---

# Elevation Tokens

```yaml
elevation:
  level1: subtle
  level2: medium
  level3: high
```

Use elevation sparingly.

---

# Layout Constraints

```yaml
layout:
  max_reading_width: 800px

  max_content_width: 1200px

  grid:
    desktop: 12
    tablet: 8
    mobile: 4
```

---

# Responsive Rules

```yaml
breakpoints:
  mobile:
    max: 767

  tablet:
    min: 768
    max: 1279

  desktop:
    min: 1280
```

---

# Component Specifications

## Navigation

```yaml
navigation:
  persistent: true
  items:
    - home
    - story
    - journey
    - artifacts
    - about
```

---

## Progress Dashboard

```yaml
dashboard:
  required:
    - phase
    - health
    - objective
    - milestone
```

---

## Artifact Card

```yaml
artifact_card:
  required:
    - title
    - category
    - summary
    - action
```

---

## Audit Card

```yaml
audit_card:
  required:
    - title
    - findings
    - actions
```

---

## Timeline

```yaml
timeline:
  required:
    - date
    - event
    - summary
```

---

# Interaction Rules

```yaml
interactions:
  hover: subtle

  transitions: short

  focus: visible

  keyboard_navigation: required
```

---

# Accessibility Rules

```yaml
accessibility:
  wcag: AA

  keyboard_navigation: required

  focus_indicators: required

  semantic_html: required

  screen_reader_support: required
```

---

# Motion Rules

```yaml
motion:
  purpose:
    - feedback
    - orientation
    - state_change

  avoid:
    - decorative_animation
    - autoplay
    - attention_hijacking
```

---

# Bizarro Rules

```yaml
bizarro:
  role:
    - artist
    - companion

  visibility: subtle

  never:
    - dominate_layout
    - interrupt_flow
```

---

# MVP Constraints

```yaml
mvp:
  required_pages:
    - home
    - story
    - journey
    - artifacts
    - about

  required_components:
    - navigation
    - footer
    - dashboard
    - artifact_card
    - audit_card
    - timeline

  excluded:
    - authentication
    - ecommerce
    - ai_chat
    - personalization
    - user_accounts
```

---

# Implementation Guidance

When design decisions are ambiguous:

1. Prefer clarity over novelty.
2. Prefer readability over density.
3. Prefer evidence over decoration.
4. Prefer simplicity over flexibility.
5. Prefer consistency over optimization.

The experience should feel like a living product studio documenting the transformation of ideas into reality.
