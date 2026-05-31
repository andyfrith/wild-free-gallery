export const STORY_HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBQ_dWieVv8w5JTg6JEMo7LTMMn-kVqIpG5DhCThbCqrhwLkvqE22jt46P9oHeYvUqNzb7cGYEU93X8kQvsd808PdgrHqPFjlykcZJJz-IFUKEDnugxaS2ehYKkCVF_Gf5t6jUWjKL2GzAs7UeIlPbqQyd-Q-cLabkXJBVuxll7Cv6QbNr2UzF2dnJRf4CPhtdQ-1Fl8xvKUc1n5N1O8ZZsUjvBQbs2qlFd8frR0dVLGbmlxZAWWDv_Gz8Va6vSLYKonE8Dco6oB-Eq";

export const STORY_FOREST_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCgPlcIBlZcLDIqJxAeWXQ0hDQqIZjr-B7bD-NcyRb0zEg7XAg6yAYozBtJ4YEE365u6r2k3fIUK2L3nVtEKhgMIBdQwvM3pbqbi4lwbisajNEPCGVrhfuC-qUOVCZHSgwk8zfypxn_rYqfGw2JUJU8-MbeWgW3BqjH5bVMK0LW-HRpc5S2iaB2Hi4C_zgD9RY384k8zcCguCqdD2tU4m2N9ddvPJzuA8afMFeOVuFrJUNtjnFVaIdTuv5-WykLKaO9ToBiijJJL0fD";

export const STORY_HERO = {
  eyebrow: "The Manifesto",
  title: "The Story Behind the Studio",
  description:
    "Wild Free Gallery exists to answer a direct question: what does modern product leadership look like when AI becomes a trusted collaborator throughout the product lifecycle?",
} as const;

export const STORY_ORIGIN = {
  title: "A Return to Clarity",
  paragraphs: [
    "The project began with a gap between how product work is often presented and how it is actually done. Polished outcomes hide the decisions, trade-offs, and learning that make the work credible.",
    "Wild Free Gallery treats documentation, audits, and implementation as first-class deliverables. Visitors can inspect the charter, requirements, architecture, and code—and form their own assessment.",
  ],
  quote:
    "Demonstrated competence over stated expertise. The work should speak for itself.",
  quoteAttribution: "— Program Charter",
} as const;

export type PhilosophyCard = {
  icon: string;
  title: string;
  body: string;
};

export const STORY_PHILOSOPHY_CARDS: PhilosophyCard[] = [
  {
    icon: "fact_check",
    title: "Evidence Over Claims",
    body: "Strategy, design, and engineering choices are published as artifacts. Confidence comes from what you can review—not from what we assert.",
  },
  {
    icon: "layers",
    title: "Progressive Disclosure",
    body: "The site orients quickly on Home, then invites deeper review through Story, Journey, Artifacts, and About without overwhelming first-time visitors.",
  },
  {
    icon: "psychology",
    title: "Human-Led AI",
    body: "AI accelerates research, documentation, and implementation. Humans retain ownership of vision, judgment, prioritization, and final decisions.",
  },
];

export const STORY_BENTO = {
  primary: {
    title: "Blending Discipline with Exploration",
    body: "Cinematic Light visual direction was selected after structured exploration—then integrated into a token-driven Next.js application rather than pasted from design exports.",
  },
  compass: {
    title: "The Compass",
    body: "Every decision is tested against a simple filter: does this create value, improve learning, and remain maintainable within MVP scope?",
  },
} as const;

export const STORY_HORIZON = {
  title: "The Horizon",
  description:
    "Launch the smallest credible product, then iterate in public. The goal is a reusable operating model for AI-native product work—not a one-off portfolio site.",
  keywords: ["Evidence", "Learning", "Craft", "Transparency"] as const,
};

export const STORY_HORIZON_KEYWORDS = STORY_HORIZON.keywords;
