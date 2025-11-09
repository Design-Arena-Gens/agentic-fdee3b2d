"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button";

const heroCards = [
  {
    title: "Semantic Layouts",
    description: "AI suggestions align with your design system tokens and breakpoints."
  },
  {
    title: "Storyboards",
    description: "Present flows with narrative slides powered by your live canvas."
  },
  {
    title: "Hand-off Perfected",
    description: "Export React, Vue, or SwiftUI with one click and zero drift."
  }
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-flux-radial opacity-70" />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 pb-28 pt-24 text-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.44em] text-white/60"
        >
          AI-Native Design Workbench
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl"
        >
          Design the next era of product experiences with generative precision.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl text-lg text-white/70"
        >
          Flux pairs language-to-layout intelligence with multiplayer craft tools, so every team moves from idea to production-ready UI in minutes.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          <ButtonLink href="#beta" size="lg" className="shadow-glow-primary">
            Request early access
          </ButtonLink>
          <ButtonLink href="#showcase" variant="ghost" size="lg">
            Watch the experience
          </ButtonLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="relative mt-16 w-full rounded-3xl border border-white/10 bg-surface-elevated/70 p-6 shadow-2xl backdrop-blur-2xl"
        >
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="flex-1 rounded-2xl bg-gradient-to-br from-white/5 via-white/0 to-transparent p-6 text-left">
              <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-white/40">
                Natural Language to Layout
              </h2>
              <p className="mt-3 text-2xl font-semibold text-white">
                “Generate a responsive billing settings screen with upgrade CTA and FAQ.”
              </p>
              <p className="mt-4 text-sm text-white/60">
                Flux creates a component tree, hooks into your tokens, and leaves every layer editable.
              </p>
            </div>
            <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-3">
              {heroCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left"
                >
                  <h3 className="text-sm font-semibold text-white">{card.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/65">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
