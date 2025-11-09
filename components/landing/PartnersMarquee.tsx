"use client";

import { motion } from "framer-motion";

const partners = [
  "Arcadia",
  "Lumen",
  "Nova Systems",
  "Orion",
  "Aster",
  "Helio",
  "Kairo",
  "Kitewave"
];

export function PartnersMarquee() {
  return (
    <section className="border-y border-white/10 bg-surface py-12">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs uppercase tracking-[0.4em] text-white/40">
          Designing with Flux
        </p>
        <div className="relative mt-6 overflow-hidden">
          <motion.div
            className="flex gap-12 text-white/50"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...partners, ...partners].map((name, index) => (
              <span key={`${name}-${index}`} className="text-sm uppercase tracking-[0.3em]">
                {name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
