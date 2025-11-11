import React, { useState } from "react";
import { Bell, CheckCircle, AlertTriangle, Info, XCircle } from "lucide-react";

export default function AdminNotifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "info",
      title: "System Maintenance Scheduled",
      message: "The LMS will undergo maintenance on Nov 15, 2025, from 1:00–3:00 AM.",
      date: "Nov 10, 2025",
      read: false,
    },
    {
      id: 2,
      type: "success",
      title: "New Course Approved",
      message: "‘React Essentials’ course has been successfully approved.",
      date: "Nov 9, 2025",
      read: false,
    },
    {
      id: 3,
      type: "warning",
      title: "Pending Mentor Request",
      message: "2 new mentors are waiting for admin approval.",
      date: "Nov 8, 2025",
      read: true,
    },
    {
      id: 4,
      type: "error",
      title: "Payment Gateway Issue",
      message: "Some transactions failed due to gateway timeout.",
      date: "Nov 6, 2025",
      read: true,
    },
  ]);

  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const handleMarkSingle = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const iconMap = {
    info: <Info size={18} color="#2563eb" />,
    success: <CheckCircle size={18} color="#16a34a" />,
    warning: <AlertTriangle size={18} color="#f59e0b" />,
    error: <XCircle size={18} color="#dc2626" />,
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Notifications Center</h1>
      <p style={styles.subheading}>View system alerts, approvals, and recent activities.</p>

      <div style={styles.actions}>
        <button style={styles.markAllBtn} onClick={handleMarkAllRead}>
          Mark All as Read
        </button>
      </div>

      <div style={styles.list}>
        {notifications.map((n) => (
          <div
            key={n.id}
            style={{
              ...styles.notification,
              background: n.read ? "#f9fafb" : "#e0f2fe",
              borderLeft: `4px solid ${borderColor(n.type)}`,
            }}
            onClick={() => handleMarkSingle(n.id)}
          >
            <div style={styles.icon}>{iconMap[n.type]}</div>
            <div style={styles.content}>
              <div style={styles.titleRow}>
                <h3 style={styles.title}>{n.title}</h3>
                <span style={styles.date}>{n.date}</span>
              </div>
              <p style={styles.message}>{n.message}</p>
            </div>
          </div>
        ))}

        {notifications.length === 0 && (
          <div style={styles.empty}>
            <Bell size={22} color="#94a3b8" />
            <p>No notifications to display.</p>
          </div>
        )}
      </div>
    </div>
  );
}

/* === Helper === */
const borderColor = (type) => {
  switch (type) {
    case "success":
      return "#16a34a";
    case "warning":
      return "#f59e0b";
    case "error":
      return "#dc2626";
    default:
      return "#2563eb";
  }
};

/* === Internal Styles === */
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  heading: {
    fontSize: "1.5rem",
    fontWeight: 800,
    color: "#0f172a",
  },
  subheading: {
    color: "#64748b",
    fontSize: "0.95rem",
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: 8,
  },
  markAllBtn: {
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    padding: "8px 14px",
    fontSize: "0.9rem",
    fontWeight: 600,
    cursor: "pointer",
  },
  list: {
    background: "#fff",
    borderRadius: 12,
    border: "1px solid #e2e8f0",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  notification: {
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
    padding: "16px 18px",
    cursor: "pointer",
    transition: "background 0.2s ease",
    borderBottom: "1px solid #f1f5f9",
  },
  icon: {
    flexShrink: 0,
    marginTop: 4,
  },
  content: {
    flex: 1,
  },
  titleRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  title: {
    fontSize: "1rem",
    fontWeight: 700,
    color: "#0f172a",
  },
  date: {
    fontSize: "0.8rem",
    color: "#94a3b8",
  },
  message: {
    fontSize: "0.9rem",
    color: "#475569",
    margin: 0,
  },
  empty: {
    textAlign: "center",
    padding: "40px 20px",
    color: "#64748b",
  },
};
