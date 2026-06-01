"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  HelpCircle,
  Compass,
  Library,
} from "lucide-react";
import { projects } from "@/lib/projects";

const openQuestions = [
  {
    n: "Q1",
    title:
      "How do skilled professionals integrate AI suggestions into work they're already good at?",
    body: "Most studies of AI coding assistants test beginners or measure raw productivity. Less is written about what happens inside the head of someone with ten years of practice — when do they reach for the suggestion, when do they override it without reading, and what does that selectivity tell us about how expertise and AI assistance interact?",
  },
  {
    n: "Q2",
    title:
      "What's the actual unit of trust between a person and an AI assistant?",
    body: "Trust in human-AI interaction is often measured as a single number on a survey. In practice, my trust in Copilot is wildly different for a one-line variable name versus a multi-file refactor — and changes within a single session as I see suggestions land or miss. What would a more useful, situated model of trust look like, and how could tools surface uncertainty in a way that matches how people actually decide?",
  },
  {
    n: "Q3",
    title:
      "When does AI assistance change the structure of professional work, not just its speed?",
    body: "There's a popular framing that AI tools make existing tasks faster. But some tasks get restructured entirely — I notice I now read code differently when I expect the model to write the first draft. That's a different kind of change, and it's the kind HCI is well-positioned to study.",
  },
];

const readingList = [
  {
    citation:
      "Vaithilingam, Zhang, & Glassman (2022). Expectation vs. Experience: Evaluating the Usability of Code Generation Tools Powered by Large Language Models. CHI EA.",
    note: "Often cited; useful as a baseline for what 'usability' even means in this context.",
  },
  {
    citation:
      "Sarkar et al. (2022). What is it like to program with Artificial Intelligence? PPIG.",
    note: "Phenomenology-of-programming framing — closer to the kind of work I find most interesting.",
  },
  {
    citation:
      "Liang, Yang, & Myers (2024). A Large-Scale Survey on the Usability of AI Programming Assistants. ICSE.",
    note: "Survey methodology I want to be more critical of — what gets missed when we ask developers to self-report?",
  },
  {
    citation:
      "Mozannar et al. (2024). Reading Between the Lines: Modeling User Behavior and Costs in AI-Assisted Programming. CHI.",
    note: "Behavioral logs > surveys for the questions I care about. Methodological reference.",
  },
  {
    citation:
      "Bansal et al. (2024). Challenges in Human-Agent Communication. (Microsoft Research)",
    note: "Broader framing of the agent-as-collaborator problem beyond just coding.",
  },
];

