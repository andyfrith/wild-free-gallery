import { HOME_PROGRESS_METRICS } from "@/lib/home-content";

export function HomeProgressDashboard() {
  return (
    <section className="bg-white border-y border-outline-variant relative z-10 shadow-sm">
      <div className="max-w-content-width mx-auto px-lg py-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-xl">
          {HOME_PROGRESS_METRICS.map((metric) => (
            <div key={metric.label} className={`flex flex-col border-l ${metric.border} pl-md`}>
              <span className="font-label-sm text-label-sm text-text-muted uppercase tracking-[0.15em] mb-xs">
                {metric.label}
              </span>
              <div className="flex items-center gap-sm">
                {metric.showPulse && (
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
