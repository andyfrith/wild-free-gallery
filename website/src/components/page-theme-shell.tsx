import type { PageTheme } from "@/lib/site";
import { cn } from "@/lib/utils";

type PageThemeShellProps = {
  theme: PageTheme;
  className?: string;
  children: React.ReactNode;
};

/**
 * Wraps page content with the Stitch-derived theme class for correct tokens and background.
 */
export function PageThemeShell({ theme, className, children }: PageThemeShellProps) {
  const useStandardType = theme !== "home-theme";

  return (
    <div className={cn(theme, useStandardType && "theme-standard-type", "min-h-dvh", className)}>
      {children}
    </div>
  );
}
