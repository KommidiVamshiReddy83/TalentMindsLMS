import React, { useState, useEffect } from "react";
import { UserCheck, UserX, Clock } from "lucide-react";

export default function MentorRequests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Mock data (you can later connect to API)
    const data = [
      { id: 1, name: "Sarah Kim", email: "sarah.k@example.com", expertise: "Web Development", status: "Pending" },
      { id: 2, name: "John Smith", email: "john.s@example.com", expertise: "Data Science", status: "Pending" },
      { id: 3, name: "Priya Patel", email: "priya.p@example.com", expertise: "UI/UX Design", status: "Approved" },
    ];
    setRequests(data);
  }, []);

  const handleApprove = (id) =>
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: "Approved" } : r))
    );

  const handleReject = (id) =>
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: "Rejected" } : r))
    );

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Mentor Requests</h1>
      <p style={styles.subheading}>Review and approve mentor onboarding requests.</p>

      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Expertise</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req.id} style={styles.tr}>
                <td style={styles.td}>{req.name}</td>
                <td style={styles.td}>{req.email}</td>
                <td style={styles.td}>{req.expertise}</td>
                <td style={styles.td}>
                  <span style={{ ...styles.badge, ...badgeColor(req.status) }}>
                    {req.status}
                  </span>
                </td>
                <td style={styles.td}>
                  {req.status === "Pending" ? (
                    <>
                      <button style={styles.approveBtn} onClick={() => handleApprove(req.id)}>
                        <UserCheck size={16} /> Approve
                      </button>
                      <button style={styles.rejectBtn} onClick={() => handleReject(req.id)}>
                        <UserX size={16} /> Reject
                      </button>
                    </>
                  ) : (
                    <button style={styles.viewBtn}>
                      <Clock size={16} /> View
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {requests.length === 0 && (
          <div style={styles.noData}>No mentor requests available.</div>
        )}
      </div>
    </div>
  );
}

const badgeColor = (status) => {
  switch (status) {
    case "Approved":
      return { background: "#dcfce7", color: "#16a34a" };
    case "Pending":
      return { background: "#fef9c3", color: "#ca8a04" };
    case "Rejected":
      return { background: "#fee2e2", color: "#dc2626" };
    default:
      return {};
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
  td: { padding: "12px 16px", color: "#1e293b", fontSize: "0.95rem" },
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
    marginRight: 8,
  },
  rejectBtn: {
    background: "#dc2626",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    padding: "6px 10px",
    cursor: "pointer",
  },
  viewBtn: {
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    padding: "6px 10px",
    cursor: "pointer",
  },
  noData: { textAlign: "center", color: "#64748b", padding: 20 },
};
