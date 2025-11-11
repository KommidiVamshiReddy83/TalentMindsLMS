import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import AdminSidebar from "../modules/admin/components/AdminSidebar.jsx";
import AdminNavbar from "../modules/admin/components/AdminNavbar.jsx";

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const [admin, setAdmin] = useState(() => {
    try {
      const data = localStorage.getItem("admin");
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  });
  const [loading, setLoading] = useState(true);

  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 992px)").matches
      : false
  );
  const [sidebarPinned, setSidebarPinned] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (admin) setLoading(false);
    else navigate("/login", { replace: true });
  }, [admin, navigate]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 992px)");
    const handleChange = (e) => {
      setIsMobile(e.matches);
      if (e.matches) {
        setSidebarPinned(false);
        setSidebarOpen(false);
      }
    };
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (isMobile) document.body.style.overflow = sidebarOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isMobile, sidebarOpen]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isMobile) setSidebarOpen(false);
  }, [location.pathname, isMobile]);

  const handleLogout = () => {
    localStorage.removeItem("admin");
    setAdmin(null);
    setLoading(true);
    navigate("/login", { replace: true });
  };

  const deriveName = () => {
    if (!admin) return "Admin";
    if (admin.firstName) return admin.firstName;
    if (admin.name) return admin.name;
    if (admin.email) {
      const namePart = admin.email.split("@")[0];
      const name = namePart.split(/[._-]/)[0];
      return name.charAt(0).toUpperCase() + name.slice(1);
    }
    return "Admin";
  };

  const adminName = deriveName();

  if (loading || !admin) {
    return <div style={styles.loading}>Loading Admin Dashboard…</div>;
  }

  const desktopSidebarWidth = 260;
  const contentMarginLeft = !isMobile && sidebarPinned ? desktopSidebarWidth : 0;

  return (
    <div
      style={{
        ...styles.wrapper,
        ["--desktop-sidebar-width"]: `${desktopSidebarWidth}px`,
      }}
    >
      {/* ===== SIDEBAR ===== */}
      <aside
        style={{
          ...styles.sidebarShell,
          transform: isMobile
            ? sidebarOpen
              ? "translateX(0)"
              : "translateX(-100%)"
            : sidebarPinned
            ? "translateX(0)"
            : "translateX(calc(-1 * var(--desktop-sidebar-width)))",
        }}
      >
        <AdminSidebar
          open={isMobile ? sidebarOpen : sidebarPinned}
          onClose={() => setSidebarOpen(false)}
          onLogout={handleLogout}
        />
      </aside>

      {/* Backdrop (mobile only) */}
      {isMobile && sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={styles.backdrop}
          aria-hidden="true"
        />
      )}

      {/* ===== TOP NAVBAR ===== */}
      <AdminNavbar
        onMenuClick={() =>
          isMobile
            ? setSidebarOpen((v) => !v)
            : setSidebarPinned((v) => !v)
        }
        adminName={adminName}
      />

      {/* ===== MAIN CONTENT ===== */}
      <div
        style={{
          ...styles.page,
          marginLeft: contentMarginLeft,
        }}
      >
        <main style={styles.main}>
          <Outlet />
        </main>

        <footer style={styles.footer}>
          © {new Date().getFullYear()} TalentMinds · Admin Control Center
        </footer>
      </div>
    </div>
  );
}

/* ========= INTERNAL STYLES ========= */
const styles = {
  wrapper: {
    minHeight: "100vh",
    background: "#f8fafc",
  },
  loading: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 800,
    color: "#1e40af",
    background: "#f1f5f9",
  },
  sidebarShell: {
    position: "fixed",
    left: 0,
    top: 0,
    bottom: 0,
    width: "var(--desktop-sidebar-width)",
    backgroundColor: "#0f172a",
    zIndex: 2001,
    transition: "transform .3s ease",
  },
  backdrop: {
    position: "fixed",
    inset: 0,
    background: "rgba(2,6,23,0.55)",
    zIndex: 2000,
    backdropFilter: "blur(2px)",
  },
  page: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    transition: "margin-left .3s ease",
  },
  main: {
    flex: 1,
    padding: "20px 24px",
    maxWidth: 1300,
    width: "100%",
    margin: "0 auto",
  },
  footer: {
    padding: "12px 20px",
    textAlign: "center",
    fontSize: ".85rem",
    color: "#64748b",
    borderTop: "1px solid #e2e8f0",
    background: "#f8fafc",
  },
};
