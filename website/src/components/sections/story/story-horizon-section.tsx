import { STORY_HORIZON, STORY_HORIZON_KEYWORDS } from "@/lib/story-content";

export function StoryHorizonSection() {
  return (
    <section className="py-4xl bg-daybreak-white" data-scroll-fade>
      <div className="mx-auto w-full max-w-reading-width px-lg text-center space-y-2xl">
        <div className="space-y-lg">
          <h2 className="font-headline-md text-headline-md text-text-primary">{STORY_HORIZON.title}</h2>
          <p className="font-body-lg text-body-lg text-text-secondary leading-relaxed max-w-copy-2xl mx-auto">
            {STORY_HORIZON.description}
          </p>
        </div>
        <div className="pt-xl border-t border-daybreak-grey/50">
          <div className="flex flex-wrap justify-center gap-xl opacity-40" role="list" aria-label="Studio values">
            {STORY_HORIZON_KEYWORDS.map((word) => (
              <span
                key={word}
                role="listitem"
                className="font-label-sm text-label-sm uppercase tracking-[0.3em] font-bold"
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
