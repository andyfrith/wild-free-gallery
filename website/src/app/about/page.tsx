import { Footer } from "@/components/footer";
import { AboutBizarro } from "@/components/sections/about/about-bizarro";
import { AboutConnect } from "@/components/sections/about/about-connect";
import { AboutHero } from "@/components/sections/about/about-hero";
import { AboutPrinciples } from "@/components/sections/about/about-principles";
import { AboutScrollReveal } from "@/components/sections/about/about-scroll-reveal";
import { AboutSkillsGrid } from "@/components/sections/about/about-skills-grid";

export default function AboutPage() {
  return (
    <>
      <AboutScrollReveal />
      <main className="pt-nav-offset">
        <AboutHero />
        <AboutSkillsGrid />
        <AboutBizarro />
        <AboutPrinciples />
        <AboutConnect />
      </main>
      <Footer />
    </>
  );
}
