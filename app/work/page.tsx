import StraightPathCase from "@/components/StraightPathCase";

export default function WorkPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <div className="page">
        <div className="container">
          <header className="page-header">
            <div className="page-eyebrow">SELECTED WORK</div>
            <h1 className="page-title">Selected work</h1>
            <p className="page-subtitle">
              Projects I&apos;ve built end to end. For each one, the part that was actually hard.
            </p>
          </header>
        </div>
      </div>

      {/* ── CASE 1 — STRAIGHT PATH ATHLETICS ── */}
      <div className="case" id="case-1" style={{ paddingBottom: "80px" }}>
        <div className="container">
          <StraightPathCase />
        </div>
      </div>

      {/* ── CASE 2 — SYNACK SOLUTIONS (Java / NinjaOne) ── */}
      <div className="case" id="case-2">
        <div className="container">
          <header className="case-header">
            <div className="case-meta">
              <span>002 / SELECTED WORK</span>
              <span className="accent">INTERNAL TOOLS</span>
              <span>2024 — PRESENT</span>
            </div>
            <h1 className="case-title">Synack Solutions</h1>
            <p className="case-tagline">
              A Java backend that turns NinjaOne live data into a dashboard you can read mid-incident.
            </p>
          </header>

          <section className="case-body">
            <div className="case-grid">
              <aside className="case-sidebar">
                <div className="case-sidebar-block">
                  <div className="case-sidebar-label">CLIENT</div>
                  <div className="case-sidebar-value">
                    Synack Solutions LLC &middot; Baltimore, MD &middot; est. 2005
                  </div>
                </div>
                <div className="case-sidebar-block">
                  <div className="case-sidebar-label">MY ROLE</div>
                  <div className="case-sidebar-value">
                    Java Full Stack Developer &middot; 2024 &ndash; present
                  </div>
                </div>
                <div className="case-sidebar-block">
                  <div className="case-sidebar-label">STACK</div>
                  <div className="case-sidebar-value">
                    Java &middot; Spring Boot &middot; NinjaOne API &middot; JavaScript &middot; SQL
                  </div>
                </div>
                <div className="case-sidebar-block">
                  <div className="case-sidebar-label">TYPE</div>
                  <div className="case-sidebar-value">Internal ops tool &mdash; not public</div>
                </div>
              </aside>

              <article className="case-content">
                <h3 data-step="01 · STARTING POINT">
                  An RMM platform with the right data, in the wrong shape for an incident
                </h3>
                <p>
                  Synack is an IT consulting and managed services firm. Their technicians live
                  in <strong>NinjaOne</strong> &mdash; it&apos;s the RMM platform that monitors
                  client devices, surfaces alerts, and logs everything that happens across the
                  fleet. The data is all there. What it isn&apos;t built for is reading
                  quickly when a client is on the phone and something is actively broken.
                </p>
                <p>
                  The job was to pull NinjaOne&apos;s live data into a form techs could
                  scan in seconds, not click through in minutes.
                </p>

                <h3 data-step="02 · WHAT I BUILT">Java backend + ops dashboard</h3>
                <p>
                  [ADD: describe what you built &mdash; the architecture, what data it pulls from
                  NinjaOne, what the dashboard surfaces, and how the team uses it day-to-day.]
                </p>

                <h3 data-step="03 · THE HARD PART">
                  [ADD: title for the hardest part]
                </h3>
                <p>
                  [ADD: describe the core technical challenge and how you solved it &mdash; e.g.
                  webhook reliability, data normalization across device types, latency, auth.]
                </p>

                <div className="case-callout">
                  [ADD: one sentence that captures what made this project worth doing.]
                </div>

                <h3 data-step="04 · RESULTS">[ADD: outcome]</h3>
                <p>
                  [ADD: what changed for the team &mdash; time saved per incident, visibility
                  gained, anything measurable. Or note that it&apos;s newly in use.]
                </p>

                <div className="reflection">
                  <div className="reflection-label">WHAT STUCK WITH ME</div>
                  <p>
                    [ADD: one honest observation about what this project taught you &mdash; about
                    Java, internal tooling, working inside the company you&apos;re building for,
                    or something else.]
                  </p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>

      {/* ── CASE 3 — HKM ENGINEERS ── */}
      <div className="case" id="case-3">
        <div className="container">
          <header className="case-header">
            <div className="case-meta">
              <span>003 / SELECTED WORK</span>
              <span className="accent">SMALL BUSINESS</span>
              <span>2024</span>
            </div>
            <h1 className="case-title">HKM Engineers</h1>
            <p className="case-tagline">
              An engineering firm&apos;s first site, designed to look like engineers made it.
            </p>
          </header>

          <section className="case-body">
            <div className="case-grid">
              <aside className="case-sidebar">
                <div className="case-sidebar-block">
                  <div className="case-sidebar-label">CLIENT</div>
                  <div className="case-sidebar-value">
                    HKM Engineers &middot; construction engineering firm &middot; Illinois
                  </div>
                </div>
                <div className="case-sidebar-block">
                  <div className="case-sidebar-label">FOCUS</div>
                  <div className="case-sidebar-value">
                    Construction Inspection &middot; Construction Management &middot; Program
                    Oversight &middot; Transportation / Structures / Facilities
                  </div>
                </div>
                <div className="case-sidebar-block">
                  <div className="case-sidebar-label">MY ROLE</div>
                  <div className="case-sidebar-value">
                    Solo Designer &amp; Developer, design to deploy &middot; 2024
                  </div>
                </div>
                <div className="case-sidebar-block">
                  <div className="case-sidebar-label">STACK</div>
                  <div className="case-sidebar-value">
                    Next.js &middot; React &middot; Tailwind &middot; Figma &middot; Vercel
                  </div>
                </div>
                <div className="case-sidebar-block">
                  <div className="case-sidebar-label">LIVE</div>
                  <div className="case-sidebar-value">
                    <a
                      href="https://hkmengineers.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      hkmengineers.com
                    </a>
                  </div>
                </div>
              </aside>

              <article className="case-content">
                <h3 data-step="01 · STARTING POINT">
                  A firm doing high-stakes infrastructure work with no web presence
                </h3>
                <p>
                  HKM Engineers is a construction engineering firm in Illinois &mdash;
                  construction inspection, construction management, and program oversight across
                  transportation, structures, and facilities. They came to me to build their
                  first website. I took it from a blank Figma file to a live Next.js site on
                  Vercel, DNS included.
                </p>

                <h3 data-step="02 · WHAT I BUILT">Blueprint visual language, start to finish</h3>
                <p>
                  A multi-page site &mdash; Home, Services, Projects, and Contact &mdash; built on
                  a documentation-first, <strong>blueprint visual language</strong> that matches
                  how an engineering firm actually presents itself. It walks a visitor through a
                  four-step client workflow, shows a project portfolio, and routes everything
                  toward a consultation request.
                </p>
                <p>
                  I handled the design in Figma, the build in Next.js and React with Tailwind,
                  the deployment to Vercel, and the DNS configuration.
                </p>

                <div className="case-callout">
                  An engineering firm&apos;s site should look like it was made by people who
                  understand engineering, not by a generic template.
                </div>

                <h3 data-step="03 · THE HARD PART">Design fidelity, not just whether it renders</h3>
                <p>
                  The blueprint aesthetic was a deliberate bet. Getting that from a Figma
                  concept into <strong>pixel-accurate, responsive Next.js</strong> without losing
                  the intent was the real work. It&apos;s easy to build something that looks
                  right on the artboard and drifts in the browser. Holding the visual language
                  through responsive breakpoints, without reaching for compromises that undercut
                  the concept, took more iteration than the build itself.
                </p>

                <h3 data-step="04 · RESULTS">[ADD: outcome]</h3>
                <p>
                  [ADD: that it&apos;s live, any SEO or performance results, client response, or
                  note that it&apos;s newly launched.]
                </p>

                <div className="reflection">
                  <div className="reflection-label">WHAT STUCK WITH ME</div>
                  <p>
                    Different industries read websites differently. A nonprofit&apos;s parents skim
                    for trust signals on a phone. An IT firm&apos;s clients pattern-match on
                    professionalism. An engineering firm&apos;s procurement officers read for
                    evidence of process. Same medium, three completely different rhetorics.
                    Designing well means knowing which one you&apos;re writing in.
                  </p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>

      {/* ── CASE 4 — TRICAN SECURITY ── */}
      <div className="case" id="case-4">
        <div className="container">
          <header className="case-header">
            <div className="case-meta">
              <span>004 / SELECTED WORK</span>
              <span className="accent">[ADD: sector]</span>
              <span>[ADD: year or &ldquo;IN PROGRESS&rdquo;]</span>
            </div>
            <h1 className="case-title">Trican Security</h1>
            <p className="case-tagline">
              [ADD: one-line summary of the project]
            </p>
          </header>

          <section className="case-body">
            <div className="case-grid">
              <aside className="case-sidebar">
                <div className="case-sidebar-block">
                  <div className="case-sidebar-label">CLIENT</div>
                  <div className="case-sidebar-value">[ADD: Trican Security · location]</div>
                </div>
                <div className="case-sidebar-block">
                  <div className="case-sidebar-label">MY ROLE</div>
                  <div className="case-sidebar-value">[ADD: your role] &middot; [ADD: year or in progress]</div>
                </div>
                <div className="case-sidebar-block">
                  <div className="case-sidebar-label">STACK</div>
                  <div className="case-sidebar-value">[ADD: stack]</div>
                </div>
                <div className="case-sidebar-block">
                  <div className="case-sidebar-label">LIVE</div>
                  <div className="case-sidebar-value">[ADD: domain or &ldquo;in progress&rdquo;]</div>
                </div>
              </aside>

              <article className="case-content">
                <h3 data-step="01 · STARTING POINT">[ADD: section title]</h3>
                <p>
                  [ADD: what Trican Security does and where the project began.]
                </p>

                <h3 data-step="02 · WHAT I BUILT">[ADD: section title]</h3>
                <p>
                  [ADD: what you built &mdash; scope, pages, features.]
                </p>

                <h3 data-step="03 · THE HARD PART">[ADD: section title]</h3>
                <p>
                  [ADD: the hardest or most interesting part, and what you did about it.]
                </p>

                <h3 data-step="04 · RESULTS">[ADD: outcome]</h3>
                <p>
                  [ADD: outcome, or that it&apos;s newly launched / still in progress.]
                </p>

                <div className="reflection">
                  <div className="reflection-label">WHAT STUCK WITH ME</div>
                  <p>
                    [ADD: one honest observation from this project.]
                  </p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
