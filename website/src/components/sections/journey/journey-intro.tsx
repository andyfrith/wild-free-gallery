export function JourneyIntro() {
  return (
    <>
      <section className="mb-4xl">
        <div className="max-w-reading-width">
          <span className="inline-block px-md py-xs bg-primary/10 text-primary border border-primary/20 rounded-full font-label-sm mb-md tracking-widest uppercase">
            Chronicle v1.4
          </span>
          <h1 className="font-headline-lg text-headline-lg mb-lg text-text-primary leading-[1.05]">
            The Evolution of <br />
            <span className="text-primary italic">an Idea.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-text-secondary leading-relaxed">
            A documentation of strategic pivots, technical audits, and foundational shifts that shaped the Wild Free
            Gallery into a living museum.
          </p>
        </div>
      </section>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-sm mb-4xl">
        <div className="bg-white p-lg border border-outline-variant instrument-border">
          <span className="text-text-muted font-label-sm uppercase tracking-tighter">Completion</span>
          <div className="flex items-baseline gap-xs mt-xs">
            <span className="text-3xl font-bold text-text-primary tabular-nums">84</span>
            <span className="text-lg font-medium text-text-secondary">%</span>
            <span className="ml-auto text-semantic-success font-label-sm flex items-center">
              <span className="material-symbols-outlined text-[14px]">add</span>12%
            </span>
          </div>
          <div className="w-full bg-surface-container h-1 mt-md">
            <div className="bg-primary h-full w-[84%]"></div>
          </div>
        </div>
        <div className="bg-white p-lg border border-outline-variant instrument-border">
          <span className="text-text-muted font-label-sm uppercase tracking-tighter">Stability</span>
          <div className="flex items-baseline gap-xs mt-xs">
            <span className="text-3xl font-bold text-text-primary tabular-nums">99.2</span>
            <span className="text-lg font-medium text-text-secondary">%</span>
          </div>
          <div className="flex gap-0.5 mt-md">
            <div className="flex-1 h-3 bg-primary"></div>
            <div className="flex-1 h-3 bg-primary"></div>
            <div className="flex-1 h-3 bg-primary"></div>
            <div className="flex-1 h-3 bg-outline-variant"></div>
          </div>
        </div>
        <div className="bg-white p-lg border border-outline-variant instrument-border">
          <span className="text-text-muted font-label-sm uppercase tracking-tighter">Artifacts</span>
          <div className="flex items-baseline gap-xs mt-xs">
            <span className="text-3xl font-bold text-text-primary tabular-nums">2,410</span>
          </div>
          <div className="mt-md flex gap-1">
            <div className="w-4 h-4 rounded-full bg-primary/20"></div>
            <div className="w-4 h-4 rounded-full bg-primary/40"></div>
            <div className="w-4 h-4 rounded-full bg-primary/60"></div>
          </div>
        </div>
        <div className="bg-white p-lg border border-outline-variant instrument-border">
          <span className="text-text-muted font-label-sm uppercase tracking-tighter">Velocity</span>
          <div className="flex items-baseline gap-xs mt-xs">
            <span className="text-3xl font-bold text-text-primary">HIGH</span>
          </div>
          <div className="mt-md flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-semantic-success animate-pulse"></div>
            <span className="font-label-sm text-text-secondary uppercase">Nominal</span>
          </div>
        </div>
      </section>
    </>
  );
}
