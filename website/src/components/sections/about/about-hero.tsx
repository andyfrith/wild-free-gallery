import { Button } from "@/components/ui/button";
import { StudioImage } from "@/components/ui/studio-image";
import { ABOUT_PORTRAIT_IMAGE } from "@/lib/about-content";

export function AboutHero() {
  return (
    <section className="relative min-h-[819px] flex items-center overflow-hidden px-lg md:px-3xl">
      <div className="max-w-content-width mx-auto grid grid-cols-1 lg:grid-cols-12 gap-xl items-center">
        <div className="lg:col-span-7 space-y-lg z-10">
          <div className="inline-flex items-center space-x-sm bg-primary-fixed text-primary px-md py-xs rounded-full">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest font-bold">Project Lead</span>
          </div>
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tighter leading-none">
            The Architect <br /> of Evidence
          </h1>
          <p className="font-body-lg text-body-lg text-text-secondary max-w-reading-width leading-relaxed">
            In a world of decorative distractions, I build digital spaces where clarity and technical discipline reign.
            Wild Free Gallery is a testament to the power of human-led interaction and intentional craft.
          </p>
          <div className="flex flex-wrap gap-md pt-md">
            <Button size="ctaMd" className="hover:scale-[1.02] active:scale-95">
              View Repository
            </Button>
            <Button variant="outline" size="ctaMd" className="text-primary hover:bg-bg-subtle">
              Contact Inquiries
            </Button>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
            <StudioImage
              src={ABOUT_PORTRAIT_IMAGE}
              alt="Portrait of the architect"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-xl -left-xl bg-surface-container-lowest p-lg rounded-xl shadow-lg max-w-[240px] hidden md:block border border-outline-variant/30">
            <p className="font-label-sm text-label-sm text-secondary font-bold mb-xs">STATUS</p>
            <p className="font-body-md text-body-md text-on-surface">
              Building in public. Current sprint: Evidence-first UI Framework.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
