"use client";
import React from "react";
import { LayoutGrid, type Card } from "./ui/layout-grid";

const cards: Card[] = [
  {
    id: 1,
    title: "Straight Path Athletics",
    line1: "Youth sports nonprofit — brand, website, and online registration built from scratch for 200+ athletes.",
    line2: "Duda · TeamSnap · Stripe · JavaScript · Python",
    colSpan: 2,
    thumbnail: "/images/straight-path.jpg",
  },
  {
    id: 2,
    title: "Synack Solutions",
    line1: "Java backend and NinjaOne dashboard for a Baltimore IT consulting firm, used daily by the operations team.",
    line2: "Java · Spring Boot · NinjaOne API · SQL",
    colSpan: 1,
    thumbnail: "/images/synack.jpg",
  },
  {
    id: 3,
    title: "HKM Engineers",
    line1: "Figma mockups to live Next.js site for a civil engineering firm in Illinois — solo designer and developer.",
    line2: "Next.js · React · Tailwind · Figma · Vercel",
    colSpan: 1,
    thumbnail: "/images/hkm.jpg",
  },
  {
    id: 4,
    title: "Trican Security",
    line1: "Full design and development of web presence for a security firm — concept to deployment.",
    line2: "Next.js · React · Tailwind · Vercel",
    colSpan: 2,
    thumbnail: "/images/trican.jpg",
  },
];

export function WorkGrid() {
  return (
    <div className="w-full mt-8">
      <LayoutGrid cards={cards} />
    </div>
  );
}
