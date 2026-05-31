"use client";

import { useScrollReveal, type UseScrollRevealOptions } from "@/hooks/use-scroll-reveal";

/**
 * Client-only scroll motion controller. Renders nothing; attaches observers on mount.
 */
export function ScrollReveal(props: UseScrollRevealOptions) {
  useScrollReveal(props);
  return null;
}
