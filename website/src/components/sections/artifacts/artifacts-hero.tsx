import { Button } from "@/components/ui/button";
import { StudioImage } from "@/components/ui/studio-image";
import { ARTIFACTS_HERO_IMAGE } from "@/lib/artifacts-content";

export function ArtifactsHero() {
  return (
    <section className="relative pt-nav-offset pb-4xl px-lg grid lg:grid-cols-2 gap-2xl items-center">
      <div className="min-w-0 w-full max-w-copy-xl">
        <div className="flex items-center gap-sm mb-lg">
          <span className="w-8 h-[1px] bg-primary"></span>
          <span className="metadata-label">Index 04 / Sanctuary of Evidence</span>
        </div>
        <h1 className="font-headline-lg text-headline-lg mb-lg tracking-tight leading-[1.05]">Evidence Repository</h1>
        <p className="font-body-lg text-body-lg text-text-secondary mb-2xl">
          A disciplined archive of strategy, execution, and architectural truth. Every artifact here represents a
          moment of verified discovery.
        </p>
        <div className="flex flex-wrap gap-md">
          <Button size="cta">
            Enter Archive{" "}
            <span className="material-symbols-outlined text-md" aria-hidden>
              database
            </span>
          </Button>
          <Button variant="outline" size="cta">
            System Audit
          </Button>
        </div>
      </div>
      <div className="relative group">
        <div className="absolute -inset-4 bg-primary/5 rounded-xl blur-2xl group-hover:bg-primary/10 transition-all"></div>
        <StudioImage
          src={ARTIFACTS_HERO_IMAGE}
          alt="Sanctuary of Evidence"
          className="relative rounded-lg shadow-2xl w-full aspect-[4/3] object-cover editorial-shadow grayscale-[0.2] sepia-[0.1]"
        />
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-md py-sm rounded border border-white/20 text-[10px] font-mono text-text-muted uppercase tracking-widest">
          Ref: ARCHIVE_01_VISUAL
        </div>
      </div>
    </section>
  );
}
