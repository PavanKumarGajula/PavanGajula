"use client";

import { motion } from "framer-motion";

interface Props {
  number: string;
  label: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  number,
  label,
  title,
  description,
  align = "left",
}: Props) {
  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-3 mb-5"
      >
        <span className="font-mono text-xs text-emerald-400 tracking-widest">
          {number}
        </span>
        <span className="h-px w-12 bg-emerald-500/40" />
        <span className="font-mono text-xs text-ink-200 tracking-widest uppercase">
          {label}
        </span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
        className="font-display text-4xl md:text-5xl tracking-tightest leading-[1.05] text-balance"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="mt-5 text-ink-200 text-lg leading-relaxed max-w-2xl"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
