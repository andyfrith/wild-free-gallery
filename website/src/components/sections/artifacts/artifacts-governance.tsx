import { buttonVariants } from "@/components/ui/button";
import { ARTIFACTS_GOVERNANCE } from "@/lib/artifacts-content";

export function ArtifactsGovernance() {
  const { transparency, source } = ARTIFACTS_GOVERNANCE;

  return (
    <div className="grid md:grid-cols-2 gap-xl px-lg mb-4xl">
      <div className="bg-primary p-xl lg:p-2xl rounded-lg text-on-primary editorial-shadow relative overflow-hidden">
        <div className="absolute top-0 right-0 p-lg opacity-10">
          <span className="material-symbols-outlined text-9xl" aria-hidden>
            gavel
          </span>
        </div>
        <div className="relative z-10">
          <span className="metadata-label text-primary-fixed mb-md block">Governance Protocol</span>
          <h3 className="font-headline-sm text-headline-sm mb-lg">{transparency.title}</h3>
          <p className="text-body-md opacity-80 mb-2xl leading-relaxed">{transparency.description}</p>
          <div className="grid grid-cols-2 gap-md">
            {transparency.commitments.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-fixed" aria-hidden>
                  {item.icon}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-surface-container-low p-xl lg:p-2xl rounded-lg border border-surface-container editorial-shadow flex flex-col justify-between">
        <div>
          <span className="metadata-label mb-md block">Logic &amp; Source</span>
          <h3 className="font-headline-sm text-headline-sm mb-lg">{source.title}</h3>
          <p className="text-text-secondary text-body-md mb-2xl">{source.description}</p>
        </div>
        <div className="flex items-center gap-lg">
          <a
            className={buttonVariants({
              variant: "outline",
              size: "cta",
              className: "bg-white font-bold text-sm",
            })}
            href={source.primaryHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {source.primaryLabel}{" "}
            <span className="material-symbols-outlined text-md" aria-hidden>
              link
            </span>
          </a>
          <a
            className="text-sm font-bold text-text-muted hover:text-text-primary flex items-center gap-1"
            href={source.secondaryHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {source.secondaryLabel}{" "}
            <span className="material-symbols-outlined text-md" aria-hidden>
              description
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
