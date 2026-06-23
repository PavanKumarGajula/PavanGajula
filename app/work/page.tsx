import Image from "next/image";
import Link from "next/link";

type StatCard = { value: string; label: string; accent?: boolean };
type Chip = { label: string; dot?: boolean };
type Tech = { label: string; src?: string; mono?: string; inv?: boolean };

type Project = {
  num: string;
  caseLabel: string;
  name: string;
  intro: string;
  role: string;
  tech: Tech[];
  domain: string;
  url: string;
  image: string;
  imageRight?: boolean;
  startTitle: string;
  start: React.ReactNode;
  hardTitle: string;
  hard: React.ReactNode;
  resultTitle: string;
  stats?: StatCard[];
  chips?: Chip[];
  result: React.ReactNode;
};

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
const SIMPLE = "https://cdn.simpleicons.org";

const PROJECTS: Project[] = [
  {
    num: "Case 01",
    caseLabel: "Case 01 — Youth sports · Maryland",
    name: "Straight Path Athletics",
    intro:
      "A volunteer-run youth sports nonprofit in Howard County, Maryland: basketball and flag football for kids ages 5 to 12.",
    role: "Technology Lead",
    tech: [
      { label: "HTML", src: `${DEVICON}/html5/html5-original.svg` },
      { label: "CSS", src: `${DEVICON}/css3/css3-original.svg` },
      { label: "JavaScript", src: `${DEVICON}/javascript/javascript-original.svg` },
      { label: "Duda CMS", mono: "D" },
      { label: "TeamSnap", mono: "TS" },
      { label: "Stripe", src: `${SIMPLE}/stripe` },
    ],
    domain: "straightpathathletics.com",
    url: "https://straightpathathletics.com",
    image: "/images/straight-path.jpg",
    startTitle: "The starting point",
    start: (
      <>
        A nonprofit run entirely by volunteers, getting its program off the ground. I came in as the
        Technology Lead and owned the whole digital side end to end: I designed and built the
        six-page site, set up registration on TeamSnap, and ran the operations and data behind it.
        The brief was a custom site at sports-franchise quality, the kind you&apos;d expect from a
        brand with a budget, that one person could keep running.
      </>
    ),
    hardTitle: "The hard part",
    hard: (
      <>
        Making Duda, a no-code CMS, behave like a real front-end environment. Duda renders
        asynchronously, so the standard <Strong>DOMContentLoaded</Strong> event fires before my
        components are on the page, and animations would fail silently and intermittently. I traced
        it to the timing and moved every script onto Duda&apos;s own ready hook,{" "}
        <Strong>dmAPI.runOnReady()</Strong>, the only one that fires late enough to be reliable. Duda
        also strips style tags and keyframes out of its text blocks, so animations had to be injected
        at the right level, and because the site shares pages with TeamSnap in places, my CSS had to
        be scoped so it never leaked into TeamSnap&apos;s styling and broke registration. None of
        this is documented anywhere as a checklist. I worked it out by building, breaking, and
        tracing.
      </>
    ),
    resultTitle: "The result",
    stats: [
      { value: "200", label: "kids registered across four teams" },
      { value: "20", label: "volunteers across six departments" },
      { value: "$0", label: "spent on outside agencies", accent: true },
    ],
    result: (
      <>
        All sign-ups self-service through TeamSnap, replacing an Excel-based process. It was
        SPA&apos;s first website: a full multi-page site shipped and maintained by one person.
      </>
    ),
  },
  {
    num: "Case 02",
    caseLabel: "Case 02 — Managed IT · MSP",
    name: "SynAck Solutions",
    intro:
      "A new engineering-first managed IT and security company (an MSP), founded in 2024 by three technical people, serving businesses across NY, NJ, MD, and MN.",
    role: "Full Stack Developer",
    tech: [
      { label: "Next.js", src: `${DEVICON}/nextjs/nextjs-original.svg`, inv: true },
      { label: "NinjaOne", mono: "N1" },
      { label: "Cloudflare", src: `${SIMPLE}/cloudflare` },
      { label: "Resend", src: `${SIMPLE}/resend`, inv: true },
      { label: "Sentry", src: `${SIMPLE}/sentry` },
      { label: "Vercel", src: `${SIMPLE}/vercel`, inv: true },
    ],
    domain: "synacksolutions.com",
    url: "https://synacksolutions.com",
    image: "/images/synack.jpg",
    imageRight: true,
    startTitle: "The starting point",
    start: (
      <>
        Three engineers building their company from the ground up, who brought me in to own the whole
        product: design, frontend, backend, and the integration between. I built their 5-page
        marketing site, then a full-stack internal platform in Next.js: a live operations dashboard
        with ticket counts, device health, and alerts in one view, an asset management system for
        client inventory, and client-facing updates so customers can see the work performed. I kept
        it to one Next.js app rather than a Java backend with a separate frontend, because for an
        internal tool, one repo and one deploy was the right amount of machine.
      </>
    ),
    hardTitle: "The hard part",
    hard: (
      <>
        Getting live data out of their RMM platform, NinjaOne. Polling its API hits rate limits and
        goes stale between checks, so I built it on <Strong>webhooks</Strong> instead: NinjaOne
        pushes events the moment they happen. Webhooks can deliver the same event more than once, so
        I made the handling <Strong>idempotent</Strong> — processing an event twice lands the same
        result as processing it once. No double-counted tickets, no phantom alerts, which is the
        difference between a dashboard people trust and one they stop checking.
      </>
    ),
    resultTitle: "The result",
    chips: [
      { label: "Marketing site + internal app", dot: true },
      { label: "Built solo, end to end" },
      { label: "Final client review" },
    ],
    result: (
      <>
        A complete, production-ready platform, owned end to end with no team to hand pieces to, and
        built to ship rather than demo. Security headers, Cloudflare protection, error tracking, and
        idempotent webhook handling were in from the start — the team now has a single source of
        truth where the data used to sit scattered behind a vendor UI.
      </>
    ),
  },
  {
    num: "Case 03",
    caseLabel: "Case 03 — Civil engineering · Illinois",
    name: "HKM Engineers",
    intro:
      "A civil engineering firm in Illinois — construction inspection, management, and oversight — getting its first web presence, designed and built end to end.",
    role: "Frontend Developer",
    tech: [
      { label: "Next.js", src: `${DEVICON}/nextjs/nextjs-original.svg`, inv: true },
      { label: "React", src: `${DEVICON}/react/react-original.svg` },
      { label: "Figma", src: `${DEVICON}/figma/figma-original.svg` },
      { label: "Vercel", src: `${SIMPLE}/vercel`, inv: true },
      { label: "Namecheap", src: `${SIMPLE}/namecheap` },
    ],
    domain: "hkmengineers.com",
    url: "https://hkmengineers.com",
    image: "/images/hkm.jpg",
    startTitle: "The starting point",
    start: (
      <>
        HKM inspects and documents construction across Illinois — the people who make sure what got
        built matches what was specified. They had no web presence at all: a prospective client or
        agency searching for them found nothing, no way to confirm the firm was even real and active.
        For a firm that wins work on credibility and referrals, that was a real gap — and the site
        had to <Strong>look</Strong> as rigorous and field-ready as the work itself.
      </>
    ),
    hardTitle: "The hard part",
    hard: (
      <>
        The design leaned on an engineering drawing-set language — sheet numbers, revision marks,
        overlapping technical-drawing elements — the kind of art-directed composition that looks
        exact in Figma and turns brittle in a browser. The hard part was carrying that fixed,
        pixel-precise layout into a <Strong>responsive system</Strong> that keeps its character from
        a wide desktop down to a narrow phone, without the layered elements colliding or losing the
        field-report feel that makes the brand work.
      </>
    ),
    resultTitle: "The result",
    chips: [
      { label: "Live in production", dot: true },
      { label: "Domain & DNS configured" },
      { label: "SEO + perf pass underway" },
    ],
    result: (
      <>
        Built from scratch in Next.js and statically rendered for near-instant loads and almost no
        maintenance burden — the right call for a firm that updates rarely and isn&apos;t a tech
        team. HKM went from zero online footprint to a credible, fast, multi-page site that does its
        documentation discipline justice.
      </>
    ),
  },
  {
    num: "Case 04",
    caseLabel: "Case 04 — Security integrator · Maryland",
    name: "Trican Security",
    intro:
      "A full redesign and front-end rebuild for a Maryland security integrator — a scattered 12-page site reduced to a focused six-page build that finally matches the company's credibility.",
    role: "Frontend Developer",
    tech: [
      { label: "Astro", src: `${DEVICON}/astro/astro-original.svg` },
      { label: "React", src: `${DEVICON}/react/react-original.svg` },
      { label: "Tailwind", src: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
      { label: "Framer Motion", src: `${SIMPLE}/framer`, inv: true },
      { label: "TypeScript", src: `${DEVICON}/typescript/typescript-original.svg` },
      { label: "Resend", src: `${SIMPLE}/resend`, inv: true },
      { label: "Twilio", src: `${DEVICON}/twilio/twilio-original.svg` },
      { label: "Vercel", src: `${SIMPLE}/vercel`, inv: true },
    ],
    domain: "tricansecurity.com",
    url: "https://tricansecurity.com",
    image: "/images/trican.jpg",
    imageRight: true,
    startTitle: "The starting point",
    start: (
      <>
        Trican is a minority-owned (MBE-certified) security integrator in Maryland — surveillance,
        access control, alarms, and structured cabling for businesses and government across the
        Baltimore–Washington corridor. A serious shop with 10+ industry certifications and projects
        like a 100,000 sq ft cathedral campus; one client saved over $30,000 versus national
        competitors. None of that credibility showed up online: the site was a ~2010-era Google Sites
        build — a logo and a few nav tiles, content scattered across a dozen pages, no contact form,
        no identity.
      </>
    ),
    hardTitle: "The hard part",
    hard: (
      <>
        I wanted the site to feel alive — animated sections, a real contact form — without paying for
        it in load time, which matters when many buyers are on a phone, often on site. I built it{" "}
        <Strong>static-first in Astro</Strong>: almost every section renders as plain HTML that
        arrives instantly, with only the genuinely interactive pieces hydrated as isolated{" "}
        <Strong>React islands</Strong>. Getting Framer Motion to run cleanly inside those islands
        without quietly dragging the whole page into client-side rendering took careful
        boundary-drawing — the feel of a rich animated app with the loading behavior of a static
        page.
      </>
    ),
    resultTitle: "The result",
    stats: [
      { value: "12→6", label: "scattered pages, consolidated" },
      { value: "24", label: "sections, each routed to contact" },
      { value: "v3.0", label: "design system, locked", accent: true },
    ],
    result: (
      <>
        Live on Vercel, replacing the old Google Sites build entirely — dark-first, contrast-driven,
        one high-contrast CTA per section, with lead capture wired end to end to email (Resend) and
        SMS (Twilio). Trican finally has a website that looks like the company actually behind it.
      </>
    ),
  },
];

function Strong({ children }: { children: React.ReactNode }) {
  return <span style={{ color: "var(--text)", fontWeight: 600 }}>{children}</span>;
}

/* ── section-label icons ── */
function FlagIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 21V4" />
      <path d="M5 4h11l-2.2 4L16 12H5" />
    </svg>
  );
}
function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.5l2.5 2.5 4.5-5" />
    </svg>
  );
}
function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}
function BackArrow() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5" />
      <path d="M11 18l-6-6 6-6" />
    </svg>
  );
}

