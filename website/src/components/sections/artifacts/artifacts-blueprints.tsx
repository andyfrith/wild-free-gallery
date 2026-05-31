import { Button } from "@/components/ui/button";

export function ArtifactsBlueprints() {
  return (
    <section className="mb-4xl px-lg">
      <div className="flex justify-between items-end mb-xl">
        <div>
          <span className="metadata-label mb-xs block">Classification: Tier 1</span>
          <h2 className="font-headline-sm text-headline-sm tracking-tight">Strategic Blueprints</h2>
        </div>
        <a className="text-label-md text-primary font-bold hover:underline flex items-center gap-xs" href="#">
          View All Assets{" "}
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
            <h3 className="font-headline-md text-headline-md mb-md leading-tight">
              Ecosystem Strategic Blueprint 2024
            </h3>
            <p className="text-body-md text-text-secondary mb-2xl">
              The definitive document outlining the architectural evolution of decoupled gallery experiences and the
              transition to decentralized content ownership.
            </p>
            <div className="flex items-center gap-xl border-t border-surface-container pt-xl">
              <div>
                <p className="metadata-label mb-1">Status</p>
                <p className="text-sm font-medium text-semantic-success flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-semantic-success"></span> Active Protocol
                </p>
              </div>
              <div>
                <p className="metadata-label mb-1">Version</p>
                <p className="text-sm font-medium">v4.2.1-Final</p>
              </div>
              <Button
                variant="toolbar"
                size="sm"
                className="ml-auto bg-surface-container-high font-bold hover:bg-primary hover:text-on-primary"
              >
                Open Reader{" "}
                <span className="material-symbols-outlined text-md" aria-hidden>
                  menu_book
                </span>
              </Button>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-px bg-surface-container">
          <div className="bento-item p-xl hover:bg-bg-primary transition-colors cursor-pointer flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-md">
                <span className="material-symbols-outlined text-secondary" aria-hidden>
                  token
                </span>
                <span className="text-[10px] font-mono text-text-muted">CAT_DS_01</span>
              </div>
              <h4 className="font-bold text-text-primary mb-1">Design Systems</h4>
              <p className="text-label-sm text-text-muted leading-relaxed">
                Comprehensive component libraries and semantic token schemas.
              </p>
            </div>
            <div className="pt-md mt-md border-t border-surface-container-low flex justify-between items-center">
              <span className="text-[10px] font-bold text-primary">12 ARTIFACTS</span>
              <span className="material-symbols-outlined text-sm" aria-hidden>
                arrow_forward
              </span>
            </div>
          </div>
          <div className="bento-item p-xl hover:bg-bg-primary transition-colors cursor-pointer flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-md">
                <span className="material-symbols-outlined text-accent-info" aria-hidden>
                  memory
                </span>
                <span className="text-[10px] font-mono text-text-muted">CAT_AI_04</span>
              </div>
              <h4 className="font-bold text-text-primary mb-1">AI Architecture</h4>
              <p className="text-label-sm text-text-muted leading-relaxed">
                Neural weights, prompt engineering logic, and ethical frameworks.
              </p>
            </div>
            <div className="pt-md mt-md border-t border-surface-container-low flex justify-between items-center">
              <span className="text-[10px] font-bold text-primary">8 ARTIFACTS</span>
              <span className="material-symbols-outlined text-sm" aria-hidden>
                arrow_forward
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
