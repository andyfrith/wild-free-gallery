import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Shared button styles — all interactive buttons use `rounded-lg` and these variants.
 * For Next.js links, apply `buttonVariants({ variant, size, className })` on `<Link>`.
 */
export const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-sm rounded-lg border font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-on-primary hover:bg-primary/90",
        outline:
          "border-outline-variant bg-transparent text-text-primary hover:bg-surface-container",
        surface:
          "border-outline-variant bg-white/50 text-text-primary backdrop-blur-sm hover:bg-white",
        ghost:
          "border-transparent bg-transparent text-primary hover:bg-surface-container/80",
        toolbar:
          "border-transparent bg-surface-container-low text-text-primary hover:bg-surface-container",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/90",
        link: "border-transparent bg-transparent text-primary hover:underline",
      },
      size: {
        default: "h-9 px-3 text-sm",
        sm: "h-8 gap-1.5 px-2.5 text-[0.8rem]",
        /* Avoid text-body-lg / text-label-md — twMerge drops text-on-primary as a conflicting text-* class */
        nav: "h-auto px-lg py-sm font-label-md tracking-tight [font-size:var(--text-label-md)]",
        cta: "h-auto px-xl py-md font-semibold [font-size:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)]",
        ctaMd:
          "h-auto px-2xl py-md font-label-md [font-size:var(--text-label-md)] leading-[var(--text-label-md--line-height)]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & ButtonVariantProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button };
