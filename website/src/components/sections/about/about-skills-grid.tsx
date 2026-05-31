export function AboutSkillsGrid() {
  return (
    <section className="py-4xl bg-bg-primary px-lg md:px-3xl">
      <div className="max-w-content-width mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl">
          <div className="reveal-on-scroll bg-surface p-xl rounded-xl border border-outline-variant/30 hover:border-primary/20 transition-all group">
            <div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center text-primary mb-lg group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined" aria-hidden>
                architecture
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm-mobile md:text-headline-sm text-primary mb-md">
              Product Leadership
            </h3>
            <p className="font-body-md text-body-md text-text-secondary leading-relaxed">
              Steering projects with a focus on scalable systems and user-centric architecture. Decisions are driven by
              data, intuition, and a commitment to long-term value.
            </p>
          </div>
          <div
            className="reveal-on-scroll bg-surface p-xl rounded-xl border border-outline-variant/30 hover:border-primary/20 transition-all group"
            style={{ transitionDelay: "100ms" }}
          >
            <div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center text-primary mb-lg group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined" aria-hidden>
                code
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm-mobile md:text-headline-sm text-primary mb-md">
              Technical Discipline
            </h3>
            <p className="font-body-md text-body-md text-text-secondary leading-relaxed">
              Clean code is not just a preference; it&apos;s a moral obligation. Prioritizing performance,
              accessibility, and maintainability in every line written.
            </p>
          </div>
          <div
            className="reveal-on-scroll bg-surface p-xl rounded-xl border border-outline-variant/30 hover:border-primary/20 transition-all group md:col-span-2 lg:col-span-1"
            style={{ transitionDelay: "200ms" }}
          >
            <div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center text-primary mb-lg group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined" aria-hidden>
                palette
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm-mobile md:text-headline-sm text-primary mb-md">
              Creative Companion
            </h3>
            <p className="font-body-md text-body-md text-text-secondary leading-relaxed">
              Balancing the rigid logic of development with the fluid exploration of visual storytelling. Every pixel
              serves a purpose in the grand narrative.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
