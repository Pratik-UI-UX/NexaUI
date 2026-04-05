"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Copy, Terminal } from "lucide-react";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { Safari } from "@/components/ui/safari";
import { cn } from "@/lib/utils";

const INSTALL = "npm install nexaui";

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [copied, setCopied] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const demoOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const demoY = useTransform(scrollYProgress, [0, 0.55], [0, 48]);
  const demoBlurPx = useTransform(scrollYProgress, [0, 0.45], [0, 6]);
  const demoFilter = useTransform(demoBlurPx, (b) => `blur(${b}px)`);

  const copyInstall = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(INSTALL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-4 pb-20 pt-28 md:pb-28 md:pt-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_90%_70%_at_50%_-30%,rgb(99_102_241/0.2),transparent),radial-gradient(ellipse_50%_45%_at_100%_0%,rgb(244_114_182/0.12),transparent)] dark:bg-[radial-gradient(ellipse_90%_70%_at_50%_-30%,rgb(99_102_241/0.28),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-zinc-300/70 to-transparent dark:via-white/15"
      />

      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:gap-16">
        <div className="flex flex-col gap-8 text-center lg:text-left">
          <div className="space-y-4 lg:max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500 dark:text-zinc-400">
              NexaUI · App Router kit
            </p>
            <h1
              className={cn(
                "font-arima text-balance text-4xl font-bold leading-[1.05] text-zinc-900",
                "dark:text-white md:text-6xl lg:text-[4.25rem]",
              )}
            >
              Build glass-native interfaces without the noise.
            </h1>
            <p className="text-balance text-base text-zinc-600 dark:text-zinc-400 md:text-lg">
              A minimalist launchpad: Safari-framed previews, spotlight search,
              and motion that respects scroll. Cream light, zinc-deep dark.
            </p>
          </div>

          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start">
            <div className="flex min-w-0 flex-1 items-center gap-2 rounded-2xl border border-zinc-200/90 bg-white/70 px-3 py-2.5 font-mono text-xs text-zinc-800 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-zinc-950/60 dark:text-zinc-100 sm:max-w-md">
              <Terminal className="h-4 w-4 shrink-0 text-indigo-500" aria-hidden />
              <span className="min-w-0 flex-1 truncate">{INSTALL}</span>
              <button
                type="button"
                onClick={copyInstall}
                className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-zinc-200/90 bg-[#FFFDF7] px-2 py-1 text-[11px] font-semibold text-zinc-700 transition hover:bg-zinc-100 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
              >
                <Copy className="h-3.5 w-3.5" aria-hidden />
                {copied ? "Copied" : "Copy"}
              </button>
            </div>

            <Link
              href="/docs"
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-2xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-[#FFFDF7] shadow-lg shadow-zinc-900/20",
                "transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:shadow-white/10 dark:hover:bg-zinc-200",
              )}
            >
              Get started
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>

        <motion.div
          style={{
            opacity: demoOpacity,
            y: demoY,
            filter: demoFilter,
          }}
          className="relative mx-auto w-full max-w-4xl will-change-[opacity,transform,filter]"
        >
          <div
            className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-indigo-500/15 via-fuchsia-500/10 to-transparent blur-3xl dark:from-indigo-400/20"
            aria-hidden
          />
          <Safari>
            <div className="relative mx-auto max-w-2xl space-y-4">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 z-20 h-28 bg-gradient-to-b from-[#FFFDF7] via-[#FFFDF7]/65 to-transparent dark:from-[#09090B] dark:via-[#09090B]/65"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-36 bg-gradient-to-t from-[#FFFDF7] via-[#FFFDF7]/50 to-transparent dark:from-[#09090B] dark:via-[#09090B]/50"
                aria-hidden
              />

              <div className="relative z-10 space-y-3 pt-2">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Live preview
                  </p>
                  <span className="rounded-full bg-indigo-500/15 px-2 py-0.5 text-[10px] font-semibold text-indigo-700 dark:text-indigo-200">
                    Magic UI · Safari
                  </span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-zinc-200/80 bg-white/80 p-4 shadow-sm dark:border-white/10 dark:bg-zinc-900/70">
                    <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                      Glass panel
                    </p>
                    <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                      Backdrop blur, hairline border, soft lift.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-zinc-200/80 bg-white/80 p-4 shadow-sm dark:border-white/10 dark:bg-zinc-900/70">
                    <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                      Motion layer
                    </p>
                    <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                      Springs tuned for UI, not fireworks.
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl border border-dashed border-zinc-300/80 bg-white/50 p-4 dark:border-white/15 dark:bg-zinc-950/40">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 opacity-90 shadow-md" />
                    <div className="flex-1 space-y-2">
                      <div className="h-2.5 w-3/4 rounded-full bg-zinc-200/90 dark:bg-zinc-700/90" />
                      <div className="h-2 w-1/2 rounded-full bg-zinc-200/70 dark:bg-zinc-700/70" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Safari>
        </motion.div>
      </div>
    </section>
  );
}
