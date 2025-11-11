import React, { useState } from "react";
import { User, Bell, Lock, Globe, Save } from "lucide-react";

export default function AdminSettings() {
  const [settings, setSettings] = useState({
    name: "Alex Johnson",
    email: "alex.admin@talentminds.com",
    theme: "light",
    notifications: true,
    language: "en",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert("✅ Settings saved successfully!");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Admin Settings</h1>
      <p style={styles.subheading}>Manage your account and platform preferences.</p>

      <form style={styles.form} onSubmit={handleSave}>
        {/* Profile Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <User size={18} style={styles.icon} /> Profile Information
          </h2>

          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Full Name</label>
              <input
                type="text"
                name="name"
                value={settings.name}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Email Address</label>
              <input
                type="email"
                name="email"
                value={settings.email}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
          </div>
        </div>

        {/* Preferences Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <Bell size={18} style={styles.icon} /> Platform Preferences
          </h2>

          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Theme</label>
              <select
                name="theme"
                value={settings.theme}
                onChange={handleChange}
                style={styles.select}
              >
                <option value="light">Light Mode</option>
                <option value="dark">Dark Mode</option>
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Language</label>
              <select
                name="language"
                value={settings.language}
                onChange={handleChange}
                style={styles.select}
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="de">German</option>
                <option value="fr">French</option>
              </select>
            </div>
          </div>

          <label style={styles.checkbox}>
            <input
              type="checkbox"
              name="notifications"
              checked={settings.notifications}
              onChange={handleChange}
              style={styles.checkboxInput}
            />
            Enable Email Notifications
          </label>
        </div>

        {/* Security Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <Lock size={18} style={styles.icon} /> Security Settings
          </h2>

          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <label style={styles.label}>New Password</label>
              <input
                type="password"
                name="password"
                value={settings.password}
                onChange={handleChange}
                style={styles.input}
                placeholder="••••••••"
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={settings.confirmPassword}
                onChange={handleChange}
                style={styles.input}
                placeholder="••••••••"
              />
            </div>
          </div>
        </div>

        <div style={styles.buttonRow}>
          <button type="submit" style={styles.saveBtn}>
            <Save size={18} /> Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

/* === Internal CSS === */
const styles = {
  container: { display: "flex", flexDirection: "column", gap: 20 },
  heading: { fontSize: "1.5rem", fontWeight: 800, color: "#0f172a" },
  subheading: { color: "#64748b", fontSize: "0.95rem", marginBottom: 10 },

  form: {
    background: "#fff",
    borderRadius: 12,
    border: "1px solid #e2e8f0",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },

  section: { borderBottom: "1px solid #f1f5f9", paddingBottom: 16 },
  sectionTitle: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: "1.05rem",
    fontWeight: 700,
    color: "#0f172a",
    marginBottom: 14,
  },
  icon: { color: "#2563eb" },

  formRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 16,
  },
  formGroup: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  label: {
    color: "#475569",
    fontWeight: 600,
    fontSize: "0.9rem",
  },
  input: {
    border: "1px solid #e2e8f0",
    borderRadius: 8,
    padding: "10px 12px",
    fontSize: "0.95rem",
    outline: "none",
  },
  inputFocus: {
    borderColor: "#2563eb",
  },
  select: {
    border: "1px solid #e2e8f0",
    borderRadius: 8,
    padding: "10px 12px",
    fontSize: "0.95rem",
    background: "#fff",
  },
  checkbox: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
    fontSize: "0.9rem",
    color: "#334155",
  },
  checkboxInput: { width: 16, height: 16 },

  buttonRow: { display: "flex", justifyContent: "flex-end" },
  saveBtn: {
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    padding: "10px 18px",
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    gap: 8,
    cursor: "pointer",
    transition: "background 0.2s",
  },
};
