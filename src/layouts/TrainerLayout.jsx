import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import TrainerSidebar from "../modules/trainer/components/TrainerSidebar.jsx";
import TrainerNavbar from "../modules/trainer/components/TrainerNavbar.jsx";

export default function TrainerLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  // === Auth State ===
  const [trainer, setTrainer] = useState(() => {
    try {
      const data = localStorage.getItem("trainer");
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  });

  const [loading, setLoading] = useState(true);

  // === UI State ===
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 992px)").matches
      : false
  );
  const [sidebarPinned, setSidebarPinned] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // === Auth Redirect ===
  useEffect(() => {
    if (trainer) setLoading(false);
    else navigate("/login", { replace: true });
  }, [trainer, navigate]);

  // === Responsive Watcher ===
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

  // === Scroll Lock for Mobile Sidebar ===
  useEffect(() => {
    if (isMobile) document.body.style.overflow = sidebarOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isMobile, sidebarOpen]);

  // === Scroll to Top on Route Change ===
  useEffect(() => {
    window.scrollTo(0, 0);
    if (isMobile) setSidebarOpen(false);
  }, [location.pathname, isMobile]);

  // === Logout Handler ===
  const handleLogout = () => {
    localStorage.removeItem("trainer");
    setTrainer(null);
    setLoading(true);
    navigate("/login", { replace: true });
  };

  // === Name Formatter ===
  const deriveName = () => {
    if (!trainer) return "Trainer";
    if (trainer.firstName) return trainer.firstName;
    if (trainer.name) return trainer.name;
    if (trainer.email) {
      const part = trainer.email.split("@")[0];
      return part.charAt(0).toUpperCase() + part.slice(1);
    }
    return "Trainer";
  };

  const trainerName = deriveName();

  // === Loading State ===
  if (loading || !trainer) {
    return <div style={styles.loading}>Loading Trainer Dashboard…</div>;
  }

  // === Sidebar Layout ===
  const desktopSidebarWidth = 260;
  const contentMarginLeft = !isMobile && sidebarPinned ? desktopSidebarWidth : 0;

  return (
    <div
      style={{
        ...styles.wrapper,
        ["--desktop-sidebar-width"]: `${desktopSidebarWidth}px`,
      }}
    >
      {/* === HEADER (Main Navbar) === */}
      <TrainerNavbar
        onMenuClick={() =>
          isMobile
            ? setSidebarOpen((v) => !v)
            : setSidebarPinned((v) => !v)
        }
      />

      {/* === SIDEBAR === */}
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
        <TrainerSidebar
          open={isMobile ? sidebarOpen : sidebarPinned}
          onClose={() => setSidebarOpen(false)}
          onLogout={handleLogout}
        />
      </aside>

      {/* === BACKDROP (Mobile Only) === */}
      {isMobile && sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={styles.backdrop}
          aria-hidden="true"
        />
      )}

      {/* === MAIN CONTENT === */}
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
          © {new Date().getFullYear()} TalentMinds · Trainer Console
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
    display: "flex",
    flexDirection: "column",
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
    paddingTop: "80px", // Space for TrainerNavbar
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
