import React from "react";

export default function MyProfile() {
  return (
    <div>
      <h1>My Profile</h1>
      <p className="sub">View and edit your trainer information.</p>
      <div className="profile">
        <img src="https://i.pravatar.cc/120?img=9" alt="Profile" />
        <div>
          <h3>John Doe</h3>
          <p>Email: john.doe@example.com</p>
          <p>Expertise: Web Development</p>
        </div>
      </div>

      <style>{`
        h1 {font-size:1.4rem;font-weight:800;margin-bottom:4px;}
        .sub {color:#64748b;margin-bottom:14px;}
        .profile {display:flex;gap:16px;align-items:center;background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:16px;}
        img {width:80px;height:80px;border-radius:50%;border:2px solid #cbd5e1;}
      `}</style>
    </div>
  );
}
