import { STORY_PHILOSOPHY_CARDS } from "@/lib/story-content";

export function StoryPhilosophyGrid() {
  return (
    <section className="py-4xl bg-daybreak-sage/10" data-scroll-fade>
      <div className="max-w-content-width mx-auto px-lg">
        <div className="mb-3xl text-center">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-text-secondary mb-sm block">
            Core Values
          </span>
          <h2 className="font-headline-md text-headline-md text-text-primary">Product Philosophy</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
          {STORY_PHILOSOPHY_CARDS.map((item) => (
            <article
              key={item.title}
              data-scroll-fade
              className="p-xl bg-daybreak-white border border-daybreak-grey/40 rounded-2xl hover:shadow-xl transition-all group duration-500"
            >
              <div className="w-14 h-14 bg-daybreak-sage rounded-full flex items-center justify-center mb-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary scale-110" aria-hidden>
                  {item.icon}
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm-mobile md:text-headline-sm mb-md text-text-primary">
                {item.title}
              </h3>
              <p className="font-body-md text-body-md text-text-secondary leading-relaxed">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
