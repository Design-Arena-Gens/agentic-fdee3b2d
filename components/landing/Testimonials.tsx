import Image from "next/image";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section id="customers" className="bg-surface-elevated/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-12 md:flex-row md:items-start">
          <div className="md:w-1/3">
            <p className="text-sm uppercase tracking-[0.36em] text-white/50">
              Loved by teams
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Supercharge collaboration without compromising craft.
            </h2>
            <p className="mt-4 text-sm text-white/65">
              From early stage startups to design-led enterprises, Flux empowers teams to launch cohesive experiences faster.
            </p>
          </div>
          <div className="md:w-2/3">
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-surface p-6"
                >
                  <p className="text-sm text-white/70">“{testimonial.quote}”</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/20 bg-white/10">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
