import type { Metadata } from "next";
import { PageThemeShell } from "@/components/page-theme-shell";

export const metadata: Metadata = {
  title: "Story | Wild Free Gallery",
  description:
    "The story behind Wild Free Gallery — evidence-first design, progressive disclosure, and human-led AI.",
};

export default function StoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageThemeShell theme="story-theme" className="text-text-primary">
      {children}
    </PageThemeShell>
  );
}
