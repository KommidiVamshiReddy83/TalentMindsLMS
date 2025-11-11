import React, { useState, useEffect } from "react";
import { Search, Filter, UserCheck, UserX } from "lucide-react";

export default function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    // Simulated data (in real app, fetch from API)
    const mockUsers = [
      { id: 1, name: "Alex Johnson", email: "alex.j@example.com", role: "Learner", status: "Active" },
      { id: 2, name: "Sarah Kim", email: "sarah.k@example.com", role: "Mentor", status: "Pending" },
      { id: 3, name: "Mark Chen", email: "mark.chen@example.com", role: "Learner", status: "Active" },
      { id: 4, name: "Priya Patel", email: "priya.p@example.com", role: "Admin", status: "Suspended" },
      { id: 5, name: "Daniel Lee", email: "daniel.l@example.com", role: "Mentor", status: "Active" },
    ];
    setUsers(mockUsers);
  }, []);

  const filteredUsers = users.filter((u) => {
    const matchSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || u.status.toLowerCase() === filter.toLowerCase();
    return matchSearch && matchFilter;
  });

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Manage Users</h1>
      <p style={styles.subheading}>View, filter, and manage all platform users</p>

      {/* Controls */}
      <div style={styles.controls}>
        <div style={styles.searchBox}>
          <Search size={18} color="#64748b" />
          <input
            type="text"
            placeholder="Search users..."
            style={styles.input}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div style={styles.filterBox}>
          <Filter size={18} color="#475569" />
          <select
            style={styles.select}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="Active">Active</option>
            <option value="Pending">Pending</option>
            <option value="Suspended">Suspended</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Role</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} style={styles.tr}>
                <td style={styles.td}>{user.name}</td>
                <td style={styles.td}>{user.email}</td>
                <td style={styles.td}>{user.role}</td>
                <td style={styles.td}>
                  <span style={{ ...styles.badge, ...badgeColor(user.status) }}>
                    {user.status}
                  </span>
                </td>
                <td style={styles.td}>
                  <button style={styles.actionBtn} title="Approve">
                    <UserCheck size={16} />
                  </button>
                  <button style={{ ...styles.actionBtn, color: "#dc2626" }} title="Suspend">
                    <UserX size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredUsers.length === 0 && (
          <div style={styles.noData}>No users match your criteria.</div>
        )}
      </div>
    </div>
  );
}

const badgeColor = (status) => {
  switch (status) {
    case "Active":
      return { background: "#dcfce7", color: "#16a34a" };
    case "Pending":
      return { background: "#fef9c3", color: "#ca8a04" };
    case "Suspended":
      return { background: "#fee2e2", color: "#dc2626" };
    default:
      return { background: "#e2e8f0", color: "#475569" };
  }
};

const styles = {
  container: { display: "flex", flexDirection: "column", gap: 20 },
  heading: { fontSize: "1.5rem", fontWeight: 800, color: "#0f172a" },
  subheading: { color: "#64748b", fontSize: "0.95rem", marginBottom: 10 },
  controls: { display: "flex", gap: 10, alignItems: "center", marginBottom: 20 },
  searchBox: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: "#f1f5f9",
    borderRadius: 8,
    padding: "8px 12px",
    flex: 1,
  },
  input: {
    border: "none",
    background: "transparent",
    outline: "none",
    flex: 1,
    fontSize: "0.95rem",
  },
  filterBox: {
    display: "flex",
    alignItems: "center",
    background: "#fff",
    border: "1px solid #e2e8f0",
    borderRadius: 8,
    padding: "6px 10px",
    gap: 6,
  },
  select: {
    border: "none",
    outline: "none",
    background: "transparent",
    fontSize: "0.9rem",
    color: "#334155",
  },
  tableWrapper: {
    background: "#fff",
    borderRadius: 12,
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    border: "1px solid #e2e8f0",
    overflowX: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
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
    display: "inline-block",
    fontSize: "0.8rem",
    fontWeight: 600,
    padding: "4px 10px",
    borderRadius: "12px",
  },
  actionBtn: {
    background: "none",
    border: "none",
    color: "#1e40af",
    cursor: "pointer",
    marginRight: "8px",
  },
  noData: {
    textAlign: "center",
    color: "#64748b",
    padding: "20px",
  },
};
