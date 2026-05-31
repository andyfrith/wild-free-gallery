import { ABOUT_SKILLS } from "@/lib/about-content";

export function AboutSkillsGrid() {
  return (
    <section className="py-4xl bg-bg-primary px-lg md:px-3xl">
      <div className="max-w-content-width mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl">
          {ABOUT_SKILLS.map((skill) => (
            <div
              key={skill.title}
              className={`reveal-on-scroll bg-surface p-xl rounded-xl border border-outline-variant/30 hover:border-primary/20 transition-all group ${skill.span ?? ""}`}
              style={skill.delay ? { transitionDelay: skill.delay } : undefined}
            >
              <div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center text-primary mb-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined" aria-hidden>
                  {skill.icon}
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm-mobile md:text-headline-sm text-primary mb-md">
                {skill.title}
              </h3>
              <p className="font-body-md text-body-md text-text-secondary leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
