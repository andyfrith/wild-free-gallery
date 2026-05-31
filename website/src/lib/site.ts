/** Shared site constants used across layout components. */

export const SITE_NAME = "Wild Free Gallery";

export const GITHUB_URL = "https://github.com/andyfrith/wild-free-gallery";

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
