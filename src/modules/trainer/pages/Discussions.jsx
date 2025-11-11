import React from "react";

export default function Discussions() {
  return (
    <div>
      <h1>Discussions</h1>
      <p className="sub">Engage with your learners in topic discussions.</p>
      <div className="msg">Forum integration coming soon.</div>

      <style>{`
        h1 {font-size:1.4rem;font-weight:800;margin-bottom:6px;}
        .sub {color:#64748b;margin-bottom:12px;}
        .msg {background:#f8fafc;border:1px dashed #cbd5e1;border-radius:10px;padding:18px;}
      `}</style>
    </div>
  );
}