function SecLabel({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="seclabel">
      <span className="si">{icon}</span>
      {children}
    </div>
  );
}

function TechChip({ t }: { t: Tech }) {
  return (
    <span className="tc">
      {t.mono ? (
        <span className="tcm">{t.mono}</span>
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img className={`tci${t.inv ? " inv" : ""}`} src={t.src} alt="" width={16} height={16} />
      )}
      {t.label}
    </span>
  );
}

function ChromeFrame({ domain, image }: { domain: string; image: string }) {
  return (
    <div className="cr">
      <div className="cr-strip">
        <div className="cr-lights">
          <span className="cr-dot" />
          <span className="cr-dot" />
          <span className="cr-dot" />
        </div>
        <div className="cr-tab">
          <span className="cr-fav" />
          <span className="cr-tabtxt">{domain}</span>
        </div>
      </div>
      <div className="cr-bar">
        <div className="cr-omni">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="11" width="14" height="10" rx="2" />
            <path d="M8 11V7a4 4 0 0 1 8 0v4" />
          </svg>
          <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{domain}</span>
        </div>
      </div>
      <div className="cr-shot">
        <Image src={image} alt={domain} fill style={{ objectFit: "cover", objectPosition: "top" }} />
      </div>
    </div>
  );
}

function MacFrame({ image, alt }: { image: string; alt: string }) {
  return (
    <div className="mac">
      <div className="mac-lid">
        <span className="mac-cam" />
        <div className="mac-screen">
          <Image src={image} alt={alt} fill style={{ objectFit: "cover", objectPosition: "top" }} />
        </div>
      </div>
      <div className="mac-base">
        <span className="mac-notch" />
      </div>
    </div>
  );
}

