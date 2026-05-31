import { GITHUB_AGENTS_URL, GITHUB_DOCS_URL, GITHUB_URL, PROJECT_STATUS, repoFileUrl } from "@/lib/site";

export const ABOUT_PORTRAIT_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDcSR286bXh-OvWMS-OjNBkowgjVXpZELkNrqHyoENU4Blr-BYpjzpwUGjAsKJI0tgt4faGTIYayONnnI0S5niAYdxUVAQFQOMgh0e_31QoFdPXmBHzQGcd70eD4336fPf3QQRTg8u6fJijMKNhuPa9lI_1HVLolI9ryxCpzgOJkkGwo5EKLyuH2nzASLtBVWSzsnYLeq2nYNW3CvFhVje7PyQT4Uj8eFaUqNctLwX5RxlPGtT1NgiLCo01mfnWjgAPCSNHGL2_hi42";

export const ABOUT_BIZARRO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBIcJwnpjdHn_RCxicrJKb40uz7pRAZAM4uF4-2zlItUlwF3GyGjgcTjtv6d-wf-QloGhuaiGJ8uD6NjIVag_YLLGODl4DDIAdK91z41PoHqKydA6KzByoLBtmzSXnYTu58edxdd5tApCotuVgxpbBKxAotmT-joNsAwU6vBUlMFiggaDm1HIN1zSTa_zwLLq-ptM8wn-cyhyCUhCk38XQdPS6po9bdyO01rc2pm3ecYbVZB4VybhmoVsSrkrpUUSYiGPqLouD02_c2";

export const ABOUT_HERO = {
  badge: "Project Lead",
  title: "Andy Frith",
  subtitle: "Building evidence-first product work in public.",
  description:
    "Wild Free Gallery is a real product initiative and case study in AI-native product leadership. I treat strategy, design, engineering, and documentation as inspectable deliverables—so visitors can evaluate the work directly.",
  statusLabel: "Current focus",
  statusText: `${PROJECT_STATUS.badge}. Production content and deployment in progress.`,
} as const;

export type AboutPrinciple = {
  number: string;
  title: string;
  description: string;
  delay?: string;
};

export const ABOUT_PRINCIPLES: AboutPrinciple[] = [
  {
    number: "01",
    title: "Evidence",
    description:
      "Publish decisions, artifacts, and outcomes. Let reviewers draw their own conclusions from what exists—not from what we claim.",
  },
  {
    number: "02",
    title: "Judgment",
    description:
      "AI accelerates execution; humans retain vision, prioritization, ethics, and final accountability for product choices.",
    delay: "100ms",
  },
  {
    number: "03",
    title: "Craft",
    description:
      "Pursue clarity, simplicity, and maintainability. Quality without perfectionism—ship, learn, and iterate in public.",
    delay: "200ms",
  },
];

export type AboutSkill = {
  icon: string;
  title: string;
  description: string;
  delay?: string;
  span?: string;
};

export const ABOUT_SKILLS: AboutSkill[] = [
  {
    icon: "architecture",
    title: "Product Leadership",
    description:
      "Discovery through launch: charter, PRD, roadmap, scope control, and continuous audits that keep the narrative honest.",
  },
  {
    icon: "code",
    title: "Technical Execution",
    description:
      "Static-first Next.js architecture, design tokens, and component-driven implementation aligned to approved specs.",
    delay: "100ms",
  },
  {
    icon: "smart_toy",
    title: "AI-Native Workflow",
    description:
      "Human-led collaboration with AI for research, documentation, design exploration, and engineering—documented as part of the case study.",
    delay: "200ms",
    span: "md:col-span-2 lg:col-span-1",
  },
];

export type AboutConnectLink = {
  icon: string;
  label: string;
  href: string;
  external?: boolean;
};

export const ABOUT_CONNECT = {
  title: "Let's connect",
  description:
    "Review the repository, read the artifacts, or follow the journey as the MVP moves toward public launch.",
  links: [
    { icon: "folder", label: "Repository", href: GITHUB_URL, external: true },
    { icon: "description", label: "Documentation", href: GITHUB_DOCS_URL, external: true },
    { icon: "gavel", label: "Decisions", href: repoFileUrl("agents/decisions.md"), external: true },
  ] satisfies AboutConnectLink[],
} as const;

export const ABOUT_BIZARRO = {
  title: "Meet Bizarro",
  description:
    "Every studio needs a muse. Bizarro keeps the creative layer human— a reminder that product work should feel alive, not performative. Subtle by design (DEC-017).",
  stats: [
    { value: "1", label: "Chief Joy Officer" },
    { value: "100%", label: "Moral support" },
  ],
} as const;
