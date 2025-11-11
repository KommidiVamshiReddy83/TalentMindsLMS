import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="tm-footer">
      <div className="tm-footer-container">
        <div className="tm-footer-content">
          {/* Brand Section */}
          <div className="tm-footer-brand">
            <Link to="/" className="tm-footer-logo">
              <span className="logo-yellow">HG's</span>
              <span className="logo-white">TalentMinds</span>
            </Link>
            <p>
              Empowering careers through expert-led online learning and
              industry-recognized certifications.
            </p>
            <div className="tm-footer-socials">
              <a href="#" aria-label="Twitter">
                <svg width="18" height="18" fill="#b6c6e3">
                  <circle cx="9" cy="9" r="8" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg width="18" height="18" fill="#b6c6e3">
                  <rect x="3" y="3" width="12" height="12" />
                </svg>
              </a>
              <a href="#" aria-label="GitHub">
                <svg width="18" height="18" fill="#b6c6e3">
                  <polygon points="3,3 15,9 3,15" />
                </svg>
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="tm-footer-links">
            <div className="tm-footer-col">
              <h4>Learning</h4>
              <Link to="/courses">All Courses</Link>
              <Link to="/skills">Skill Tracks</Link>
              <Link to="/certifications">Certifications</Link>
              <Link to="/enterprise">Enterprise</Link>
            </div>

            <div className="tm-footer-col">
              <h4>Resources</h4>
              <Link to="/blog">Blog</Link>
              <Link to="/guides">Guides</Link>
              <Link to="/tutorials">Tutorials</Link>
              <Link to="/webinars">Webinars</Link>
            </div>

            <div className="tm-footer-col">
              <h4>Company</h4>
              <Link to="/about">About Us</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/press">Press</Link>
            </div>

            <div className="tm-footer-col">
              <h4>Support</h4>
              <Link to="/help">Help Center</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/terms">Terms</Link>
              <Link to="/privacy">Privacy</Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="tm-footer-bottom">
          <span>© 2025 TalentMinds. All rights reserved.</span>
          <div className="tm-footer-bottom-links">
            <Link to="/terms">Terms</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/cookies">Cookies</Link>
          </div>
        </div>
      </div>

      <style>{`
        .tm-footer {
          background: #181a20;
          color: #b6c6e3;
          width: 100%;
          padding: 60px 24px 0;
        }

        .tm-footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
        }

        .tm-footer-content {
          display: grid;
          grid-template-columns: 1.2fr 2fr;
          gap: 64px;
          padding-bottom: 48px;
        }

        .tm-footer-brand {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .tm-footer-logo {
          font-size: 1.6rem;
          font-weight: 700;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .logo-yellow {
          color: #fbbf24;
        }

        .logo-white {
          color: #fff;
        }

        .tm-footer-brand p {
          font-size: 1rem;
          color: #94a3b8;
          line-height: 1.6;
          max-width: 400px;
        }

        .tm-footer-socials {
          display: flex;
          gap: 16px;
        }

        .tm-footer-socials a {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #23263a;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s ease;
        }

        .tm-footer-socials a:hover {
          background: #2563eb;
          transform: translateY(-2px);
        }

        .tm-footer-links {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }

        .tm-footer-col {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .tm-footer-col h4 {
          color: #fff;
          font-weight: 600;
          font-size: 1.1rem;
        }

        .tm-footer-col a {
          color: #94a3b8;
          font-size: 0.95rem;
          text-decoration: none;
          transition: 0.2s;
        }

        .tm-footer-col a:hover {
          color: #fff;
          transform: translateX(3px);
        }

        .tm-footer-bottom {
          border-top: 1px solid #23263a;
          padding: 24px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }

        .tm-footer-bottom-links {
          display: flex;
          gap: 20px;
        }

        .tm-footer-bottom-links a {
          color: #94a3b8;
          text-decoration: none;
          font-size: 0.9rem;
        }

        .tm-footer-bottom-links a:hover {
          color: #fff;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .tm-footer-content {
            grid-template-columns: 1fr;
            gap: 48px;
            text-align: center;
          }

          .tm-footer-brand {
            align-items: center;
          }

          .tm-footer-socials {
            justify-content: center;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .tm-footer-links {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
            text-align: center;
          }

          .tm-footer-bottom {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }

          .tm-footer-bottom-links {
            justify-content: center;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .tm-footer-links {
            grid-template-columns: 1fr;
          }

          .tm-footer-col {
            align-items: center;
          }

          .tm-footer-logo {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </footer>
  );
}
