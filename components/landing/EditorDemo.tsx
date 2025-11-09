 "use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { IconChevronDown, IconLayout, IconSparkles } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const prompts = [
  {
    label: "Billing dashboard",
    prompt:
      "Create a billing dashboard with revenue graph, plan card, and team usage list. Use brand purple.",
    palette: ["#7C5CFF", "#2B244D", "#00E5B0", "#1E1E2E"],
    layout: ["Header", "Plan Card", "Graph", "Team Members"]
  },
  {
    label: "AI assistant",
    prompt:
      "Design an AI assistant chat window with quick intents, transcript, and upload card in a light theme.",
    palette: ["#FFFFFF", "#24242E", "#48DBFB", "#FF9F43"],
    layout: ["Top Nav", "Conversation stream", "Prompt Input", "Intents"]
  },
  {
    label: "Analytics hub",
    prompt:
      "Build an analytics hub with KPI tiles, filters bar, and collaborative comments. Neon slate theme.",
    palette: ["#101223", "#00E5B0", "#F368E0", "#9195FF"],
    layout: ["Toolbar", "KPI Grid", "Activity Feed", "Comments"]
  }
];

const variants = {
  enter: { opacity: 0, y: 10 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 }
};

export function EditorDemo() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const active = prompts[selectedIndex];

  const gradients = useMemo(
    () => ({
      background: `linear-gradient(135deg, ${active.palette[0]}33, ${active.palette[1]}66)`,
      accent: `linear-gradient(180deg, ${active.palette[2]}55, ${active.palette[3]}55)`
    }),
    [active]
  );

  return (
    <section
      id="workflows"
      className="border-y border-white/10 bg-surface py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-center">
          <div className="w-full md:w-2/5">
            <h2 className="text-3xl font-semibold text-white md:text-5xl">
              Generate design systems that adapt on the fly.
            </h2>
            <p className="mt-4 text-base text-white/65">
              Flux captures your intent, pairs it with design intelligence, and gives you interactive building blocks ready for production.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {prompts.map((option, index) => (
                <Button
                  key={option.label}
                  variant={selectedIndex === index ? "primary" : "outline"}
                  size="sm"
                  onClick={() => setSelectedIndex(index)}
                >
                  <IconSparkles size={16} />
                  {option.label}
                </Button>
              ))}
            </div>
          </div>
          <div className="w-full md:w-3/5">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface-elevated/90 shadow-2xl">
              <div className="absolute inset-0 opacity-40" style={{ background: gradients.background }} />
              <div className="relative grid grid-cols-[240px_1fr] gap-0 border-b border-white/10 bg-surface/80">
                <div className="border-r border-white/10 p-4">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/50">
                    Canvas
                    <IconChevronDown size={16} />
                  </div>
                  <div className="mt-4 space-y-3 text-sm">
                    {active.layout.map((item) => (
                      <div
                        key={item}
                        style={{
                          background: gradients.accent
                        }}
                        className={cn(
                          "rounded-2xl border border-white/10 px-4 py-3 text-white/90 shadow-lg"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/25">
                            <IconLayout size={18} />
                          </span>
                          <span>{item}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white/5 p-6">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/50">
                    Flux Copilot
                    <span>Cmd ⏎</span>
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active.label}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      variants={variants}
                      transition={{ duration: 0.3 }}
                      className="mt-4 rounded-2xl border border-white/10 bg-black/35 p-4 text-sm text-white/80 shadow-inner"
                    >
                      {active.prompt}
                    </motion.div>
                  </AnimatePresence>
                  <div className="mt-6 grid gap-3 md:grid-cols-2">
                    {active.palette.map((hex) => (
                      <div
                        key={hex}
                        className="rounded-2xl border border-white/10 p-3"
                        style={{ background: `${hex}22` }}
                      >
                        <p className="font-mono text-xs uppercase text-white/60">
                          {hex}
                        </p>
                        <div
                          className="mt-2 h-10 w-full rounded-xl"
                          style={{ background: hex }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 bg-black/30 px-6 py-4 text-xs text-white/60">
                <span>Flux understands your components, tokens, and usage data.</span>
                <span className="rounded-full border border-white/10 px-3 py-1">
                  9.7s to production-ready mock
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
