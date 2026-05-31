import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { StudioImage } from "@/components/ui/studio-image";
import { ABOUT_HERO, ABOUT_PORTRAIT_IMAGE } from "@/lib/about-content";
import { GITHUB_URL } from "@/lib/site";

export function AboutHero() {
  return (
    <section className="relative min-h-[819px] flex items-center overflow-hidden px-lg md:px-3xl">
      <div className="max-w-content-width mx-auto grid grid-cols-1 lg:grid-cols-12 gap-xl items-center">
        <div className="lg:col-span-7 space-y-lg z-10">
          <div className="inline-flex items-center space-x-sm bg-primary-fixed text-primary px-md py-xs rounded-full">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest font-bold">{ABOUT_HERO.badge}</span>
          </div>
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tighter leading-none">
            {ABOUT_HERO.title}
          </h1>
          <p className="font-headline-sm text-headline-sm-mobile text-text-primary">{ABOUT_HERO.subtitle}</p>
          <p className="font-body-lg text-body-lg text-text-secondary max-w-reading-width leading-relaxed">
            {ABOUT_HERO.description}
          </p>
          <div className="flex flex-wrap gap-md pt-md">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ size: "ctaMd", className: "hover:scale-[1.02] active:scale-95" })}
            >
              View Repository
            </a>
            <Link
              href="/artifacts"
              className={buttonVariants({ variant: "outline", size: "ctaMd", className: "text-primary hover:bg-bg-subtle" })}
            >
              Browse Artifacts
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
            <StudioImage
              src={ABOUT_PORTRAIT_IMAGE}
              alt="Andy Frith — project lead"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-xl -left-xl bg-surface-container-lowest p-lg rounded-xl shadow-lg max-w-[240px] hidden md:block border border-outline-variant/30">
            <p className="font-label-sm text-label-sm text-secondary font-bold mb-xs">{ABOUT_HERO.statusLabel}</p>
            <p className="font-body-md text-body-md text-on-surface">{ABOUT_HERO.statusText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
