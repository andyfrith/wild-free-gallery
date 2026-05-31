import { GITHUB_AGENTS_URL, GITHUB_DOCS_URL, GITHUB_URL, repoFileUrl } from "@/lib/site";

export const ARTIFACTS_HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA2d172Z8EJfQY6tmdEG5hiR66m3bTcT2AQr-pDpt5ucsF5LYOrjSEDn2LMk1BbbtHWj_4JIhPTppceVAYYJ7HVuEYTpfxXZ46i_MIg1cGD4D50PLtVxCirQ0ujf4tWwrlo_1pnsOUttKrEWQrkplfvF7HXKVEx4nttn0C0CSgiJKhlefM0VoKBqczzco7_NvN6s1NJa1MoqmOk9QZD2EP_7nJZszuufCQ3eh9bc9Il3eJq325IMTfLbfvLQ2d5gCLeiGoUMN07EJmL";

export const ARTIFACTS_HERO = {
  index: "Index 04 / Evidence Repository",
  title: "Evidence Repository",
  description:
    "Strategy, experience, architecture, and review artifacts from the Wild Free Gallery initiative. Each document is versioned in the repository and available for independent review.",
} as const;

export type ArtifactBlueprint = {
  title: string;
  description: string;
  status: string;
  version: string;
  href: string;
};

export const ARTIFACTS_PRIMARY_BLUEPRINT: ArtifactBlueprint = {
  title: "Program Charter v1.0",
  description:
    "The governing document for mission, vision, strategic objectives, audiences, and success criteria. Establishes why the project exists and how progress is measured.",
  status: "Active",
  version: "v1.0",
  href: repoFileUrl("docs/charter/program-charter.md"),
};

export type ArtifactCategory = {
  icon: string;
  iconClass: string;
  code: string;
  title: string;
  description: string;
  count: number;
  href: string;
};

export const ARTIFACT_CATEGORIES: ArtifactCategory[] = [
  {
    icon: "token",
    iconClass: "text-secondary",
    code: "CAT_GOV_01",
    title: "Governance & Strategy",
    description: "Charter, PRD, roadmap, decisions, and project dashboard.",
    count: 7,
    href: GITHUB_AGENTS_URL,
  },
  {
    icon: "palette",
    iconClass: "text-accent-info",
    code: "CAT_DES_02",
    title: "Experience & Design",
    description: "UX blueprint, wireframes, design system, and visual exploration.",
    count: 5,
    href: `${GITHUB_DOCS_URL}/design`,
  },
  {
    icon: "architecture",
    iconClass: "text-primary",
    code: "CAT_ARCH_03",
    title: "Architecture & Engineering",
    description: "Information architecture, technical architecture, and application foundation.",
    count: 4,
    href: `${GITHUB_DOCS_URL}/architecture`,
  },
];

export type ArtifactAuditRow = {
  id: string;
  title: string;
  author: string;
  classification: string;
  date: string;
  integrity: "VERIFIED" | "CONDITIONAL" | "PENDING_REVIEW";
};

export const ARTIFACT_AUDIT_ROWS: ArtifactAuditRow[] = [
  {
    id: "A-001",
    title: "Foundation & Governance Review",
    author: "Wild Free Gallery",
    classification: "GOVERNANCE",
    date: "May 30, 2026",
    integrity: "VERIFIED",
  },
  {
    id: "A-002",
    title: "Experience & Design Review",
    author: "Wild Free Gallery",
    classification: "EXPERIENCE",
    date: "May 30, 2026",
    integrity: "VERIFIED",
  },
  {
    id: "A-003",
    title: "MVP Build Review",
    author: "Wild Free Gallery",
    classification: "ENGINEERING",
    date: "May 30, 2026",
    integrity: "CONDITIONAL",
  },
];

export const ARTIFACT_AUDIT_LINKS: Record<string, string> = {
  "A-001": repoFileUrl("docs/audits/strategic/001-foundation-governance-review.md"),
  "A-002": repoFileUrl("docs/audits/A-002-experience-design-review.md"),
  "A-003": repoFileUrl("docs/audits/A-003-mvp-build-review.md"),
};

export const ARTIFACTS_GOVERNANCE = {
  transparency: {
    title: "Transparency Commitments",
    description:
      "Wild Free Gallery is developed in public whenever practical. Decisions, audits, and documentation live in the repository—not behind claims or polished summaries alone.",
    commitments: [
      { icon: "public", label: "Open Process" },
      { icon: "verified_user", label: "Human Accountability" },
    ],
  },
  source: {
    title: "Technical Source",
    description:
      "The repository is the primary knowledge source: documentation, agent instructions, design references, and the Next.js application.",
    primaryHref: GITHUB_URL,
    primaryLabel: "Source Repository",
    secondaryHref: GITHUB_DOCS_URL,
    secondaryLabel: "Documentation",
  },
} as const;
