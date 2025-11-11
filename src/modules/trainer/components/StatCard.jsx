import React from "react";

export default function StatCard({ title, value, delta, icon }) {
  const isPositive = delta >= 0;
  return (
    <div className="stat-card">
      <div className="top">
        <span className="icon">{icon}</span>
        <h4>{title}</h4>
      </div>
      <div className="bottom">
        <h2>{value}</h2>
        <span className={`delta ${isPositive ? "up" : "down"}`}>
          {isPositive ? "▲" : "▼"} {Math.abs(delta)}%
        </span>
      </div>

      <style>{`
        .stat-card {
          background:#fff;
          border:1px solid #e2e8f0;
          border-radius:14px;
          padding:16px 18px;
          box-shadow:0 1px 3px rgba(0,0,0,0.05);
          display:flex;
          flex-direction:column;
          gap:10px;
        }
        .top { display:flex; align-items:center; gap:10px; }
        .icon { font-size:1.5rem; }
        .top h4 { margin:0; font-size:.95rem; font-weight:600; color:#475569; }
        .bottom { display:flex; justify-content:space-between; align-items:center; }
        .bottom h2 { margin:0; font-size:1.5rem; font-weight:800; color:#0f172a; }
        .delta { font-weight:700; font-size:.85rem; }
        .up { color:#16a34a; }
        .down { color:#dc2626; }
      `}</style>
    </div>
  );
}
