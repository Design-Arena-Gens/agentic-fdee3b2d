"use client";

import { motion } from "framer-motion";
import { features } from "@/lib/data";

export function FeatureGrid() {
  return (
    <section id="product" className="border-t border-white/10 bg-surface-elevated/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="md:text-center">
          <p className="text-sm uppercase tracking-[0.36em] text-white/50">Product</p>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
            Crafted for teams who prototype, iterate, and ship without compromise.
          </h2>
          <p className="mt-4 text-base text-white/60 md:text-lg">
            Flux keeps the interface responsive, accessible, and aligned with your production code while you orchestrate the experience.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-surface/80 p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              <feature.icon className="h-10 w-10 text-primary" />
              <h3 className="mt-6 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
