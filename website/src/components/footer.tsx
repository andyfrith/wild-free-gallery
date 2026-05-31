import { SITE_NAME } from "@/lib/site";
import { cn } from "@/lib/utils";

type FooterProps = {
  className?: string;
};

/**
 * Global site footer — one layout and style on every route. Navigation lives in the header.
 */
export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        "mt-4xl w-full border-t border-outline-variant/30 bg-surface-container",
        className,
      )}
    >
      <div className="flex flex-col gap-md w-full max-w-content-width mx-auto px-lg py-2xl">
        <p className="font-headline-sm text-[24px] font-extrabold tracking-tighter text-text-primary">
          {SITE_NAME}
        </p>
        <div className="flex flex-col gap-md md:flex-row md:justify-between md:items-center pt-md border-t border-outline-variant/30">
          <p className="font-label-sm text-text-muted uppercase tracking-[0.2em] font-bold">
            © 2026 {SITE_NAME}
          </p>
        </div>
      </div>
    </footer>
  );
}
