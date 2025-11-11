import React from "react";

export default function Scholarships() {
  return (
    <section className="scholar">
      <div className="container">
        <h1>Scholarships & Financial Aid</h1>
        <p className="subtitle">
          TalentMinds believes in accessible learning for all. Explore our merit-based scholarships and financial assistance options.
        </p>

        <div className="grid">
          <div className="card">
            <h3>🏅 Merit-Based Scholarships</h3>
            <p>Earn up to 50% fee waiver based on your academic performance or professional achievements.</p>
          </div>
          <div className="card">
            <h3>🌍 Women in Tech Initiative</h3>
            <p>Encouraging women professionals to build careers in technology through specialized learning support.</p>
          </div>
          <div className="card">
            <h3>💸 Financial Assistance</h3>
            <p>Easy payment plans and no-cost EMI options available for all major programs.</p>
          </div>
        </div>

        <button className="cta-btn">Apply Now →</button>
      </div>

      <style>{`
        .scholar {
          min-height: 100vh;
          background: linear-gradient(135deg, #fef3c7, #fde68a);
          font-family: 'Inter', sans-serif;
          text-align: center;
          padding: 80px 20px;
        }
        h1 {
          color: #92400e;
          font-size: 2.6rem;
          font-weight: 800;
          margin-bottom: 16px;
        }
        .subtitle {
          color: #78350f;
          max-width: 750px;
          margin: 0 auto 60px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }
        .card {
          background: #fff;
          padding: 28px 20px;
          border-radius: 16px;
          box-shadow: 0 6px 20px rgba(146,64,14,0.08);
          text-align: left;
          transition: all 0.3s ease;
        }
        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 28px rgba(146,64,14,0.15);
        }
        h3 {
          color: #b45309;
          margin-bottom: 10px;
        }
        p {
          color: #334155;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        .cta-btn {
          background: #f59e0b;
          color: white;
          border: none;
          padding: 14px 30px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .cta-btn:hover {
          background: #d97706;
        }
      `}</style>
    </section>
  );
}
