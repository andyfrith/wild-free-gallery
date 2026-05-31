import Link from "next/link";
import { StudioImage } from "@/components/ui/studio-image";
import { HOME_ARTIFACT_CARDS } from "@/lib/home-content";

export function HomeArtifactsGrid() {
  return (
    <section className="bg-surface-container-high/50 border-y border-outline-variant/30 py-4xl">
      <div className="max-w-content-width mx-auto px-lg">
        <div className="flex justify-between items-end mb-2xl">
          <div>
            <h2 className="font-headline-md text-headline-md text-text-primary editorial-spacing">
              Recent Artifacts
            </h2>
            <p className="font-body-md text-body-md text-text-secondary mt-1">
              The tangible outputs of our current phase.
            </p>
          </div>
          <Link
            href="/artifacts"
            className="text-primary font-bold text-label-md flex items-center gap-xs border-b-2 border-primary/20 hover:border-primary pb-1 transition-all"
          >
            View Full Archive
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-lg">
          {HOME_ARTIFACT_CARDS.map((card) => (
            <article
              key={card.title}
              className="bg-white p-lg rounded-2xl border border-outline-variant/40 hover:shadow-2xl hover:border-primary/20 transition-all group cursor-pointer overflow-hidden"
            >
              <div className="aspect-[4/3] bg-bg-secondary rounded-xl mb-md overflow-hidden relative">
                <StudioImage
                  src={card.image}
                  alt={card.imageAlt}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span
                className={`font-label-sm text-label-sm ${card.labelClass} uppercase font-bold label-spacing mb-xs block`}
              >
                {card.label}
              </span>
              <h3 className="font-headline-sm-mobile text-xl text-text-primary font-bold editorial-spacing mb-sm">
                {card.title}
              </h3>
              <p className="font-body-md text-body-md text-text-secondary mb-md line-clamp-2">{card.description}</p>
              <div className="flex items-center gap-xs text-text-muted border-t border-outline-variant/20 pt-md">
                <span className="material-symbols-outlined text-[18px]" aria-hidden>
                  calendar_today
                </span>
                <span className="text-[12px] font-medium uppercase tracking-wider">{card.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
