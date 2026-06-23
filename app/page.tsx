import Image from "next/image";

const PROJECTS = [
  {
    name: "Straight Path Athletics",
    desc: "A youth sports nonprofit in Howard County, Maryland — basketball and flag football for kids, run entirely by volunteers. No website, no registration, no brand when I started. I built all of it, and I was the only technical person on it.",
    hard: "Most of the work was making a no-code platform do what it resists: custom animations moved onto their own init hook because Duda fires page events too early, every class scoped so its embedded widgets stopped overriding my styles, and registration that flips to a waitlist the moment a team fills.",
    stack: ["Duda", "TeamSnap", "Stripe", "JavaScript", "Python"],
    link: "straightpathathletics.com",
    url: "https://straightpathathletics.com",
  },
  {
    name: "Synack Solutions",
    desc: "A Baltimore IT consulting firm, in business since 2005, that had gone twenty years with no real web presence. I built their first one — a 15-page responsive site covering all six of their service lines.",
    hard: "With that many hand-built pages and no framework, the hard part was consistency. I wrote a disciplined CSS architecture and held to it, so the site reads as one coherent thing instead of fifteen pages that drifted apart.",
    stack: ["HTML", "CSS", "Tailwind", "AOS", "JavaScript"],
    link: "synacksolutions.com",
    url: "https://synacksolutions.com",
  },
  {
    name: "HKM Engineers",
    desc: "A civil engineering firm in Illinois — construction inspection and oversight — with no website at all. I designed and built one start to finish, from Figma mockups to a live Next.js deployment on Vercel, DNS included.",
    hard: "The blueprint visual language was a deliberate bet: an engineering firm's site should look like engineers made it, not a template. The real work was carrying that from a Figma concept into pixel-accurate, responsive Next.js without losing the intent.",
    stack: ["Next.js", "React", "Tailwind", "Figma", "Vercel"],
    link: "hkmengineers.com",
    url: "https://hkmengineers.com",
  },
];

const RESEARCH = [
  {
    num: "01",
    tag: "Human-AI Interaction",
    q: "Why do I trust AI more in Java than in bash?",
    body: "My skepticism rises and falls with how well I know the language. The places I get burned are exactly the places I’m not paying close attention — which is exactly where AI tools are most useful, and most risky.",
  },
  {
    num: "02",
    tag: "Developer Tools",
    q: "What would a tool that helped me not accept code look like?",
    body: "Most AI coding tools are designed around the accept button. The harder design problem is making it cheap and natural to push back, edit, or reject — especially when accepting feels easiest.",
  },
  {
    num: "03",
    tag: "Programmer Experience",
    q: "What happens to learning when AI writes the boilerplate?",
    body: "Boilerplate is how junior developers used to learn the shape of a system. When AI writes it for them, the path is faster — but the path through the path is missing. I’m not sure yet what that costs.",
  },
];

const HERO_ICONS = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React", size: 58, iconSize: 27 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", alt: "Next.js", size: 70, iconSize: 32, filter: true },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "Java", size: 88, iconSize: 44, center: true },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL", size: 70, iconSize: 32 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python", size: 58, iconSize: 27 },
];

type SkillIcon =
  | { label: string; isSVG: true; src?: undefined; filter?: undefined; wide?: undefined }
  | { label: string; src: string; isSVG?: false; filter?: boolean; wide?: boolean };

const SKILL_ICONS: SkillIcon[] = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", label: "JavaScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", label: "TypeScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", label: "Java" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", label: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", label: "Angular" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", label: "Next.js", filter: true },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", label: "Node" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", label: "Python" },
  { label: "SQL", isSVG: true },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", label: "AWS", filter: true, wide: true },
];

const WORK_PRINCIPLES = [
  {
    num: "01",
    title: "It has to outlive me",
    body: "The apps I’m proudest of are still running years after I handed them off, on code the current team can change without being scared of it.",
  },
  {
    num: "02",
    title: "I try to break it first",
    body: "If I haven’t tried to break something, I don’t trust it. I’d rather be the one who finds the failure than the user who does.",
  },
  {
    num: "03",
    title: "I read the source",
    body: "When the docs and what the code actually does disagree, I go read the source. I’d rather know than guess.",
  },
];

