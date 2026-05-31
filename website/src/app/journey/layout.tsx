import type { Metadata } from "next";
import { PageThemeShell } from "@/components/page-theme-shell";

export const metadata: Metadata = {
  title: "Journey | Wild Free Gallery",
  description:
    "The evolution of an idea — strategic pivots, audits, and milestones in the Wild Free Gallery build-in-public journey.",
};

export default function JourneyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageThemeShell theme="journey-theme" className="text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
      {children}
    </PageThemeShell>
  );
}
