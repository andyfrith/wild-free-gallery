"use client";

import { useEffect } from "react";

/** How visibility is applied when an element enters the viewport. */
export type ScrollRevealMode = "reveal" | "fade-in";

export type UseScrollRevealOptions = {
  /** `reveal` toggles `.is-visible`; `fade-in` adds animation class and opacity. */
  mode?: ScrollRevealMode;
  /** CSS selector for elements to observe. */
  selector?: string;
  rootMargin?: string;
  threshold?: number;
  enabled?: boolean;
};

const VISIBLE_CLASS = "is-visible";
const FADE_CLASS = "fade-in";

/**
 * Observes elements and applies scroll-reveal motion classes when they intersect.
 */
export function useScrollReveal({
  mode = "reveal",
  selector = ".reveal-on-scroll",
  rootMargin = "0px 0px -50px 0px",
  threshold = 0.1,
  enabled = true,
}: UseScrollRevealOptions = {}): void {
  useEffect(() => {
    if (!enabled) return;

    const elements = document.querySelectorAll<HTMLElement>(selector);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          if (mode === "fade-in") {
            el.classList.add(FADE_CLASS);
            el.style.opacity = "1";
          } else {
            el.classList.add(VISIBLE_CLASS);
          }
          observer.unobserve(el);
        });
      },
      { root: null, rootMargin, threshold },
    );

    elements.forEach((el) => {
      if (mode === "fade-in" && !el.classList.contains(FADE_CLASS)) {
        el.style.opacity = "0";
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [mode, selector, rootMargin, threshold, enabled]);
}
