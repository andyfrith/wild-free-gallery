import {
  JOURNEY_AUDIT_SUMMARIES,
  JOURNEY_INSTRUMENTS,
  JOURNEY_INTRO,
} from "@/lib/journey-content";

function JourneyInstrumentCard({ instrument }: { instrument: (typeof JOURNEY_INSTRUMENTS)[number] }) {
  return (
    <div className="bg-white p-lg border border-outline-variant instrument-border">
      <span className="text-text-muted font-label-sm uppercase tracking-tighter">{instrument.label}</span>
      <div className="flex items-baseline gap-xs mt-xs">
        <span className="text-3xl font-bold text-text-primary tabular-nums">{instrument.display}</span>
        {instrument.suffix && <span className="text-lg font-medium text-text-secondary">{instrument.suffix}</span>}
        {instrument.variant === "health" && (
          <span className="ml-auto flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-semantic-success animate-pulse" aria-hidden />
          </span>
        )}
      </div>
      {instrument.variant === "progress" && instrument.progressPercent !== undefined && (
        <div className="w-full bg-surface-container h-1 mt-md">
          <div className="bg-primary h-full" style={{ width: `${instrument.progressPercent}%` }} />
        </div>
      )}
      {instrument.variant === "count" && (
        <div className="mt-md flex gap-1">
          <div className="w-4 h-4 rounded-full bg-primary/20" />
          <div className="w-4 h-4 rounded-full bg-primary/40" />
          <div className="w-4 h-4 rounded-full bg-primary/60" />
        </div>
      )}
      {instrument.variant === "status" && (
        <div className="mt-md flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-semantic-success animate-pulse" />
          <span className="font-label-sm text-text-secondary uppercase">In progress</span>
        </div>
      )}
    </div>
  );
}

export function JourneyIntro() {
  return (
    <>
      <section className="mb-4xl">
        <div className="max-w-reading-width">
          <span className="inline-block px-md py-xs bg-primary/10 text-primary border border-primary/20 rounded-full font-label-sm mb-md tracking-widest uppercase">
            {JOURNEY_INTRO.eyebrow}
          </span>
          <h1 className="font-headline-lg text-headline-lg mb-lg text-text-primary leading-[1.05]">
            {JOURNEY_INTRO.titleLead} <br />
            <span className="text-primary italic">{JOURNEY_INTRO.titleEmphasis}</span>
          </h1>
          <p className="font-body-lg text-body-lg text-text-secondary leading-relaxed">{JOURNEY_INTRO.description}</p>
        </div>
      </section>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-sm mb-4xl">
        {JOURNEY_INSTRUMENTS.map((instrument) => (
          <JourneyInstrumentCard key={instrument.label} instrument={instrument} />
        ))}
      </section>
    </>
  );
}
