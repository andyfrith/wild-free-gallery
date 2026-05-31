import { HOME_MISSION_ITEMS } from "@/lib/home-content";

export function HomeParadigmSection() {
  return (
    <section className="max-w-content-width mx-auto px-lg py-4xl">
      <div className="grid md:grid-cols-2 gap-3xl items-start">
        <div>
          <h2 className="font-headline-md text-headline-md text-text-primary mb-lg editorial-spacing">
            A New Paradigm <br />
            <span className="text-text-muted font-light italic">of Proof.</span>
          </h2>
          <p className="font-body-lg text-body-lg text-text-secondary leading-relaxed mb-lg">
            Traditional studios hide their mess. They present polished results while obscuring the pivotal
            mistakes and breakthroughs that led there. Wild Free Gallery flips the script—inviting you into the
            workshop as we build.
          </p>
          <div className="h-px w-24 bg-primary/30 mb-lg" />
        </div>
        <div className="flex flex-col gap-lg border-l-2 border-outline-variant/20 pl-2xl py-2">
          <p className="font-body-md text-body-lg text-text-secondary leading-relaxed">
            Our mission is to prove that &quot;AI-Native&quot; isn&apos;t just a buzzword, but a fundamental shift in
            how small, focused teams can outpace established giants. We document every step from the initial
            spark to the deployed product.
          </p>
          <ul className="flex flex-col gap-md">
            {HOME_MISSION_ITEMS.map((item) => (
              <li key={item} className="flex items-center gap-md text-text-primary font-medium group">
                <span
                  className="material-symbols-outlined text-primary text-2xl group-hover:scale-110 transition-transform"
                  aria-hidden
                >
                  check_circle
                </span>
                <span className="text-body-md">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
