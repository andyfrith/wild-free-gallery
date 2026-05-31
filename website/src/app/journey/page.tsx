import { Footer } from "@/components/footer";
import { JourneyChronicle } from "@/components/sections/journey/journey-chronicle";
import { JourneyEpilogue } from "@/components/sections/journey/journey-epilogue";
import { JourneyIntro } from "@/components/sections/journey/journey-intro";
import { JourneyScrollReveal } from "@/components/sections/journey/journey-scroll-reveal";

export default function JourneyPage() {
  return (
    <>
      <JourneyScrollReveal />
      <main className="mx-auto w-full max-w-content-width pt-nav-offset pb-4xl px-lg">
        <JourneyIntro />
        <JourneyChronicle />
        <JourneyEpilogue />
      </main>
      <Footer />
    </>
  );
}
