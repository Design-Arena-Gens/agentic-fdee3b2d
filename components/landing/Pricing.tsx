import { ButtonLink } from "@/components/ui/button";

const tiers = [
  {
    name: "Starter",
    price: "Free",
    tagline: "For makers exploring the future of design.",
    highlight: [
      "3 collaborative projects",
      "AI prompts with 20 generations/mo",
      "Narrative mode previews",
      "Figma import"
    ],
    cta: "Get started"
  },
  {
    name: "Studio",
    price: "$39",
    cadence: "per editor / month",
    tagline: "Everything teams need to ship AI-led design work.",
    highlight: [
      "Unlimited projects & versions",
      "1000 AI generations/mo",
      "Realtime developer handoff",
      "Design memory personalization"
    ],
    featured: true,
    cta: "Start trial"
  },
  {
    name: "Organization",
    price: "Contact",
    tagline: "Security and scale for design-led enterprises.",
    highlight: [
      "On-prem Copilot options",
      "Custom component compilers",
      "Enterprise SSO & audit logs",
      "Priority partner support"
    ],
    cta: "Talk to sales"
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-white/10 bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-white/40">
            Pricing
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
            Build in Flux at every stage of your journey.
          </h2>
          <p className="mt-4 text-base text-white/65 md:text-lg">
            Start for free. Upgrade when your team is ready to go full velocity.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-surface-elevated/90 p-8 ${
                tier.featured ? "shadow-glow-primary" : ""
              }`}
            >
              {tier.featured && (
                <span className="absolute right-6 top-6 rounded-full border border-white/20 bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground">
                  Popular
                </span>
              )}
              <div>
                <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
                <p className="mt-2 text-sm text-white/60">{tier.tagline}</p>
                <div className="mt-6 flex items-end gap-2">
                  <span className="text-4xl font-semibold text-white">{tier.price}</span>
                  {tier.cadence && (
                    <span className="text-xs uppercase tracking-[0.3em] text-white/50">
                      {tier.cadence}
                    </span>
                  )}
                </div>
                <ul className="mt-6 space-y-3 text-sm text-white/70">
                  {tier.highlight.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <ButtonLink
                href="#beta"
                variant={tier.featured ? "primary" : "outline"}
                className="mt-10"
              >
                {tier.cta}
              </ButtonLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
