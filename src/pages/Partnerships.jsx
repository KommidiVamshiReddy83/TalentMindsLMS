import React from "react";

export default function Partnerships() {
  return (
    <section className="partner">
      <div className="container">
        <h1>Partner with TalentMinds</h1>
        <p className="subtitle">
          Collaborate with us to deliver next-generation learning experiences, research projects, and corporate training.
        </p>

        <div className="grid">
          <div className="card">
            <h3>🏫 Academic Partnerships</h3>
            <p>Integrate our programs with your university curriculum to make students job-ready from day one.</p>
          </div>
          <div className="card">
            <h3>🤝 Corporate Alliances</h3>
            <p>Co-create specialized upskilling pathways tailored to your company’s evolving skill demands.</p>
          </div>
          <div className="card">
            <h3>💡 Innovation Collaborations</h3>
            <p>Work with us on joint projects, research, and community events focused on future technologies.</p>
          </div>
        </div>

        <button className="cta-btn">Become a Partner →</button>
      </div>

      <style>{`
        .partner {
          min-height: 100vh;
          background: linear-gradient(135deg, #ede9fe, #ddd6fe);
          font-family: 'Inter', sans-serif;
          text-align: center;
          padding: 80px 20px;
        }
        h1 {
          color: #5b21b6;
          font-size: 2.6rem;
          font-weight: 800;
          margin-bottom: 16px;
        }
        .subtitle {
          color: #4b5563;
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
          box-shadow: 0 6px 20px rgba(91,33,182,0.08);
          text-align: left;
          transition: all 0.3s ease;
        }
        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 28px rgba(91,33,182,0.15);
        }
        h3 {
          color: #6d28d9;
          margin-bottom: 10px;
        }
        p {
          color: #334155;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        .cta-btn {
          background: #7c3aed;
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
          background: #6d28d9;
        }
      `}</style>
    </section>
  );
}
