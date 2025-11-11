import React, { useEffect, useState } from "react";

const platforms = [
  {
    name: "Udemy",
    logo: "https://logo.clearbit.com/udemy.com",
    rating: 4.7,
  },
  {
    name: "Coursera",
    logo: "https://logo.clearbit.com/coursera.org",
    rating: 4.8,
  },
  {
    name: "Trustpilot",
    logo: "https://logo.clearbit.com/trustpilot.com",
    rating: 4.9,
  },
];

export default function LearnerTrust() {
  const LEARNER_TARGET = 125000;
  const COMPANY_TARGET = 95;

  const [learnerCount, setLearnerCount] = useState(0);
  const [companyCount, setCompanyCount] = useState(0);
  const [visible, setVisible] = useState(false);

  // Trigger animation on scroll
  useEffect(() => {
    const section = document.querySelector(".lt-section");
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(section);
  }, []);

  // Animated count-up for learners and companies
  useEffect(() => {
    if (!visible) return;

    const step = () => {
      setLearnerCount((prev) =>
        prev < LEARNER_TARGET
          ? Math.min(prev + Math.ceil((LEARNER_TARGET - prev) / 30), LEARNER_TARGET)
          : LEARNER_TARGET
      );
      setCompanyCount((prev) =>
        prev < COMPANY_TARGET
          ? Math.min(prev + Math.ceil((COMPANY_TARGET - prev) / 10), COMPANY_TARGET)
          : COMPANY_TARGET
      );
    };

    const timer = setInterval(step, 40);
    return () => clearInterval(timer);
  }, [visible]);

  const formatLearnerCount = (count) =>
    count === 0 ? "00,000" : count.toLocaleString();

  return (
    <section className={`lt-section ${visible ? "visible" : ""}`}>
      <div className="lt-container">
        <h2 className="lt-title">
          Trusted by{" "}
          <span className="lt-highlight">
            <span className="lt-count">{formatLearnerCount(learnerCount)}+</span>
          </span>{" "}
          Learners Worldwide
        </h2>
        <p className="lt-subtitle">
          Empowering professionals across 100+ countries with world-class tech and business skills.
        </p>

        {/* Metrics */}
        <div className="lt-metrics-bar">
          <div className="lt-metric-item">
            <span className="lt-metric-number">{companyCount}+</span>
            <p className="lt-metric-label">Hiring Partners</p>
          </div>
          <div className="lt-separator" />
          <div className="lt-metric-item">
            <span className="lt-metric-number">95%</span>
            <p className="lt-metric-label">Career Success Rate</p>
          </div>
          <div className="lt-separator" />
          <div className="lt-metric-item">
            <span className="lt-metric-number">2M+</span>
            <p className="lt-metric-label">Hours of Learning Delivered</p>
          </div>
        </div>

        {/* Ratings */}
        <h3 className="lt-ratings-title">Rated Excellent on Leading Platforms</h3>
        <div className="lt-ratings">
          {platforms.map((p, i) => (
            <div className="lt-rating-card" key={i}>
              <div className="lt-rating-score">
                {p.rating} <span className="lt-star">★</span>
              </div>
              <div className="lt-rating-logo">
                <img
                  src={p.logo}
                  alt={p.name}
                  onError={(e) =>
                    (e.target.src =
                      "https://via.placeholder.com/100x40?text=Logo")
                  }
                />
                <span>{p.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .lt-section {
          background: radial-gradient(circle at top right, #e0f2fe, #f8fafc);
          text-align: center;
          padding: 90px 20px;
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s ease-out;
        }
        .lt-section.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .lt-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .lt-title {
          font-size: 2.6rem;
          font-weight: 800;
          color: #0b4da3;
          margin-bottom: 10px;
        }
        .lt-subtitle {
          font-size: 1.2rem;
          color: #475569;
          margin-bottom: 50px;
        }
        .lt-highlight {
          color: #f59e0b;
        }
        .lt-count {
          font-variant-numeric: tabular-nums;
          font-weight: 900;
        }

        /* --- Metrics --- */
        .lt-metrics-bar {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 50px;
          flex-wrap: wrap;
          margin-bottom: 60px;
        }
        .lt-metric-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 180px;
        }
        .lt-metric-number {
          font-size: 3rem;
          font-weight: 800;
          color: #2563eb;
          line-height: 1.1;
        }
        .lt-metric-label {
          color: #475569;
          font-size: 1.05rem;
          margin-top: 5px;
        }
        .lt-separator {
          width: 1px;
          height: 70px;
          background: #cbd5e1;
        }

        /* --- Ratings --- */
        .lt-ratings-title {
          font-size: 1.6rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 25px;
        }
        .lt-ratings {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 35px;
          flex-wrap: wrap;
        }
        .lt-rating-card {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(11, 77, 163, 0.1);
          padding: 26px 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: all 0.3s ease;
        }
        .lt-rating-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 30px rgba(37, 99, 235, 0.15);
        }
        .lt-rating-score {
          font-size: 2.2rem;
          font-weight: 700;
          color: #0b4da3;
          display: flex;
          align-items: center;
          gap: 4px;
          margin-bottom: 10px;
        }
        .lt-star {
          color: #f59e0b;
        }
        .lt-rating-logo {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .lt-rating-logo img {
          height: 32px;
          width: auto;
          border-radius: 6px;
        }
        .lt-rating-logo span {
          color: #1e293b;
          font-weight: 600;
          font-size: 1rem;
        }

        /* --- Responsiveness --- */
        @media (max-width: 768px) {
          .lt-title { font-size: 2rem; }
          .lt-metric-number { font-size: 2.3rem; }
          .lt-metrics-bar { gap: 30px; }
          .lt-separator { display: none; }
          .lt-rating-card { padding: 22px 28px; }
        }
        @media (max-width: 480px) {
          .lt-section { padding: 60px 20px; }
          .lt-title { font-size: 1.8rem; }
          .lt-subtitle { font-size: 1rem; }
          .lt-metric-number { font-size: 2rem; }
        }
      `}</style>
    </section>
  );
}
