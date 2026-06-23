"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface PointerHighlightProps {
  children: React.ReactNode;
  rectangleClassName?: string;
  pointerClassName?: string;
  containerClassName?: string;
  delay?: number;
}

export function PointerHighlight({
  children,
  rectangleClassName,
  pointerClassName,
  containerClassName,
  delay = 0.5,
}: PointerHighlightProps) {
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setTriggered(true), delay * 1000);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <span
      className={clsx("relative inline-block", containerClassName)}
      style={{ overflow: "visible" }}
    >
      {/* highlight rectangle — sweeps in left to right */}
      {triggered && (
        <motion.span
          className={clsx(
            "pointer-events-none absolute -inset-x-2 -inset-y-1 rounded border",
            rectangleClassName
          )}
          style={{ transformOrigin: "left center" }}
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        />
      )}

      <span className="relative z-10">{children}</span>
    </span>
  );
}
