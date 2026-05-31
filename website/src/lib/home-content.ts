import { PROJECT_STATUS, repoFileUrl } from "@/lib/site";

export const HOME_HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuABLR1nzU6S8qxU15M3NGzWzvs2bGFNJ_URpPiyWK9TM63g-l7Ku17I2N5l331pX2GJwhz_dqwRrRCSK1Z2cPgsYwT_p6S-0H60zpEVZgIywzZV-QbU0n6XAtPvjX6vEgmTua4FWawHJ8inXMgMDWEXNG1cnBP0VWoy--pRhJk3ZQvXdqoFHcpURa3LHRK3Y3GClSWSjY2Fock4OBIvBX1IIIpyGmVZyk3y7qU4-0Ke7DLjRg2TEDzbekXDDdo8LyfNsqANCQc6iOIg";

export const HOME_HERO = {
  badge: PROJECT_STATUS.badge,
  titleLead: "A living product studio documenting the transformation of",
  titleEmphasis: "ideas",
  titleEnd: "reality.",
  description:
    "Wild Free Gallery is a real creative business and public case study in AI-native product leadership. Strategy, design, engineering, and decisions are published as inspectable evidence—not claims.",
} as const;

export type HomeProgressMetric = {
  label: string;
  value: string;
  border: string;
  valueClass: string;
  showPulse?: boolean;
};

export const HOME_PROGRESS_METRICS: HomeProgressMetric[] = [
  {
    label: "Current Phase",
    value: PROJECT_STATUS.phaseLabel,
    border: "border-primary/20",
    valueClass: "font-bold text-primary",
  },
  {
    label: "Health",
    value: PROJECT_STATUS.health,
    border: "border-outline-variant/30",
    valueClass: "font-medium",
    showPulse: true,
  },
  {
    label: "Objective",
    value: PROJECT_STATUS.objective,
    border: "border-outline-variant/30",
    valueClass: "font-medium",
  },
  {
    label: "Milestone",
    value: PROJECT_STATUS.milestone,
    border: "border-outline-variant/30",
    valueClass: "font-medium",
  },
];

export type HomeArtifactCard = {
  image: string;
  imageAlt: string;
  label: string;
  labelClass: string;
  title: string;
  description: string;
  date: string;
  href: string;
};

export const HOME_ARTIFACT_CARDS: HomeArtifactCard[] = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGf7rp9WhwfeFoE7qiktoVZKGLZ6GocW_64lc0PRhTbEwRPhSv3ivuDDk3pSGtzoTFjUib1_RfByK4KIuDTrzMCCdcYqZuBmX8tWL6DdNiBlwV0VOlIJrKbXqOPT5OhhehuUxOAHkTyJRgONLntbWa-Edy-oxFnRHth4n3zTzGs4DVFLi9byI5_HU9w_i-RbI5WysplojRqX0ikC2FE-fcV-oFy-L6bDa3j5PekrhQ7SabohzSd84A0d6X531W-rK4SN57kQR-PBe4",
    imageAlt: "Program Charter document cover",
    label: "Governance",
    labelClass: "text-primary",
    title: "Program Charter",
    description: "Mission, vision, strategic objectives, and success criteria for the initiative.",
    date: "May 30, 2026",
    href: repoFileUrl("docs/charter/program-charter.md"),
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuByWXiQiWYFUvM0Dye-zV8ly4mfV583xCmcjVowJEAN1r486NNEtI2Ge-yflf2m6bBfvipBHH2tFZdSXBrDl6FR71iWE3r_vLeFk1jhGQplDCspixgolR3mq9toSV4644Vf65SKZj9uQYZmGQv5TF--uEcr5oWwHifkxHjze9aeTERuQshf6dOzxjkTDOLQb-jV05_hRRKw9tY3zkg5Kcp7ud1cwiiuIpCcs_gLm6I6AdfPKHX03lAlpwY6oAw2veYtIpihiLglD9Oi",
    imageAlt: "Product PRD strategic document cover",
    label: "Strategy",
    labelClass: "text-secondary",
    title: "V1 Product Requirements",
    description: "Scope, user journeys, and success definition for the smallest credible launch.",
    date: "May 30, 2026",
    href: repoFileUrl("docs/prd/wild-free-gallery-v1-prd.md"),
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJ9tkZJONiiELxevDSER-OYkAJX6tC3EDTF9ISZK3p7ypy4XLUmedoZheMLznSNUShHtIIKpNjWyjyLeqIdnPqhGm1m-A9HvQeCJ9_WGy53dK06Qf49MiSjQNB-t9AX7fTLPHwwzi-GTkMh49khYivlLRNnEzbVmrDJR09bXtmaebOQ4pv_ATvnj6QrVj0qzmG7M3Ea89YkzIiDsZMWHz4mk6j7mK-aajW2ZE-k3PY3Ni-tnvlZGuhHzt0NJm8uhTbTZ5L4DoNbcYp",
    imageAlt: "System information architecture diagram cover",
    label: "Architecture",
    labelClass: "text-accent-info",
    title: "Website Information Architecture",
    description: "Navigation model, sitemap, and content strategy for the public MVP.",
    date: "May 30, 2026",
    href: repoFileUrl("docs/architecture/website-information-architecture.md"),
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDCPmsjhTXUkzVPssPzi2DBIuxtfhk4JABXHgu9uQlM7gO2uW2o-bKDUt7OuIP78TSbyk7rb0KEINvgSlu_Ag3IEC9doGHfOjN8fF__C358xlQYPe8nHxJecCDe9LGUWTLO0TC87y-McBpBZ-7Ik9yqpKcl3mKqNd-fvHZB3uXHt_AVnck83iJsVL-U7LhBUaHXezxpqaZ7SQJijSNGQSGYO5CtkHhvz7AhF1ZyPt_s9NXNtFmxwOj49LljvaG_YatmhMDCyMzLXOo0",
    imageAlt: "UX Blueprint wireframe cover",
    label: "Experience",
    labelClass: "text-semantic-success",
    title: "V1 UX Blueprint",
    description: "Experience definition, page intent, and progressive disclosure for all five routes.",
    date: "May 30, 2026",
    href: repoFileUrl("docs/design/v1-user-experience-blueprint.md"),
  },
];

export type JourneySnapshotEntry = {
  kind: "Latest Milestone" | "Previous";
  date: string;
  dateTime: string;
  title: string;
  description: string;
  active?: boolean;
};

export const HOME_JOURNEY_SNAPSHOT: JourneySnapshotEntry[] = [
  {
    kind: "Latest Milestone",
    date: "May 31, 2026",
    dateTime: "2026-05-31",
    title: "MVP application baseline complete",
    description:
      "Five Next.js routes implemented with unified navigation, design tokens, and Audit A-003. Launch gated on production content and deployment.",
    active: true,
  },
  {
    kind: "Previous",
    date: "May 30, 2026",
    dateTime: "2026-05-30",
    title: "Foundation and governance complete",
    description:
      "Charter, PRD, information architecture, roadmap, UX blueprint, technical architecture, and Audits A-001 and A-002 accepted.",
  },
];

export const HOME_MISSION_ITEMS = [
  "Evidence over claims",
  "Human-led AI collaboration",
  "Build in public",
] as const;

export const HOME_DOMAIN_ITEMS = {
  human: [
    "Vision, strategy, and prioritization",
    "Product judgment and final approvals",
    "Ethics and narrative coherence",
    "Architecture and scope decisions",
  ],
  ai: [
    "Research and documentation drafts",
    "Design exploration and prototyping",
    "Engineering assistance and refactoring",
    "Audit synthesis and analysis",
  ],
} as const;
