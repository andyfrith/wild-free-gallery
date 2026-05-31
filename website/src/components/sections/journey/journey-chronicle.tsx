import {
  JOURNEY_AUDIT_SUMMARIES,
  JOURNEY_PIVOTS,
  JOURNEY_QUOTE,
  JOURNEY_TIMELINE,
} from "@/lib/journey-content";

const AUDIT_STATUS_CLASSES = {
  success: "bg-semantic-success/10 text-semantic-success",
  warning: "bg-semantic-warning/10 text-semantic-warning",
  neutral: "bg-surface-container-high text-text-secondary",
} as const;

export function JourneyChronicle() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-3xl">
      <div className="lg:col-span-7">
        <div className="flex items-center gap-md mb-2xl">
          <div className="w-8 h-px bg-primary"></div>
          <h2 className="font-label-md uppercase tracking-[0.2em] font-bold text-primary">Timeline</h2>
        </div>
        <div className="relative pl-lg border-l border-outline-variant/50 space-y-3xl">
          {JOURNEY_TIMELINE.map((entry, index) => (
            <div key={entry.title} className="relative group">
              <div
                className={`absolute -left-[29px] top-0 w-3 h-3 rounded-full ring-4 ring-background ${
                  index === 0 ? "bg-primary" : "bg-outline-variant"
                }`}
              />
              <div
                className={`glow-subtle p-xl rounded-xl backdrop-blur-sm hover:bg-white transition-all duration-500 ${
                  index === 0 ? "bg-white/50" : "bg-white/30"
                }`}
                data-scroll-reveal
              >
                <div className="mb-sm flex items-center justify-between">
                  <time
                    className={`font-label-sm font-bold tracking-widest uppercase ${
                      index === 0 ? "text-primary" : "text-text-muted"
                    }`}
                    dateTime={entry.dateTime}
                  >
                    {entry.date}
                  </time>
                  <span className="font-label-sm text-text-muted italic">{entry.phase}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-text-primary mb-md">{entry.title}</h3>
                <p className="font-body-md text-text-secondary mb-lg leading-relaxed">{entry.description}</p>
                {entry.outcome && (
                  <div className="border-t border-outline-variant pt-md mb-md">
                    <p className="font-label-md text-text-primary italic">
                      <span className="font-bold uppercase text-[10px] mr-2 not-italic text-primary">Outcome:</span>
                      &quot;{entry.outcome}&quot;
                    </p>
                  </div>
                )}
                {entry.tags && (
                  <div className="flex flex-wrap gap-sm">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-primary/5 text-primary border border-primary/10 px-3 py-1 rounded-full font-label-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:col-span-5 flex flex-col gap-2xl">
        <section>
          <div className="flex items-center gap-md mb-xl">
            <div className="w-6 h-px bg-secondary"></div>
            <h2 className="font-label-md uppercase tracking-[0.2em] font-bold text-secondary">Key Decisions</h2>
          </div>
          <div className="space-y-md">
            {JOURNEY_PIVOTS.map((pivot) => (
              <div
                key={pivot.title}
                className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow"
              >
                <h4 className="font-label-md font-bold text-text-primary mb-xs flex items-center gap-2">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${pivot.accent === "primary" ? "bg-primary" : "bg-secondary"}`}
                  />
                  {pivot.title}
                </h4>
                <p className="font-label-md text-text-secondary leading-relaxed">{pivot.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className="flex items-center gap-md mb-xl">
            <div className="w-6 h-px bg-primary"></div>
            <h2 className="font-label-md uppercase tracking-[0.2em] font-bold text-primary">Audit Summaries</h2>
          </div>
          <div className="space-y-md">
            {JOURNEY_AUDIT_SUMMARIES.map((audit) => (
              <div
                key={audit.title}
                className={`glow-subtle bg-white rounded-xl overflow-hidden ${audit.statusTone === "warning" ? "border-primary/20" : ""}`}
              >
                <div className="p-lg border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
                  <span className="font-label-sm font-bold text-text-primary uppercase tracking-[0.1em]">
                    {audit.title}
                  </span>
                  <span
                    className={`text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider ${AUDIT_STATUS_CLASSES[audit.statusTone]}`}
                  >
                    {audit.status}
                  </span>
                </div>
                <div className="p-lg space-y-sm">
                  {audit.metrics.map((metric) => (
                    <div key={metric.label} className="flex justify-between font-label-md">
                      <span className="text-text-secondary">{metric.label}</span>
                      <span className="font-bold text-text-primary">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className="bg-primary p-xl rounded-2xl relative overflow-hidden text-white shadow-xl">
            <div className="relative z-10">
              <span className="material-symbols-outlined mb-md text-primary-fixed opacity-50">lightbulb</span>
              <p className="font-body-md italic mb-lg leading-relaxed text-primary-fixed">&quot;{JOURNEY_QUOTE.text}&quot;</p>
              <div className="flex items-center gap-sm">
                <div className="h-px w-8 bg-primary-fixed opacity-30"></div>
                <a
                  href={JOURNEY_QUOTE.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-label-sm uppercase tracking-widest opacity-70 hover:opacity-100 transition-opacity"
                >
                  {JOURNEY_QUOTE.attribution}
                </a>
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
