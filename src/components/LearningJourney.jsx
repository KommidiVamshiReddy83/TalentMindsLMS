import React from "react";

const steps = [
  {
    icon: "📝",
    title: "Enroll in Your Path",
    desc: "Choose your career-aligned learning path curated by experts in tech and leadership.",
  },
  {
    icon: "💡",
    title: "Learn by Doing",
    desc: "Build hands-on projects, case studies, and simulations to apply what you learn immediately.",
  },
  {
    icon: "🎯",
    title: "Get Mentored",
    desc: "Work 1-on-1 with real industry professionals who guide you through challenges and code reviews.",
  },
  {
    icon: "🚀",
    title: "Launch Your Career",
    desc: "Leverage our placement network, resume sessions, and mock interviews to land your dream job.",
  },
];

export default function LearningJourney() {
  return (
    <section className="lj-section">
      <div className="lj-container">
        <h2 className="lj-title">How TalentMinds Works</h2>
        <p className="lj-subtitle">
          A step-by-step journey designed to transform learners into job-ready professionals.
        </p>

        <div className="lj-grid">
          {steps.map((step, i) => (
            <div key={i} className="lj-card">
              <div className="lj-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              {i < steps.length - 1 && <div className="lj-arrow">→</div>}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .lj-section {
          background: linear-gradient(180deg, #ffffff 0%, #f0f4ff 100%);
          padding: 90px 20px;
          text-align: center;
        }
        .lj-container { max-width: 1200px; margin: 0 auto; }
        .lj-title {
          font-size: 2.4rem;
          font-weight: 800;
          color: #0b4da3;
          margin-bottom: 10px;
        }
        .lj-subtitle {
          font-size: 1.15rem;
          color: #475569;
          margin-bottom: 60px;
        }
        .lj-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: stretch;
          gap: 40px;
          position: relative;
        }
        .lj-card {
          background: #fff;
          border-radius: 16px;
          padding: 30px 24px;
          max-width: 260px;
          box-shadow: 0 6px 18px rgba(11, 77, 163, 0.08);
          position: relative;
          transition: all 0.3s ease;
        }
        .lj-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 28px rgba(37, 99, 235, 0.15);
        }
        .lj-icon {
          font-size: 42px;
          margin-bottom: 15px;
        }
        .lj-card h3 {
          color: #0b4da3;
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .lj-card p {
          color: #475569;
          font-size: 1rem;
          line-height: 1.5;
        }
        .lj-arrow {
          position: absolute;
          right: -25px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 28px;
          color: #2563eb;
          font-weight: 700;
        }
        @media (max-width: 900px) {
          .lj-grid { flex-direction: column; align-items: center; }
          .lj-card { max-width: 90%; }
          .lj-arrow { display: none; }
        }
      `}</style>
    </section>
  );
}
