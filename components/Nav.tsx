"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon, Monitor } from "lucide-react";
import GooeyNav from "./GooeyNav";

const NAV_ITEMS = [
  { label: "Home",    href: "/" },
  { label: "Work",    href: "/work" },
  { label: "About",   href: "/about" },
  { label: "Notes",   href: "/notes" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"dark" | "light" | "system">("system");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | "system" | null;
    if (saved === "dark" || saved === "light" || saved === "system") setTheme(saved);
  }, []);

  const toggleTheme = () => {
    const cycle = { system: "dark", dark: "light", light: "system" } as const;
    const next = cycle[theme];
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  };

  const initialActiveIndex = (() => {
    const idx = NAV_ITEMS.findIndex(item =>
      item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
    );
    return idx >= 0 ? idx : 0;
  })();

  return (
    <header className="cmd-nav-bar">
      <div className="cmd-nav-inner">
        <Link href="/" className="cmd-nav-logo">
          Pavan Gajula<span className="cmd-nav-dot">.</span>
        </Link>

        <GooeyNav
          items={NAV_ITEMS}
          initialActiveIndex={initialActiveIndex}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />

        <button
          type="button"
          onClick={toggleTheme}
          className="nav-icon-btn"
          aria-label={`Theme: ${theme}`}
          title={`Theme: ${theme}`}
        >
          {theme === "dark"   && <Moon    size={14} strokeWidth={2} />}
          {theme === "light"  && <Sun     size={14} strokeWidth={2} />}
          {theme === "system" && <Monitor size={14} strokeWidth={2} />}
        </button>
      </div>
    </header>
  );
}
