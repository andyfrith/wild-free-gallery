import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { StudioImage } from "@/components/ui/studio-image";
import { HOME_HERO_IMAGE } from "@/lib/home-content";

export function HomeHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <StudioImage
          src={HOME_HERO_IMAGE}
          alt="Studio at daybreak — warm light through architectural windows"
          className="w-full h-full object-cover opacity-30 scale-105 transition-transform duration-[10s] ease-out hover:scale-100"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>
      <div className="relative z-10 max-w-content-width mx-auto px-lg pt-4xl pb-3xl">
        <div className="max-w-reading-width">
          <div className="inline-flex items-center gap-xs px-md py-1 bg-primary text-white rounded-full text-label-sm font-medium label-spacing uppercase mb-lg">
            <span className="material-symbols-outlined text-[14px]" aria-hidden>
              bolt
            </span>
            Active Discovery Phase
          </div>
          <h1 className="font-headline-lg text-headline-lg mb-md text-text-primary leading-[1.05] editorial-spacing">
            A living product studio documenting the transformation of{" "}
            <span className="text-primary font-medium italic">ideas</span> into{" "}
            <span className="font-black">reality.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-text-secondary mb-xl max-w-[640px] leading-relaxed">
            Where human intuition meets machine execution. We operate as an open-ledger for methodology,
            experiments, and the final artifacts of innovation.
          </p>
          <div className="flex flex-wrap gap-md">
            <Link
              href="/journey"
              className={buttonVariants({
                size: "cta",
                className: "hover:shadow-lg hover:-translate-y-0.5",
              })}
            >
              Explore Journey{" "}
              <span className="material-symbols-outlined" aria-hidden>
                arrow_forward
              </span>
            </Link>
            <Link
              href="/artifacts"
              className={buttonVariants({ variant: "surface", size: "cta" })}
            >
              View Artifacts
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
