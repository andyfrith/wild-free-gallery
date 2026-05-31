import { PHASES_COMPLETE, PHASES_TOTAL, PUBLISHED_ARTIFACT_COUNT, PROJECT_STATUS, repoFileUrl } from "@/lib/site";

export const JOURNEY_EPILOGUE_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAnoUylcyL1S0SD8iN1i7RdQG8inpg7IRl8Fhf2DcBGJM1y6aoGwNxaXKdfPnjIDdECn97l-mMOxE6uo0tuKlrAUf4WwokmELZvXTAFrkLlQdGhN7Nogg5FiK-XX7VupbMA_puRYmM7HC8SZXrriD5lSsiTRJb0fMYfGUoc4WeM24wE8qb8RlIwSVvpgosOmJbFPznI9pW-Cnty9nSvDEcjDfGpdSaZU446jvAux99AfaohuifQ4KUtl8ZOSIAmCFKkFiN7hIaX1Zbr";

export const JOURNEY_INTRO = {
  eyebrow: "Chronicle v1",
  titleLead: "The Evolution of",
  titleEmphasis: "an Idea.",
  description:
    "A documented record of phases, decisions, and audits from foundation through MVP build—updated as the project ships and learns.",
} as const;

export type JourneyInstrument = {
  label: string;
  display: string;
  suffix?: string;
  variant: "progress" | "health" | "count" | "status";
  progressPercent?: number;
};

export const JOURNEY_INSTRUMENTS: JourneyInstrument[] = [
  {
    label: "Phase Progress",
    display: String(Math.round((PHASES_COMPLETE / PHASES_TOTAL) * 100)),
    suffix: "%",
    variant: "progress",
    progressPercent: Math.round((PHASES_COMPLETE / PHASES_TOTAL) * 100),
  },
  {
    label: "Project Health",
    display: PROJECT_STATUS.health,
    variant: "health",
  },
  {
    label: "Published Artifacts",
    display: String(PUBLISHED_ARTIFACT_COUNT),
    variant: "count",
  },
  {
    label: "Current Focus",
    display: PROJECT_STATUS.phaseLabel,
    variant: "status",
  },
];

export type JourneyTimelineEntry = {
  date: string;
  dateTime: string;
  phase: string;
  title: string;
  description: string;
  outcome?: string;
  tags?: string[];
};

export const JOURNEY_TIMELINE: JourneyTimelineEntry[] = [
  {
    date: "May 2026",
    dateTime: "2026-05",
    phase: "MVP Build",
    title: "Next.js application baseline",
    description:
      "Implemented five routes with shared navigation, design tokens, section components, and Cinematic Light visual integration. Audit A-003 recorded a conditional go pending production content.",
    outcome: "Baseline UI complete; deployment and analytics remain open.",
    tags: ["Next.js", "Audit A-003"],
  },
  {
    date: "May 2026",
    dateTime: "2026-05",
    phase: "Visual Exploration",
    title: "Cinematic Light direction selected",
    description:
      "Structured visual exploration produced the Cinematic Light concept set, archived under assets/visual-exploration/ and mapped into application tokens and components.",
    tags: ["Design", "DEC-019"],
  },
  {
    date: "May 2026",
    dateTime: "2026-05",
    phase: "Experience Definition",
    title: "Experience and design foundation",
    description:
      "UX blueprint, wireframe specification, design system foundation, and DESIGN.md established the implementation-facing spec. Audit A-002 validated experience quality.",
    outcome: "Wireframes and tokens approved for MVP build.",
  },
  {
    date: "May 2026",
    dateTime: "2026-05",
    phase: "Foundation",
    title: "Governance and planning stack",
    description:
      "Program charter, V1 PRD, website information architecture, launch roadmap, decision ledger, and Audit A-001 established the operational foundation for execution.",
    outcome: "Phase 1A complete with green project health.",
  },
];

export type JourneyPivot = {
  title: string;
  accent: "primary" | "secondary";
  description: string;
};

export const JOURNEY_PIVOTS: JourneyPivot[] = [
  {
    title: "Static-first MVP",
    accent: "primary",
    description:
      "No database, CMS, auth, or marketplace for V1. GitHub remains the content source; Vercel hosts a static-first Next.js app (DEC-016).",
  },
  {
    title: "Application over export",
    accent: "secondary",
    description:
      "Stitch and Figma inform design intent; React components and CSS tokens are authoritative at runtime (DEC-019).",
  },
  {
    title: "Unified shell",
    accent: "primary",
    description:
      "One global Navigation and Footer on every route—page themes apply to content only (DEC-020).",
  },
];

export type JourneyAuditSummary = {
  title: string;
  status: "Passed" | "Complete" | "Conditional";
  statusTone: "success" | "warning" | "neutral";
  metrics: { label: string; value: string }[];
};

export const JOURNEY_AUDIT_SUMMARIES: JourneyAuditSummary[] = [
  {
    title: "A-001 Foundation & Governance",
    status: "Passed",
    statusTone: "success",
    metrics: [
      { label: "Governance", value: "Complete" },
      { label: "Scope control", value: "Aligned" },
    ],
  },
  {
    title: "A-002 Experience & Design",
    status: "Complete",
    statusTone: "success",
    metrics: [
      { label: "IA alignment", value: "Strong" },
      { label: "Visual direction", value: "Approved" },
    ],
  },
  {
    title: "A-003 MVP Build",
    status: "Conditional",
    statusTone: "warning",
    metrics: [
      { label: "Architecture", value: "Strong" },
      { label: "Launch gate", value: "Content + deploy" },
    ],
  },
];

export const JOURNEY_QUOTE = {
  text: "The greatest risk is placeholder content masquerading as evidence. Replacing it with inspectable facts is the next milestone before public launch.",
  attribution: "Audit A-003",
  href: repoFileUrl("docs/audits/A-003-mvp-build-review.md"),
} as const;

export const JOURNEY_EPILOGUE = {
  eyebrow: "Project Epilogue",
  title: "Continuous Discovery",
  description:
    "Phase 1E—public launch—follows deployment, analytics selection, and a production content pass. After launch, the journey continues through audits, iteration, and new artifacts.",
} as const;
