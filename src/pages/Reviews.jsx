import React from "react";

export default function Reviews() {
  const testimonials = [
    {
      name: "Aarav Gupta",
      role: "Software Engineer at Infosys",
      review:
        "TalentMinds helped me transition from a non-tech background into a software engineering career. The mentors were truly world-class!",
    },
    {
      name: "Priya Sharma",
      role: "Data Analyst at Amazon",
      review:
        "The Data Science program gave me real-world exposure through projects and case studies. I could apply what I learned at work instantly.",
    },
    {
      name: "Rohit Menon",
      role: "DevOps Engineer at Capgemini",
      review:
        "Their DevOps course and placement support helped me land a job within 3 months of completion. Thank you TalentMinds!",
    },
  ];

  return (
    <section className="reviews">
      <div className="container">
        <h1>Learner Success Stories</h1>
        <p className="subtitle">
          Hear from professionals who transformed their careers through our mentor-led learning experience.
        </p>

        <div className="grid">
          {testimonials.map((t, i) => (
            <div className="card" key={i}>
              <p className="quote">“{t.review}”</p>
              <h3>{t.name}</h3>
              <span>{t.role}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .reviews {
          min-height: 100vh;
          background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
          font-family: 'Inter', sans-serif;
          text-align: center;
          padding: 80px 20px;
        }
        h1 {
          color: #0b4da3;
          font-size: 2.6rem;
          font-weight: 800;
          margin-bottom: 16px;
        }
        .subtitle {
          color: #475569;
          max-width: 750px;
          margin: 0 auto 60px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .card {
          background: #fff;
          border-radius: 16px;
          padding: 28px 22px;
          box-shadow: 0 6px 20px rgba(11,77,163,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 28px rgba(37,99,235,0.15);
        }
        .quote {
          color: #334155;
          font-size: 1rem;
          font-style: italic;
          margin-bottom: 16px;
          line-height: 1.6;
        }
        h3 {
          color: #0b4da3;
          margin-bottom: 4px;
        }
        span {
          color: #64748b;
          font-size: 0.9rem;
        }
        @media (max-width: 600px) {
          h1 { font-size: 2rem; }
        }
      `}</style>
    </section>
  );
}
