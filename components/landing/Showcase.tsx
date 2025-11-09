"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const shots = [
  {
    title: "Adaptive Components",
    description: "Flux understands responsive breakpoints and adaptive variants out of the box.",
    src: "/shots/adaptive.svg"
  },
  {
    title: "Narrative Mode",
    description: "Craft interactive product walkthroughs without leaving your canvas.",
    src: "/shots/narrative.svg"
  },
  {
    title: "Code Export",
    description: "Production-ready React components, typed and styled with your tokens.",
    src: "/shots/code.svg"
  }
];

export function Showcase() {
  return (
    <section id="showcase" className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.36em] text-white/40">
            See Flux in action
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
            From prompt to product-ready layouts in seconds.
          </h2>
          <p className="mt-4 text-base text-white/65 md:text-lg">
            Explore the building blocks that make Flux the fastest workflow for modern design teams.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {shots.map((shot, index) => (
            <motion.div
              key={shot.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-surface-elevated/90 p-6"
            >
              <div className="relative h-48 w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <Image
                  src={shot.src}
                  alt={shot.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{shot.title}</h3>
              <p className="mt-3 text-sm text-white/65">{shot.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
