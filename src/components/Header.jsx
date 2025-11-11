import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, right: 0 });
  const [hidden, setHidden] = useState(false); // ✅ hide on scroll
  const location = useLocation();
  const menuRef = useRef(null);
  const moreButtonRef = useRef(null);
  const moreAreaRef = useRef(null);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMenuOpen(false);
    setMoreOpen(false);
  }, [location]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
      if (isMobile && moreButtonRef.current && !moreButtonRef.current.contains(e.target)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile]);

  // Handle dropdown position
  useEffect(() => {
    if (moreOpen && moreButtonRef.current && !isMobile) {
      const rect = moreButtonRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + 8,
        right: window.innerWidth - rect.right,
      });
    }
  }, [moreOpen, isMobile]);

  const toggleMore = () => setMoreOpen((prev) => !prev);
  const closeAll = () => {
    setMenuOpen(false);
    setMoreOpen(false);
  };

  /* ==========================================================
     🧭 Scroll Hide/Show Behavior
  ========================================================== */
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;
    let scrollTimeout;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (currentScrollY > lastScrollY + 10) {
            setHidden(true); // scrolling down
          } else if (currentScrollY < lastScrollY - 5) {
            setHidden(false); // scrolling up slightly
          }

          lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
          ticking = false;
        });
        ticking = true;
      }

      // Show if scroll stops
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setHidden(false), 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <header className={`tm-header ${hidden ? "hidden" : ""}`}>
      <nav className="tm-nav" ref={menuRef}>
        {/* LOGO */}
        <Link to="/" className="tm-logo" onClick={closeAll}>
          <span className="logo-yellow">HG’s</span>
          <span className="logo-blue">TalentMinds</span>
        </Link>

        {/* SEARCH BAR */}
        <div className="tm-center">
          <div className="tm-search">
            <input type="text" placeholder="Search for courses, mentors, skills..." />
            <button className="tm-search-btn" aria-label="Search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>
        </div>

        {/* NAV LINKS */}
        <div className={`tm-links ${menuOpen ? "open" : ""}`}>
          <Link to="/explore" className="tm-explore-link" onClick={closeAll}>
            <div className="tm-explore-icon">
              {[...Array(9)].map((_, i) => (
                <span key={i} className="tm-dot-waffle" />
              ))}
            </div>
            <span className="tm-explore-text">Explore</span>
          </Link>

          <Link to="/resources" onClick={closeAll}>Resources</Link>
          <Link to="/business" onClick={closeAll}>For Business</Link>

          <div
            className="tm-more-area"
            ref={moreAreaRef}
            onMouseEnter={() => !isMobile && setMoreOpen(true)}
            onMouseLeave={() => !isMobile && setMoreOpen(false)}
          >
            <div className="tm-more-wrapper" ref={moreButtonRef}>
              <button className="tm-more-btn" onClick={isMobile ? toggleMore : undefined}>
                More <span className="tm-more-arrow">{moreOpen ? "▲" : "▼"}</span>
              </button>

              {/* MOBILE DROPDOWN */}
              {isMobile && moreOpen && (
                <div className="tm-more-dropdown open">
                  <Link to="/reviews" onClick={closeAll}>Learner Stories</Link>
                  <Link to="/hire" onClick={closeAll}>Hire Talent</Link>
                  <Link to="/become-mentor" onClick={closeAll}>Become a Mentor</Link>
                  <Link to="/partnerships" onClick={closeAll}>Partnerships</Link>
                  <Link to="/scholarships" onClick={closeAll}>Scholarships</Link>
                  <Link to="/faq" onClick={closeAll}>FAQ</Link>
                  <Link to="/support" onClick={closeAll}>Support</Link>
                </div>
              )}
            </div>

            {/* DESKTOP DROPDOWN */}
            {!isMobile && moreOpen && (
              <div
                className="tm-more-dropdown open fixed-desktop"
                style={{
                  top: `${dropdownPos.top}px`,
                  right: `${dropdownPos.right}px`,
                }}
              >
                <Link to="/reviews" onClick={closeAll}>Learner Stories</Link>
                <Link to="/hire" onClick={closeAll}>Hire Talent</Link>
                <Link to="/become-mentor" onClick={closeAll}>Become a Mentor</Link>
                <Link to="/partnerships" onClick={closeAll}>Partnerships</Link>
                <Link to="/scholarships" onClick={closeAll}>Scholarships</Link>
                <Link to="/faq" onClick={closeAll}>FAQ</Link>
                <Link to="/support" onClick={closeAll}>Support</Link>
              </div>
            )}
          </div>

          <Link to="/login" className="tm-login-btn" onClick={closeAll}>
            Login
          </Link>
        </div>

        {/* HAMBURGER */}
        <button className="tm-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span />
          <span />
          <span />
        </button>
      </nav>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }

        .tm-header {
          background: #fff;
          border-bottom: 1px solid #dee2e6;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 9999;
          box-shadow: 0 1px 10px rgba(0,0,0,0.05);
          transform: translateY(0);
          transition: transform 0.4s ease, opacity 0.3s ease;
        }

        /* ✅ Hide animation */
        .tm-header.hidden {
          transform: translateY(-100%);
          opacity: 0;
          pointer-events: none;
        }

        .tm-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1300px;
          margin: 0 auto;
          height: 70px;
          padding: 0 24px;
          font-family: 'Inter', sans-serif;
        }

        .tm-logo {
          font-size: 1.6rem;
          font-weight: 700;
          display: flex;
          align-items: center;
        }
        .logo-yellow { color: #fbbf24; margin-right: 5px; }
        .logo-blue { color: #2563eb; }

        .tm-center { flex: 1; display: flex; justify-content: center; }
        .tm-search {
          display: flex;
          align-items: center;
          background: #f8f9fa;
          border: 1px solid #dee2e6;
          border-radius: 20px;
          overflow: hidden;
          width: 400px;
          max-width: 100%;
        }
        .tm-search input {
          flex: 1;
          border: none;
          background: transparent;
          padding: 10px 15px;
          font-size: 0.95rem;
          outline: none;
        }
        .tm-search-btn {
          background: #2563eb;
          color: white;
          border: none;
          padding: 10px 15px;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .tm-search-btn:hover { background: #1e40af; }

        /* Links */
        .tm-links {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .tm-links a {
          color: #495057;
          font-weight: 500;
          text-decoration: none;
          position: relative;
        }
        .tm-links a:hover { color: #2563eb; }

        /* Explore link */
        .tm-explore-link {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #2563eb;
          font-weight: 600;
        }
        .tm-explore-icon {
          display: grid;
          grid-template-columns: repeat(3, 4px);
          grid-gap: 3px;
        }
        .tm-dot-waffle {
          width: 4px;
          height: 4px;
          background: #2563eb;
          border-radius: 1px;
        }

        .tm-more-area { position: relative; }
        .tm-more-btn {
          background: none;
          border: none;
          font-size: 1rem;
          font-weight: 500;
          color: #495057;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .tm-more-btn:hover { color: #2563eb; }

        .tm-more-dropdown {
          display: none;
          flex-direction: column;
          background: #fff;
          border: 1px solid #dee2e6;
          border-radius: 8px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
          min-width: 220px;
          z-index: 10000;
        }
        .tm-more-dropdown.open { display: flex; }

        .tm-more-dropdown.fixed-desktop {
          position: fixed;
        }

        .tm-more-dropdown a {
          padding: 10px 18px;
          color: #212529;
        }
        .tm-more-dropdown a:hover {
          background: #f8f9fa;
          color: #2563eb;
        }

        .tm-login-btn {
          color: #212529;
          padding: 9px 20px;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.2s ease;
        }
        .tm-login-btn:hover {
          background: #eff6ff;
          color: #2563eb;
        }

        /* Hamburger */
        .tm-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
        }
        .tm-hamburger span {
          width: 25px;
          height: 2px;
          background: #2563eb;
        }

        /* Responsive */
        @media (max-width: 800px) {
          .tm-center { display: none; }
          .tm-links {
            display: none;
            flex-direction: column;
            align-items: stretch;
            background: #fff;
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            padding: 20px;
            gap: 16px;
            box-shadow: 0 6px 18px rgba(0,0,0,0.08);
            z-index: 9999;
            min-height: calc(100vh - 70px);
            overflow-y: auto;
          }
          .tm-links.open { display: flex; }
          .tm-hamburger { display: flex; }
        }
      `}</style>
    </header>
  );
}