export default function ResearchPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-20 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs text-emerald-400 tracking-widest mb-6"
          >
            [ RESEARCH · IN PREPARATION ]
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tightest leading-[0.95] text-balance max-w-5xl"
          >
            People, working
            <br />
            <span className="text-gradient-emerald">with AI tools.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-8 max-w-3xl text-lg text-ink-100 leading-relaxed"
          >
            This page is honest about its stage. I&apos;m an engineer with five
            years of industry practice, preparing PhD applications in
            human-computer interaction. I don&apos;t have publications yet — I
            have observations, a small set of questions I keep returning to,
            and a reading list that&apos;s getting longer than my patience for
            it.
          </motion.p>
        </div>
      </section>

      {/* THE WHY */}
      <section className="relative px-6 lg:px-10 py-20">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-xs text-emerald-400 tracking-widest mb-5">
            01 / WHY THIS QUESTION
          </p>
          <div className="space-y-5 text-lg leading-relaxed text-ink-100">
            <p>
              I use AI coding assistants every working day. I&apos;ve watched
              myself accept some suggestions and silently delete others. I&apos;ve
              seen colleagues become more confident with these tools and others
              become more skeptical — sometimes the same person across a single
              afternoon.
            </p>
            <p>
              The literature on these tools is dominated by productivity
              studies — how much faster, how many more lines, how many fewer
              bugs. Those are useful and incomplete. The questions I find
              myself returning to are different: how does the relationship
              between a skilled professional and their tools <em>change</em>{" "}
              when one of those tools is also a generator? What does it mean to
              trust a collaborator whose mistakes are distributed differently
              than a human&apos;s?
            </p>
            <p className="text-ink-200">
              These feel like HCI questions to me — sitting closer to{" "}
              <a
                href="https://chi2025.acm.org"
                target="_blank"
                rel="noopener"
                className="text-emerald-300 link-underline"
              >
                CHI
              </a>{" "}
              and{" "}
              <a
                href="https://cscw.acm.org"
                target="_blank"
                rel="noopener"
                className="text-emerald-300 link-underline"
              >
                CSCW
              </a>{" "}
              than to a software engineering venue. The community that has
              spent decades thinking about how humans and computers
              collaboratively get work done is the right home for the questions
              I want to ask.
            </p>
          </div>
        </div>
      </section>

      {/* OPEN QUESTIONS */}
      <section className="relative px-6 lg:px-10 py-20 border-t border-ink-700/50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-5">
              <p className="font-mono text-xs text-emerald-400 tracking-widest mb-4">
                02 / OPEN QUESTIONS
              </p>
              <h2 className="font-display text-4xl md:text-5xl tracking-tightest leading-[1.05] text-balance">
                Three I keep
                <br />
                <span className="text-ink-300">coming back to.</span>
              </h2>
            </div>
            <p className="md:col-span-7 text-ink-200 text-lg leading-relaxed self-end">
              I&apos;m not claiming these are novel. I&apos;m claiming they&apos;re
              the ones that genuinely won&apos;t let me put a paper down without
              finishing it.
            </p>
          </div>

          <div className="space-y-4">
            {openQuestions.map((q, i) => (
              <motion.div
                key={q.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 p-8 md:p-10 rounded-lg border border-ink-700 bg-ink-800/30"
              >
                <div className="md:col-span-2">
                  <HelpCircle size={24} className="text-emerald-400 mb-3" />
                  <p className="font-mono text-xs text-emerald-400 tracking-widest">
                    {q.n}
                  </p>
                </div>
                <div className="md:col-span-10">
                  <h3 className="font-display text-xl md:text-2xl tracking-tightest leading-tight mb-4 text-balance">
                    {q.title}
                  </h3>
                  <p className="text-ink-100 leading-relaxed">{q.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS AS RESEARCH CASES */}
      <section className="relative px-6 lg:px-10 py-20 border-t border-ink-700/50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <p className="font-mono text-xs text-emerald-400 tracking-widest mb-4">
              03 / OBSERVATIONS FROM PRACTICE
            </p>
            <h2 className="font-display text-4xl md:text-5xl tracking-tightest leading-[1.05] text-balance max-w-3xl">
              Field notes from
              <br />
              <span className="text-ink-300">building real things.</span>
            </h2>
            <p className="mt-6 text-ink-200 max-w-3xl leading-relaxed">
              I&apos;m not pretending these are studies. They&apos;re client
              projects with research questions I&apos;d like to come back to
              with proper methodology. Each one ran into an HCI problem I
              hadn&apos;t expected.
            </p>
          </div>

          <div className="space-y-6">
            {projects.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 p-8 md:p-10 rounded-lg border border-ink-700 bg-ink-800/30"
              >
                <div className="md:col-span-3">
                  <p className="font-mono text-xs text-ink-300 tracking-widest mb-2">
                    CASE 0{i + 1}
                  </p>
                  <p className="font-display text-xl tracking-tight mb-1">
                    {p.title}
                  </p>
                  <p className="text-xs text-ink-300">{p.category}</p>
                </div>
                <div className="md:col-span-9">
                  <p className="font-mono text-[10px] text-emerald-400 tracking-widest mb-2">
                    QUESTION SURFACED
                  </p>
                  <p className="font-display text-lg tracking-tight leading-tight mb-4 text-emerald-200 text-balance">
                    {p.researchAngle.question}
                  </p>
                  <p className="font-mono text-[10px] text-ink-300 tracking-widest mb-2">
                    OBSERVATION
                  </p>
                  <p className="text-ink-100 leading-relaxed">
                    {p.researchAngle.observation}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* READING LIST */}
      <section className="relative px-6 lg:px-10 py-20 border-t border-ink-700/50">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
            <div className="md:col-span-5">
              <p className="font-mono text-xs text-emerald-400 tracking-widest mb-4">
                04 / READING
              </p>
              <h2 className="font-display text-4xl md:text-5xl tracking-tightest leading-[1.05] text-balance">
                What&apos;s on
                <br />
                <span className="text-ink-300">the desk right now.</span>
              </h2>
            </div>
            <p className="md:col-span-7 text-ink-200 text-lg leading-relaxed self-end">
              A working subset of the papers I&apos;m engaging with. I add brief
              notes about what I&apos;m taking from each — useful both for me
              and for any faculty who happens to land here.
            </p>
          </div>

          <ul className="space-y-5">
            {readingList.map((r, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 pb-5 border-b border-ink-700/40"
              >
                <div className="md:col-span-1 font-mono text-xs text-emerald-400 tracking-widest pt-1">
                  0{i + 1}
                </div>
                <div className="md:col-span-7">
                  <p className="text-ink-50 leading-relaxed">{r.citation}</p>
                </div>
                <div className="md:col-span-4">
                  <p className="text-sm text-ink-200 leading-relaxed italic">
                    {r.note}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>

          <div className="mt-12 p-6 rounded border border-ink-700 bg-ink-800/20">
            <p className="text-sm text-ink-200 leading-relaxed">
              <Library
                size={14}
                className="inline mr-2 -mt-0.5 text-emerald-400"
              />
              This list is a working set, updated as I read. If you&apos;re
              working in this area and have suggestions —{" "}
              <Link
                href="/contact"
                className="text-emerald-300 link-underline"
              >
                please send them
              </Link>
              . I&apos;m especially looking for qualitative and
              methodologically-careful work on professional users.
            </p>
          </div>
        </div>
      </section>

      {/* THE PLAN */}
      <section className="relative px-6 lg:px-10 py-20 border-t border-ink-700/50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="font-mono text-xs text-emerald-400 tracking-widest mb-4">
              05 / THE PLAN
            </p>
            <h2 className="font-display text-4xl md:text-5xl tracking-tightest leading-[1.05] text-balance max-w-3xl">
              What I&apos;m doing
              <br />
              <span className="text-ink-300">to get there.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: Compass,
                phase: "NOW",
                title: "Read & write",
                desc: "Reading 2–3 papers a week. Publishing short essays on what I&apos;m noticing. Identifying labs whose work overlaps with my questions.",
              },
              {
                icon: BookOpen,
                phase: "NEXT 6 MONTHS",
                title: "Reach out & apply",
                desc: "Targeted outreach to faculty whose work I&apos;ve genuinely read. Application materials for the 2026–27 cycle. A research statement that doesn&apos;t lie about my stage.",
              },
              {
                icon: ArrowUpRight,
                phase: "BEYOND",
                title: "Start the program",
                desc: "Begin doctoral work in HCI. Hopefully somewhere with strong industry-relevant research and an advisor who works on questions adjacent to mine.",
              },
            ].map((s, i) => (
              <motion.div
                key={s.phase}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 rounded-lg border border-ink-700 bg-ink-800/30"
              >
                <s.icon className="text-emerald-400 mb-4" size={20} />
                <p className="font-mono text-[10px] text-emerald-400 tracking-widest mb-2">
                  {s.phase}
                </p>
                <h3 className="font-display text-xl tracking-tight mb-3">
                  {s.title}
                </h3>
                <p
                  className="text-sm text-ink-200 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: s.desc }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-6 lg:px-10 border-t border-ink-700/50">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <p className="font-mono text-xs text-emerald-400 tracking-widest mb-6">
                FOR FACULTY
              </p>
              <h2 className="font-display text-3xl md:text-5xl tracking-tightest leading-[1.05] text-balance">
                If your lab works
                <br />
                <span className="text-gradient-emerald">
                  on adjacent questions,
                </span>
                <br />
                <span className="text-ink-300">I&apos;d like to talk.</span>
              </h2>
            </div>
            <div className="md:col-span-5 space-y-4">
              <Link
                href="/contact"
                className="group flex items-center justify-between p-5 rounded border border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/10 transition-all"
              >
                <span className="font-medium text-emerald-200">
                  Email me
                </span>
                <ArrowUpRight size={18} className="text-emerald-300" />
              </Link>
              <Link
                href="/writing"
                className="group flex items-center justify-between p-5 rounded border border-ink-700 hover:border-emerald-500/40 bg-ink-800/30 hover:bg-ink-800/60 transition-all"
              >
                <span className="font-medium text-ink-50">
                  Read my essays
                </span>
                <ArrowUpRight size={18} className="text-emerald-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
