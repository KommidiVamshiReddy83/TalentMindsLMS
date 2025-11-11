import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const outcomes = [
  { metric: "₹9.6 LPA", description: "Average starting salary of graduates", icon: "💼" },
  { metric: "92%", description: "Placed within 6 months of course completion", icon: "📈" },
  { metric: "200+", description: "Top hiring partners worldwide", icon: "🏢" },
  { metric: "1.2M+", description: "Learners advanced their careers with TalentMinds", icon: "🌍" },
];

export default function CareerOutcomes() {
  const navigate = useNavigate();

  useEffect(() => {
    const items = document.querySelectorAll(".co-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );
    items.forEach((item) => observer.observe(item));
  }, []);

  return (
    <section className="co-section">
      <div className="co-container">
        <h2 className="co-title">Career Outcomes That Define Success</h2>
        <p className="co-subtitle">
          We don’t just teach — we empower transformation.  
          Discover how HG’s TalentMinds learners are getting placed, promoted, and leading innovation globally.
        </p>

        <div className="co-grid">
          {outcomes.map((item, i) => (
            <div className="co-item fade-up" key={i}>
              <div className="co-icon">{item.icon}</div>
              <div>
                <h3 className="co-metric">{item.metric}</h3>
                <p className="co-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="co-cta-btn" onClick={() => navigate("placement-report")}>
          View Full Placement Report →
        </button>
      </div>

      <style>{`
        .co-section {
          background: linear-gradient(135deg, #0b4da3, #2563eb);
          color: #fff;
          padding: 90px 20px;
          text-align: center;
        }
        .co-container { max-width: 1100px; margin: 0 auto; }
        .co-title { font-size: 2.4rem; font-weight: 800; margin-bottom: 10px; }
        .co-subtitle { color: #dbeafe; font-size: 1.1rem; margin-bottom: 60px; line-height: 1.6; }

        .co-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 40px;
          margin-bottom: 60px;
        }
        .co-item {
          background: rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 28px 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          text-align: left;
          transition: all 0.6s ease;
          opacity: 0;
          transform: translateY(40px);
        }
        .co-item.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .co-icon {
          font-size: 2.5rem;
          background: #fbbf24;
          color: #0b4da3;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .co-metric { font-size: 1.8rem; font-weight: 700; color: #fbbf24; }
        .co-description { font-size: 1rem; color: #e0f2fe; margin-top: 4px; }

        .co-cta-btn {
          background: #fbbf24;
          color: #0b4da3;
          border: none;
          padding: 16px 40px;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.3s ease;
          box-shadow: 0 6px 18px rgba(251,191,36,0.4);
        }
        .co-cta-btn:hover { background: #facc15; transform: translateY(-3px); }

        @media (max-width: 700px) {
          .co-title { font-size: 2rem; }
          .co-grid { gap: 20px; }
          .co-icon { width: 60px; height: 60px; font-size: 2rem; }
        }
      `}</style>
    </section>
  );
}
