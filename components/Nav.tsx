"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Home, Folder, User, PenLine, Mail, Search } from "lucide-react";

const COMMANDS = [
  { href: "/",        label: "Home",    icon: Home,    num: "1" },
  { href: "/work",    label: "Work",    icon: Folder,  num: "2" },
  { href: "/about",   label: "About",   icon: User,    num: "3" },
  { href: "/notes",   label: "Notes",   icon: PenLine, num: "4" },
  { href: "/contact", label: "Contact", icon: Mail,    num: "5" },
];

export default function Nav() {
  const router = useRouter();
  const [open, setOpen]       = useState(false);
  const [query, setQuery]     = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const filtered = COMMANDS.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setSelected(0);
  }, []);

  const navigate = useCallback(
    (href: string) => { router.push(href); close(); },
    [router, close]
  );

  /* ── Keyboard handler ── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      /* Open / close */
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (open) close(); else setOpen(true);
        return;
      }
      if (!open) return;

      if (e.key === "Escape") { close(); return; }

      /* Number shortcut */
      const idx = parseInt(e.key) - 1;
      if (!isNaN(idx) && idx >= 0 && idx < filtered.length) {
        navigate(filtered[idx].href);
        return;
      }

      /* Arrow navigation */
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelected((s) => (s + 1) % filtered.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelected((s) => (s - 1 + filtered.length) % filtered.length);
      } else if (e.key === "Enter" && filtered[selected]) {
        navigate(filtered[selected].href);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, filtered, selected, close, navigate]);

  /* Focus input when palette opens */
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 30);
  }, [open]);

  /* Reset selected when query changes */
  useEffect(() => { setSelected(0); }, [query]);

  return (
    <>
      {/* ── Top bar ── */}
      <header className="cmd-nav-bar">
        <div className="cmd-nav-inner">
          <Link href="/" className="cmd-nav-logo">
            Pavan Gajula<span className="cmd-nav-dot">.</span>
          </Link>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="cmd-jump-btn"
            aria-label="Open command palette (⌘K)"
          >
            <Search size={13} strokeWidth={2.5} />
            <span>Jump to...</span>
            <kbd className="cmd-nav-kbd">⌘K</kbd>
          </button>
        </div>
      </header>

      {/* ── Palette overlay ── */}
      {open && (
        <div className="cmd-overlay" onClick={close} role="dialog" aria-modal="true" aria-label="Navigation palette">
          <div
            ref={panelRef}
            className="cmd-panel"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search row */}
            <div className="cmd-search-row">
              <Search size={15} strokeWidth={2} className="cmd-search-icon" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="go to_"
                className="cmd-input"
                autoComplete="off"
                spellCheck={false}
              />
            </div>

            {/* Items */}
            <div className="cmd-list">
              {filtered.length === 0 ? (
                <p className="cmd-empty">No results</p>
              ) : (
                filtered.map((cmd, i) => (
                  <Link
                    key={cmd.href}
                    href={cmd.href}
                    onClick={close}
                    onMouseEnter={() => setSelected(i)}
                    className={`cmd-item ${i === selected ? "cmd-item--active" : ""}`}
                  >
                    <cmd.icon size={17} strokeWidth={1.75} className="cmd-item-icon" />
                    <span className="cmd-item-label">{cmd.label}</span>
                    <kbd className="cmd-item-num">{cmd.num}</kbd>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
