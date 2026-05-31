import { StudioImage } from "@/components/ui/studio-image";
import { STORY_HERO, STORY_HERO_IMAGE } from "@/lib/story-content";

export function StoryEditorialHero() {
  return (
    <header className="relative w-full overflow-hidden bg-daybreak-white pt-4xl pb-4xl">
      <div className="max-w-content-width mx-auto px-lg">
        <div className="mx-auto w-full max-w-reading-width text-center space-y-md fade-in">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-primary font-semibold">
            {STORY_HERO.eyebrow}
          </span>
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-text-primary tracking-tight leading-[1.1]">
            {STORY_HERO.title}
          </h1>
          <p className="font-body-lg text-body-lg text-text-secondary max-w-copy-2xl mx-auto leading-relaxed">
            {STORY_HERO.description}
          </p>
        </div>
        <div className="mt-4xl relative h-[450px] md:h-[700px] rounded-2xl overflow-hidden editorial-shadow">
          <StudioImage
            src={STORY_HERO_IMAGE}
            alt="Evolution of an Idea — abstract studio landscape at daybreak"
            className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-daybreak-white/20 to-transparent" />
        </div>
      </div>
    </header>
  );
}
