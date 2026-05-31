import { STORY_ORIGIN } from "@/lib/story-content";

export function StoryOriginSection() {
  return (
    <section className="py-4xl bg-daybreak-white" data-scroll-fade>
      <div className="max-w-content-width mx-auto px-lg grid grid-cols-1 lg:grid-cols-12 gap-xl items-start">
        <div className="lg:col-span-7 space-y-xl">
          <h2 className="font-headline-md text-headline-md text-text-primary leading-tight">{STORY_ORIGIN.title}</h2>
          <div className="font-body-lg text-body-lg text-text-secondary space-y-lg leading-relaxed max-w-reading-width">
            {STORY_ORIGIN.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5 lg:sticky lg:top-32 pt-lg lg:pt-0">
          <blockquote className="relative p-xl bg-daybreak-sage/20 border-l-[6px] border-primary/30 rounded-r-xl">
            <span
              className="material-symbols-outlined text-5xl text-primary/20 absolute -top-4 -left-2 opacity-50"
              style={{ fontVariationSettings: "'FILL' 1" }}
              aria-hidden
            >
              format_quote
            </span>
            <p className="font-headline-sm text-headline-sm-mobile md:text-headline-sm italic text-primary leading-snug">
              &ldquo;{STORY_ORIGIN.quote}&rdquo;
            </p>
            <cite className="block mt-md font-label-md text-label-md not-italic font-bold text-primary uppercase tracking-wider">
              {STORY_ORIGIN.quoteAttribution}
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
