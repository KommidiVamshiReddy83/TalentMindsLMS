// import React, { useEffect, useState } from "react";
// import { Outlet, NavLink, useNavigate, Link } from "react-router-dom"; 
// import { Menu, X } from "lucide-react"; // Import X for closing the menu
// import QuickNav from "../components/QuickNav/QuickNav.jsx"; 

// // --- START: New/Updated Components ---

// // Nav Links Data
// const navItems = [
//     { to: "/dashboard", label: "Overview", end: true },
//     { to: "/dashboard/my-courses", label: "My Courses" },
//     { to: "/dashboard/assignments", label: "Assignments" },
//     { to: "/dashboard/discussions", label: "Discussions" },
//     { to: "/dashboard/notifications", label: "Notifications" },
//     { to: "/dashboard/profile", label: "Profile" },
//     { to: "/dashboard/settings", label: "Settings" },
// ];

// const Sidebar = ({ open, onClose }) => {
//     const navLinkStyle = ({ isActive }) => ({ 
//         color: isActive ? "#2563eb" : "#0f172a", 
//         fontWeight: isActive ? 700 : 500,
//         padding: '8px 12px',
//         textDecoration: 'none',
//         display: 'block',
//         borderRadius: '4px',
//         backgroundColor: isActive ? "#eff6ff" : "transparent",
//     });

//     return (
//         // The sidebar wrapper handles desktop width and mobile slide-out
//         <div style={{
//             width: '240px',
//             minWidth: '240px',
//             height: '100%',
//             backgroundColor: '#fff',
//             position: 'fixed', // Fixed for mobile slide-out
//             top: 0,
//             left: 0,
//             zIndex: 1000,
//             boxShadow: '0 0 15px rgba(0,0,0,0.1)',
//             transition: 'transform 0.3s ease-out',
//             transform: open ? 'translateX(0)' : 'translateX(-100%)', // Slide in/out on mobile
//             // 🚨 Desktop Override: Make it visible and static on large screens
//             '@media (min-width: 992px)': {
//                 position: 'static',
//                 transform: 'translateX(0)',
//                 boxShadow: 'none',
//                 borderRight: '1px solid #e2e8f0',
//                 height: '100vh', // Stretch to full viewport height for desktop
//                 paddingTop: '64px', // Space for the fixed header
//             },
//         }}>
//             <div style={{ padding: '20px' }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
//                     <div style={{ fontWeight: 800, fontSize: '1.1rem', color: '#1e293b' }}>My Learning</div>
//                     {/* Close button visible only on mobile */}
//                     <button 
//                         onClick={onClose} 
//                         style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}
//                         className="mobile-only-close"
//                     >
//                         <X size={20} />
//                     </button>
//                 </div>
//                 <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
//                     {navItems.map(item => (
//                         <NavLink key={item.to} to={item.to} end={item.end} style={navLinkStyle}>
//                             {item.label}
//                         </NavLink>
//                     ))}
//                 </nav>
//             </div>
//         </div>
//     );
// };

// // ... Header and Footer (No change needed from previous step, except in use below) ...
// const Header = ({ learner, onQuickNavToggle, onMobileMenuToggle }) => (
//     <header style={{ 
//         height: '64px', 
//         backgroundColor: '#fff', 
//         borderBottom: '1px solid #e2e8f0',
//         padding: '0 20px', 
//         display: 'flex', 
//         justifyContent: 'space-between', 
//         alignItems: 'center',
//         position: 'sticky', 
//         top: 0, 
//         zIndex: 100 
//     }}>
//         <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
//             {/* Hamburger visible on mobile, hidden on desktop (must use CSS media query) */}
//             <button 
//                 onClick={onMobileMenuToggle} 
//                 style={{ 
//                     background: 'none', 
//                     border: 'none', 
//                     cursor: 'pointer', 
//                     color: '#0f4f9f',
//                     // This button should be hidden on desktop (> 992px) via CSS class
//                 }} 
//                 className="tm-hamburger" 
//             >
//                  <Menu size={24} /> 
//             </button>
//             <Link to="/dashboard" style={{ fontWeight: 800, fontSize: '1.2rem', color: '#0f4f9f', textDecoration: 'none' }}>
//                 LEARNER HUB
//             </Link>
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
//             <span style={{ color: '#475569', fontSize: '0.9rem', fontWeight: 600 }}>
//                 Welcome, {learner?.firstName || "Learner"}!
//             </span>
//             <div
//                 style={{ 
//                     width: '38px', height: '38px', borderRadius: '50%', 
//                     backgroundColor: '#0f4f9f', color: '#fff', 
//                     display: 'flex', alignItems: 'center', justifyContent: 'center', 
//                     fontWeight: 800, cursor: 'pointer' 
//                 }}
//                 onClick={onQuickNavToggle}
//             >
//                 {(learner?.firstName?.[0] || "L").toUpperCase()}
//             </div>
//         </div>
//     </header>
// );

