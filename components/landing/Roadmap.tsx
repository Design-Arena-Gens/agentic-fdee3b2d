import { roadmap } from "@/lib/data";

export function Roadmap() {
  return (
    <section className="bg-surface-elevated/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start">
          <div className="md:w-1/3">
            <p className="text-sm uppercase tracking-[0.36em] text-white/40">
              What&apos;s next
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              We are building the creative OS for product teams.
            </h2>
            <p className="mt-4 text-sm text-white/65">
              Join the early access program and help shape the platform shipping beyond design tooling.
            </p>
          </div>
          <div className="md:w-2/3 space-y-4">
            {roadmap.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-surface/90 p-6 md:flex-row md:items-center md:justify-between"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-primary">
                    <item.icon size={26} />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm text-white/60">{item.description}</p>
                  </div>
                </div>
                <span className="rounded-full border border-white/15 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/50">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
