import React, { useState, useEffect } from "react";
import { BookOpen, Edit, Trash2, CheckCircle, Clock } from "lucide-react";

export default function ManageCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Mock data
    const data = [
      { id: 1, title: "React Essentials", instructor: "Alex Johnson", category: "Web Development", status: "Published" },
      { id: 2, title: "Python for Data Science", instructor: "Sarah Kim", category: "Data Science", status: "Pending Review" },
      { id: 3, title: "UI/UX Design Masterclass", instructor: "Priya Patel", category: "Design", status: "Published" },
    ];
    setCourses(data);
  }, []);

  const handleDelete = (id) => setCourses((prev) => prev.filter((c) => c.id !== id));
  const handleApprove = (id) =>
    setCourses((prev) => prev.map((c) => (c.id === id ? { ...c, status: "Published" } : c)));

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Manage Courses</h1>
      <p style={styles.subheading}>View, approve, and manage all uploaded courses.</p>

      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Course</th>
              <th style={styles.th}>Instructor</th>
              <th style={styles.th}>Category</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id} style={styles.tr}>
                <td style={styles.td}>
                  <BookOpen size={16} style={{ marginRight: 8, color: "#2563eb" }} />
                  {course.title}
                </td>
                <td style={styles.td}>{course.instructor}</td>
                <td style={styles.td}>{course.category}</td>
                <td style={styles.td}>
                  <span style={{ ...styles.badge, ...badgeColor(course.status) }}>
                    {course.status}
                  </span>
                </td>
                <td style={styles.td}>
                  {course.status === "Pending Review" ? (
                    <button
                      style={styles.approveBtn}
                      onClick={() => handleApprove(course.id)}
                    >
                      <CheckCircle size={16} /> Approve
                    </button>
                  ) : (
                    <>
                      <button style={styles.editBtn}>
                        <Edit size={16} /> Edit
                      </button>
                      <button
                        style={styles.deleteBtn}
                        onClick={() => handleDelete(course.id)}
                      >
                        <Trash2 size={16} /> Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {courses.length === 0 && (
          <div style={styles.noData}>No courses available.</div>
        )}
      </div>
    </div>
  );
}

const badgeColor = (status) => {
  switch (status) {
    case "Published":
      return { background: "#dcfce7", color: "#16a34a" };
    case "Pending Review":
      return { background: "#fef9c3", color: "#ca8a04" };
    default:
      return { background: "#e2e8f0", color: "#475569" };
  }
};

const styles = {
  container: { display: "flex", flexDirection: "column", gap: 20 },
  heading: { fontSize: "1.5rem", fontWeight: 800, color: "#0f172a" },
  subheading: { color: "#64748b", fontSize: "0.95rem" },
  tableWrapper: {
    background: "#fff",
    borderRadius: 12,
    border: "1px solid #e2e8f0",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    overflowX: "auto",
  },
  table: { width: "100%", borderCollapse: "collapse" },
  th: {
    textAlign: "left",
    padding: "12px 16px",
    background: "#f8fafc",
    color: "#475569",
    fontSize: "0.9rem",
    borderBottom: "1px solid #e2e8f0",
  },
  tr: { borderBottom: "1px solid #f1f5f9" },
  td: {
    padding: "12px 16px",
    color: "#1e293b",
    fontSize: "0.95rem",
    verticalAlign: "middle",
  },
  badge: {
    fontWeight: 600,
    fontSize: "0.8rem",
    borderRadius: "12px",
    padding: "4px 10px",
  },
  approveBtn: {
    background: "#16a34a",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    padding: "6px 10px",
    cursor: "pointer",
  },
  editBtn: {
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    padding: "6px 10px",
    cursor: "pointer",
    marginRight: 6,
  },
  deleteBtn: {
    background: "#dc2626",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    padding: "6px 10px",
    cursor: "pointer",
  },
  noData: { textAlign: "center", color: "#64748b", padding: 20 },
};
