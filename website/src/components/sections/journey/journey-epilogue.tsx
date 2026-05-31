import { StudioImage } from "@/components/ui/studio-image";
import { JOURNEY_EPILOGUE, JOURNEY_EPILOGUE_IMAGE } from "@/lib/journey-content";

export function JourneyEpilogue() {
  return (
    <section className="mt-4xl w-full min-h-[500px] rounded-[32px] overflow-hidden relative group shadow-2xl">
      <StudioImage
        alt="Evolution and momentum"
        className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
        src={JOURNEY_EPILOGUE_IMAGE}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
        <div className="w-full p-2xl md:p-3xl">
          <div className="max-w-copy-xl">
            <span className="text-white/60 font-label-sm uppercase tracking-widest mb-xs block">
              {JOURNEY_EPILOGUE.eyebrow}
            </span>
            <h2 className="font-headline-md text-white mb-md">{JOURNEY_EPILOGUE.title}</h2>
            <p className="text-white/70 font-body-md leading-relaxed">{JOURNEY_EPILOGUE.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
