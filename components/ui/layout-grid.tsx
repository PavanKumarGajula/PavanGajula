"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export type Card = {
  id: number;
  title: string;
  line1: string;
  line2: string;
  colSpan?: 1 | 2;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);

  return (
    <>
      {/* grid */}
      <div
        className="work-grid"
        style={{
          filter: selected ? "blur(6px) brightness(0.45)" : "none",
          transition: "filter 0.4s ease",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className={`work-grid-cell${card.colSpan === 2 ? " span-2" : ""}`}
            onClick={() => setSelected(card)}
          >
            {/* image — zoomed in by default, zooms out on hover/tap */}
            <motion.img
              src={card.thumbnail}
              alt={card.title}
              initial={{ scale: 1.12 }}
              whileHover={{ scale: 1.0 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
                transformOrigin: "center center",
              }}
            />

            {/* gradient overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.08) 55%, transparent 100%)",
                zIndex: 1,
                pointerEvents: "none",
              }}
            />

            {/* card title */}
            <p
              style={{
                position: "absolute",
                bottom: "16px",
                left: "20px",
                zIndex: 2,
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "1rem",
                letterSpacing: "-0.01em",
                color: "#fff",
                margin: 0,
                pointerEvents: "none",
              }}
            >
              {card.title}
            </p>
          </div>
        ))}
      </div>

      {/* lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => setSelected(null)}
          >
            {/* blurred zoomed bg */}
            <motion.div
              initial={{ scale: 1.06 }}
              animate={{ scale: 1.0 }}
              exit={{ scale: 1.06 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{ position: "absolute", inset: 0, overflow: "hidden" }}
            >
              <img
                src={selected.thumbnail}
                alt=""
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  transform: "scale(1.3)",
                  filter: "blur(28px)",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0,0,0,0.58)",
                }}
              />
            </motion.div>

            {/* text content */}
            <motion.div
              initial={{ y: 36, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 28, opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 300, delay: 0.06 }}
              style={{
                position: "relative",
                zIndex: 10,
                width: "100%",
                maxWidth: "780px",
                padding: "0 32px",
                display: "flex",
                flexDirection: "column",
                height: "58vh",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* company name */}
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "clamp(2.8rem, 7vw, 7rem)",
                  lineHeight: 0.93,
                  letterSpacing: "-0.025em",
                  color: "#fff",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                {selected.title}
              </h2>

              {/* 2 lines at bottom */}
              <div
                style={{
                  marginTop: "auto",
                  borderTop: "1px solid rgba(255,255,255,0.18)",
                  paddingTop: "22px",
                }}
              >
                <p
                  style={{
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "1.05rem",
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  {selected.line1}
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    marginTop: "10px",
                    marginBottom: 0,
                  }}
                >
                  {selected.line2}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
