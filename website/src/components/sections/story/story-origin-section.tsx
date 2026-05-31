export function StoryOriginSection() {
  return (
    <section className="py-4xl bg-daybreak-white" data-scroll-fade>
      <div className="max-w-content-width mx-auto px-lg grid grid-cols-1 lg:grid-cols-12 gap-xl items-start">
        <div className="lg:col-span-7 space-y-xl">
          <h2 className="font-headline-md text-headline-md text-text-primary leading-tight">
            A Return to Clarity
          </h2>
          <div className="font-body-lg text-body-lg text-text-secondary space-y-lg leading-relaxed max-w-reading-width">
            <p>
              We began with a simple observation: the digital world has become increasingly cluttered with
              empty claims and decorative noise. Wild Free Gallery was born from the desire to strip away
              the non-essential, leaving only what is true and functional.
            </p>
            <p>
              Our roots are in the belief that design should be a silent partner to content. Whether
              documenting a journey through the wilderness or building a complex interface, the goal is
              always discoverability over display.
            </p>
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
              &ldquo;The studio is a living document. We inhabit the systems we build.&rdquo;
            </p>
            <cite className="block mt-md font-label-md text-label-md not-italic font-bold text-primary uppercase tracking-wider">
              — Bizarro, Lead Curator
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
