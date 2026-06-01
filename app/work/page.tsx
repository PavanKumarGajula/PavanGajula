export default function WorkPage() {
  return (
    <>
      {/* ── HERO ── */}
      <div className="page">
        <div className="container">
          <header className="page-header">
            <div className="page-eyebrow">SELECTED WORK</div>
            <h1 className="page-title">
              Three audiences, <span className="serif">three sites</span>.
            </h1>
            <p className="page-subtitle">
              A nonprofit&apos;s parents, an IT firm&apos;s enterprise buyers,
              an engineering firm&apos;s procurement officers. Each had to trust
              an organization before they&apos;d contact it. My job was to
              figure out what each of them reads for, and deliver exactly that.
            </p>
          </header>
        </div>
      </div>

      {/* ── CASE 1 — STRAIGHT PATH ATHLETICS ── */}
      <div className="case" id="case-1">
        <div className="container">
          <header className="case-header">
            <div className="case-meta">
              <span>001 / SELECTED WORK</span>
              <span className="accent">VOLUNTEER &middot; NONPROFIT</span>
              <span>2025 — PRESENT</span>
            </div>
            <h1 className="case-title">Straight Path Athletics</h1>
            <p className="case-tagline">
              Took a youth sports nonprofit off paper and a pile of scattered
              apps, onto one platform the volunteers can run themselves.
            </p>
          </header>

          <section className="case-body">
            <div className="case-grid">
              <aside className="case-sidebar">
                <div className="case-sidebar-block">
                  <div className="case-sidebar-label">CLIENT</div>
                  <div className="case-sidebar-value">
                    Straight Path Athletics &middot; youth sports nonprofit
                  </div>
                </div>
                <div className="case-sidebar-block">
                  <div className="case-sidebar-label">SERVES</div>
                  <div className="case-sidebar-value">
                    200+ young athletes &middot; Flag Football &amp; Basketball
                    &middot; Howard County, MD
                  </div>
                </div>
                <div className="case-sidebar-block">
                  <div className="case-sidebar-label">MY ROLE</div>
                  <div className="case-sidebar-value">
                    Technical Lead &middot; diagnose needs, choose tools, get
                    community buy-in, implement &middot; 450+ volunteer hours
                  </div>
                </div>
                <div className="case-sidebar-block">
                  <div className="case-sidebar-label">STACK</div>
                  <div className="case-sidebar-value">
                    TeamSnap &middot; Stripe payments
                  </div>
                </div>
                <div className="case-sidebar-block">
                  <div className="case-sidebar-label">LIVE</div>
                  <div className="case-sidebar-value">
                    <a
                      href="https://straightpathathletics.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      straightpathathletics.com
                    </a>
                  </div>
                </div>
              </aside>

              <article className="case-content">
                <h3 data-step="01 · PROBLEM">
                  A nonprofit running on paper and a dozen scattered apps
                </h3>
                <p>
                  Straight Path runs Flag Football and Basketball for{" "}
                  <strong>200+ kids in Howard County, Maryland</strong>. When I
                  started, the organization was held together by whatever tool
                  was closest to hand. A separate website. WhatsApp for parent
                  communication. Paper forms for registration. Checks for fees.
                  None of it talked to anything else, and keeping it all in sync
                  ate the volunteers&apos; time. The limit on growth was never
                  demand. It was coordination.
                </p>

                <h3 data-step="02 · ROLE">
                  Find the problem, choose the fix, get it approved
                </h3>
                <p>
                  I&apos;m the technical lead here, not the hired developer. The
                  job is to watch how the community actually operates, find where
                  it loses time or loses trust, and match each problem to a
                  solution. I don&apos;t decide alone &mdash; I bring a
                  recommendation to the organization, they approve it, and then I
                  implement it. That approval loop is the point: a volunteer-run
                  nonprofit has to understand and own its tools long after
                  I&apos;ve stepped back.
                </p>

                <h3 data-step="03 · CONSTRAINTS">Mobile-first, payment-first</h3>
                <p>
                  Two realities shaped every decision. Parents sign their kids up
                  on a phone during school pickup, not at a desktop, so every
                  flow had to be fast and obvious on a phone. And the whole
                  exercise was pointless if fees couldn&apos;t be collected
                  online. Looking good came a distant third, behind working on a
                  phone and taking a payment.
                </p>

                <h3 data-step="04 · SOLUTION">One platform instead of ten</h3>
                <p>
                  The recommendation was to stop stitching tools together and
                  move everything onto <strong>TeamSnap</strong>. It runs
                  registration across all 5+ programs, processes fees and
                  donations through Stripe, and handles parent communication and
                  notifications. One system, in place of the website, the
                  WhatsApp threads, the paper, and the checkbook &mdash; and one
                  that a non-technical volunteer can keep running without me.
                </p>

                <div className="case-callout">
                  The right answer wasn&apos;t a custom site. It was one
                  consolidated, maintainable platform the people there could
                  actually run.
                </div>

                <h3 data-step="05 · OUTCOME">From scattered to consolidated</h3>
                <p>
                  The organization went from paper-and-pieces to fully online in
                  a single season. Registration and payments that used to live on
                  printed forms and checks now run through one platform. For a
                  nonprofit whose entire prior presence was a Facebook page,
                  going from invisible to discoverable and payable is the whole
                  win.
                </p>

                <div className="reflection">
                  <div className="reflection-label">WHAT STUCK WITH ME</div>
                  <p>
                    The most useful thing I did on this project was not build
                    anything. The right answer wasn&apos;t a custom site. It was
                    seeing that a volunteer organization needed one consolidated,
                    maintainable platform more than it needed bespoke code, and
                    choosing the tool the people there could actually run.{" "}
                    <strong>
                      Knowing when not to write software is its own engineering
                      decision.
                    </strong>
                  </p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>

      <div className="case-divider">— END CASE 1 —</div>

      {/* ── CASE 2 — SYNACK SOLUTIONS ── */}
      <div className="case" id="case-2">
        <div className="container">
          <header className="case-header">
            <div className="case-meta">
              <span>002 / SELECTED WORK</span>
              <span className="accent">CORPORATE</span>
              <span>2024 — PRESENT</span>
            </div>
            <h1 className="case-title">Synack Solutions</h1>
            <p className="case-tagline">
              A 20-year-old IT services firm&apos;s first modern digital presence.
              15+ pages, 6 service lines, built from scratch.
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
                  <div className="case-sidebar-label">AUDIENCE</div>
                  <div className="case-sidebar-value">
                    Enterprise clients evaluating an IT services partner
                  </div>
                </div>
                <div className="case-sidebar-block">
                  <div className="case-sidebar-label">MY ROLE</div>
                  <div className="case-sidebar-value">
                    Frontend developer &middot; architecture, build, deploy
                  </div>
                </div>
                <div className="case-sidebar-block">
                  <div className="case-sidebar-label">STACK</div>
                  <div className="case-sidebar-value">
                    HTML5 &middot; CSS3 &middot; Tailwind &middot; AOS &middot;
                    JavaScript ES6+
                  </div>
                </div>
                <div className="case-sidebar-block">
                  <div className="case-sidebar-label">LIVE</div>
                  <div className="case-sidebar-value">
                    <a
                      href="https://synacksolutions.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      synacksolutions.com
                    </a>
                  </div>
                </div>
              </aside>

              <article className="case-content">
                <h3 data-step="01 · PROBLEM">
                  A 20-year-old firm with no online presence
                </h3>
                <p>
                  Synack Solutions has been delivering IT services from Baltimore{" "}
                  <strong>since 2005</strong>. Twenty years of work, real clients,
                  real outcomes &mdash; and a website that hadn&apos;t kept up. For
                  a B2B firm whose buyers Google before they meet, that&apos;s a
                  credibility problem. Procurement teams pattern-match on digital
                  presence, and an outdated site signals an outdated company.
                </p>
                <p>
                  The brief was to build a modern, professional site that showcased
                  the firm&apos;s <strong>6 service lines</strong> and supported
                  new business development.
                </p>

                <h3 data-step="02 · APPROACH">Editorial, not promotional</h3>
                <p>
                  Most IT services sites read like marketing brochures &mdash;
                  vague claims, stock photography, hero videos of generic office
                  workers. I wanted Synack&apos;s site to read more like a
                  publication: clean typography, structured content, scroll-driven
                  pacing.
                </p>
                <p>Decisions that shaped the build:</p>
                <ul>
                  <li>
                    A <strong>15+ page architecture</strong> with a clear hierarchy
                    &mdash; service lines on top, supporting content below
                  </li>
                  <li>
                    Modular CSS organized into a maintainable folder structure so
                    the firm could update content without me
                  </li>
                  <li>
                    <strong>AOS (Animate On Scroll)</strong> for restrained motion
                    that gives the page life without being a distraction
                  </li>
                  <li>
                    Smooth scroll navigation that turns the site into one continuous
                    narrative instead of a click-driven gallery
                  </li>
                  <li>
                    A client testimonials section grounded in real quotes, not stock
                    language
                  </li>
                </ul>

                <div className="case-callout">
                  Twenty years of business deserves a site that doesn&apos;t
                  apologize for itself.
                </div>

                <h3 data-step="03 · BUILD">Vanilla stack, premium feel</h3>
                <p>
                  I built the site in{" "}
                  <strong>
                    HTML5, CSS3, Tailwind, and vanilla JavaScript (ES6+)
                  </strong>
                  . No React. No build step. The deliberate constraint: the firm
                  should be able to hire any frontend developer in five years and
                  have them edit the site without learning a custom stack.
                </p>
                <p>
                  Tailwind let me move fast on layout while keeping the bundle
                  tiny. AOS handled animation declaratively, so adding motion to a
                  new section was a single attribute, not a JavaScript file. The
                  whole site loads fast, looks current, and will keep working long
                  after I move on.
                </p>

                <h3 data-step="04 · OUTCOME">
                  A digital presence that matches the company
                </h3>
                <p>
                  For a firm that had been in business for 20 years with no modern
                  web presence, the launch wasn&apos;t a redesign &mdash; it was a
                  debut. The site now anchors the firm&apos;s business development
                  across all 6 service lines, giving potential clients a credible
                  artifact to evaluate before any sales conversation begins.
                </p>

                <div className="reflection">
                  <div className="reflection-label">WHAT STUCK WITH ME</div>
                  <p>
                    The hardest part of this project wasn&apos;t code &mdash; it
                    was{" "}
                    <strong>
                      understanding what a 20-year-old company actually does
                    </strong>{" "}
                    and translating that into 15+ pages that don&apos;t repeat
                    themselves. Senior engineers have a saying that the best feature
                    you can ship is the one you don&apos;t ship. Mature businesses
                    are full of features (services, programs, history) that newer
                    companies haven&apos;t earned yet. Designing for that took more
                    interviewing than coding.
                  </p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>

      <div className="case-divider">— END CASE 2 —</div>

      {/* ── CASE 3 — HKM ENGINEERS ── */}
      <div className="case" id="case-3">
        <div className="container">
          <header className="case-header">
            <div className="case-meta">
              <span>003 / SELECTED WORK</span>
              <span className="accent">SMALL BUSINESS</span>
              <span>2025 — PRESENT</span>
            </div>
            <h1 className="case-title">HKM Engineers</h1>
            <p className="case-tagline">
              A construction engineering firm in Illinois. 3 service lines,
              4-step client workflow, documentation-first design.
            </p>
          </header>

          <section className="case-body">
            <div className="case-grid">
              <aside className="case-sidebar">
                <div className="case-sidebar-block">
                  <div className="case-sidebar-label">CLIENT</div>
                  <div className="case-sidebar-value">
                    HKM Engineers &middot; construction engineering firm &middot;
                    Illinois
                  </div>
                </div>
                <div className="case-sidebar-block">
                  <div className="case-sidebar-label">FOCUS</div>
                  <div className="case-sidebar-value">
                    Construction Inspection, Construction Management, Program
                    Oversight &middot; Transportation / Structures / Facilities
                  </div>
                </div>
                <div className="case-sidebar-block">
                  <div className="case-sidebar-label">MY ROLE</div>
                  <div className="case-sidebar-value">
                    Frontend developer &middot; design, build, deploy
                  </div>
                </div>
                <div className="case-sidebar-block">
                  <div className="case-sidebar-label">STACK</div>
                  <div className="case-sidebar-value">
                    HTML5 &middot; CSS3 &middot; JavaScript
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
                <h3 data-step="01 · PROBLEM">
                  An engineering firm that did high-stakes work, invisibly
                </h3>
                <p>
                  HKM Engineers does{" "}
                  <strong>infrastructure work in Illinois</strong> &mdash;
                  Construction Inspection, Construction Management, and Program
                  Oversight across Transportation, Structures, and Facilities. Work
                  that matters. Bridges, roads, public buildings. But for a firm
                  bidding on public-sector infrastructure projects, an invisible
                  online presence is a credibility ceiling. Procurement officers
                  and partner firms expect to verify you before they call.
                </p>
                <p>
                  The brief: a documentation-first website that communicates
                  technical credibility, not marketing flash.
                </p>

                <h3 data-step="02 · APPROACH">
                  Documentation-first, multi-page
                </h3>
                <p>
                  Engineering firms aren&apos;t sold like consumer products. Their
                  clients read carefully, compare specs, and look for evidence of
                  capability before reaching out. I designed the site as a{" "}
                  <strong>structured multi-page document</strong>:
                </p>
                <ul>
                  <li>
                    One dedicated page per service line &mdash; no smushing three
                    offerings onto a single brochure page
                  </li>
                  <li>
                    A <strong>4-step client workflow</strong> diagram showing how a
                    project actually moves through HKM &mdash; the kind of process
                    detail procurement officers screen for
                  </li>
                  <li>
                    A project portfolio section grounded in real verticals
                    (transportation, structures, facilities), not aspirational
                    language
                  </li>
                  <li>
                    A consultation request flow that gives potential clients a clear
                    path from &ldquo;interested&rdquo; to &ldquo;in touch&rdquo;
                  </li>
                </ul>

                <div className="case-callout">
                  Procurement teams scan for evidence, not adjectives. The whole
                  site is built around that.
                </div>

                <h3 data-step="03 · BUILD">Vanilla and durable</h3>
                <p>
                  HTML, CSS, and JavaScript &mdash; no framework. A small firm
                  shouldn&apos;t have to depend on a Node version or a build
                  pipeline to maintain its website. The whole site is a folder of
                  files that any developer can read, edit, and redeploy in an
                  afternoon.
                </p>

                <h3 data-step="04 · OUTCOME">
                  A web presence that matches the work
                </h3>
                <p>
                  HKM now has a credible, structured online presence covering its{" "}
                  <strong>3 service lines</strong> across Illinois infrastructure
                  verticals. The site supports business development the way the
                  firm actually wins work &mdash; by demonstrating process, not by
                  selling.
                </p>

                <div className="reflection">
                  <div className="reflection-label">WHAT STUCK WITH ME</div>
                  <p>
                    <strong>
                      Different industries read websites differently.
                    </strong>{" "}
                    A nonprofit&apos;s parents skim for trust signals on a phone.
                    An IT firm&apos;s clients pattern-match on professionalism. An
                    engineering firm&apos;s procurement officers read for evidence
                    of process. Same medium, three completely different rhetorics.
                    Designing well means knowing which rhetoric you&apos;re writing
                    in &mdash; and that&apos;s something I want to study formally,
                    not just pick up by repetition.
                  </p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>

      <div className="case-divider">— END OF CASES —</div>
    </>
  );
}