// const Footer = () => (
//     <footer style={{ 
//         padding: '12px 20px', 
//         textAlign: 'center', 
//         fontSize: '0.8rem', 
//         color: '#64748b', 
//         borderTop: '1px solid #e2e8f0',
//         backgroundColor: '#f8fafc',
//         width: '100%',
//         marginTop: 'auto'
//     }}>
//         © {new Date().getFullYear()} Learning Platform. All rights reserved.
//     </footer>
// );
// // --- END: New/Updated Components ---


// export default function LearnerLayout() {
//     const navigate = useNavigate();
//     const [learner, setLearner] = useState(() => {
//         try {
//             const data = localStorage.getItem("learner");
//             return data ? JSON.parse(data) : null;
//         } catch { return null; }
//     });

//     const [loading, setLoading] = useState(true); 
//     const [quickOpen, setQuickOpen] = useState(false);
//     // Control state for the mobile slide-out sidebar
//     const [sidebarOpen, setSidebarOpen] = useState(false); 

//     // Close mobile sidebar on route change
//     useEffect(() => {
//         setSidebarOpen(false);
//     }, [window.location.pathname]);

//     useEffect(() => {
//         if (learner) { setLoading(false); } 
//         else { navigate("/login", { replace: true }); }
//     }, [learner, navigate]);

//     function handleLogout() {
//         localStorage.removeItem("learner");
//         setLearner(null);
//         setLoading(true);
//     }

//     if (loading || !learner) {
//         return (
//             <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f1f5f9', fontSize: '1.2rem', color: '#0f4f9f' }}>
//                 Loading Dashboard...
//             </div>
//         );
//     }
  
//     return (
//         // Main container must use grid or flex to align sidebar and content
//         <div style={{ 
//             display: "flex", 
//             minHeight: "100vh", 
//             backgroundColor: "#f8fafc",
//             // 🚨 Use Flexbox for Main Desktop Layout: Sidebar + Content
//         }}>
            
//             {/* 🎯 New Sidebar Component (Permanent on Desktop, Toggled on Mobile) */}
//             <Sidebar 
//                 open={sidebarOpen} 
//                 onClose={() => setSidebarOpen(false)} 
//             />
            
//             {/* Mobile Overlay (Only visible when sidebar is open on mobile) */}
//             {sidebarOpen && 
//                 <div 
//                     onClick={() => setSidebarOpen(false)} 
//                     style={{ 
//                         position: 'fixed', 
//                         inset: 0, 
//                         backgroundColor: 'rgba(0,0,0,0.4)', 
//                         zIndex: 999 
//                     }} 
//                 />
//             }

//             {/* Content Wrapper */}
//             <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
//                 <Header 
//                     learner={learner} 
//                     onQuickNavToggle={() => setQuickOpen(!quickOpen)} 
//                     onMobileMenuToggle={() => setSidebarOpen(true)}
//                 />

//                 <div style={{ 
//                     flex: 1, 
//                     padding: "20px", 
//                     maxWidth: 1250, 
//                     margin: "0 auto", 
//                     width: "100%",
//                 }}>
//                     <main style={{ flex: 1, minHeight: 0 }}>
//                         <Outlet />
//                     </main>
//                 </div>

//                 <QuickNav
//                     open={quickOpen}
//                     onClose={() => setQuickOpen(false)}
//                     onLogout={handleLogout}
//                     anchor="top-right"
//                 />
                
//                 <Footer />
//             </div>

//             {/* 🚨 CRITICAL CSS FOR RESPONSIVENESS (since you're using inline styles):
//               You must ensure that the Sidebar and Header elements are correctly styled 
//               using CSS media queries for different screen sizes, especially to hide 
//               the mobile menu button on desktop and position the fixed sidebar correctly.
//             */}
//         </div>
//     );
// }