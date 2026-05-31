import { cn } from "@/lib/utils";

type StudioImageProps = {
  src: string;
  alt: string;
  className?: string;
  /** When true, alt is empty for decorative images. */
  decorative?: boolean;
};

/**
 * Standard image wrapper for studio photography. Uses native img until remote patterns are configured for next/image.
 */
export function StudioImage({ src, alt, className, decorative = false }: StudioImageProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- MVP: external Google CDN; migrate when remotePatterns configured
    <img src={src} alt={decorative ? "" : alt} className={cn(className)} />
  );
}
