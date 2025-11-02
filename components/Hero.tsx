"use client";

import Link from "next/link";

export function Hero() {
  return (
    <header className="gradient-border" style={{ padding: "2.5rem 2rem", marginBottom: "3rem" }}>
      <div className="grid" style={{ gap: "1.5rem" }}>
        <div>
          <div className="badge">Hello, I&apos;m</div>
          <h1 style={{ fontSize: "clamp(2.5rem, 3vw + 1rem, 3.5rem)", fontWeight: 800 }}>
            Anand Ambhore
          </h1>
          <p style={{ fontSize: "1.05rem", maxWidth: "46rem", color: "#cbd5f5" }}>
            B.Tech (AI &amp; ML) | 3rd Year | CGPA 8.7 | SC Category
            <br />
            Your strategic headquarters for deciding the perfect career trajectory after graduation.
          </p>
        </div>
        <div
          className="card"
          style={{
            background: "rgba(15, 23, 42, 0.78)",
            border: "1px solid rgba(148, 163, 184, 0.25)",
            boxShadow: "0 10px 40px rgba(15, 23, 42, 0.5)"
          }}
        >
          <h3 style={{ fontSize: "1.2rem", marginBottom: "0.8rem", color: "#e0f2fe" }}>
            Mission Control
          </h3>
          <p style={{ color: "#cbd5f5", marginBottom: "1rem" }}>
            Every path below is curated specifically for you—focused on maximizing your strengths,
            leveraging SC category advantages ethically, and ensuring financial security.
          </p>
          <div className="stat-grid">
            <div className="stat-card">
              <h4>Primary Goal</h4>
              <p>Elite AI/ML expertise via M.Tech or MS</p>
            </div>
            <div className="stat-card">
              <h4>Secondary Tracks</h4>
              <p>PSU, Government, Product Tech</p>
            </div>
            <div className="stat-card">
              <h4>Action Horizon</h4>
              <p>2024 – 2027</p>
            </div>
          </div>
        </div>
        <div>
          <Link
            className="cta-button"
            href="#paths"
            style={{ width: "fit-content", fontSize: "1rem" }}
          >
            Explore My Career Playbook →
          </Link>
        </div>
      </div>
    </header>
  );
}
