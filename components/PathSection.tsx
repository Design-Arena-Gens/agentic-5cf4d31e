"use client";

import { CareerPath } from "../data/careerPaths";

type PathSectionProps = {
  path: CareerPath;
  index: number;
};

export function PathSection({ path, index }: PathSectionProps) {
  return (
    <section id={path.id}>
      <div className="badge">Path {index + 1}</div>
      <h2 className="section-title">{path.title}</h2>
      <p className="note" style={{ marginBottom: "1.5rem" }}>
        {path.tagline}
      </p>

      <div className="grid" style={{ gap: "1.5rem" }}>
        <div className="card">
          <h3>Why it matters</h3>
          <p>{path.description}</p>
          <div className="gradient-divider" />
          <div className="two-column">
            <div>
              <h4 style={{ marginBottom: "0.6rem" }}>Fit Check</h4>
              <div className="pill-grid">
                {path.bestFor.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ marginBottom: "0.6rem" }}>Outcomes</h4>
              <p style={{ color: "#e2e8f0" }}>{path.salary}</p>
              <p className="note">{path.probability}</p>
            </div>
          </div>
        </div>

        <div className="card">
          <h3>Strength as SC Candidate</h3>
          <p>{path.edgeForSC}</p>
        </div>

        <div className="card">
          <h3>Quick Wins (next 30-90 days)</h3>
          <ul>
            {path.quickWins.map((item) => (
              <li key={item} style={{ marginBottom: "0.6rem", color: "#dbeafe" }}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h3>Preparation Blueprint</h3>
          <div className="timeline">
            {path.preparation.map((step) => (
              <div className="timeline-item" key={step.title}>
                <h4 style={{ fontSize: "1.05rem", color: "#e0f2fe" }}>{step.title}</h4>
                <p style={{ color: "#cbd5f5" }}>{step.description}</p>
                <p className="note">Timeline: {step.timeline}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3>Milestone Tracker</h3>
          <div className="timeline">
            {path.timeline.map((item) => (
              <div className="timeline-item" key={item.phase}>
                <h4 style={{ fontSize: "1.05rem", color: "#bfdbfe" }}>{item.phase}</h4>
                <p style={{ color: "#cbd5f5", marginBottom: "0.7rem" }}>{item.focus}</p>
                <p style={{ color: "#e2e8f0", fontWeight: 600 }}>Deliverables</p>
                <ul>
                  {item.deliverables.map((deliverable) => (
                    <li key={deliverable} style={{ color: "#dbeafe" }}>
                      {deliverable}
                    </li>
                  ))}
                </ul>
                <p style={{ color: "#e2e8f0", fontWeight: 600 }}>Metrics to watch</p>
                <ul>
                  {item.metrics.map((metric) => (
                    <li key={metric} style={{ color: "#dbeafe" }}>
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3>High-Value Opportunities</h3>
          <div className="responsive-table">
            <table className="table">
              <thead>
                <tr>
                  <th>Opportunity</th>
                  <th>Intake &amp; Competition</th>
                  <th>Compensation / Outcome</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {path.opportunities.map((opportunity) => (
                  <tr key={opportunity.name}>
                    <td>{opportunity.name}</td>
                    <td>{opportunity.intake}</td>
                    <td>{opportunity.compensation}</td>
                    <td>{opportunity.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <h3>Scholarships &amp; Financial Support</h3>
          <div className="responsive-table">
            <table className="table">
              <thead>
                <tr>
                  <th>Program</th>
                  <th>Benefit</th>
                  <th>Eligibility</th>
                  <th>Apply by</th>
                </tr>
              </thead>
              <tbody>
                {path.scholarships.map((scholarship) => (
                  <tr key={scholarship.name}>
                    <td>{scholarship.name}</td>
                    <td>{scholarship.benefit}</td>
                    <td>{scholarship.eligibility}</td>
                    <td>{scholarship.applyBy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <h3>Daily/Weekly Habits &amp; Resources</h3>
          <ul>
            {path.resources.map((resource) => (
              <li key={resource.title} style={{ marginBottom: "0.9rem" }}>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#93c5fd", fontWeight: 600 }}
                >
                  {resource.title}
                </a>
                <p style={{ color: "#cbd5f5" }}>{resource.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h3>Backup Plans if Things Shift</h3>
          <ul>
            {path.backupPlans.map((plan) => (
              <li key={plan} style={{ color: "#dbeafe", marginBottom: "0.6rem" }}>
                {plan}
              </li>
            ))}
          </ul>
          {path.additionalNotes ? (
            <>
              <div className="gradient-divider" />
              <p className="note">{path.additionalNotes}</p>
            </>
          ) : null}
        </div>
      </div>
      <div className="gradient-divider" />
    </section>
  );
}
