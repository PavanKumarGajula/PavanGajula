import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            {/* Text column */}
            <div className="hero-text">
              <div className="hero-eyebrow">
                FULL-STACK &middot; MARYLAND &middot; CURRENTLY @ SYNACK
              </div>
              <h1 className="hero-name">
                Pavan <span className="serif">Gajula</span>.
              </h1>
              <p className="hero-tagline">
                Five years building <strong>enterprise systems</strong> in Java and React.<br />
                Two years shipping <strong>websites</strong> for the people who actually need them.<br />
                Lately, I keep noticing the same thing &mdash;{" "}
                <span className="accent">and I want to study it seriously.</span>
              </p>
              <div className="hero-actions">
                <a href="/work" className="btn btn-primary">
                  view work <span className="arrow">→</span>
                </a>
                <a href="#" className="btn">download CV</a>
              </div>
            </div>

            {/* Photo column */}
            <div className="hero-photo-wrap">
              <div className="hero-photo">
                <Image
                  src="/photo.jpg"
                  alt="Pavan Gajula"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="container">
        <div className="stats">
          <div className="stat">
            <div className="stat-label">YEARS BUILDING</div>
            <div className="stat-value">5+</div>
          </div>
          <div className="stat">
            <div className="stat-label">PRODUCTION SCALE</div>
            <div className="stat-value">10K+ users</div>
          </div>
          <div className="stat">
            <div className="stat-label">VOLUNTEER HOURS</div>
            <div className="stat-value">450+</div>
          </div>
          <div className="stat">
            <div className="stat-label">BASED IN</div>
            <div className="stat-value">Maryland, US</div>
          </div>
        </div>
      </div>

      {/* CURRENTLY */}
      <section className="currently">
        <div className="container">
          <div className="currently-label">
            <span className="dot">&bull;</span>&nbsp; CURRENTLY
          </div>
          <p className="currently-text">
            Building Spring Boot microservices at Synack by day. Volunteering for a{" "}
            <span className="accent">Howard County youth sports nonprofit</span>{" "}
            by night. Writing about what breaks when developers and AI write code
            together.
          </p>
        </div>
      </section>

      {/* RESEARCH INTERESTS */}
      <section className="interests">
        <div className="container">
          <div className="section-header">
            <div className="section-num">
              <span className="accent">01</span> &nbsp;/&nbsp; what I&apos;m interested in
            </div>
            <div className="section-meta">three threads</div>
          </div>

          <div className="interests-grid">
            <div className="interest-card">
              <div className="interest-tag">01 &middot; HUMAN-AI INTERACTION</div>
              <div className="interest-title">
                Why do I trust AI more in Java than in bash?
              </div>
              <div className="interest-desc">
                My skepticism rises and falls with how well I know the language.
                The places I get burned are exactly the places I&apos;m not
                paying close attention &mdash; which is exactly where AI tools
                are most useful, and most risky.
              </div>
            </div>

            <div className="interest-card">
              <div className="interest-tag">02 &middot; DEVELOPER TOOLS</div>
              <div className="interest-title">
                What would a tool that helped me not accept code look like?
              </div>
              <div className="interest-desc">
                Most AI coding tools are designed around the accept button. The
                harder design problem is making it cheap and natural to push
                back, edit, or reject &mdash; especially when accepting feels
                easiest.
              </div>
            </div>

            <div className="interest-card">
              <div className="interest-tag">03 &middot; PROGRAMMER EXPERIENCE</div>
              <div className="interest-title">
                What happens to learning when AI writes the boilerplate?
              </div>
              <div className="interest-desc">
                Boilerplate is how junior developers used to learn the shape of
                a system. When the AI writes it for them, the path is faster
                &mdash; but the path through the path is missing. I&apos;m not
                sure yet what that costs.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-num">
              <span className="accent">02</span> &nbsp;/&nbsp; selected work
            </div>
            <div className="section-meta">2024 &mdash; present</div>
          </div>

          <a href="/work#case-1" className="project-row">
            <div className="project-num">001</div>
            <div className="project-info">
              <div className="project-title">Straight Path Athletics</div>
              <div className="project-desc">
                Youth sports nonprofit &middot; 200+ athletes &middot; Stripe +
                Typeform integration
              </div>
            </div>
            <div className="project-stack">HTML &middot; CSS &middot; JS &middot; Stripe</div>
            <div className="project-cta">case <span className="arrow">→</span></div>
          </a>

          <a href="/work#case-2" className="project-row">
            <div className="project-num">002</div>
            <div className="project-info">
              <div className="project-title">Synack Solutions</div>
              <div className="project-desc">
                A Java backend that turns NinjaOne&apos;s live data into a
                dashboard you can read mid-incident. Plus the company&apos;s
                marketing site.
              </div>
            </div>
            <div className="project-stack">Java &middot; NinjaOne API &middot; JS</div>
            <div className="project-cta">case <span className="arrow">→</span></div>
          </a>

          <a href="/work#case-3" className="project-row">
            <div className="project-num">003</div>
            <div className="project-info">
              <div className="project-title">HKM Engineers</div>
              <div className="project-desc">
                Construction engineering firm in Illinois. Transportation,
                structures, facilities.
              </div>
            </div>
            <div className="project-stack">Next.js &middot; React</div>
            <div className="project-cta">case <span className="arrow">→</span></div>
          </a>
        </div>
      </section>

      {/* WHAT I KEEP NOTICING */}
      <section className="research">
        <div className="container">
          <div
            className="section-header"
            style={{ borderBottom: "none", marginBottom: "32px" }}
          >
            <div className="section-num">
              <span className="accent">03</span> &nbsp;/&nbsp; what I keep noticing
            </div>
            <div className="section-meta">research direction</div>
          </div>

          <p className="research-quote">
            The more developers lean on AI coding tools, the less the problem is{" "}
            <span className="accent">writing code</span>, and the more it&apos;s
            knowing when to trust what comes back.
            <span className="cursor"></span>
          </p>
          <p className="research-body">
            I write code with AI assistants every day. Whether they can produce
            working code stopped being the interesting question &mdash; they
            usually can. The harder one is when a developer should trust the
            output, and what happens when checking it costs more than writing it
            would have.
          </p>
        </div>
      </section>

      {/* NOTES */}
      <section className="notes">
        <div className="container">
          <div
            className="section-header"
            style={{ borderBottom: "none", marginBottom: "32px" }}
          >
            <div className="section-num">
              <span className="accent">04</span> &nbsp;/&nbsp; notes
            </div>
            <div className="section-meta">working observations</div>
          </div>

          <div className="note-card">
            <div className="note-meta">
              <span>
                <span className="num">NO. 01</span> &nbsp;&middot;&nbsp; HUMAN-AI
                TRUST
              </span>
              <span>NOV 2025</span>
            </div>
            <h3 className="note-title">
              The asymmetry of{" "}
              <span className="serif">developer skepticism</span>
            </h3>
            <p className="note-body">
              When I&apos;m writing core business logic in Spring Boot, I use
              Claude Code like an extension of my own brain &mdash; I anticipate
              its suggestions, accept them instantly, and rarely get burned
              because the patterns are deeply ingrained in memory. Last month I
              had to switch contexts to a complex bash script for a deployment
              pipeline, where my syntax knowledge is rustier, and I caught myself
              passively accepting lines I couldn&apos;t instantly verify. It
              passed a flag that didn&apos;t exist in that version of the CLI,
              silently breaking the build downstream.
            </p>
            <p className="note-body">
              The realization:{" "}
              <strong>
                my trust in AI tools isn&apos;t a function of the AI&apos;s
                output quality &mdash; it&apos;s a function of my own confidence
                in the language
              </strong>
              . When my own knowledge drops, my baseline skepticism drops with
              it. Which is exactly when silent failures slip through. The
              interesting design problem isn&apos;t making the AI more accurate.
              It&apos;s making developers{" "}
              <span className="accent">more skeptical in their weak spots</span>,
              not less.
            </p>
          </div>

          <div className="note-empty">
            &bull; &nbsp; more notes coming. monthly cadence.
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-num">
              <span className="accent">05</span> &nbsp;/&nbsp; experience
            </div>
            <div className="section-meta">where I&apos;ve been</div>
          </div>

          <div className="timeline">
            <div className="timeline-row">
              <div className="timeline-date now">JUL 2024 — NOW</div>
              <div>
                <div className="timeline-role">Java Full Stack Developer</div>
                <div className="timeline-where">
                  Synack Solutions LLC &middot; Maryland, US
                </div>
              </div>
              <div className="timeline-tag">PRESENT</div>
            </div>

            <div className="timeline-row">
              <div className="timeline-date">JAN 2023 — MAY 2024</div>
              <div>
                <div className="timeline-role">M.S. Software Engineering</div>
                <div className="timeline-where">
                  UMBC &middot; Maryland, US &middot; GPA 3.53
                </div>
              </div>
              <div className="timeline-tag">EDUCATION</div>
            </div>

            <div className="timeline-row">
              <div className="timeline-date">JAN 2021 — JAN 2023</div>
              <div>
                <div className="timeline-role">Java Full Stack Developer</div>
                <div className="timeline-where">
                  Tata Consultancy Services &middot; Hyderabad, India
                </div>
              </div>
              <div className="timeline-tag">INDUSTRY</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
