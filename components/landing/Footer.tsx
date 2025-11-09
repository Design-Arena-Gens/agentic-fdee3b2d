import Link from "next/link";

const links = [
  {
    title: "Product",
    items: [
      { label: "Editor", href: "#product" },
      { label: "Narrative mode", href: "#showcase" },
      { label: "Copilot", href: "#workflows" }
    ]
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Changelog", href: "#" }
    ]
  },
  {
    title: "Resources",
    items: [
      { label: "Docs", href: "#" },
      { label: "Community", href: "#" },
      { label: "Support", href: "#" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-primary via-flux.pink to-flux.cyan text-surface shadow-glow-teal">
              ƒ
            </div>
            <span className="text-lg font-semibold text-white">Flux Studio</span>
          </div>
          <p className="mt-4 text-sm text-white/60">
            Flux is the AI-native design platform for teams who ship products that feel alive.
          </p>
        </div>
        <div className="grid flex-1 gap-8 md:grid-cols-3">
          {links.map((column) => (
            <div key={column.title} className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.3em] text-white/50">
                {column.title}
              </h3>
              <ul className="space-y-3 text-sm text-white/70">
                {column.items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-4 px-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
        <span>© {new Date().getFullYear()} Flux Studio. Crafted with acceleration in mind.</span>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-white/70">
            Terms
          </Link>
          <Link href="#" className="hover:text-white/70">
            Privacy
          </Link>
          <Link href="#" className="hover:text-white/70">
            Security
          </Link>
        </div>
      </div>
    </footer>
  );
}
