import React from "react";

export default function HireTalent() {
  return (
    <section className="hire">
      <div className="container">
        <h1>Hire Industry-Ready Talent</h1>
        <p className="subtitle">
          Access pre-vetted professionals trained in the latest technologies through TalentMinds programs.
        </p>

        <div className="grid">
          <div className="card">
            <h3>✅ Verified Skills</h3>
            <p>All our graduates undergo project-based assessments ensuring real-world competency in modern tools.</p>
          </div>
          <div className="card">
            <h3>💼 Job-Ready Candidates</h3>
            <p>Hire candidates trained in full-stack development, data science, cloud, DevOps, and cybersecurity.</p>
          </div>
          <div className="card">
            <h3>⚙️ Simplified Hiring Process</h3>
            <p>Get curated candidate lists, schedule interviews, and onboard effortlessly through our portal.</p>
          </div>
          <div className="card">
            <h3>🌍 Global Talent Pool</h3>
            <p>Partner with TalentMinds to access skilled professionals from across regions and time zones.</p>
          </div>
        </div>

        <button className="cta-btn">Post a Job →</button>
      </div>

      <style>{`
        .hire {
          min-height: 100vh;
          background: linear-gradient(135deg, #ecfdf5, #d1fae5);
          font-family: 'Inter', sans-serif;
          text-align: center;
          padding: 80px 20px;
        }
        h1 {
          color: #065f46;
          font-size: 2.6rem;
          font-weight: 800;
          margin-bottom: 16px;
        }
        .subtitle {
          color: #374151;
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
          box-shadow: 0 6px 20px rgba(6,95,70,0.08);
          text-align: left;
          transition: all 0.3s ease;
        }
        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 28px rgba(6,95,70,0.15);
        }
        h3 {
          color: #047857;
          margin-bottom: 10px;
        }
        p {
          color: #334155;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        .cta-btn {
          background: #10b981;
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
          background: #059669;
        }
      `}</style>
    </section>
  );
}
