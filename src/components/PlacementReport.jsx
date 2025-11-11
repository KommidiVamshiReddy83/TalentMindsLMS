import React from "react";

export default function PlacementReport() {
  const partners = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Google_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/1/19/Infosys_logo.svg",
  ];

  const alumni = [
    {
      name: "Ritika Sharma",
      role: "Data Analyst, Amazon",
      story:
        "After completing the Data Science program, Ritika transitioned from a teaching role to a data analytics position at Amazon with a 120% salary increase.",
    },
    {
      name: "Mohammed Arif",
      role: "AI Engineer, Microsoft",
      story:
        "Arif upskilled through the AI & ML Essentials course, securing an AI Engineer position at Microsoft within 5 months of graduation.",
    },
    {
      name: "Priya Menon",
      role: "UX Designer, IBM",
      story:
        "Priya completed the UI/UX specialization and now leads design initiatives at IBM’s innovation hub in Bengaluru.",
    },
  ];

  return (
    <section className="placement-page">
      <div className="container">
        <h1>TalentMinds Placement & Career Success Report</h1>
        <p className="subtitle">
          Discover the measurable impact of HG’s TalentMinds learning programs — where real skills meet real outcomes.
        </p>

        {/* Outcome Metrics */}
        <div className="metrics">
          <div className="metric">
            <h3>₹9.6 LPA</h3>
            <p>Average CTC for placed learners</p>
          </div>
          <div className="metric">
            <h3>92%</h3>
            <p>Placement rate within 6 months</p>
          </div>
          <div className="metric">
            <h3>200+</h3>
            <p>Active hiring partners</p>
          </div>
          <div className="metric">
            <h3>1.2M+</h3>
            <p>Careers accelerated globally</p>
          </div>
        </div>

        {/* Alumni Stories */}
        <h2>Alumni Success Stories</h2>
        <div className="alumni-grid">
          {alumni.map((a, i) => (
            <div key={i} className="alumni-card">
              <h4>{a.name}</h4>
              <p className="role">{a.role}</p>
              <p className="story">“{a.story}”</p>
            </div>
          ))}
        </div>

        {/* Hiring Partners */}
        <h2>Our Top Hiring Partners</h2>
        <div className="logos">
          {partners.map((p, i) => (
            <img key={i} src={p} alt="Partner logo" />
          ))}
        </div>

        <button
          className="download-btn"
          onClick={() =>
            alert("📄 Downloading the official 2025 Placement Report...")
          }
        >
          Download Full Placement Report (PDF) →
        </button>
      </div>

      <style>{`
        .placement-page {
          background: #f8fafc;
          font-family: 'Inter', sans-serif;
          padding: 80px 20px;
          text-align: center;
        }
        .container { max-width: 1150px; margin: 0 auto; }
        h1 { color: #0b4da3; font-size: 2.6rem; font-weight: 800; margin-bottom: 10px; }
        .subtitle { color: #475569; font-size: 1.1rem; margin-bottom: 50px; }

        .metrics {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
          margin-bottom: 70px;
        }
        .metric {
          background: #fff;
          border-radius: 14px;
          padding: 30px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.08);
        }
        .metric h3 { color: #2563eb; font-size: 2rem; font-weight: 800; }
        .metric p { color: #475569; margin-top: 4px; }

        .alumni-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          margin: 40px 0 60px;
        }
        .alumni-card {
          background: #fff;
          border-radius: 14px;
          padding: 25px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.06);
          text-align: left;
        }
        .alumni-card h4 { color: #0b4da3; margin-bottom: 4px; }
        .role { color: #2563eb; font-weight: 600; margin-bottom: 8px; }
        .story { color: #475569; font-style: italic; }

        .logos {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 40px;
          margin: 30px 0 60px;
        }
        .logos img {
          width: 120px;
          height: auto;
          filter: grayscale(1);
          opacity: 0.9;
          transition: all 0.3s ease;
        }
        .logos img:hover { filter: grayscale(0); opacity: 1; }

        .download-btn {
          background: #2563eb;
          color: white;
          border: none;
          padding: 16px 38px;
          border-radius: 10px;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 6px 18px rgba(37,99,235,0.4);
        }
        .download-btn:hover {
          background: #1d4ed8;
          transform: translateY(-3px);
        }

        @media (max-width: 700px) {
          h1 { font-size: 2rem; }
          .metric h3 { font-size: 1.6rem; }
        }
      `}</style>
    </section>
  );
}
