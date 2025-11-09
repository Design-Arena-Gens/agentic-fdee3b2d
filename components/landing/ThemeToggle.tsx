"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70"
        aria-hidden="true"
      >
        <IconMoon size={18} />
      </button>
    );
  }

  const isDark = theme === "dark" || theme === undefined;

  return (
    <button
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full border transition",
        isDark
          ? "border-white/15 bg-white/5 text-white/70 hover:text-white hover:border-white/40"
          : "border-surface-border/50 bg-white text-surface hover:border-surface-border hover:bg-white/90"
      )}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {isDark ? <IconSun size={18} /> : <IconMoon size={18} />}
    </button>
  );
}
