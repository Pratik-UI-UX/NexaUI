"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  Layers,
  Palette,
  Sparkles,
  Wand2,
  Zap,
} from "lucide-react";

const chips = [
  "Glass panels",
  "Motion presets",
  "Theme tokens",
  "Bento labs",
  "Safari frames",
  "Spotlight ⌘K",
  "Arima display",
  "Skeleton states",
  "Icon morph",
  "Fluid type",
  "Zinc deep mode",
  "Cream light mode",
];

export function AutoScrollShowcase() {
  const row = [...chips, ...chips];

  return (
    <section
      className="relative border-y border-zinc-200/70 bg-white/30 py-10 dark:border-white/10 dark:bg-zinc-950/30"
      aria-label="Feature showcase"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#FFFDF7] to-transparent dark:from-[#09090B]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#FFFDF7] to-transparent dark:from-[#09090B]" />

      <div className="mb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
          Auto-scroll showcase
        </p>
        <h2 className="mt-2 font-arima text-2xl font-bold text-zinc-900 dark:text-white md:text-3xl">
          Everything in motion, nothing extra.
        </h2>
      </div>

      <div className="overflow-hidden">
        <motion.div
          className="flex w-max gap-3 pr-3"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 48,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {row.map((label, i) => (
            <span
              key={`${label}-${i}`}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-zinc-200/80 bg-white/70 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-zinc-900/60 dark:text-zinc-200"
            >
              <MiniIcon index={i} />
              {label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function MiniIcon({ index }: { index: number }) {
  const Icon = [Sparkles, Layers, Palette, Zap, Boxes, Wand2][index % 6];
  return <Icon className="h-4 w-4 text-indigo-500 dark:text-indigo-300" aria-hidden />;
}
