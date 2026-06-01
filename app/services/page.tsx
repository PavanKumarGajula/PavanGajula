"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Globe,
  Heart,
  ShoppingBag,
  Layers,
  Check,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    name: "Business websites",
    desc: "Marketing sites that look credible and convert. Built fast, deployed faster.",
    ideal: "Small businesses, consultancies, professional services",
    deliverables: [
      "5–8 page custom design",
      "Mobile-first responsive build",
      "SEO foundations & analytics",
      "Lead capture & contact forms",
      "Performance-optimized (Lighthouse 90+)",
    ],
    timeline: "2–4 weeks",
  },
  {
    icon: Heart,
    name: "Nonprofit & community",
    desc: "Sites that help mission-driven orgs reach more people and run their operations.",
    ideal: "501(c)(3)s, sports clubs, community programs",
    deliverables: [
      "Public marketing site",
      "Member or volunteer portal (optional)",
      "Event & program management",
      "Stripe-powered donations or registration",
      "Discounted nonprofit rates available",
    ],
    timeline: "3–6 weeks",
  },
  {
    icon: ShoppingBag,
    name: "E-commerce",
    desc: "Modern storefronts with real payment infrastructure. Not a Shopify wrapper.",
    ideal: "Direct-to-consumer brands, digital products, services with bookings",
    deliverables: [
      "Custom product catalog & cart",
      "Stripe Checkout / Payments integration",
      "Order management & email receipts",
      "Inventory & basic admin panel",
      "Tax & shipping configuration",
    ],
    timeline: "4–8 weeks",
  },
  {
    icon: Layers,
    name: "Full-stack web apps",
    desc: "Custom applications when off-the-shelf tools won't cut it. Built to scale.",
    ideal: "Startups, internal tools, platforms with custom workflows",
    deliverables: [
      "Spring Boot or Node.js backend",
      "React / Next.js frontend",
      "Auth, roles, and permissions",
      "Database design & API contracts",
      "Cloud deployment (AWS / Vercel)",
    ],
    timeline: "6–12 weeks",
  },
];

const process = [
  {
    n: "01",
    title: "Discovery",
    desc: "We talk about what you need, who it's for, and what success looks like. I send a written scope and a fixed quote — no hourly surprises.",
  },
  {
    n: "02",
    title: "Design & plan",
    desc: "Wireframes, then high-fidelity mockups. You see everything before a single line of production code gets written.",
  },
  {
    n: "03",
    title: "Build",
    desc: "I work in week-long sprints with regular check-ins. You see the staging URL from day one and can review progress whenever you want.",
  },
  {
    n: "04",
    title: "Launch & support",
    desc: "Production deployment, DNS, analytics, and a handoff doc. Optional retainer for ongoing changes and content updates.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-24 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-1/4 left-0 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-[100px]" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs text-emerald-400 tracking-widest mb-6"
          >
            [ FREELANCE · SMALL INTAKE ]
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tightest leading-[0.95] text-balance max-w-4xl"
          >
            A few projects
            <br />
            <span className="text-gradient-emerald">a year.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-8 max-w-2xl text-lg text-ink-100 leading-relaxed"
          >
            Through Coldcraft Studio, I take on a handful of website projects
            per year alongside my engineering work and PhD preparation. Tight
            scope, fixed quotes, hand-built code. Currently accepting one new
            project for the next intake window.
          </motion.p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="relative px-6 lg:px-10 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group p-8 md:p-10 rounded-lg border border-ink-700 hover:border-emerald-500/40 bg-ink-800/30 hover:bg-ink-800/60 transition-all"
              >
                <div className="flex items-start justify-between mb-6">
                  <s.icon className="text-emerald-400" size={28} />
                  <span className="font-mono text-xs text-ink-300 tracking-widest">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl tracking-tightest mb-3">
                  {s.name}
                </h3>
                <p className="text-ink-100 leading-relaxed mb-6">{s.desc}</p>

                <div className="space-y-5 text-sm">
                  <div>
                    <p className="font-mono text-[10px] text-ink-300 tracking-widest mb-2">
                      IDEAL FOR
                    </p>
                    <p className="text-ink-50">{s.ideal}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-ink-300 tracking-widest mb-2">
                      WHAT&apos;S INCLUDED
                    </p>
                    <ul className="space-y-1.5">
                      {s.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-2 text-ink-100"
                        >
                          <Check
                            size={14}
                            className="text-emerald-400 mt-1 flex-shrink-0"
                          />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-ink-700/50 flex items-center justify-between">
                    <div>
                      <p className="font-mono text-[10px] text-ink-300 tracking-widest mb-1">
                        TYPICAL TIMELINE
                      </p>
                      <p className="text-emerald-300">{s.timeline}</p>
                    </div>
                    <Link
                      href="/contact"
                      className="text-sm text-emerald-300 hover:text-emerald-200 link-underline"
                    >
                      Discuss →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative py-32 px-6 lg:px-10 border-t border-ink-700/50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <p className="font-mono text-xs text-emerald-400 tracking-widest mb-4">
              02 / HOW WE WORK
            </p>
            <h2 className="font-display text-4xl md:text-5xl tracking-tightest leading-[1.05] text-balance max-w-3xl">
              A simple process.
              <br />
              <span className="text-ink-300">No mysteries, no timesheets.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative p-6 rounded border border-ink-700 bg-ink-800/30"
              >
                <p className="font-mono text-xs text-emerald-400 tracking-widest mb-3">
                  {p.n}
                </p>
                <h3 className="font-display text-xl tracking-tight mb-3">
                  {p.title}
                </h3>
                <p className="text-sm text-ink-200 leading-relaxed">
                  {p.desc}
                </p>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-emerald-500/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING NOTE */}
      <section className="relative py-24 px-6 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="p-10 md:p-14 rounded-lg border border-emerald-500/30 bg-emerald-500/[0.03]">
            <p className="font-mono text-xs text-emerald-400 tracking-widest mb-4">
              ON PRICING
            </p>
            <h3 className="font-display text-3xl md:text-4xl tracking-tightest leading-tight mb-5 text-balance">
              Fixed quotes. Always.
            </h3>
            <p className="text-ink-100 leading-relaxed text-lg">
              Every project gets a written scope and a fixed price before any
              work starts. No hourly billing, no surprise invoices. If the
              scope changes mid-build, we agree on a written change order
              first. Most business sites land in the{" "}
              <span className="text-emerald-300">$2,500–$8,000</span> range;
              full-stack apps and e-commerce build start around{" "}
              <span className="text-emerald-300">$6,000</span>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-6 lg:px-10 border-t border-ink-700/50">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-display text-5xl md:text-7xl tracking-tightest leading-[1.02] text-balance">
            Got something
            <br />
            <span className="text-gradient-emerald">in mind?</span>
          </h2>
          <p className="mt-8 text-ink-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Tell me what you&apos;re building. I&apos;ll come back within 24
            hours with questions, a rough scope, and an estimate.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 text-ink-950 font-medium rounded hover:bg-emerald-400 transition-colors emerald-glow"
          >
            Request a quote
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
