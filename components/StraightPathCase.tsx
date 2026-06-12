"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./StraightPathCase.module.css";

export default function StraightPathCase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimScattered, setDimScattered] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const prefersReduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

    containerRef.current
      .querySelectorAll<HTMLElement>("[data-count-to]")
      .forEach((el) => {
        const target = parseInt(el.getAttribute("data-count-to") ?? "0", 10);
        const suffix = el.getAttribute("data-count-suffix") ?? "";
        if (prefersReduced) {
          el.textContent = target + suffix;
          return;
        }
        let startTime: number | null = null;
        const duration = 1100;
        const tick = (ts: number) => {
          if (!startTime) startTime = ts;
          const p = Math.min((ts - startTime) / duration, 1);
          el.textContent =
            Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
  }, []);

  const scatterStyle = (base?: React.CSSProperties): React.CSSProperties => ({
    ...base,
    opacity: dimScattered ? 0.35 : 1,
    transition: "opacity 0.3s",
  });

  return (
    <div ref={containerRef} className={styles.v}>
      {/* ── Hero ── */}
      <div className={styles.in}>
        <span className={styles.eye}>&larr; back to work</span>
        <div className={styles.eye} style={{ margin: "1.5rem 0 .9rem" }}>
          001 / Selected work &middot; Volunteer &middot; Nonprofit &middot; 2025&mdash;present
        </div>
        <h1
          className={styles.disp}
          style={{ fontSize: "42px", lineHeight: ".98", margin: 0 }}
        >
          Straight Path Athletics
          <span style={{ color: "var(--accent)" }}>.</span>
        </h1>
        <p
          className={styles.p}
          style={{
            marginTop: "1rem",
            maxWidth: "440px",
            color: "var(--color-text-primary)",
            fontSize: "17px",
          }}
        >
          Took a youth sports nonprofit off paper and a pile of scattered apps,
          onto one platform the volunteers can run themselves.
        </p>
        <a
          href="https://straightpathathletics.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            marginTop: "1.25rem",
            fontSize: "13px",
            fontWeight: 600,
            color: "var(--color-background-primary)",
            background: "var(--color-text-primary)",
            padding: "9px 18px",
            borderRadius: "99px",
            textDecoration: "none",
          }}
        >
          View live site{" "}
          <i
            className="ti ti-external-link"
            style={{ fontSize: "15px" }}
            aria-hidden="true"
          />
        </a>

        {/* Meta grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "16px 24px",
            marginTop: "1.75rem",
            paddingTop: "1.5rem",
            borderTop: "0.5px solid var(--color-border-tertiary)",
          }}
        >
          <div>
            <div className={styles.eye} style={{ marginBottom: "4px" }}>
              Client
            </div>
            <div style={{ fontSize: "13px", color: "var(--color-text-primary)" }}>
              Straight Path Athletics &middot; youth sports nonprofit
            </div>
          </div>
          <div>
            <div className={styles.eye} style={{ marginBottom: "4px" }}>
              Serves
            </div>
            <div style={{ fontSize: "13px", color: "var(--color-text-primary)" }}>
              200+ athletes &middot; Flag Football &amp; Basketball &middot; Howard County, MD
            </div>
          </div>
          <div>
            <div className={styles.eye} style={{ marginBottom: "4px" }}>
              My role
            </div>
            <div style={{ fontSize: "13px", color: "var(--color-text-primary)" }}>
              Technical Lead &middot; diagnose, choose tools, get buy-in, implement &middot; 450+ hrs
            </div>
          </div>
          <div>
            <div className={styles.eye} style={{ marginBottom: "4px" }}>
              Stack
            </div>
            <div style={{ fontSize: "13px", color: "var(--color-text-primary)" }}>
              TeamSnap &middot; Stripe payments
            </div>
          </div>
          <div>
            <div className={styles.eye} style={{ marginBottom: "4px" }}>
              Live
            </div>
            <div style={{ fontSize: "13px", color: "var(--accent)" }}>
              straightpathathletics.com
            </div>
          </div>
        </div>
      </div>

      {/* ── Hero image placeholder ── */}
      <div className={`${styles.in} ${styles.sec}`}>
        <div className={styles.imgph} style={{ aspectRatio: "16/9" }}>
          <i className="ti ti-photo" aria-hidden="true" />
          <span>hero image — game day / the live site</span>
        </div>
      </div>

      {/* ── Stats ── */}
      <div className={`${styles.in} ${styles.sec}`}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(118px, 1fr))",
            gap: "10px",
          }}
        >
          <div className={styles.stat}>
            <i className="ti ti-users" aria-hidden="true" />
            <div className={styles.statnum}>
              <span data-count-to="200" data-count-suffix="+">
                0
              </span>
            </div>
            <div className={styles.statlbl}>young athletes</div>
          </div>
          <div className={styles.stat}>
            <i className="ti ti-ball-basketball" aria-hidden="true" />
            <div className={styles.statnum}>
              <span data-count-to="5" data-count-suffix="+">
                0
              </span>
            </div>
            <div className={styles.statlbl}>programs</div>
          </div>
          <div className={styles.stat}>
            <i className="ti ti-clock-hour-4" aria-hidden="true" />
            <div className={styles.statnum}>
              <span data-count-to="450" data-count-suffix="+">
                0
              </span>
            </div>
            <div className={styles.statlbl}>volunteer hours</div>
          </div>
          <div className={styles.stat}>
            <i className="ti ti-stack-2" aria-hidden="true" />
            <div className={styles.statnum}>
              <span data-count-to="10">0</span>&rarr;1
            </div>
            <div className={styles.statlbl}>tools consolidated</div>
          </div>
        </div>
      </div>

      {/* ── Problem ── */}
      <div className={`${styles.in} ${styles.sec}`}>
        <div className={styles.h}>
          A nonprofit running on paper and a dozen scattered apps
        </div>
        <p className={styles.p}>
          Straight Path runs Flag Football and Basketball for 200+ kids in
          Howard County, Maryland. When I started, the organization was held
          together by whatever tool was closest to hand. A separate website.
          WhatsApp for parent communication. Paper forms for registration. Checks
          for fees. None of it talked to anything else, and keeping it all in
          sync ate the volunteers&apos; time. The limit on growth was never
          demand. It was coordination.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "8px",
            marginTop: "1.25rem",
          }}
        >
          <div className={styles.tool}>
            <i className="ti ti-world" aria-hidden="true" />
            Website
          </div>
          <div className={styles.tool}>
            <i className="ti ti-brand-whatsapp" aria-hidden="true" />
            WhatsApp
          </div>
          <div className={styles.tool}>
            <i className="ti ti-file-text" aria-hidden="true" />
            Paper forms
          </div>
          <div className={styles.tool}>
            <i className="ti ti-receipt" aria-hidden="true" />
            Checks
          </div>
        </div>
      </div>

      {/* ── Role ── */}
      <div className={`${styles.in} ${styles.sec}`}>
        <div className={styles.h}>
          Find the problem, choose the fix, get it approved
        </div>
        <p className={styles.p}>
          I&apos;m the technical lead here, not the hired developer. The job is
          to watch how the community actually operates, find where it loses time
          or loses trust, and match each problem to a solution. I don&apos;t
          decide alone — I bring a recommendation to the organization, they
          approve it, and then I implement it. That approval loop is the point:
          a volunteer-run nonprofit has to understand and own its tools long
          after I&apos;ve stepped back.
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "5px",
            marginTop: "1.5rem",
          }}
        >
          <div className={styles.step}>
            <div className={styles.stepic}>
              <i className="ti ti-search" aria-hidden="true" />
            </div>
            <div className={styles.steplbl}>Diagnose</div>
          </div>
          <div
            className={styles.disp}
            style={{
              color: "var(--color-border-secondary)",
              fontSize: "15px",
              marginTop: "11px",
            }}
          >
            &rarr;
          </div>
          <div className={styles.step}>
            <div className={styles.stepic}>
              <i className="ti ti-bulb" aria-hidden="true" />
            </div>
            <div className={styles.steplbl}>Recommend</div>
          </div>
          <div
            className={styles.disp}
            style={{
              color: "var(--color-border-secondary)",
              fontSize: "15px",
              marginTop: "11px",
            }}
          >
            &rarr;
          </div>
          <div className={styles.step}>
            <div className={styles.stepic}>
              <i className="ti ti-check" aria-hidden="true" />
            </div>
            <div className={styles.steplbl}>Community approves</div>
          </div>
          <div
            className={styles.disp}
            style={{
              color: "var(--color-border-secondary)",
              fontSize: "15px",
              marginTop: "11px",
            }}
          >
            &rarr;
          </div>
          <div className={styles.step}>
            <div className={styles.stepic}>
              <i className="ti ti-tool" aria-hidden="true" />
            </div>
            <div className={styles.steplbl}>Implement</div>
          </div>
        </div>
      </div>

      {/* ── Constraints ── */}
      <div className={`${styles.in} ${styles.sec}`}>
        <div className={styles.h}>Mobile-first, payment-first</div>
        <p className={styles.p}>
          Two realities shaped every decision. Parents sign their kids up on a
          phone during school pickup, not at a desktop, so every flow had to be
          fast and obvious on a phone. And the whole exercise was pointless if
          fees couldn&apos;t be collected online. Looking good came a distant
          third, behind working on a phone and taking a payment.
        </p>
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "1.25rem",
            flexWrap: "wrap",
          }}
        >
          <div className={styles.pcard}>
            <i className="ti ti-device-mobile" aria-hidden="true" />
            <div className={styles.pcardT}>Mobile-first</div>
            <div className={styles.pcardD}>
              Register a kid in under a minute, on a phone, in a school pickup
              line.
            </div>
          </div>
          <div className={styles.pcard}>
            <i className="ti ti-credit-card" aria-hidden="true" />
            <div className={styles.pcardT}>Payment-first</div>
            <div className={styles.pcardD}>
              If it couldn&apos;t take a fee online, nothing else about it
              mattered.
            </div>
          </div>
        </div>
      </div>

      {/* ── Solution / Consolidation diagram ── */}
      <div className={`${styles.in} ${styles.sec}`}>
        <div className={styles.h}>One platform instead of ten</div>
        <p className={styles.p} style={{ marginBottom: "1.5rem" }}>
          The recommendation was to stop stitching tools together and move
          everything onto TeamSnap. It runs registration across all 5+ programs,
          processes fees and donations through Stripe, and handles parent
          communication and notifications. One system, in place of the website,
          the WhatsApp threads, the paper, and the checkbook — and one that a
          non-technical volunteer can keep running without me.
        </p>
        <div
          style={{
            background: "var(--color-background-secondary)",
            borderRadius: "var(--border-radius-lg)",
            padding: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "14px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "8px",
              flex: 1,
              minWidth: "190px",
            }}
          >
            <div className={styles.tool} style={scatterStyle()}>
              <i className="ti ti-world" aria-hidden="true" />
              Website
            </div>
            <div className={styles.tool} style={scatterStyle()}>
              <i className="ti ti-brand-whatsapp" aria-hidden="true" />
              WhatsApp
            </div>
            <div className={styles.tool} style={scatterStyle()}>
              <i className="ti ti-file-text" aria-hidden="true" />
              Paper
            </div>
            <div className={styles.tool} style={scatterStyle()}>
              <i className="ti ti-receipt" aria-hidden="true" />
              Checks
            </div>
          </div>
          <div
            className={styles.disp}
            style={{ fontSize: "22px", color: "var(--color-text-tertiary)" }}
          >
            &rarr;
          </div>
          <div
            className={styles.fixbox}
            onMouseEnter={() => setDimScattered(true)}
            onMouseLeave={() => setDimScattered(false)}
          >
            <div className={styles.disp} style={{ fontSize: "18px", marginBottom: "8px" }}>
              TeamSnap
            </div>
            <div className={styles.fixrow}>
              <i className="ti ti-clipboard-list" aria-hidden="true" />
              Registration
            </div>
            <div className={styles.fixrow}>
              <i className="ti ti-credit-card" aria-hidden="true" />
              Payments &middot; Stripe
            </div>
            <div className={styles.fixrow}>
              <i className="ti ti-bell" aria-hidden="true" />
              Parent comms
            </div>
          </div>
        </div>
        <div
          className={styles.eye}
          style={{
            textAlign: "center",
            marginTop: "8px",
            color: "var(--color-text-tertiary)",
          }}
        >
          hover the platform to see what it replaced
        </div>
      </div>

      {/* ── Callout quote ── */}
      <div className={`${styles.in} ${styles.sec}`}>
        <div style={{ borderLeft: "3px solid var(--accent)", padding: "2px 0 2px 20px" }}>
          <p
            style={{
              fontFamily: "'League Spartan', sans-serif",
              fontWeight: 700,
              fontSize: "21px",
              lineHeight: 1.3,
              color: "var(--color-text-primary)",
              margin: 0,
            }}
          >
            The right answer wasn&apos;t a custom site. It was one consolidated,
            maintainable platform the people there could actually run.
          </p>
        </div>
      </div>

      {/* ── Outcome ── */}
      <div className={`${styles.in} ${styles.sec}`}>
        <div className={styles.h}>From scattered to consolidated</div>
        <p className={styles.p}>
          The organization went from paper-and-pieces to fully online in a
          single season. Registration and payments that used to live on printed
          forms and checks now run through one platform. For a nonprofit whose
          entire prior presence was a Facebook page, going from invisible to
          discoverable and payable is the whole win.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
            marginTop: "1.25rem",
          }}
        >
          <div className={styles.imgph} style={{ aspectRatio: "9/16" }}>
            <i className="ti ti-device-mobile" aria-hidden="true" />
            <span>registration on mobile</span>
          </div>
          <div className={styles.imgph} style={{ aspectRatio: "9/16" }}>
            <i className="ti ti-photo" aria-hidden="true" />
            <span>a program page</span>
          </div>
        </div>
      </div>

      {/* ── Reflection ── */}
      <div className={`${styles.in} ${styles.sec}`}>
        <div className={styles.eye} style={{ color: "var(--accent)", marginBottom: "10px" }}>
          What stuck with me
        </div>
        <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
          <i
            className="ti ti-quote"
            style={{ fontSize: "26px", color: "var(--accent)", opacity: 0.45, flexShrink: 0 }}
            aria-hidden="true"
          />
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.65,
              color: "var(--color-text-primary)",
              margin: 0,
            }}
          >
            The most useful thing I did on this project was not build anything.
            The right answer wasn&apos;t a custom site. It was seeing that a
            volunteer organization needed one consolidated, maintainable platform
            more than it needed bespoke code, and choosing the tool the people
            there could actually run. Knowing when <em>not</em> to write software
            is its own engineering decision.
          </p>
        </div>
      </div>
    </div>
  );
}
