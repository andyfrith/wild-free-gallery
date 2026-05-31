import { ABOUT_PRINCIPLES } from "@/lib/about-content";

export function AboutPrinciples() {
  return (
    <section className="py-4xl bg-primary text-on-primary px-lg md:px-3xl">
      <div className="max-w-content-width mx-auto">
        <div className="text-center mb-3xl reveal-on-scroll">
          <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md mb-md">Working Principles</h2>
          <div className="h-1 w-24 bg-primary-container mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2xl">
          {ABOUT_PRINCIPLES.map((principle) => (
            <div
              key={principle.title}
              className="text-center space-y-md reveal-on-scroll"
              style={principle.delay ? { transitionDelay: principle.delay } : undefined}
            >
              <div className="text-4xl opacity-50 font-headline-lg">{principle.number}</div>
              <h4 className="font-headline-sm text-headline-sm">{principle.title}</h4>
              <p className="font-body-md opacity-80 leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
