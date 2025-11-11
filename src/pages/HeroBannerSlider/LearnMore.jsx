import React from "react";
import { useNavigate } from "react-router-dom";

export default function LearnMore() {
  const navigate = useNavigate();

  return (
    <section className="page">
      <div className="container">
        <h1>About TalentMinds</h1>
        <p className="subtitle">
          We are a global learning platform dedicated to bridging the gap between academic education and real-world employability.
        </p>

        <div className="grid">
          <div className="card">
            <h3>🌱 Our Mission</h3>
            <p>
              To empower individuals and organizations with cutting-edge skills that drive growth, innovation, and success in the digital age.
            </p>
          </div>
          <div className="card">
            <h3>👩‍🏫 Learning That Works</h3>
            <p>
              Our programs blend mentor guidance, hands-on projects, and live learning to ensure every learner becomes job-ready.
            </p>
          </div>
          <div className="card">
            <h3>🌍 Our Impact</h3>
            <p>
              Over 8 million learners and 1,500+ companies trust TalentMinds to deliver measurable career and business outcomes.
            </p>
          </div>
        </div>

        <div className="cta">
          <h2>Discover the future of learning with TalentMinds 🚀</h2>
          <button onClick={() => navigate("/explore-programs")} className="cta-btn">
            Explore Programs →
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
          background: linear-gradient(135deg, #dcfce7, #bbf7d0);
          font-family: 'Inter', sans-serif;
          padding: 80px 20px;
          text-align: center;
        }
        h1 {
          font-size: 2.8rem;
          color: #166534;
          font-weight: 800;
          margin-bottom: 16px;
        }
        .subtitle {
          font-size: 1.15rem;
          color: #14532d;
          max-width: 750px;
          margin: 0 auto 50px;
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
          box-shadow: 0 6px 20px rgba(22,101,52,0.1);
          transition: all 0.3s ease;
          text-align: left;
        }
        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 28px rgba(22,101,52,0.15);
        }
        .card h3 {
          color: #15803d;
          margin-bottom: 10px;
        }
        .card p {
          color: #334155;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        .cta h2 {
          color: #14532d;
          font-size: 1.6rem;
          margin-bottom: 30px;
        }
        .cta-btn {
          background: #16a34a;
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
          background: #15803d;
        }
        .back-btn {
          background: transparent;
          color: #14532d;
          border: 2px solid #16a34a;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .back-btn:hover {
          background: #dcfce7;
        }
        @media (max-width: 600px) {
          h1 { font-size: 2rem; }
          .cta h2 { font-size: 1.3rem; }
        }
      `}</style>
    </section>
  );
}
