import React from "react";

export default function CourseManagement() {
  return (
    <div className="page">
      <h1>Course Management</h1>
      <p>View, edit, and publish your courses.</p>

      <div className="msg">
        This section will include full CRUD operations for trainer course management.
      </div>

      <style>{`
        .page h1 {font-size:1.4rem;font-weight:800;margin-bottom:6px;}
        .msg {background:#f1f5f9;padding:20px;border-radius:10px;border:1px dashed #cbd5e1;margin-top:10px;}
      `}</style>
    </div>
  );
}
