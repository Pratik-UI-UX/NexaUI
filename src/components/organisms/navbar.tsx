"use client";

import {
  BookOpen,
  Github,
  LayoutGrid,
  Search,
  Shapes,
  Type,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/atoms/brand-logo";
import { ThemeToggle } from "@/components/molecules/theme-toggle";
import { useSpotlight } from "@/contexts/spotlight-context";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/components", label: "Components", icon: LayoutGrid },
  { href: "/docs", label: "Docs", icon: BookOpen },
  { href: "/fonts", label: "Fonts", icon: Type },
  { href: "/icons", label: "Icons", icon: Shapes },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const { setOpen } = useSpotlight();

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-6">
      <nav
        className={cn(
          "glass-panel pointer-events-auto flex w-full max-w-5xl flex-wrap items-center gap-3 rounded-full px-4 py-2.5 pl-5 sm:gap-4",
          "border border-black/[0.06] dark:border-white/[0.08]",
        )}
        aria-label="Primary"
      >
        <Link href="/" className="shrink-0">
          <BrandLogo />
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-1 md:flex lg:gap-2">
          {navLinks.map((l) => {
            const active =
              pathname === l.href || pathname.startsWith(`${l.href}/`);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
                  active
                    ? "bg-zinc-900/10 text-zinc-900 dark:bg-white/10 dark:text-white"
                    : "text-zinc-600 hover:bg-black/[0.04] hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/[0.06] dark:hover:text-white",
                )}
              >
                <l.icon className="h-4 w-4 opacity-80" aria-hidden />
                {l.label}
              </Link>
            );
          })}
        </div>

        <div className="mx-auto flex min-w-0 flex-1 justify-center md:mx-0 md:max-w-xs md:flex-initial md:justify-end">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className={cn(
              "relative flex h-9 w-full min-w-[8rem] cursor-pointer items-center gap-2 rounded-full border border-zinc-200/90 bg-white/60 px-3 text-left text-sm text-zinc-500 shadow-sm outline-none",
              "transition hover:border-indigo-400/60 hover:bg-white/80 dark:border-white/10 dark:bg-zinc-900/50 dark:text-zinc-400 dark:hover:border-indigo-400/40",
              "md:w-56",
            )}
          >
            <Search className="h-4 w-4 shrink-0 text-zinc-400" aria-hidden />
            <span className="truncate">Search for features…</span>
            <kbd className="ml-auto hidden shrink-0 rounded border border-zinc-200 bg-zinc-100 px-1.5 py-0.5 text-[10px] font-medium text-zinc-500 dark:border-white/15 dark:bg-zinc-900 dark:text-zinc-400 sm:inline">
              ⌃K
            </kbd>
          </button>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <ThemeToggle />
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full px-2 py-1.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-black/[0.04] dark:text-zinc-300 dark:hover:bg-white/[0.06] sm:flex"
          >
            <Github className="h-4 w-4" aria-hidden />
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}
