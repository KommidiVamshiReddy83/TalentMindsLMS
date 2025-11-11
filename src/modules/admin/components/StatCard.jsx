import React from "react";

export default function StatCard({ title, value, delta, icon }) {
  const up = delta >= 0;
  return (
    <div className="stat">
      <div className="stat-top">
        <div className="stat-icon">{icon}</div>
        <div className={`delta ${up ? "up" : "down"}`}>
          {up ? "↑" : "↓"} {Math.abs(delta)}%
        </div>
      </div>
      <div className="stat-title">{title}</div>
      <div className="stat-value">{value}</div>

      <style>{`
        .stat { background:#fff; border:1px solid #e2e8f0; border-radius:14px; padding:16px; box-shadow:0 1px 2px rgba(0,0,0,.04); }
        .stat-top { display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; }
        .stat-icon { font-size:22px; }
        .delta { font-size:.8rem; padding:4px 8px; border-radius:999px; }
        .delta.up { background:#ecfeff; color:#0369a1; border:1px solid #a5f3fc; }
        .delta.down { background:#fef2f2; color:#991b1b; border:1px solid #fecaca; }
        .stat-title { color:#334155; font-size:.9rem; }
        .stat-value { font-size:1.6rem; font-weight:800; letter-spacing:.3px; }
      `}</style>
    </div>
  );
}
