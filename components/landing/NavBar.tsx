import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { ThemeToggle } from "@/components/landing/ThemeToggle";

const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Workflows", href: "#workflows" },
  { label: "Customers", href: "#customers" },
  { label: "Pricing", href: "#pricing" }
];

export function NavBar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl border-b border-white/10 bg-surface/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-tr from-primary via-flux.pink to-flux.cyan shadow-glow-teal">
            <span className="font-mono text-lg font-semibold text-surface">ƒ</span>
          </div>
          <span className="text-lg font-semibold tracking-wide">Flux Studio</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <ButtonLink href="#beta" variant="secondary" size="sm">
            Join beta
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
