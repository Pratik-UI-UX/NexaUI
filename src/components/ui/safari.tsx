"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SafariProps = {
  url?: string;
  children?: ReactNode;
  className?: string;
};

export function Safari({
  url = "https://nexaui.dev/preview",
  children,
  className,
}: SafariProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.35rem] border border-zinc-200/90 bg-zinc-100 shadow-[0_40px_120px_-40px_rgb(0_0_0/0.35)]",
        "dark:border-white/10 dark:bg-zinc-900/80 dark:shadow-[0_50px_140px_-50px_rgb(0_0_0/0.65)]",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-zinc-200/80 bg-white/90 px-4 py-3 dark:border-white/10 dark:bg-zinc-950/80">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        </div>
        <div className="mx-auto flex min-w-0 flex-1 items-center justify-center px-4">
          <div className="flex w-full max-w-md items-center gap-2 rounded-lg border border-zinc-200/90 bg-zinc-50/90 px-3 py-1.5 text-[11px] text-zinc-500 shadow-inner dark:border-white/10 dark:bg-zinc-900/80 dark:text-zinc-400">
            <span className="truncate tabular-nums">{url}</span>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "relative bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900",
          "min-h-[220px] sm:min-h-[280px]",
        )}
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-[#FFFDF7] via-[#FFFDF7]/40 to-transparent dark:from-[#09090B] dark:via-[#09090B]/40"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-[#FFFDF7] via-[#FFFDF7]/30 to-transparent dark:from-[#09090B] dark:via-[#09090B]/30"
          aria-hidden
        />
        <div className="relative z-0 p-4 sm:p-6">{children}</div>
      </div>
    </div>
  );
}
