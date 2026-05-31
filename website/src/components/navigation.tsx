"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GITHUB_URL, NAV_ITEMS } from "@/lib/site";

const navLinkBase =
  "font-body-md text-body-md py-1 transition-colors hover:text-primary";
const navLinkInactive = cn(navLinkBase, "text-text-secondary");
const navLinkActive = cn(
  navLinkBase,
  "text-text-primary font-bold border-b-2 border-primary",
);

/**
 * Global site navigation — one layout and style on every route (wireframe: simple, predictable).
 */
export function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClass = (href: string) =>
    pathname === href ? navLinkActive : navLinkInactive;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant/30">
      <nav
        aria-label="Main"
        className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-md w-full max-w-content-width mx-auto px-lg py-md"
      >
        <Link
          href="/"
          className="font-headline-sm text-[24px] font-extrabold tracking-tighter text-text-primary justify-self-start"
          onClick={() => setMobileOpen(false)}
        >
          Wild Free Gallery
        </Link>

        <div className="hidden md:flex items-center justify-center gap-xl">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass(item.href)}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-end gap-md justify-self-end">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ size: "nav" })}
          >
            GitHub
          </a>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="md:hidden size-9 p-0"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-menu"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="material-symbols-outlined" aria-hidden>
              {mobileOpen ? "close" : "menu"}
            </span>
            <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
          </Button>
        </div>

        {mobileOpen && (
          <div
            id="mobile-nav-menu"
            className="md:hidden col-span-3 flex flex-col gap-md pt-md pb-sm border-t border-outline-variant/30 mt-md"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={linkClass(item.href)}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
