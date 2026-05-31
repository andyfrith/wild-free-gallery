export function JourneyChronicle() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-3xl">
      <div className="lg:col-span-7">
        <div className="flex items-center gap-md mb-2xl">
          <div className="w-8 h-px bg-primary"></div>
          <h2 className="font-label-md uppercase tracking-[0.2em] font-bold text-primary">Timeline</h2>
        </div>
        <div className="relative pl-lg border-l border-outline-variant/50 space-y-3xl">
          <div className="relative group">
            <div className="absolute -left-[29px] top-0 w-3 h-3 rounded-full bg-primary ring-4 ring-background"></div>
            <div
              className="glow-subtle p-xl rounded-xl bg-white/50 backdrop-blur-sm hover:bg-white transition-all duration-500"
              data-scroll-reveal
            >
              <div className="mb-sm flex items-center justify-between">
                <time
                  className="font-label-sm text-primary font-bold tracking-widest uppercase"
                  dateTime="2023-10"
                >
                  Oct 2023
                </time>
                <span className="font-label-sm text-text-muted italic">Inauguration</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-text-primary mb-md">The Foundation Protocol</h3>
              <p className="font-body-md text-text-secondary mb-lg leading-relaxed">
                Establishment of the core evidence-first philosophy. Defined the visual language and architectural
                constraints for the digital museum.
              </p>
              <div className="border-t border-outline-variant pt-md">
                <p className="font-label-md text-text-primary italic">
                  <span className="font-bold uppercase text-[10px] mr-2 not-italic text-primary">Outcome:</span> &quot;A
                  validated design system and 12-column grid hierarchy.&quot;
                </p>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -left-[29px] top-0 w-3 h-3 rounded-full bg-outline-variant ring-4 ring-background"></div>
            <div
              className="glow-subtle p-xl rounded-xl bg-white/30 backdrop-blur-sm hover:bg-white transition-all duration-500"
              data-scroll-reveal
            >
              <div className="mb-sm flex items-center justify-between">
                <time
                  className="font-label-sm text-text-muted font-bold tracking-widest uppercase"
                  dateTime="2023-08"
                >
                  Aug 2023
                </time>
                <span className="font-label-sm text-text-muted italic">Infrastructure</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-text-primary mb-md">Schema Deployment</h3>
              <p className="font-body-md text-text-secondary mb-lg">
                The migration from local storage to a global, semantic data architecture. Automated artifact tagging
                was introduced.
              </p>
              <div className="flex gap-sm">
                <span className="bg-primary/5 text-primary border border-primary/10 px-3 py-1 rounded-full font-label-sm">
                  Cloud Scale
                </span>
                <span className="bg-primary/5 text-primary border border-primary/10 px-3 py-1 rounded-full font-label-sm">
                  Auto-Tagging
                </span>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -left-[29px] top-0 w-3 h-3 rounded-full bg-outline-variant ring-4 ring-background"></div>
            <div
              className="glow-subtle p-xl rounded-xl bg-white/30 backdrop-blur-sm hover:bg-white transition-all duration-500"
              data-scroll-reveal
            >
              <div className="mb-sm flex items-center justify-between">
                <time
                  className="font-label-sm text-text-muted font-bold tracking-widest uppercase"
                  dateTime="2023-06"
                >
                  Jun 2023
                </time>
                <span className="font-label-sm text-text-muted italic">Concept</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-text-primary mb-md">The Vision Sprint</h3>
              <p className="font-body-md text-text-secondary">
                The initial spark. Mapping out the 404 artifact concept and user journey flows for the digital gallery
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-5 flex flex-col gap-2xl">
        <section>
          <div className="flex items-center gap-md mb-xl">
            <div className="w-6 h-px bg-secondary"></div>
            <h2 className="font-label-md uppercase tracking-[0.2em] font-bold text-secondary">Strategic Pivots</h2>
          </div>
          <div className="space-y-md">
            <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-label-md font-bold text-text-primary mb-xs flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Canvas Centricity
              </h4>
              <p className="font-label-md text-text-secondary leading-relaxed">
                Transition from traditional navigation to a content-first &apos;Canvas&apos; model for reduced cognitive
                load.
              </p>
            </div>
            <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-label-md font-bold text-text-primary mb-xs flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                Tonal Layer Shift
              </h4>
              <p className="font-label-md text-text-secondary leading-relaxed">
                Abandoning heavy drop shadows for tonal elevation, aligning with a high-end minimalist aesthetic.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="flex items-center gap-md mb-xl">
            <div className="w-6 h-px bg-primary"></div>
            <h2 className="font-label-md uppercase tracking-[0.2em] font-bold text-primary">Audit Summaries</h2>
          </div>
          <div className="space-y-md">
            <div className="glow-subtle bg-white rounded-xl overflow-hidden">
              <div className="p-lg border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
                <span className="font-label-sm font-bold text-text-primary uppercase tracking-[0.1em]">
                  Foundation Review
                </span>
                <span className="bg-semantic-success/10 text-semantic-success text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                  Passed
                </span>
              </div>
              <div className="p-lg space-y-sm">
                <div className="flex justify-between font-label-md">
                  <span className="text-text-secondary">Accessibility</span>
                  <span className="font-bold text-text-primary">AA Ready</span>
                </div>
                <div className="flex justify-between font-label-md">
                  <span className="text-text-secondary">Code Integrity</span>
                  <span className="font-bold text-text-primary">98% Clean</span>
                </div>
              </div>
            </div>
            <div className="glow-subtle bg-white rounded-xl overflow-hidden border-primary/20">
              <div className="p-lg border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
                <span className="font-label-sm font-bold text-text-primary uppercase tracking-[0.1em]">
                  Experience Audit
                </span>
                <span className="bg-semantic-warning/10 text-semantic-warning text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                  Optimizing
                </span>
              </div>
              <div className="p-lg space-y-sm">
                <div className="flex justify-between font-label-md">
                  <span className="text-text-secondary">Motion Perf</span>
                  <span className="font-bold text-text-primary italic">Evaluating</span>
                </div>
                <div className="flex justify-between font-label-md">
                  <span className="text-text-secondary">Engagement</span>
                  <span className="font-bold text-primary">High Velocity</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-primary p-xl rounded-2xl relative overflow-hidden text-white shadow-xl">
            <div className="relative z-10">
              <span className="material-symbols-outlined mb-md text-primary-fixed opacity-50">lightbulb</span>
              <p className="font-body-md italic mb-lg leading-relaxed text-primary-fixed">
                &quot;The most profound discovery was that silence in UI is as powerful as signal. By stripping away
                decorative elements, we didn&apos;t just simplify; we amplified the artifact&apos;s story.&quot;
              </p>
              <div className="flex items-center gap-sm">
                <div className="h-px w-8 bg-primary-fixed opacity-30"></div>
                <span className="font-label-sm uppercase tracking-widest opacity-70">Lead Curator</span>
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-5">
              <span
                className="material-symbols-outlined text-[160px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                format_quote
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
