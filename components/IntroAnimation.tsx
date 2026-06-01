"use client";

import { useState, useEffect } from "react";

export default function IntroAnimation() {
  const [phase, setPhase] = useState<"idle" | "visible" | "leaving" | "done">("idle");

  useEffect(() => {
    if (sessionStorage.getItem("intro-shown")) {
      setPhase("done");
      return;
    }

    setPhase("visible");

    // After bar animation completes, start the slide-away
    const t1 = setTimeout(() => setPhase("leaving"), 1800);

    // After slide-away finishes, unmount
    const t2 = setTimeout(() => {
      setPhase("done");
      sessionStorage.setItem("intro-shown", "1");
    }, 2600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "done" || phase === "idle") return null;

  return (
    <div
      className={`intro-overlay ${phase === "leaving" ? "intro-overlay--leaving" : ""}`}
      aria-hidden="true"
    >
      <div className="intro-content">
        <div className="intro-logo">
          PG<span className="intro-dot">.</span>
        </div>
        <div className="intro-bar">
          <div className="intro-bar-fill" />
        </div>
      </div>
    </div>
  );
}
