import { Footer } from "@/components/footer";
import { StoryCreativePhilosophyBento } from "@/components/sections/story/story-creative-philosophy-bento";
import { StoryEditorialHero } from "@/components/sections/story/story-editorial-hero";
import { StoryHorizonSection } from "@/components/sections/story/story-horizon-section";
import { StoryOriginSection } from "@/components/sections/story/story-origin-section";
import { StoryPhilosophyGrid } from "@/components/sections/story/story-philosophy-grid";
import { StoryScrollReveal } from "@/components/sections/story/story-scroll-reveal";

export default function StoryPage() {
  return (
    <>
      <StoryScrollReveal />
      <main className="pt-nav-offset">
        <StoryEditorialHero />
        <StoryOriginSection />
        <StoryPhilosophyGrid />
        <StoryCreativePhilosophyBento />
        <StoryHorizonSection />
      </main>
      <Footer />
    </>
  );
}
