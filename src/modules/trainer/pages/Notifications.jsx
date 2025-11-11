import React from "react";

export default function Notifications() {
  const notes = [
    { title: "Assignment Deadline Extended", desc: "React Project submission deadline moved to Nov 12.", date: "Nov 10, 2025" },
    { title: "New Enrollment", desc: "John Doe enrolled in 'Advanced JS Concepts'.", date: "Nov 9, 2025" },
    { title: "Payment Received", desc: "You received $120 for October earnings.", date: "Nov 8, 2025" },
  ];

  return (
    <div>
      <h1>Notifications</h1>
      <p className="sub">Recent alerts and updates related to your courses.</p>

      <div className="list">
        {notes.map((n, i) => (
          <div key={i} className="item">
            <div className="txt">
              <h4>{n.title}</h4>
              <p>{n.desc}</p>
            </div>
            <span className="date">{n.date}</span>
          </div>
        ))}
      </div>

      <style>{`
        h1 {font-size:1.4rem;font-weight:800;margin-bottom:4px;}
        .sub {color:#64748b;margin-bottom:16px;}
        .list {display:flex;flex-direction:column;gap:12px;}
        .item {background:#fff;border:1px solid #e2e8f0;border-radius:10px;padding:14px 18px;display:flex;justify-content:space-between;}
        .txt h4 {margin:0 0 2px;font-weight:700;}
        .txt p {margin:0;color:#475569;font-size:.9rem;}
        .date {color:#94a3b8;font-size:.85rem;}
      `}</style>
    </div>
  );
}
