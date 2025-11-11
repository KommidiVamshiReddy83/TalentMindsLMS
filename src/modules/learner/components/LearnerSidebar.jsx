import React, { useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard, BookOpen, ClipboardList, MessageSquare,
  BarChart3, User, Settings, Bell, ShoppingCart, LogOut,
  HelpCircle,
} from "lucide-react";

// Props:
// open - controls visibility (used for mobile drawer)
// onClose - function to close the drawer (used for mobile navigation)
// onLogout - function to handle authentication logout
export default function LearnerSidebar({ open = false, onClose = () => {}, onLogout = () => {} }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Helper function to check for mobile breakpoint
  const isMobile = () => typeof window !== "undefined" && window.matchMedia("(max-width: 992px)").matches;

  // --- Close drawer on route change (for mobile usability) ---
  useEffect(() => {
    if (isMobile()) onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // --- Dashboard Menu Items ---
  const menuItems = [
    { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard", exact: true },
    { to: "/dashboard/my-courses", icon: BookOpen, label: "My Courses" },
    { to: "/dashboard/assignments", icon: ClipboardList, label: "Assignments" },
    { to: "/dashboard/grades", icon: BarChart3, label: "Grades & Progress" },
    { to: "/dashboard/discussions", icon: MessageSquare, label: "Discussions" },
    { to: "/dashboard/notifications", icon: Bell, label: "Alerts" },
    {to: "/dashboard/My-Cart", icon: ShoppingCart, label: "My Cart" },
  ];

  // --- Account/Utility Menu Items ---
  const utilityItems = [
    { to: "/dashboard/profile", icon: User, label: "My Profile" },
    { to: "/dashboard/settings", icon: Settings, label: "Settings" },
    { to: "/dashboard/support", icon: HelpCircle, label: "Help & Support" },
    { to: "/dashboard/my-cart", icon: ShoppingCart, label: "My Cart" },
  ];

  const handleItemClick = () => {
    // Closes the sidebar drawer immediately on mobile tap
    if (isMobile()) onClose();
    // NavLink handles the actual navigation
  };

  return (
    <aside className={`learner-sidebar ${open ? "open" : ""}`}>
      <div className="sidebar-header">
        <div className="logo">🎓</div>
        <h2 className="title">Learner Hub</h2>
      </div>

      <nav className="nav">
        {/* Main Dashboard Navigation */}
        <div className="nav-group-title">Main Menu</div>
        {menuItems.map(({ to, icon: Icon, label, exact }) => (
          <NavLink
            key={to}
            to={to}
            end={exact}
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
            onClick={handleItemClick}
          >
            <Icon size={18} />
            <span>{label}</span>
          </NavLink>
        ))}

        {/* Account and Utility Links */}
        <div className="nav-group-title">Account</div>
        {utilityItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
            onClick={handleItemClick}
          >
            <Icon size={18} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout Button (Fixed at the bottom) */}
      <div className="bottom">
        <button
          className="logout"
          onClick={() => {
            onLogout();
            navigate("/login"); // Navigate after state is cleared
          }}
        >
          <LogOut size={16} /> Logout
        </button>
      </div>

      {/* --- Inline CSS for Real Website Look --- */}
      <style jsx="true">{`
        /* Sidebar container styles */
        .learner-sidebar { 
          height: 100%; 
          width: 100%; /* Important: The containing element (sidebarShell) controls width */
          background: linear-gradient(180deg, #0f172a, #1e293b); 
          color:#fff; 
          display:flex; 
          flex-direction:column; 
          justify-content:space-between; 
          box-shadow: 2px 0 10px rgba(0,0,0,0.15); /* Subtle shadow for depth */
        }
        
        /* Sidebar Header (Logo/Title) */
        .sidebar-header{ 
          display:flex; 
          align-items:center; 
          gap:10px; 
          padding:18px 20px; 
          border-bottom:1px solid rgba(255,255,255,.1); 
        }
        .logo{ 
          width:40px;
          height:40px;
          border-radius:8px;
          background:#2563eb; /* Primary blue color */
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:1.4rem; 
        }
        .title{ 
          font-size:1.1rem; 
          font-weight:800; 
          color: #e2e8f0; /* Light text color */
        }
        
        /* Navigation area */
        .nav{ 
          flex:1; 
          display:flex; 
          flex-direction:column; 
          padding:10px 10px; 
          overflow-y:auto; 
          overflow-x:hidden;
        }

        /* Navigation Group Title */
        .nav-group-title {
          font-size: 0.75rem;
          font-weight: 600;
          color: #94a3b8; /* Subtle gray for category titles */
          padding: 14px 14px 4px 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        /* Individual Nav Link */
        .nav-item{ 
          display:flex; 
          align-items:center; 
          gap:12px; 
          padding:12px 14px; 
          color:#cbd5e1; /* Default link color */
          text-decoration:none; 
          border-radius:8px; 
          font-weight:500; 
          transition:background .2s, color .2s; 
        }
        .nav-item:hover{ 
          background:rgba(255,255,255,.08); 
          color: #fff;
        }
        .nav-item.active{ 
          background:rgba(37,99,235,.2); 
          color:#fff; 
          font-weight:600; 
          box-shadow: inset 3px 0 0 #3b82f6; /* Highlight bar */
        }
        
        /* Bottom Section (Logout) */
        .bottom{ 
          padding:16px 10px; 
          border-top:1px solid rgba(255,255,255,.1); 
        }
        .logout{ 
          background:#ef4444; /* Red color for logout */
          color:#fff; 
          border:none; 
          width:100%; 
          padding:12px 12px; 
          border-radius:8px; 
          font-weight:700; 
          display:flex; 
          align-items:center; 
          justify-content:center; 
          gap:8px; 
          cursor:pointer; 
          transition:background .2s; 
        }
        .logout:hover{ 
          background:#dc2626; 
        }

        /* Mobile specific styles for the drawer effect (inherited from LearnerLayout, but here for completeness) */
        @media (max-width: 992px){
          .learner-sidebar{ 
             /* The LearnerLayout will control the fixed position and transform */
             box-shadow:4px 0 16px rgba(0,0,0,.4); /* Stronger shadow on mobile */
          }
        }
      `}</style>
    </aside>
  );
}