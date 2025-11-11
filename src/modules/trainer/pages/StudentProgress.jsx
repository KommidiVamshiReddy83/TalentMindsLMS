import React from "react";

export default function StudentProgress() {
  const data = [
    { name: "Alice Johnson", course: "React Fundamentals", progress: 88 },
    { name: "David Lee", course: "Python for ML", progress: 76 },
    { name: "Sara White", course: "SQL Basics", progress: 91 },
  ];

  return (
    <div>
      <h1>Student Progress</h1>
      <p className="sub">Monitor learner performance across your courses.</p>

      <table className="tbl">
        <thead>
          <tr><th>Student</th><th>Course</th><th>Progress</th></tr>
        </thead>
        <tbody>
          {data.map((s, i) => (
            <tr key={i}>
              <td>{s.name}</td>
              <td>{s.course}</td>
              <td><span className="bar" style={{width:`${s.progress}%`}}>{s.progress}%</span></td>
            </tr>
          ))}
        </tbody>
      </table>

      <style>{`
        h1 {font-size:1.4rem;font-weight:800;margin-bottom:4px;}
        .sub {color:#64748b;margin-bottom:14px;}
        .tbl {width:100%;border-collapse:collapse;background:#fff;border:1px solid #e2e8f0;border-radius:10px;}
        .tbl th, .tbl td {padding:10px 12px;border-bottom:1px solid #e2e8f0;text-align:left;}
        .bar {display:inline-block;height:8px;background:#2563eb;color:#fff;border-radius:999px;font-size:.8rem;text-align:right;padding-right:6px;}
      `}</style>
    </div>
  );
}
