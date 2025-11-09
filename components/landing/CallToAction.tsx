import { ButtonLink } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section id="beta" className="relative overflow-hidden bg-gradient-to-br from-primary/40 via-flux.pink/20 to-flux.cyan/30 py-24">
      <div className="absolute inset-0 bg-grid-faint opacity-40" />
      <div className="relative mx-auto max-w-5xl rounded-3xl border border-white/20 bg-surface/70 px-8 py-16 text-center shadow-glow-primary backdrop-blur-2xl">
        <p className="text-xs uppercase tracking-[0.4em] text-white/50">
          Early access
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
          Flux is invite-only while we perfect the generative design experience.
        </h2>
        <p className="mt-4 text-sm text-white/70 md:text-base">
          Join the waitlist to collaborate with the product team, access private drop-ins, and get your workspace ready ahead of public launch.
        </p>
        <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="you@team.com"
            className="h-12 flex-1 rounded-full border border-white/20 bg-white/5 px-5 text-sm text-white placeholder:text-white/40 focus:border-white/50 focus:outline-none"
          />
          <ButtonLink href="#" variant="primary" className="h-12">
            Join waitlist
          </ButtonLink>
        </div>
        <p className="mt-6 text-xs text-white/50">
          We onboard a new batch of teams every week — response within 48 hours.
        </p>
      </div>
    </section>
  );
}
