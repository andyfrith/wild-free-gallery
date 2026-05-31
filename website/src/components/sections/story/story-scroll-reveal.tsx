"use client";

import { ScrollReveal } from "@/components/scroll-reveal";

/** Story page scroll motion — sections and cards fade in on intersection. */
export function StoryScrollReveal() {
  return (
    <ScrollReveal
      mode="fade-in"
      selector="main [data-scroll-fade]"
      rootMargin="0px 0px -50px 0px"
      threshold={0.1}
    />
  );
}
