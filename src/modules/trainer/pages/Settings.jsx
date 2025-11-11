import React from "react";

export default function Settings() {
  return (
    <div>
      <h1>Settings</h1>
      <p className="sub">Manage your account and teaching preferences.</p>
      <div className="card">
        <h3>Profile Visibility</h3>
        <label>
          <input type="checkbox" defaultChecked /> Show profile publicly
        </label>
      </div>

      <style>{`
        h1 {font-size:1.4rem;font-weight:800;margin-bottom:4px;}
        .sub {color:#64748b;margin-bottom:16px;}
        .card {background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:16px;}
        label {display:flex;align-items:center;gap:8px;margin-top:10px;font-size:.95rem;}
      `}</style>
    </div>
  );
}
