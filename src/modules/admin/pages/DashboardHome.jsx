import React from "react";
import StatCard from "../components/StatCard";

export default function DashboardHome() {
  const bars = [
    { label: "Mon", value: 32 },
    { label: "Tue", value: 48 },
    { label: "Wed", value: 44 },
    { label: "Thu", value: 61 },
    { label: "Fri", value: 52 },
    { label: "Sat", value: 39 },
    { label: "Sun", value: 27 },
  ];

  return (
    <div className="dash">
      <h1>Overview</h1>
      <p className="sub">Key metrics for your LMS at a glance.</p>

      <div className="stats">
        <StatCard title="Total Learners" value="12,048" delta={4.2} icon="🎓" />
        <StatCard title="Active Mentors" value="82" delta={1.1} icon="🧑‍🏫" />
        <StatCard title="Courses Published" value="214" delta={2.9} icon="📘" />
        <StatCard title="Pending Requests" value="7" delta={-12.0} icon="⏳" />
      </div>

      <div className="cards">
        <section className="panel">
          <div className="panel-head">
            <h3>Weekly Enrollments</h3>
            <span className="hint">Last 7 days</span>
          </div>
          <div className="bar-chart">
            {bars.map((b) => (
              <div key={b.label} className="bar-wrap" title={`${b.label}: ${b.value}`}>
                <div className="bar" style={{ height: `${b.value * 2.2}px` }} />
                <span className="lbl">{b.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="panel">
          <div className="panel-head">
            <h3>Top Courses</h3>
            <span className="hint">Most enrolled</span>
          </div>
          <ul className="list">
            {[
              { name: "React Fundamentals", enroll: 1280 },
              { name: "Data Structures in JS", enroll: 1094 },
              { name: "SQL for Analysts", enroll: 968 },
              { name: "Python for ML", enroll: 902 },
            ].map((c) => (
              <li key={c.name} className="li">
                <span>{c.name}</span>
                <span className="pill">{c.enroll}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <style>{`
        .dash h1 { margin:0 0 2px; font-size:1.45rem; font-weight:800; }
        .sub { color:#64748b; margin:0 0 16px; }
        .stats { display:grid; grid-template-columns:repeat(4,1fr); gap:14px; margin:12px 0 18px; }
        .cards { display:grid; grid-template-columns:2fr 1fr; gap:14px; }
        .panel { background:#fff; border:1px solid #e2e8f0; border-radius:14px; padding:14px; }
        .panel-head { display:flex; align-items:center; justify-content:space-between; margin-bottom:8px; }
        .hint { color:#64748b; font-size:.85rem; }
        .bar-chart { display:flex; align-items:flex-end; gap:12px; height:200px; padding:10px 4px 0; }
        .bar-wrap { display:flex; flex-direction:column; align-items:center; gap:6px; }
        .bar { width:22px; background:linear-gradient(180deg, #60a5fa, #2563eb); border-radius:6px 6px 0 0; }
        .lbl { font-size:.8rem; color:#475569; }
        .list { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:10px; }
        .li { display:flex; justify-content:space-between; align-items:center; padding:10px; border:1px solid #e2e8f0; border-radius:10px; }
        .pill { background:#eef2ff; color:#3730a3; padding:4px 10px; border-radius:999px; border:1px solid #c7d2fe; font-weight:700; }
        @media (max-width: 1200px) { .stats { grid-template-columns:repeat(2,1fr); } .cards { grid-template-columns:1fr; } }
      `}</style>
    </div>
  );
}
