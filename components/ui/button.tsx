import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full border transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground border-primary/10 hover:border-primary hover:shadow-glow-primary focus-visible:outline-primary",
        secondary:
          "bg-white/10 border-white/20 text-white hover:bg-white/20 focus-visible:outline-white/60",
        ghost:
          "bg-transparent border-transparent text-white/80 hover:text-white hover:bg-white/10 focus-visible:outline-white/40",
        outline:
          "bg-transparent border-white/25 text-white/90 hover:bg-white/10 focus-visible:outline-white/50"
      },
      size: {
        sm: "px-4 py-1.5 text-sm",
        md: "px-6 py-2 text-sm",
        lg: "px-8 py-3 text-base",
        xl: "px-10 py-3 text-lg"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

type ButtonLinkProps = VariantProps<typeof buttonVariants> & {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant,
  size,
  className
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant, size }), "no-underline", className)}
    >
      {children}
    </Link>
  );
}
