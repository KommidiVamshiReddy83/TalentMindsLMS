import React, { useEffect } from "react";

const valueProps = [
  {
    icon: "👨‍🏫",
    title: "Learn from Industry Experts",
    description:
      "All our courses are designed and delivered by top professionals from global tech companies and startups.",
    color: "#0b4da3",
  },
  {
    icon: "💻",
    title: "Hands-on Project Learning",
    description:
      "Build portfolio-ready real-world projects. Every course includes interactive labs and case studies.",
    color: "#f59e0b",
  },
  {
    icon: "🎓",
    title: "Globally Recognized Certification",
    description:
      "Earn certificates verified by leading organizations and share them directly on LinkedIn or your CV.",
    color: "#10b981",
  },
  {
    icon: "🚀",
    title: "Career-Focused Learning Path",
    description:
      "Get personalized learning plans and interview prep with career mentors who help you achieve your goals.",
    color: "#8b5cf6",
  },
];

export default function ValueProposition() {
  useEffect(() => {
    const items = document.querySelectorAll(".vp-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    items.forEach((item) => observer.observe(item));
  }, []);

  return (
    <section className="vp-section">
      <div className="vp-container">
        <h2 className="vp-title">Why Professionals Choose TalentMinds</h2>
        <p className="vp-subtitle">
          An online learning platform designed for career transformation — combining
          expert-led content, real-world practice, and personalized mentorship.
        </p>

        <div className="vp-grid">
          {valueProps.map((prop, index) => (
            <div className="vp-card fade-up" key={index}>
              <div
                className="vp-icon-wrap"
                style={{ backgroundColor: prop.color }}
              >
                <span className="vp-icon">{prop.icon}</span>
              </div>
              <h3 className="vp-card-title">{prop.title}</h3>
              <p className="vp-card-description">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .vp-section {
          background: linear-gradient(180deg, #ffffff 0%, #f7faff 100%);
          padding: 80px 20px;
          text-align: center;
          overflow: hidden;
        }
        .vp-container { max-width: 1200px; margin: 0 auto; }
        .vp-title {
          font-size: 2.4rem;
          font-weight: 800;
          color: #0b4da3;
          margin-bottom: 15px;
        }
        .vp-subtitle {
          font-size: 1.15rem;
          color: #4b5563;
          margin-bottom: 50px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        .vp-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 30px;
        }
        .vp-card {
          background: #fff;
          padding: 30px;
          border-radius: 14px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 6px 20px rgba(11, 77, 163, 0.05);
          text-align: left;
          transition: all 0.6s ease, opacity 0.6s ease;
          opacity: 0;
          transform: translateY(30px);
        }
        .vp-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .vp-icon-wrap {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          color: #fff;
          font-size: 1.6rem;
        }
        .vp-card-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 10px;
          color: #111827;
        }
        .vp-card-description {
          color: #4b5563;
          font-size: 0.98rem;
          line-height: 1.5;
        }
        @media (max-width: 768px) {
          .vp-title { font-size: 2rem; }
          .vp-subtitle { font-size: 1rem; }
          .vp-card { text-align: center; }
          .vp-icon-wrap { margin: 0 auto 15px; }
        }
      `}</style>
    </section>
  );
}
