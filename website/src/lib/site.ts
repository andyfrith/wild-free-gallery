/** Shared site constants used across layout components. */

export const SITE_NAME = "Wild Free Gallery";

export const GITHUB_URL = "https://github.com/andyfrith/wild-free-gallery";

export const GITHUB_DOCS_URL = `${GITHUB_URL}/tree/master/docs`;

export const GITHUB_AGENTS_URL = `${GITHUB_URL}/tree/master/agents`;

/** Build a GitHub blob URL for a repository file path. */
export function repoFileUrl(path: string): string {
  return `${GITHUB_URL}/blob/master/${path}`;
}

/** Operational snapshot — align with agents/current-state.md and project dashboard. */
export const PROJECT_STATUS = {
  phase: "Phase 1D",
  phaseLabel: "MVP Build",
  health: "Green",
  objective: "Deploy MVP",
  milestone: "Baseline complete",
  badge: "Phase 1D — MVP Build",
} as const;

export const PUBLISHED_ARTIFACT_COUNT = 21;

export const PHASES_COMPLETE = 3;

export const PHASES_TOTAL = 5;

export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/story", label: "Story" },
  { href: "/journey", label: "Journey" },
  { href: "/artifacts", label: "Artifacts" },
  { href: "/about", label: "About" },
] as const;

export type NavHref = (typeof NAV_ITEMS)[number]["href"];

export type PageTheme =
  | "home-theme"
  | "story-theme"
  | "journey-theme"
  | "artifacts-theme"
  | "about-theme";
