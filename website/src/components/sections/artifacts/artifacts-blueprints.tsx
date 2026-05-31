import { Button } from "@/components/ui/button";
import {
  ARTIFACT_CATEGORIES,
  ARTIFACTS_PRIMARY_BLUEPRINT,
} from "@/lib/artifacts-content";

export function ArtifactsBlueprints() {
  const blueprint = ARTIFACTS_PRIMARY_BLUEPRINT;

  return (
    <section className="mb-4xl px-lg">
      <div className="flex justify-between items-end mb-xl">
        <div>
          <span className="metadata-label mb-xs block">Classification: Tier 1</span>
          <h2 className="font-headline-sm text-headline-sm tracking-tight">Strategic Blueprints</h2>
        </div>
        <a
          className="text-label-md text-primary font-bold hover:underline flex items-center gap-xs"
          href={blueprint.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Charter{" "}
          <span className="material-symbols-outlined" aria-hidden>
            north_east
          </span>
        </a>
      </div>
      <div className="bento-grid rounded-lg overflow-hidden editorial-shadow">
        <div className="col-span-12 lg:col-span-8 bento-item p-xl lg:p-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-lg">
            <span className="px-sm py-1 bg-primary text-on-primary text-[10px] font-bold rounded uppercase tracking-widest">
              Primary Document
            </span>
          </div>
          <div className="max-w-copy-lg">
            <span
              className="material-symbols-outlined text-4xl text-primary mb-xl"
              style={{ fontVariationSettings: "'wght' 200" }}
              aria-hidden
            >
              architecture
            </span>
            <h3 className="font-headline-md text-headline-md mb-md leading-tight">{blueprint.title}</h3>
            <p className="text-body-md text-text-secondary mb-2xl">{blueprint.description}</p>
            <div className="flex items-center gap-xl border-t border-surface-container pt-xl">
              <div>
                <p className="metadata-label mb-1">Status</p>
                <p className="text-sm font-medium text-semantic-success flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-semantic-success"></span> {blueprint.status}
                </p>
              </div>
              <div>
                <p className="metadata-label mb-1">Version</p>
                <p className="text-sm font-medium">{blueprint.version}</p>
              </div>
              <a href={blueprint.href} target="_blank" rel="noopener noreferrer" className="ml-auto">
                <Button
                  variant="toolbar"
                  size="sm"
                  className="bg-surface-container-high font-bold hover:bg-primary hover:text-on-primary"
                >
                  Open Reader{" "}
                  <span className="material-symbols-outlined text-md" aria-hidden>
                    menu_book
                  </span>
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-px bg-surface-container">
          {ARTIFACT_CATEGORIES.map((category) => (
            <a
              key={category.code}
              href={category.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bento-item p-xl hover:bg-bg-primary transition-colors cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-md">
                  <span className={`material-symbols-outlined ${category.iconClass}`} aria-hidden>
                    {category.icon}
                  </span>
                  <span className="text-[10px] font-mono text-text-muted">{category.code}</span>
                </div>
                <h4 className="font-bold text-text-primary mb-1">{category.title}</h4>
                <p className="text-label-sm text-text-muted leading-relaxed">{category.description}</p>
              </div>
              <div className="pt-md mt-md border-t border-surface-container-low flex justify-between items-center">
                <span className="text-[10px] font-bold text-primary">{category.count} ARTIFACTS</span>
                <span className="material-symbols-outlined text-sm" aria-hidden>
                  arrow_forward
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
