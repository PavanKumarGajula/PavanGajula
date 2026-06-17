"use client";

import { useState, useEffect } from "react";

type FileEntry = { name: string; size: string };

export default function LearningPage() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [files, setFiles] = useState<FileEntry[]>([]);
  const [loading, setLoading] = useState(false);

  // On mount, try to load files (cookie may already be set)
  useEffect(() => {
    loadFiles();
  }, []);

  async function loadFiles() {
    const res = await fetch("/api/resources");
    if (res.ok) {
      const data = await res.json();
      setFiles(data.files);
      setAuthed(true);
    } else {
      setAuthed(false);
    }
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/auth/learning", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setLoading(false);
    if (res.ok) {
      await loadFiles();
    } else {
      setError("Wrong password.");
    }
  }

  // ── Loading ──
  if (authed === null) {
    return (
      <div className="page">
        <div className="container">
          <p style={{ color: "var(--text-muted)", marginTop: "80px" }}>Loading…</p>
        </div>
      </div>
    );
  }

  // ── Password gate ──
  if (!authed) {
    return (
      <div className="page">
        <div className="container">
          <header className="page-header">
            <div className="page-eyebrow">PRIVATE</div>
            <h1 className="page-title">
              Learning <span className="serif">resources</span>.
            </h1>
            <p className="page-subtitle">Password required.</p>
          </header>

          <form onSubmit={handleLogin} style={{ maxWidth: "320px" }}>
            <div className="form-group">
              <label className="form-label">PASSWORD</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
                autoFocus
                required
              />
            </div>
            {error && (
              <p style={{ color: "var(--accent)", fontSize: "13px", marginBottom: "12px" }}>
                {error}
              </p>
            )}
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? "Checking…" : "Enter →"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ── Resource list ──
  return (
    <div className="page">
      <div className="container">
        <header className="page-header">
          <div className="page-eyebrow">PRIVATE</div>
          <h1 className="page-title">
            Learning <span className="serif">resources</span>.
          </h1>
          <p className="page-subtitle">
            {files.length} document{files.length !== 1 ? "s" : ""}
          </p>
        </header>

        {files.length === 0 ? (
          <p style={{ color: "var(--text-muted)" }}>No resources yet — drop PDFs into <code>private-resources/</code>.</p>
        ) : (
          <div className="timeline" style={{ marginTop: "0" }}>
            {files.map((f) => (
              <a
                key={f.name}
                href={`/api/resources/${encodeURIComponent(f.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="project-row"
                style={{ textDecoration: "none" }}
              >
                <div className="project-num" style={{ fontSize: "18px" }}>📄</div>
                <div className="project-info">
                  <div className="project-title">{f.name.replace(/\.pdf$/i, "")}</div>
                  <div className="project-desc">{f.size}</div>
                </div>
                <div className="project-cta">
                  open <span className="arrow">→</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
