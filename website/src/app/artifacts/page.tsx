import { Footer } from "@/components/footer";
import { ArtifactsAuditTable } from "@/components/sections/artifacts/artifacts-audit-table";
import { ArtifactsBlueprints } from "@/components/sections/artifacts/artifacts-blueprints";
import { ArtifactsGovernance } from "@/components/sections/artifacts/artifacts-governance";
import { ArtifactsHero } from "@/components/sections/artifacts/artifacts-hero";

export default function ArtifactsPage() {
  return (
    <>
      <main className="mx-auto w-full max-w-content-width">
        <ArtifactsHero />
        <ArtifactsBlueprints />
        <ArtifactsAuditTable />
        <ArtifactsGovernance />
      </main>
      <Footer />
    </>
  );
}
