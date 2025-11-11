import React from "react";
import StatCard from "../components/StatCard";

export default function DashboardHome() {
  const bars = [
    { label: "Mon", value: 15 },
    { label: "Tue", value: 22 },
    { label: "Wed", value: 19 },
    { label: "Thu", value: 28 },
    { label: "Fri", value: 31 },
    { label: "Sat", value: 25 },
    { label: "Sun", value: 18 },
  ];

  return (
    <div className="dash">
      <h1>Trainer Overview</h1>
      <p className="sub">Insights into your teaching performance.</p>

      <div className="stats">
        <StatCard title="Total Learners" value="860" delta={5.2} icon="🎓" />
        <StatCard title="Active Courses" value="12" delta={3.4} icon="📘" />
        <StatCard title="Average Rating" value="4.8★" delta={1.1} icon="⭐" />
        <StatCard title="Pending Reviews" value="6" delta={-2.3} icon="📝" />
      </div>

      <div className="cards">
        <section className="panel">
          <div className="panel-head">
            <h3>Weekly Engagement</h3>
            <span className="hint">Last 7 days</span>
          </div>
          <div className="bar-chart">
            {bars.map((b) => (
              <div key={b.label} className="bar-wrap" title={`${b.label}: ${b.value}`}>
                <div className="bar" style={{ height: `${b.value * 6}px` }} />
                <span className="lbl">{b.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="panel">
          <div className="panel-head">
            <h3>Top Performing Courses</h3>
            <span className="hint">Based on enrollments</span>
          </div>
          <ul className="list">
            {[
              { name: "React Fundamentals", enroll: 420 },
              { name: "Python for ML", enroll: 350 },
              { name: "Advanced JS", enroll: 280 },
              { name: "SQL for Analysts", enroll: 220 },
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
