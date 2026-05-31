import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { PageThemeShell } from "@/components/page-theme-shell";
import { HomeArtifactsGrid } from "@/components/sections/home/home-artifacts-grid";
import { HomeHero } from "@/components/sections/home/home-hero";
import { HomeJourneySnapshot } from "@/components/sections/home/home-journey-snapshot";
import { HomeParadigmSection } from "@/components/sections/home/home-paradigm-section";
import { HomeProgressDashboard } from "@/components/sections/home/home-progress-dashboard";
import { HomeSymbioticStudio } from "@/components/sections/home/home-symbiotic-studio";

export const metadata: Metadata = {
  title: "Wild Free Gallery | Living Product Studio",
  description:
    "A living product studio documenting the transformation of ideas into reality. Evidence-first design, human-led AI, build in public.",
};

export default function HomePage() {
  return (
    <PageThemeShell theme="home-theme">
      <main className="pt-nav-offset">
        <HomeHero />
        <HomeProgressDashboard />
        <HomeParadigmSection />
        <HomeArtifactsGrid />
        <HomeJourneySnapshot />
        <HomeSymbioticStudio />
      </main>
      <Footer />
    </PageThemeShell>
  );
}
