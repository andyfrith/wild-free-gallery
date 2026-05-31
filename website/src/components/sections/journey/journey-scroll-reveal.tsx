"use client";

import { ScrollReveal } from "@/components/scroll-reveal";

/** Journey timeline cards reveal on scroll. */
export function JourneyScrollReveal() {
  return (
    <ScrollReveal mode="reveal" selector="main [data-scroll-reveal]" rootMargin="0px" threshold={0.1} />
  );
}
