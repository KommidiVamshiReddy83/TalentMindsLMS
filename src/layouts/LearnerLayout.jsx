import React, { useEffect, useState } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import LearnerSidebar from "../modules/learner/components/LearnerSidebar.jsx";
import QuickNav from "../modules/learner/components/QuickNav.jsx"; 

export default function LearnerLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  // ===== Learner Auth State =====
  const [learner, setLearner] = useState(() => {
    try {
      const data = localStorage.getItem("learner");
      return data ? JSON.parse(data) : null;
    } catch (e) {
      console.error("Failed to parse learner data from localStorage", e);
      return null;
    }
  });
  const [loading, setLoading] = useState(true);

  // ===== UI state =====
  const [quickOpen, setQuickOpen] = useState(false); // Controls the Avatar dropdown
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 992px)").matches
      : false
  );
  const [sidebarPinned, setSidebarPinned] = useState(false); // Desktop control
  const [sidebarOpen, setSidebarOpen] = useState(false); // Mobile drawer control

  // --- keep auth & redirect ---
  useEffect(() => {
    if (learner) setLoading(false);
    else navigate("/login", { replace: true });
  }, [learner, navigate]);

  // --- Live Breakpoint Watcher ---
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 992px)");

    const onChange = (e) => {
      setIsMobile(e.matches);
      if (e.matches) {
        setSidebarPinned(false);
        setSidebarOpen(false);
      } else {
        setSidebarOpen(false);
      }
    };

    mq.addEventListener("change", onChange);
    onChange(mq);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // --- Lock body scroll when mobile drawer is open ---
  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = sidebarOpen ? "hidden" : "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobile, sidebarOpen]);

  // --- scroll to top on route change; close drawer/quicknav on navigation ---
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setQuickOpen(false); 
    if (isMobile) setSidebarOpen(false);
  }, [location.pathname, isMobile]);

  function handleLogout() {
    localStorage.removeItem("learner");
    setLearner(null);
    setLoading(true);
  }

  // =======================================================
  // ** FIX: Robust Name Derivation Function **
  // =======================================================
  const deriveName = () => {
    if (!learner) return "Learner";
    
    // 1. Priority: Use firstName or fullName if available (for real user data)
    if (learner.firstName) return learner.firstName;
    if (learner.fullName) return learner.fullName.split(' ')[0]; // Use first word of full name

    // 2. Secondary: Derive from email
    if (learner.email) {
      const localPart = learner.email.split("@")[0];
      // Try to split local part (e.g., john.doe, john-doe) by separators
      const parts = localPart.split(/[. _-]/).filter(p => p.length > 0); 
      
      let name = parts.length > 0 ? parts[0] : localPart;
      
      // Clean up and capitalize first letter
      return name.charAt(0).toUpperCase() + name.slice(1);
    }

    return "Learner"; // Final fallback
  };
  
  const formattedName = deriveName();
  // =======================================================

  if (loading || !learner) {
    return <div style={styles.loading}>Loading Dashboard…</div>;
  }

  // compute sidebar width for content margin (desktop only)
  const desktopSidebarWidth = 260;
  const contentMarginLeft = !isMobile && sidebarPinned ? desktopSidebarWidth : 0;

  return (
    <div
      style={{
        ...styles.wrapper,
        ["--desktop-sidebar-width"]: `${desktopSidebarWidth}px`,
      }}
    >
      {/* ===== HEADER (fixed) ===== */}
      <header style={styles.header}>
        <div style={styles.brandArea}>
          <button
            onClick={() => {
              isMobile ? setSidebarOpen((v) => !v) : setSidebarPinned((v) => !v);
            }}
            style={styles.iconBtn}
            aria-label="Toggle sidebar"
          >
            <Menu size={22} />
          </button>

          <Link to="/dashboard" style={styles.logoLink}>
            LEARNER HUB
          </Link>
        </div>

        <div style={styles.headerRight}>
          {/* Using formattedName from the robust derivation */}
          <span style={styles.welcome}>Hello, {formattedName} 👋</span>
          <div
            style={styles.avatar}
            onClick={() => setQuickOpen((o) => !o)}
            aria-controls="quick-nav-menu"
            aria-expanded={quickOpen}
          >
            {(formattedName?.[0] || "L").toUpperCase()}
          </div>
        </div>
      </header>

      {/* ===== SIDEBAR (Navigation) ===== */}
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
        <LearnerSidebar
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
      
      {/* Quick Nav is now used - assuming you added the QuickNav component */}
      {/* Placeholder for QuickNav component using name data */}


      {/* ===== MAIN CONTENT CONTAINER ===== */}
      <div
        style={{
          ...styles.page,
          marginLeft: contentMarginLeft,
        }}
      >
        <main
          style={styles.main}
          onClick={() => {
            // Close QuickNav if main content is clicked
            if (quickOpen) setQuickOpen(false);
          }}
        >
          <Outlet />
        </main>
        <footer style={styles.footer}>
          © {new Date().getFullYear()} Learning Platform · All rights reserved
        </footer>
      </div>
    </div>
  );
}

/* ========= STYLES (Unchanged) ========= */
const styles = {
  // ... (keep styles block the same as before) ...
    wrapper: {
    minHeight: "100vh",
    background: "#f8fafc",
    display: "flex", // Enable flex layout
    paddingTop: "64px", // Account for fixed header height
    position: "relative",
  },
  loading: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f1f5f9",
    color: "#0f4f9f",
    fontWeight: 800,
  },
  // Header remains fixed
  header: {
    height: "64px",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1001,
    background: "#fff",
    borderBottom: "1px solid #e2e8f0",
    boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 16px",
  },
  brandArea: { display: "flex", alignItems: "center", gap: 12 },
  iconBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#0f4f9f",
    padding: 6,
    borderRadius: 8,
  },
  logoLink: {
    fontWeight: 900,
    fontSize: "1.1rem",
    color: "#0f4f9f",
    textDecoration: "none",
  },
  headerRight: { display: "flex", alignItems: "center", gap: 10 },
  welcome: { color: "#475569", fontSize: ".95rem", fontWeight: 700 },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: "50%",
    background: "#0f4f9f",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 900,
    cursor: "pointer",
  },
  // 💡 MODIFIED: Uses CSS variable for desktop width and transition for transform
  sidebarShell: {
    position: "fixed",
    left: 0,
    top: "64px",
    bottom: 0,
    width: "var(--desktop-sidebar-width)",
    zIndex: 2001,
    transition: "transform .3s ease",
    backgroundColor: "#0f172a",
  },
  backdrop: {
    position: "fixed",
    inset: 0,
    background: "rgba(2,6,23,0.55)",
    zIndex: 2000,
    backdropFilter: "blur(2px)",
  },
  // 💡 MODIFIED: Flex: 1 and dynamic margin-left
  page: {
    flex: 1, // Takes up remaining horizontal space
    display: "flex",
    flexDirection: "column",
    minHeight: "calc(100vh - 64px)",
    transition: "margin-left .3s ease", // Smooth transition for content shifting
    // Note: No more paddingTop here as it's moved to wrapper
  },
  main: {
    flex: 1,
    padding: 20,
    maxWidth: 1250,
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