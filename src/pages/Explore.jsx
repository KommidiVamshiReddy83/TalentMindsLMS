import React, { useState } from "react";
import { Link } from "react-router-dom";

const allCourses = [ /* ... your course data remains unchanged ... */ ];

export default function Explore() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("popular");
  const [visible, setVisible] = useState(4);

  const categories = ["All", "Frontend", "Backend", "Design", "Data Science"];

  let filtered = allCourses.filter(
    (c) =>
      (category === "All" || c.category === category) &&
      c.title.toLowerCase().includes(query.toLowerCase())
  );

  if (sort === "price-low") filtered.sort((a, b) => a.price - b.price);
  else if (sort === "price-high") filtered.sort((a, b) => b.price - a.price);
  else if (sort === "rating") filtered.sort((a, b) => b.rating - a.rating);
  else if (sort === "popular") filtered.sort((a, b) => b.students - a.students);

  const displayedCourses = filtered.slice(0, visible);

  return (
    <div className="explore-page">
      {/* ===== HERO ===== */}
      {/* ... hero + filters remain same ... */}

      {/* ===== COURSES ===== */}
      {/* ... courses list remains same ... */}

      {/* ===== WHY TALENTMINDS ===== */}
      <section className="why-talentminds wrap">
        <h2>Why Choose HG’s TalentMinds?</h2>
        <p className="intro">
          In a world full of online learning platforms, <strong>TalentMinds stands apart</strong> —
          blending technology, mentorship, and career growth into a complete learning journey.
          We don’t just teach skills — we help you transform your career.
        </p>

        <div className="why-grid">
          <div className="why-card">
            <h3>🎓 Expert-Led Learning</h3>
            <p>
              Learn directly from top mentors who work at leading tech companies.
              Every course is designed and reviewed by industry professionals — so you’re always learning what truly matters.
            </p>
          </div>
          <div className="why-card">
            <h3>🧩 Real-World Projects</h3>
            <p>
              Apply your knowledge on real, job-ready projects and case studies. Build a portfolio that proves your skills to employers.
            </p>
          </div>
          <div className="why-card">
            <h3>🚀 Career Acceleration</h3>
            <p>
              Get resume reviews, interview prep, and direct job referrals through our <strong>Career Launch Program</strong>.
            </p>
          </div>
          <div className="why-card">
            <h3>🌍 Global Learner Network</h3>
            <p>
              Join 60,000+ learners and mentors across 50+ countries via our TalentMinds Community Hub.
            </p>
          </div>
          <div className="why-card">
            <h3>💡 Personalized Learning Path</h3>
            <p>
              Adaptive learning plans based on your goals — beginner, upskilling professional, or career switcher.
            </p>
          </div>
          <div className="why-card">
            <h3>🏆 Recognized Certification</h3>
            <p>
              Earn globally recognized certificates endorsed by hiring partners to showcase your expertise.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      {/* ... CTA section stays same ... */}

      <style>{`
        /* ... all your existing styles ... */

        /* === Why TalentMinds New Styles === */
        .why-talentminds {
          background: linear-gradient(135deg, #ecfeff, #f0fdfa);
          padding: 80px 20px;
          border-radius: 40px;
          text-align: center;
          margin-top: 60px;
        }
        .why-talentminds h2 { color: #0f172a; font-size: 2rem; font-weight: 800; margin-bottom: 20px; }
        .why-talentminds .intro { color: #475569; max-width: 700px; margin: 0 auto 50px; font-size: 1.1rem; line-height: 1.8; }
        .why-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; }
        .why-card { background: white; padding: 24px; border-radius: 16px; box-shadow: 0 8px 20px rgba(0,0,0,0.05); transition: transform .25s ease, box-shadow .25s ease; text-align: left; }
        .why-card:hover { transform: translateY(-6px); box-shadow: 0 12px 28px rgba(0,0,0,0.08); }
        .why-card h3 { color: #0ea5a7; margin-bottom: 10px; font-size: 1.15rem; font-weight: 700; }
        .why-card p { color: #475569; line-height: 1.6; font-size: 0.97rem; }
      `}</style>
    </div>
  );
}
