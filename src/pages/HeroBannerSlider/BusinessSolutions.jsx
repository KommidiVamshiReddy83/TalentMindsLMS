import React from "react";
import { useNavigate } from "react-router-dom";

export default function BusinessSolutions() {
  const navigate = useNavigate();

  return (
    <section className="page">
      <div className="container">
        <h1>TalentMinds for Business</h1>
        <p className="subtitle">
          Empower your workforce with customized learning paths, expert-led sessions, and performance-driven upskilling programs.
        </p>

        <div className="grid">
          <div className="card">
            <h3>🏢 Tailored Learning Paths</h3>
            <p>
              Create personalized training programs aligned with your organization’s goals, from onboarding to leadership development.
            </p>
          </div>
          <div className="card">
            <h3>📊 Measurable Outcomes</h3>
            <p>
              Track learning progress, certifications, and ROI with real-time analytics dashboards designed for enterprise insights.
            </p>
          </div>
          <div className="card">
            <h3>🧑‍🏫 Industry-Expert Trainers</h3>
            <p>
              Deliver training from mentors with proven expertise across cloud, full stack, data science, and emerging technologies.
            </p>
          </div>
          <div className="card">
            <h3>🌍 Scalable Global Platform</h3>
            <p>
              Our LMS supports distributed teams with multilingual content, custom branding, and cloud scalability.
            </p>
          </div>
        </div>

        <div className="cta">
          <h2>Accelerate your workforce transformation with TalentMinds 🚀</h2>
          <button onClick={() => navigate("/contact")} className="cta-btn">
            Request a Demo →
          </button>
         <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "instant" });
          navigate("/");
        }}
        className="back-btn"
      >
        ← Back to Home
      </button>
        </div>
      </div>

      <style>{`
        .page {
          min-height: 100vh;
          background: linear-gradient(135deg, #ede9fe, #ddd6fe);
          font-family: 'Inter', sans-serif;
          padding: 80px 20px;
          text-align: center;
        }
        h1 {
          font-size: 2.8rem;
          color: #4c1d95;
          font-weight: 800;
          margin-bottom: 16px;
        }
        .subtitle {
          font-size: 1.15rem;
          color: #3730a3;
          max-width: 750px;
          margin: 0 auto 60px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }
        .card {
          background: #fff;
          border-radius: 16px;
          padding: 28px 22px;
          box-shadow: 0 6px 20px rgba(76,29,149,0.1);
          transition: all 0.3s ease;
          text-align: left;
        }
        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 30px rgba(76,29,149,0.15);
        }
        .card h3 {
          color: #5b21b6;
          font-size: 1.2rem;
          margin-bottom: 10px;
        }
        .card p {
          color: #374151;
          line-height: 1.6;
          font-size: 0.95rem;
        }
        .cta h2 {
          color: #4c1d95;
          font-size: 1.6rem;
          margin-bottom: 30px;
        }
        .cta-btn {
          background: #7c3aed;
          color: white;
          border: none;
          padding: 14px 30px;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
          margin-right: 10px;
          transition: background 0.3s ease;
        }
        .cta-btn:hover {
          background: #6d28d9;
        }
        .back-btn {
          background: transparent;
          color: #4c1d95;
          border: 2px solid #7c3aed;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .back-btn:hover {
          background: #ede9fe;
        }
        @media (max-width: 600px) {
          h1 { font-size: 2rem; }
          .cta h2 { font-size: 1.3rem; }
        }
      `}</style>
    </section>
  );
}
