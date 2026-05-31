import type { Metadata } from "next";
import { PageThemeShell } from "@/components/page-theme-shell";

export const metadata: Metadata = {
  title: "Artifacts | Sanctuary of Evidence | Wild Free Gallery",
  description:
    "The evidence repository — strategic blueprints, audit logs, and transparency commitments from Wild Free Gallery.",
};

export default function ArtifactsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageThemeShell theme="artifacts-theme" className="font-body-md text-body-md">
      {children}
    </PageThemeShell>
  );
}
