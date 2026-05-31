"use client";

import { ScrollReveal } from "@/components/scroll-reveal";

/** About page scroll motion — reveal-on-scroll elements transition into view. */
export function AboutScrollReveal() {
  return <ScrollReveal mode="reveal" selector=".reveal-on-scroll" threshold={0.1} />;
}
