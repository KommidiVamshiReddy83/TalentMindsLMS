import React from "react";

export default function MyCourses() {
  const courses = [
    { title: "React Fundamentals", students: 120, status: "Active" },
    { title: "Advanced JS Concepts", students: 95, status: "Active" },
    { title: "SQL for Beginners", students: 80, status: "Draft" },
    { title: "Python for ML", students: 140, status: "Active" },
  ];

  return (
    <div className="courses">
      <h1>My Courses</h1>
      <p className="sub">Manage your published and draft courses.</p>

      <div className="grid">
        {courses.map((c, i) => (
          <div key={i} className="card">
            <h3>{c.title}</h3>
            <p>{c.students} learners enrolled</p>
            <span className={`status ${c.status.toLowerCase()}`}>{c.status}</span>
          </div>
        ))}
      </div>

      <style>{`
        .courses h1 {font-size:1.4rem;font-weight:800;margin-bottom:4px;}
        .sub {color:#64748b;margin-bottom:18px;}
        .grid {display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:14px;}
        .card {background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:16px;}
        .status {display:inline-block;margin-top:8px;padding:4px 10px;border-radius:999px;font-size:.8rem;font-weight:600;}
        .status.active {background:#dcfce7;color:#15803d;}
        .status.draft {background:#fef3c7;color:#92400e;}
      `}</style>
    </div>
  );
}
