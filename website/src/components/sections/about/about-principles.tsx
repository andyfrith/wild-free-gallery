export function AboutPrinciples() {
  return (
    <section className="py-4xl bg-primary text-on-primary px-lg md:px-3xl">
      <div className="max-w-content-width mx-auto">
        <div className="text-center mb-3xl reveal-on-scroll">
          <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md mb-md">Working Principles</h2>
          <div className="h-1 w-24 bg-primary-container mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2xl">
          <div className="text-center space-y-md reveal-on-scroll">
            <div className="text-4xl opacity-50 font-headline-lg">01</div>
            <h4 className="font-headline-sm text-headline-sm">Clarity</h4>
            <p className="font-body-md opacity-80 leading-relaxed">
              Reducing noise to amplify signal. If it doesn&apos;t serve the user, it doesn&apos;t exist.
            </p>
          </div>
          <div className="text-center space-y-md reveal-on-scroll" style={{ transitionDelay: "100ms" }}>
            <div className="text-4xl opacity-50 font-headline-lg">02</div>
            <h4 className="font-headline-sm text-headline-sm">Trust</h4>
            <p className="font-body-md opacity-80 leading-relaxed">
              Building reliable systems that respect privacy and deliver on their promises every time.
            </p>
          </div>
          <div className="text-center space-y-md reveal-on-scroll" style={{ transitionDelay: "200ms" }}>
            <div className="text-4xl opacity-50 font-headline-lg">03</div>
            <h4 className="font-headline-sm text-headline-sm">Craft</h4>
            <p className="font-body-md opacity-80 leading-relaxed">
              The obsession with details that others might miss. Precision in the unseen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
