"use client";

import { personaHighlights } from "@/lib/data";
import { motion } from "framer-motion";

export function PersonaHighlights() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {personaHighlights.map((persona, index) => (
            <motion.div
              key={persona.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface-elevated/90 p-6"
            >
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  background: `radial-gradient(circle at 20% 20%, ${persona.color}44, transparent 60%)`
                }}
              />
              <div className="relative">
                <span className="text-xs uppercase tracking-[0.3em] text-white/50">
                  {persona.title}
                </span>
                <p className="mt-4 text-lg font-semibold text-white">
                  {persona.narrative}
                </p>
                <button className="mt-6 text-sm font-medium text-white/70 underline underline-offset-4 hover:text-white">
                  {persona.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
