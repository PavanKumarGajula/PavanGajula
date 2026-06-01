"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Calendar, Clock } from "lucide-react";
import { posts } from "@/lib/posts";

export default function WritingPage() {
  const published = posts.filter((p) => p.status === "published");
  const upcoming = posts.filter((p) => p.status === "draft");

  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-20 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs text-emerald-400 tracking-widest mb-6"
          >
            [ WRITING · ESSAYS & NOTES ]
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tightest leading-[0.95] text-balance max-w-5xl"
          >
            Thinking in public.
            <br />
            <span className="text-gradient-emerald">Slowly.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-8 max-w-2xl text-lg text-ink-100 leading-relaxed"
          >
            Short essays — usually 800 to 1,500 words — on engineering with AI
            tools, the gap between demos and daily use, and what I notice
            building software for non-technical clients. Roughly one a month.
          </motion.p>
        </div>
      </section>

      {/* PUBLISHED POSTS */}
      {published.length > 0 && (
        <section className="relative px-6 lg:px-10 pb-12">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-2">
              {published.map((p, i) => (
                <motion.article
                  key={p.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <Link
                    href={`/writing/${p.slug}`}
                    className="group block py-8 border-b border-ink-700/40 hover:border-emerald-500/40 transition-colors"
                  >
                    <div className="flex items-baseline gap-4 mb-3 font-mono text-xs text-ink-300 tracking-widest">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={12} />
                        {new Date(p.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={12} />
                        {p.readingTime}
                      </span>
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl tracking-tightest leading-tight mb-3 text-balance group-hover:text-emerald-300 transition-colors">
                      {p.title}
                    </h2>
                    <p className="text-ink-100 leading-relaxed mb-4 max-w-3xl">
                      {p.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-xs font-mono text-emerald-300/80 border border-emerald-500/20 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* EMPTY STATE — only shown if nothing published */}
      {published.length === 0 && (
        <section className="relative px-6 lg:px-10 pb-12">
          <div className="mx-auto max-w-4xl">
            <div className="p-10 md:p-14 rounded-lg border border-emerald-500/20 bg-emerald-500/[0.03]">
              <FileText className="text-emerald-400 mb-4" size={24} />
              <p className="font-mono text-xs text-emerald-400 tracking-widest mb-3">
                FIRST POSTS COMING SOON
              </p>
              <h3 className="font-display text-3xl md:text-4xl tracking-tightest leading-tight mb-4 text-balance">
                Nothing published yet — but the first three are in the
                pipeline.
              </h3>
              <p className="text-ink-100 leading-relaxed text-lg">
                I&apos;m drafting one essay a month, deliberately not
                publishing until each one has been sat with for at least two
                weeks. The drafts in progress are listed below.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* UPCOMING POSTS */}
      {upcoming.length > 0 && (
        <section className="relative px-6 lg:px-10 py-20 border-t border-ink-700/50">
          <div className="mx-auto max-w-4xl">
            <p className="font-mono text-xs text-emerald-400 tracking-widest mb-4">
              IN THE PIPELINE
            </p>
            <h2 className="font-display text-3xl md:text-4xl tracking-tightest leading-tight mb-10 text-balance">
              Drafts I&apos;m currently working on.
            </h2>

            <div className="space-y-4">
              {upcoming.map((p, i) => (
                <motion.div
                  key={p.slug}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="p-6 rounded-lg border border-ink-700 bg-ink-800/20"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-display text-lg md:text-xl tracking-tight leading-tight text-balance">
                      {p.title}
                    </h3>
                    <span className="font-mono text-[10px] text-ink-300 tracking-widest flex-shrink-0 px-2 py-0.5 border border-ink-600 rounded">
                      DRAFT
                    </span>
                  </div>
                  <p className="text-sm text-ink-200 leading-relaxed mb-3">
                    {p.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[10px] font-mono text-ink-300 border border-ink-600/50 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SUBSCRIBE / CTA */}
      <section className="relative py-32 px-6 lg:px-10 border-t border-ink-700/50">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-mono text-xs text-emerald-400 tracking-widest mb-6">
            STAY IN TOUCH
          </p>
          <h2 className="font-display text-4xl md:text-5xl tracking-tightest leading-[1.05] text-balance">
            Want to know
            <br />
            <span className="text-gradient-emerald">
              when new pieces go up?
            </span>
          </h2>
          <p className="mt-6 text-ink-200 leading-relaxed max-w-2xl mx-auto">
            I don&apos;t run a newsletter yet — but if you email me, I&apos;ll
            send you the first three essays directly when they&apos;re ready.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/10 rounded transition-colors"
          >
            Send me an email
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
