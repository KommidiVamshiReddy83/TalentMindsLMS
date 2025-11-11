import React from "react";
import { Menu } from "lucide-react";

export default function AdminNavbar({ onMenuClick }) {
  return (
    <header className="admin-navbar">
      {/* === LEFT: Menu & Title === */}
      <div className="left">
        <button className="menu-btn" onClick={onMenuClick} aria-label="Toggle Sidebar">
          <Menu size={20} />
        </button>
        <h2>Admin Console</h2>
      </div>

      {/* === RIGHT: Search + Icons === */}
      <div className="right">
        <input className="search" placeholder="Search users, courses..." />
        <button className="notify" title="Notifications">
          🔔
        </button>
        <img
          className="avatar"
          alt="Admin"
          src="https://i.pravatar.cc/80?img=12"
        />
      </div>

      <style>{`
        .admin-navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #ffffff;
          padding: 12px 20px;
          border-bottom: 1px solid #e2e8f0;
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        .left {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .menu-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          border-radius: 6px;
          transition: background 0.2s;
          color: #1e3a8a;
        }
        .menu-btn:hover {
          background: #eff6ff;
        }
        .admin-navbar h2 {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 800;
          letter-spacing: 0.2px;
          color: #0f172a;
        }
        .right {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .search {
          width: 260px;
          max-width: 42vw;
          border: 1px solid #cbd5e1;
          border-radius: 10px;
          padding: 8px 12px;
          outline: none;
          transition: all 0.2s;
        }
        .search:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
        }
        .notify {
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          padding: 8px 10px;
          border-radius: 10px;
          cursor: pointer;
          transition: 0.2s;
        }
        .notify:hover {
          background: #dbeafe;
        }
        .avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 2px solid #e2e8f0;
        }
        @media (max-width: 640px) {
          .search {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
