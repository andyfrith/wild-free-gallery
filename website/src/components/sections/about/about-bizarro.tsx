import { StudioImage } from "@/components/ui/studio-image";
import { ABOUT_BIZARRO_IMAGE } from "@/lib/about-content";

export function AboutBizarro() {
  return (
    <section className="py-4xl px-lg md:px-3xl overflow-hidden">
      <div className="max-w-content-width mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3xl items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-square bg-bg-subtle rounded-3xl p-xl flex items-center justify-center">
              <StudioImage
                src={ABOUT_BIZARRO_IMAGE}
                alt="Meet Bizarro"
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute top-md right-md bg-primary text-on-primary px-md py-xs rounded-full text-label-sm font-bold animate-bounce">
              Chief Joy Officer
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-lg reveal-on-scroll">
            <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary tracking-tight">
              Meet Bizarro
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
              Every great project needs a muse. Bizarro is the silent observer of late-night refactors and
              early-morning brainstorms. While I focus on the architecture, Bizarro ensures the studio maintains its
              soul.
            </p>
            <div className="grid grid-cols-2 gap-md">
              <div className="p-md rounded-lg bg-surface-container-low">
                <span className="font-headline-sm text-headline-sm text-primary block">14+</span>
                <span className="font-label-sm text-label-sm text-text-muted uppercase">Naps per day</span>
              </div>
              <div className="p-md rounded-lg bg-surface-container-low">
                <span className="font-headline-sm text-headline-sm text-primary block">99%</span>
                <span className="font-label-sm text-label-sm text-text-muted uppercase">Approval Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
