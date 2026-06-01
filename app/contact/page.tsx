"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    type: "freelance",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const label =
      form.type === "freelance" ? "Freelance Project"
      : form.type === "hiring" ? "Hiring Inquiry"
      : form.type === "research" ? "Research Inquiry"
      : "Inquiry";
    const subject = encodeURIComponent(
      `[${label}] ${form.name}${form.company ? ` · ${form.company}` : ""}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company || "—"}\nInquiry type: ${form.type}\nBudget: ${form.budget || "—"}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:pavangajula1998@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const TYPES = [
    { v: "freelance", l: "Freelance" },
    { v: "hiring",    l: "Hiring"    },
    { v: "research",  l: "Research"  },
    { v: "other",     l: "Other"     },
  ];

  return (
    <div className="page">
      <div className="container">

        <header className="page-header">
          <div className="page-eyebrow">CONTACT</div>
          <h1 className="page-title">
            Let&apos;s <span className="serif">talk</span>.
          </h1>
          <p className="page-subtitle">
            Hiring for an engineering role, exploring research collaboration, or
            thinking about a freelance project — I read every message and reply within
            24 hours.
          </p>
        </header>

        <div className="contact-grid">

          {/* LEFT — contact info */}
          <div>
            <div className="contact-meta-block">
              <div className="contact-meta-label">DIRECT</div>
              <a href="mailto:pavangajula1998@gmail.com" className="contact-meta-link">
                pavangajula1998@gmail.com
              </a>
              <div className="contact-meta-sub">Best for project inquiries</div>
              <a
                href="https://linkedin.com/in/gajulapavankumar"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-meta-link"
                style={{ marginTop: "14px" }}
              >
                linkedin.com/in/gajulapavankumar
              </a>
              <div className="contact-meta-sub">Best for hiring conversations</div>
            </div>

            <div className="contact-meta-block contact-meta-divider">
              <div className="contact-meta-label">LOCATION</div>
              <div className="contact-meta-value">Elkridge, Maryland</div>
              <div className="contact-meta-sub">Eastern Time (UTC−5)</div>
              <div className="contact-meta-sub" style={{ marginTop: "8px" }}>
                Available remotely worldwide. On-site in MD / DC / VA for client meetings.
              </div>
            </div>

            <div className="contact-meta-block contact-meta-divider">
              <div className="contact-meta-label">RESPONSE TIME</div>
              <div className="contact-meta-value">Within 24 hours</div>
              <div className="contact-meta-sub">Usually much faster on weekdays</div>
            </div>
          </div>

          {/* RIGHT — form */}
          <div>
            {submitted ? (
              <div className="contact-success">
                <div className="contact-meta-label" style={{ marginBottom: "16px" }}>
                  MESSAGE READY
                </div>
                <h3 className="contact-success-title">Your email client opened.</h3>
                <p style={{ fontSize: "16px", color: "var(--text-muted)", lineHeight: 1.75 }}>
                  If it didn&apos;t, reach me directly at{" "}
                  <a
                    href="mailto:pavangajula1998@gmail.com"
                    style={{ color: "var(--accent)" }}
                  >
                    pavangajula1998@gmail.com
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">

                <div className="form-row">
                  <div>
                    <label className="form-label">NAME *</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="form-label">EMAIL *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">COMPANY (OPTIONAL)</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">INQUIRY TYPE</label>
                  <div className="type-grid">
                    {TYPES.map((o) => (
                      <button
                        key={o.v}
                        type="button"
                        onClick={() => setForm({ ...form, type: o.v })}
                        className={`type-btn${form.type === o.v ? " active" : ""}`}
                      >
                        {o.l}
                      </button>
                    ))}
                  </div>
                </div>

                {form.type === "freelance" && (
                  <div className="form-group">
                    <label className="form-label">BUDGET RANGE (OPTIONAL)</label>
                    <select
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className="form-input"
                    >
                      <option value="">Not sure yet</option>
                      <option value="<$5k">Under $5,000</option>
                      <option value="$5k–$10k">$5,000 – $10,000</option>
                      <option value="$10k–$25k">$10,000 – $25,000</option>
                      <option value="$25k+">$25,000+</option>
                    </select>
                  </div>
                )}

                <div className="form-group">
                  <label className="form-label">MESSAGE *</label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me what you're building, when you need it by, and anything else I should know..."
                    className="form-input"
                    style={{ resize: "none" }}
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  send message <span className="arrow">→</span>
                </button>

                <p className="form-note">
                  This opens your mail client with a pre-filled message. You&apos;ll send
                  it from there.
                </p>

              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
