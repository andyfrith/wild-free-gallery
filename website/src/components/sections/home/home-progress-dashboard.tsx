export function HomeProgressDashboard() {
  const metrics = [
    { label: "Current Phase", value: "01 Exploration", border: "border-primary/20", valueClass: "font-bold text-primary" },
    { label: "Health", value: "Nominal", border: "border-outline-variant/30", valueClass: "font-medium", showPulse: true },
    { label: "Objective", value: "MVP Definition", border: "border-outline-variant/30", valueClass: "font-medium" },
    { label: "Milestone", value: "85% Complete", border: "border-outline-variant/30", valueClass: "font-medium" },
  ] as const;

  return (
    <section className="bg-white border-y border-outline-variant relative z-10 shadow-sm">
      <div className="max-w-content-width mx-auto px-lg py-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-xl">
          {metrics.map((metric) => (
            <div key={metric.label} className={`flex flex-col border-l ${metric.border} pl-md`}>
              <span className="font-label-sm text-label-sm text-text-muted uppercase tracking-[0.15em] mb-xs">
                {metric.label}
              </span>
              <div className="flex items-center gap-sm">
                {"showPulse" in metric && metric.showPulse && (
                  <span className="w-2.5 h-2.5 rounded-full bg-semantic-success animate-pulse" aria-hidden />
                )}
                <span
                  className={`font-headline-sm text-[28px] text-text-primary editorial-spacing ${metric.valueClass}`}
                >
                  {metric.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