export default function WorkPage() {
  return (
    <div className="wk">
      {/* ── TOP BAR ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "30px max(40px,7vw) 0",
        }}
      >
        <Link href="/" className="wk-back fxbtn">
          <span className="fxic">
            <BackArrow />
          </span>
          <span>Pavan Gajula</span>
        </Link>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: ".22em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
          }}
        >
          Work
        </span>
      </div>

      {/* ── HEADER ── */}
      <section style={{ padding: "clamp(72px,10vw,150px) max(40px,7vw) clamp(48px,6vw,84px)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "var(--accent-text)",
            }}
          >
            Selected work
          </div>
          <h1
            style={{
              margin: "22px 0 0",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(44px,7vw,104px)",
              lineHeight: 0.94,
              letterSpacing: "-.02em",
              textTransform: "uppercase",
              color: "var(--text)",
              maxWidth: "15ch",
            }}
          >
            Everything here, I built end to end
          </h1>
          <p
            style={{
              margin: "30px 0 0",
              fontSize: "clamp(17px,1.7vw,21px)",
              lineHeight: 1.6,
              color: "var(--text-2)",
              maxWidth: 640,
            }}
          >
            Each one I owned start to finish, on whatever the job needed. For every project, what it
            was, and the part that was actually hard to solve.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))",
              gap: "clamp(14px,1.6vw,20px)",
              marginTop: "clamp(44px,5vw,68px)",
            }}
          >
            {PROJECTS.map((p) => (
              <ChromeFrame key={p.domain} domain={p.domain} image={p.image} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      {PROJECTS.map((p, i) => (
        <div key={p.name}>
          <section style={{ padding: "clamp(40px,5vw,72px) max(40px,7vw)" }}>
            <div style={{ maxWidth: 1180, margin: "0 auto" }}>
              <div
                className="projgrid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "0.92fr 1.08fr",
                  gap: "clamp(40px,5vw,76px)",
                  alignItems: "start",
                }}
              >
                {/* image + meta column */}
                <div
                  className="imgcol reveal"
                  style={{ order: p.imageRight ? 2 : 1 }}
                >
                  <div className="stickycol">
                    <MacFrame image={p.image} alt={p.name} />
                    <div className="metapanel">
                      <div className="metarow">
                        <div className="metalabel">Role</div>
                        <div style={{ marginTop: 10 }}>
                          <span className="rolepill">{p.role}</span>
                        </div>
                      </div>
                      <div className="metarow">
                        <div className="metalabel">Tech stack</div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 11 }}>
                          {p.tech.map((t) => (
                            <TechChip key={t.label} t={t} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fxbtn"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: ".5em",
                        marginTop: 16,
                        color: "var(--accent-text)",
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: 13,
                        letterSpacing: ".08em",
                        textTransform: "uppercase",
                        textDecoration: "none",
                      }}
                    >
                      <span className="fxic">
                        <ExternalIcon />
                      </span>
                      <span className="fxtx">{p.domain}</span>
                    </a>
                  </div>
                </div>

                {/* narrative column */}
                <div className="reveal" style={{ order: p.imageRight ? 1 : 2 }}>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: 12,
                      letterSpacing: ".2em",
                      textTransform: "uppercase",
                      color: "var(--accent-text)",
                      marginBottom: 14,
                    }}
                  >
                    {p.caseLabel}
                  </div>
                  <h2
                    style={{
                      margin: 0,
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "clamp(32px,4vw,52px)",
                      lineHeight: 0.98,
                      letterSpacing: "-.015em",
                      color: "var(--text)",
                    }}
                  >
                    {p.name}
                  </h2>
                  <p
                    style={{
                      margin: "16px 0 0",
                      fontSize: "clamp(16px,1.5vw,19px)",
                      lineHeight: 1.55,
                      color: "var(--text-2)",
                      maxWidth: "48ch",
                    }}
                  >
                    {p.intro}
                  </p>

                  <div style={{ marginTop: 34, display: "flex", flexDirection: "column", gap: 30 }}>
                    {/* starting point */}
                    <div>
                      <SecLabel icon={<FlagIcon />}>{p.startTitle}</SecLabel>
                      <p style={{ margin: "12px 0 0", fontSize: 15.5, lineHeight: 1.72, color: "var(--text-2)" }}>
                        {p.start}
                      </p>
                    </div>

                    {/* hard part */}
                    <div>
                      <SecLabel icon={<BoltIcon />}>{p.hardTitle}</SecLabel>
                      <p style={{ margin: "12px 0 0", fontSize: 15.5, lineHeight: 1.72, color: "var(--text-2)" }}>
                        {p.hard}
                      </p>
                    </div>

                    {/* result */}
                    <div>
                      <SecLabel icon={<CheckIcon />}>{p.resultTitle}</SecLabel>

                      {p.stats && (
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit,minmax(110px,1fr))",
                            gap: 14,
                            marginTop: 18,
                          }}
                        >
                          {p.stats.map((s) => (
                            <div key={s.label} className="statcard">
                              <div
                                style={{
                                  fontFamily: "var(--font-display)",
                                  fontWeight: 700,
                                  fontSize: 34,
                                  lineHeight: 1,
                                  color: s.accent ? "var(--accent-text)" : "var(--text)",
                                }}
                              >
                                {s.value}
                              </div>
                              <div style={{ marginTop: 7, fontSize: 12, lineHeight: 1.35, color: "var(--text-muted)" }}>
                                {s.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {p.chips && (
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 16 }}>
                          {p.chips.map((c) => (
                            <span key={c.label} className="reschip">
                              {c.dot && <span className="dot" />}
                              {c.label}
                            </span>
                          ))}
                        </div>
                      )}

                      <p style={{ margin: "18px 0 0", fontSize: 15.5, lineHeight: 1.72, color: "var(--text-2)" }}>
                        {p.result}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* divider (not after last) */}
          {i < PROJECTS.length - 1 && (
            <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 max(40px,7vw)" }}>
              <div style={{ height: 1, background: "var(--border)" }} />
            </div>
          )}
        </div>
      ))}

      <div style={{ height: "clamp(60px,8vw,120px)" }} />
    </div>
  );
}
