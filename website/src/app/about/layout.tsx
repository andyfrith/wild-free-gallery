import type { Metadata } from "next";
import { PageThemeShell } from "@/components/page-theme-shell";

export const metadata: Metadata = {
  title: "About | Wild Free Gallery",
  description:
    "Meet the architect behind Wild Free Gallery — product leadership, technical discipline, and evidence-first craft.",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageThemeShell theme="about-theme" className="font-body-md text-body-md">
      {children}
    </PageThemeShell>
  );
}
