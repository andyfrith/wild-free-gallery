import { StudioImage } from "@/components/ui/studio-image";
import { STORY_FOREST_IMAGE } from "@/lib/story-content";

export function StoryCreativePhilosophyBento() {
  return (
    <section className="py-4xl bg-daybreak-white" data-scroll-fade>
      <div className="max-w-content-width mx-auto px-lg">
        <div className="bento-grid">
          <article
            data-scroll-fade
            className="col-span-12 md:col-span-8 p-2xl bg-primary text-on-primary rounded-2xl flex flex-col justify-end min-h-[450px] relative overflow-hidden group"
          >
            <StudioImage
              src={STORY_FOREST_IMAGE}
              alt=""
              decorative
              className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none transition-transform duration-[3000ms] group-hover:scale-110"
            />
            <div className="relative z-10 space-y-md">
              <h3 className="font-headline-md text-headline-md-mobile md:text-headline-md leading-tight">
                Blending Discipline with Exploration
              </h3>
              <p className="font-body-lg text-body-lg max-w-copy-lg opacity-90">
                Creativity thrives within constraints. We balance the rigid structure of systematic design
                with the fluid, unpredictable nature of artistic discovery.
              </p>
            </div>
          </article>
          <article
            data-scroll-fade
            className="col-span-12 md:col-span-4 p-xl bg-daybreak-sage border border-daybreak-grey text-primary rounded-2xl flex flex-col justify-between"
          >
            <span className="material-symbols-outlined text-5xl opacity-40" aria-hidden>
              compass_calibration
            </span>
            <div className="space-y-sm">
              <h4 className="font-headline-sm text-headline-sm-mobile md:text-headline-sm text-primary">
                The Compass
              </h4>
              <p className="font-body-md text-body-md opacity-80 leading-relaxed">
                In every project, we ask: does this lead toward clarity or noise? The compass always points
                toward the former.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
