import Link from "next/link";

export function HomeJourneySnapshot() {
  return (
    <section className="max-w-content-width mx-auto px-lg py-4xl">
      <div className="flex flex-col md:flex-row gap-3xl">
        <div className="md:w-1/3">
          <h2 className="font-headline-md text-headline-md text-text-primary mb-md editorial-spacing">
            Journey <br />
            <span className="italic font-light">Snapshot</span>
          </h2>
          <p className="font-body-md text-body-md text-text-secondary mb-lg leading-relaxed">
            Tracking the real-time evolution of our current sprint cycle with radical honesty.
          </p>
          <Link href="/journey" className="flex items-center gap-sm text-primary font-bold group">
            <span className="border-b-2 border-primary/20 group-hover:border-primary transition-all pb-1">
              Timeline Archive
            </span>
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" aria-hidden>
              arrow_forward
            </span>
          </Link>
        </div>
        <div className="md:w-2/3 space-y-md">
          <div className="relative pl-lg border-l-2 border-primary">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-white" aria-hidden />
            <div className="bg-white p-lg rounded-2xl shadow-sm border border-outline-variant/30">
              <div className="flex justify-between items-center mb-xs">
                <span className="text-[11px] font-bold text-primary uppercase label-spacing">Latest Milestone</span>
                <time className="text-label-sm font-label-sm text-text-muted" dateTime="2023-10-24">
                  Oct 24, 2023
                </time>
              </div>
              <h3 className="font-headline-sm-mobile text-xl font-bold text-text-primary editorial-spacing mb-xs">
                Foundational Model Selected
              </h3>
              <p className="font-body-md text-body-md text-text-secondary">
                Successfully benchmarked 4 LLMs for specific logic tasks. Moving forward with a hybrid
                orchestration layer for the core engine.
              </p>
            </div>
          </div>
          <div className="relative pl-lg border-l-2 border-outline-variant/30 opacity-60">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-outline-variant ring-4 ring-white" aria-hidden />
            <div className="p-lg">
              <div className="flex justify-between items-center mb-xs">
                <span className="text-[11px] font-bold text-text-muted uppercase label-spacing">Previous</span>
                <time className="text-label-sm font-label-sm text-text-muted" dateTime="2023-10-19">
                  Oct 19, 2023
                </time>
              </div>
              <h3 className="font-headline-sm-mobile text-xl font-bold text-text-primary editorial-spacing mb-xs">
                Stakeholder Synthesis
              </h3>
              <p className="font-body-md text-body-md text-text-secondary">
                Completed interview series with 12 industry veterans to validate core pain points and
                architectural direction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