function ArrowSvg() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

function SqlIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color: "var(--accent-text)" }}
    >
      <ellipse cx="12" cy="5" rx="7.5" ry="2.7" />
      <path d="M4.5 5v14c0 1.5 3.36 2.7 7.5 2.7s7.5-1.2 7.5-2.7V5" />
      <path d="M4.5 12c0 1.5 3.36 2.7 7.5 2.7s7.5-1.2 7.5-2.7" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* ═══════════════ HERO ═══════════════ */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          overflow: "hidden",
          background: "var(--bg)",
          display: "flex",
        }}
      >
        {/* location/role metadata */}
        <div
          style={{
            position: "absolute",
            top: 90,
            left: "max(40px,7vw)",
            zIndex: 5,
            fontFamily: "'Nunito Sans',sans-serif",
            fontSize: 12,
            letterSpacing: ".08em",
            color: "var(--text-muted)",
          }}
        >
          Full stack engineer · Maryland
        </div>

        {/* centered content column */}
        <div
          style={{
            position: "relative",
            zIndex: 5,
            margin: "auto",
            width: "100%",
            padding: "104px max(40px,7vw)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* watermark + heading block */}
          <div
            style={{
              position: "relative",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* "PAVAN" watermark */}
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                zIndex: 0,
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "min(40vw,660px)",
                lineHeight: 0.78,
                letterSpacing: "-.04em",
                color: "var(--surface-raised)",
                whiteSpace: "nowrap",
                textTransform: "uppercase",
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              PAVAN
            </span>

            <h1
              style={{
                position: "relative",
                zIndex: 1,
                margin: 0,
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(58px,10.5vw,178px)",
                lineHeight: 0.9,
                letterSpacing: "-.005em",
                textTransform: "uppercase",
                color: "var(--accent-text)",
              }}
            >
              <span style={{ display: "block" }}>One engineer,</span>
              <span style={{ display: "block" }}>the whole stack</span>
            </h1>

            <p
              style={{
                position: "relative",
                zIndex: 1,
                margin: "clamp(24px,3.2vw,38px) 0 0",
                fontSize: "clamp(16px,1.35vw,18px)",
                lineHeight: 1.6,
                color: "var(--text-2)",
                maxWidth: 600,
              }}
            >
              I&apos;m a full-stack software engineer who builds web applications end to end,
              backend to browser. I design the data model, build the interface, and ship it to
              production.
            </p>
          </div>

          {/* tech stack icon row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              marginTop: "clamp(30px,3.6vw,44px)",
            }}
          >
            {HERO_ICONS.map((tech) => (
              <div
                key={tech.alt}
                className={`tech-icon-bubble${tech.center ? " tech-icon-bubble--center" : ""}`}
                style={{ width: tech.size, height: tech.size }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tech.src}
                  alt={tech.alt}
                  width={tech.iconSize}
                  height={tech.iconSize}
                  style={{
                    width: tech.iconSize,
                    height: tech.iconSize,
                    ...(tech.filter ? { filter: "var(--next-filter)" } : {}),
                  }}
                />
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div
            style={{
              display: "flex",
              gap: 14,
              justifyContent: "center",
              marginTop: "clamp(30px,3.5vw,42px)",
            }}
          >
            <a
              href="#work"
              className="fxbtn fxbtn--fill"
              style={{ display: "inline-flex", alignItems: "center", height: 50, padding: "0 28px", borderRadius: 9 }}
            >
              <span className="fxic">
                <ArrowSvg />
              </span>
              <span className="fxtx">View work</span>
            </a>
            <a
              href="#contact"
              className="fxbtn fxbtn--outline"
              style={{ display: "inline-flex", alignItems: "center", height: 50, padding: "0 28px", borderRadius: 9 }}
            >
              <span className="fxic">
                <ArrowSvg />
              </span>
              <span className="fxtx">Get in touch</span>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════ ABOUT ═══════════════ */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "128px max(40px,7vw) 40px",
        }}
      >
        <div style={{ position: "relative", maxWidth: 1080, margin: "0 auto" }}>
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
            About
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "clamp(40px,6vw,76px)",
              alignItems: "flex-start",
              marginTop: 36,
            }}
          >
            {/* portrait + facts (appears right on desktop) */}
            <div style={{ flex: "0 0 300px", maxWidth: 300, order: 2 }}>
              <div style={{ position: "relative" }}>
                {/* border overlay frame */}
                <div
                  style={{
                    position: "absolute",
                    inset: -1,
                    borderRadius: 15,
                    border: "1px solid var(--border-strong)",
                    pointerEvents: "none",
                    zIndex: 2,
                  }}
                />
                <div
                  style={{
                    position: "relative",
                    width: 300,
                    height: 360,
                    borderRadius: 14,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/images/ProfilePic.jpeg"
                    alt="Pavan Gajula"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                  />
                </div>
              </div>

              {/* facts table */}
              <div style={{ marginTop: 24, borderBottom: "1px solid var(--border)" }}>
                {[
                  { label: "Now", value: "Synack Solutions" },
                  { label: "Before", value: "Tata Consultancy · 2 yrs" },
                  { label: "Focus", value: "Full-stack web" },
                ].map((row) => (
                  <div
                    key={row.label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      gap: 16,
                      padding: "13px 0",
                      borderTop: "1px solid var(--border)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Nunito Sans',sans-serif",
                        fontSize: 11,
                        letterSpacing: ".12em",
                        textTransform: "uppercase",
                        color: "var(--text-muted)",
                      }}
                    >
                      {row.label}
                    </span>
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "var(--text)",
                        textAlign: "right",
                      }}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* bio + skills (appears left on desktop) */}
            <div style={{ flex: "1 1 380px", minWidth: 0, order: 1 }}>
              <p
                style={{
                  margin: 0,
                  fontSize: "clamp(21px,2.1vw,29px)",
                  lineHeight: 1.4,
                  color: "var(--text)",
                  fontWeight: 600,
                }}
              >
                &ldquo;I build software that lasts, because I don&apos;t ship what I can&apos;t
                explain.&rdquo;
              </p>
              <p style={{ margin: "24px 0 0", fontSize: 16, lineHeight: 1.72, color: "var(--text-2)" }}>
                I&apos;m Pavan, a software engineer who builds for the web. I spent two years at
                Tata Consultancy Services on a global product used across more than ten markets,
                where I led a front-end migration and shipped a component library the whole team
                adopted.
              </p>
              <p style={{ margin: "18px 0 0", fontSize: 16, lineHeight: 1.72, color: "var(--text-2)" }}>
                Now I&apos;m at Synack Solutions, building full-stack web apps and reaching for the
                right tech and tools for each one. The apps I&apos;m proudest of are still running
                years after I handed them off.
              </p>

              {/* tech skills grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill,minmax(94px,1fr))",
                  gap: 10,
                  marginTop: 28,
                }}
              >
                {SKILL_ICONS.map((tech) => (
                  <div key={tech.label} className="tech-skill-badge" style={{ padding: "16px 8px" }}>
                    {tech.isSVG ? (
                      <SqlIcon />
                    ) : (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={tech.src}
                        alt={tech.label}
                        width={tech.wide ? 40 : 28}
                        height={tech.wide ? undefined : 28}
                        style={{
                          width: tech.wide ? 40 : 28,
                          height: tech.wide ? "auto" : 28,
                          ...(tech.filter ? { filter: "var(--next-filter)" } : {}),
                        }}
                      />
                    )}
                    <span
                      style={{
                        fontFamily: "'Nunito Sans',sans-serif",
                        fontSize: 10.5,
                        letterSpacing: ".02em",
                        color: "var(--text-2)",
                      }}
                    >
                      {tech.label}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="/about"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  marginTop: 30,
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 14,
                  letterSpacing: ".04em",
                  textTransform: "uppercase",
                  color: "var(--accent-text)",
                  textDecoration: "none",
                  transition: "color .2s ease",
                }}
              >
                More about me →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ HOW I WORK ═══════════════ */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "128px max(40px,7vw)",
        }}
      >
        <div style={{ position: "relative", maxWidth: 1080, margin: "0 auto" }}>
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
            How I work
          </div>
          <h2
            style={{
              margin: "18px 0 0",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(28px,3.2vw,44px)",
              lineHeight: 1.04,
              letterSpacing: "-.015em",
              color: "var(--text)",
              maxWidth: 680,
            }}
          >
            Three standards I don&apos;t bend on, whatever the deadline.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: 20,
              marginTop: 56,
            }}
          >
            {WORK_PRINCIPLES.map((card) => (
              <div
                key={card.num}
                className="design-glass-card"
                style={{ position: "relative", overflow: "hidden", padding: "34px 30px 40px", boxShadow: "var(--shadow)" }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    right: -4,
                    bottom: -44,
                    zIndex: 0,
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: 150,
                    lineHeight: 1,
                    color: "color-mix(in srgb, var(--text) 5%, transparent)",
                    pointerEvents: "none",
                    userSelect: "none",
                  }}
                >
                  {card.num}
                </span>
                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: 13,
                    letterSpacing: ".22em",
                    color: "var(--accent-text)",
                  }}
                >
                  {card.num}
                </div>
                <h3
                  style={{
                    position: "relative",
                    zIndex: 1,
                    margin: "16px 0 0",
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: 23,
                    letterSpacing: "-.01em",
                    color: "var(--text)",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    position: "relative",
                    zIndex: 1,
                    margin: "14px 0 0",
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: "var(--text-2)",
                  }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ SELECTED WORK ═══════════════ */}
      <section
        id="work"
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "40px max(40px,7vw) 128px",
        }}
      >
        <div style={{ position: "relative", maxWidth: 1080, margin: "0 auto" }}>
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
          <h2
            style={{
              margin: "18px 0 0",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(26px,3vw,38px)",
              lineHeight: 1.05,
              letterSpacing: "-.015em",
              color: "var(--text)",
              maxWidth: 680,
            }}
          >
            A few things I&apos;ve built, and the part of each that was actually hard.
          </h2>

          <div style={{ marginTop: 32 }}>
            {PROJECTS.map((p) => (
              <div
                key={p.name}
                className="work-project-card"
                style={{
                  background: "color-mix(in srgb, var(--surface) 62%, transparent)",
                  backdropFilter: "blur(18px)",
                  WebkitBackdropFilter: "blur(18px)",
                  border: "1px solid var(--border)",
                  borderRadius: 18,
                  padding: "38px clamp(28px,4vw,52px)",
                  boxShadow: "var(--shadow)",
                  marginTop: 24,
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "clamp(24px,2.4vw,32px)",
                    letterSpacing: "-.015em",
                    color: "var(--text)",
                  }}
                >
                  {p.name}
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
                    gap: "clamp(28px,5vw,64px)",
                    alignItems: "start",
                    marginTop: 26,
                  }}
                >
                  <div>
                    <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: "var(--text-2)" }}>
                      {p.desc}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 24 }}>
                      {p.stack.map((t) => (
                        <span
                          key={t}
                          style={{
                            fontFamily: "'Nunito Sans',sans-serif",
                            fontSize: 12,
                            color: "var(--text-2)",
                            border: "1px solid var(--border)",
                            background: "color-mix(in srgb, var(--surface-raised) 60%, transparent)",
                            padding: "5px 11px",
                            borderRadius: 6,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 7,
                        marginTop: 24,
                        fontFamily: "'Nunito Sans',sans-serif",
                        fontSize: 13,
                        color: "var(--accent-text)",
                        textDecoration: "none",
                      }}
                    >
                      {p.link}{" "}
                      <span style={{ fontFamily: "var(--font-display)" }}>→</span>
                    </a>
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: 12,
                        letterSpacing: ".18em",
                        textTransform: "uppercase",
                        color: "var(--accent-text)",
                      }}
                    >
                      The hard part
                    </div>
                    <p style={{ margin: "14px 0 0", fontSize: 14.5, lineHeight: 1.68, color: "var(--text-2)" }}>
                      {p.hard}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ RESEARCH ═══════════════ */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "40px max(40px,7vw) 128px",
        }}
      >
        <div style={{ position: "relative", maxWidth: 1080, margin: "0 auto" }}>
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
            Research
          </div>
          <h2
            style={{
              margin: "18px 0 0",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(28px,3.4vw,44px)",
              lineHeight: 1.04,
              letterSpacing: "-.02em",
              color: "var(--text)",
              maxWidth: 760,
            }}
          >
            What I keep noticing
          </h2>
          <p
            style={{
              margin: "26px 0 0",
              fontSize: "clamp(17px,1.6vw,20px)",
              lineHeight: 1.55,
              color: "var(--text)",
              maxWidth: 760,
              fontWeight: 600,
            }}
          >
            The more developers lean on AI coding tools, the less the problem is writing code, and
            the more it&apos;s knowing when to trust what comes back.
          </p>
          <p style={{ margin: "20px 0 0", fontSize: 16, lineHeight: 1.66, color: "var(--text-2)", maxWidth: 740 }}>
            I write code with AI assistants every day. Whether they can produce working code stopped
            being the interesting question &mdash; they usually can. The harder one is when a
            developer should trust the output, and what happens when checking it costs more than
            writing it would have.
          </p>

          <div style={{ marginTop: 60, borderTop: "1px solid var(--border)" }}>
            {RESEARCH.map((r) => (
              <div
                key={r.num}
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto minmax(0,1fr)",
                  gap: "clamp(24px,5vw,64px)",
                  padding: "38px 0",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "clamp(34px,4vw,56px)",
                    lineHeight: 0.9,
                    color: "var(--text-muted)",
                    letterSpacing: "-.02em",
                  }}
                >
                  {r.num}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: 12,
                      letterSpacing: ".16em",
                      textTransform: "uppercase",
                      color: "var(--accent-text)",
                    }}
                  >
                    {r.tag}
                  </div>
                  <h3
                    style={{
                      margin: "12px 0 0",
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "clamp(21px,2.2vw,28px)",
                      lineHeight: 1.1,
                      letterSpacing: "-.01em",
                      color: "var(--text)",
                      maxWidth: 680,
                    }}
                  >
                    {r.q}
                  </h3>
                  <p style={{ margin: "16px 0 0", fontSize: 15, lineHeight: 1.66, color: "var(--text-2)", maxWidth: 680 }}>
                    {r.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CONTACT ═══════════════ */}
      <section
        id="contact"
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "40px max(40px,7vw) 150px",
        }}
      >
        <div
          style={{
            position: "relative",
            maxWidth: 840,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
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
            Get in touch
          </div>
          <h2
            style={{
              margin: "18px 0 0",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(40px,6vw,84px)",
              lineHeight: 1,
              letterSpacing: "-.01em",
              color: "var(--text)",
            }}
          >
            Get in touch.
          </h2>
          <p
            style={{
              margin: "26px auto 0",
              fontSize: 17,
              lineHeight: 1.62,
              color: "var(--text-2)",
              maxWidth: 560,
            }}
          >
            If something here lands &mdash; whether it&apos;s a project, a job, or research
            &mdash; email&apos;s the fastest way to reach me, and I read everything that comes in.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 14,
              marginTop: 36,
            }}
          >
            <a
              href="mailto:pavangajula1998@gmail.com"
              className="fxbtn fxbtn--fill fxbtn--sm"
              style={{ display: "inline-flex", alignItems: "center", height: 48, padding: "0 24px", borderRadius: 9 }}
            >
              <span className="fxic">
                <ArrowSvg />
              </span>
              <span className="fxtx">Email</span>
            </a>
            <a
              href="https://github.com/pavangajula"
              target="_blank"
              rel="noopener noreferrer"
              className="fxbtn fxbtn--outline fxbtn--sm"
              style={{ display: "inline-flex", alignItems: "center", height: 48, padding: "0 24px", borderRadius: 9 }}
            >
              <span className="fxic">
                <ArrowSvg />
              </span>
              <span className="fxtx">GitHub</span>
            </a>
            <a
              href="#"
              className="fxbtn fxbtn--outline fxbtn--sm"
              style={{ display: "inline-flex", alignItems: "center", height: 48, padding: "0 24px", borderRadius: 9 }}
            >
              <span className="fxic">
                <ArrowSvg />
              </span>
              <span className="fxtx">LinkedIn</span>
            </a>
          </div>

          <div
            style={{
              marginTop: 80,
              fontFamily: "'Nunito Sans',sans-serif",
              fontSize: 12,
              color: "var(--text-muted)",
              letterSpacing: ".04em",
            }}
          >
            Pavan · Maryland · Full stack
          </div>
        </div>
      </section>
    </>
  );
}
