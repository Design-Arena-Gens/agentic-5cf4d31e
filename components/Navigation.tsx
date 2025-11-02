"use client";

import Link from "next/link";
import { careerPaths } from "../data/careerPaths";

export function Navigation() {
  return (
    <nav
      className="gradient-border"
      style={{
        padding: "1.25rem 1.5rem",
        marginBottom: "3rem",
        position: "sticky",
        top: "1.5rem",
        zIndex: 10,
        backdropFilter: "blur(12px)"
      }}
    >
      <h3 style={{ marginBottom: "0.8rem", fontSize: "1.05rem", color: "#bfdbfe" }}>
        Navigate My Options
      </h3>
      <div className="pill-grid">
        {careerPaths.map((path) => (
          <Link className="tag" key={path.id} href={`#${path.id}`}>
            {path.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
