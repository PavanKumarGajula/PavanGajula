"use client";

import { useState, useEffect } from "react";

type FileEntry = { name: string; size: string };
type FolderEntry = { name: string; count: number };

export default function LearningPage() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [folders, setFolders] = useState<FolderEntry[]>([]);
  const [rootFiles, setRootFiles] = useState<FileEntry[]>([]);
  const [currentFolder, setCurrentFolder] = useState<string | null>(null);
  const [folderFiles, setFolderFiles] = useState<FileEntry[]>([]);
  const [folderLoading, setFolderLoading] = useState(false);

  useEffect(() => {
    loadRoot();
  }, []);

  async function loadRoot() {
    const res = await fetch("/api/resources");
    if (res.ok) {
      const data = await res.json();
      setFolders(data.folders ?? []);
      setRootFiles(data.files ?? []);
      setAuthed(true);
    } else {
      setAuthed(false);
    }
  }

  async function openFolder(name: string) {
    setCurrentFolder(name);
    setFolderLoading(true);
    const res = await fetch(`/api/resources?folder=${encodeURIComponent(name)}`);
    if (res.ok) {
      const data = await res.json();
      setFolderFiles(data.files ?? []);
    }
    setFolderLoading(false);
  }

  function goBack() {
    setCurrentFolder(null);
    setFolderFiles([]);
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
      await loadRoot();
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

  // ── Folder view ──
  if (currentFolder !== null) {
    return (
      <div className="page">
        <div className="container">
          <header className="page-header">
            <button
              onClick={goBack}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--text-muted)",
                fontSize: "12px",
                letterSpacing: "0.08em",
                padding: "0",
                marginBottom: "20px",
                display: "block",
              }}
            >
              ← BACK
            </button>
            <div className="page-eyebrow">FOLDER</div>
            <h1 className="page-title">{currentFolder}</h1>
            {!folderLoading && (
              <p className="page-subtitle">
                {folderFiles.length} document{folderFiles.length !== 1 ? "s" : ""}
              </p>
            )}
          </header>

          {folderLoading ? (
            <p style={{ color: "var(--text-muted)" }}>Loading…</p>
          ) : folderFiles.length === 0 ? (
            <p style={{ color: "var(--text-muted)" }}>
              No PDFs in this folder yet — drop files into{" "}
              <code>private-resources/{currentFolder}/</code>.
            </p>
          ) : (
            <div className="timeline" style={{ marginTop: "0" }}>
              {folderFiles.map((f) => (
                <a
                  key={f.name}
                  href={`/api/resources/${encodeURIComponent(currentFolder)}/${encodeURIComponent(f.name)}`}
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

  // ── Root view ──
  const totalItems = folders.length + rootFiles.length;

  return (
    <div className="page">
      <div className="container">
        <header className="page-header">
          <div className="page-eyebrow">PRIVATE</div>
          <h1 className="page-title">
            Learning <span className="serif">resources</span>.
          </h1>
          <p className="page-subtitle">
            {folders.length > 0
              ? `${folders.length} folder${folders.length !== 1 ? "s" : ""}${
                  rootFiles.length > 0
                    ? ` · ${rootFiles.length} file${rootFiles.length !== 1 ? "s" : ""}`
                    : ""
                }`
              : `${rootFiles.length} document${rootFiles.length !== 1 ? "s" : ""}`}
          </p>
        </header>

        {totalItems === 0 ? (
          <p style={{ color: "var(--text-muted)" }}>
            No resources yet — drop PDFs into <code>private-resources/</code>.
          </p>
        ) : (
          <div className="timeline" style={{ marginTop: "0" }}>
            {folders.map((folder) => (
              <button
                key={folder.name}
                onClick={() => openFolder(folder.name)}
                className="project-row"
                style={{
                  textDecoration: "none",
                  width: "100%",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  font: "inherit",
                  color: "inherit",
                }}
              >
                <div className="project-num" style={{ fontSize: "18px" }}>📁</div>
                <div className="project-info">
                  <div className="project-title">{folder.name}</div>
                  <div className="project-desc">
                    {folder.count} document{folder.count !== 1 ? "s" : ""}
                  </div>
                </div>
                <div className="project-cta">
                  open <span className="arrow">→</span>
                </div>
              </button>
            ))}
            {rootFiles.map((f) => (
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
