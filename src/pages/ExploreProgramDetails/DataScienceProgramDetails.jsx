import React from "react";
import { useNavigate } from "react-router-dom";

export default function DataScienceProgramDetails() {
  const navigate = useNavigate();

  return (
    <section className="program-details-page">
      <div className="program-details-container">
        <h1>Data Science & AI Program</h1>
        <img
          src="https://img.freepik.com/free-photo/artificial-intelligence-digital-transformation-concept_53876-124677.jpg"
          alt="Data Science & AI"
          className="program-banner"
        />
        <p className="intro">
          Master the world of <strong>Data Science and Artificial Intelligence</strong> through HG’s TalentMinds.
          Learn Python, Pandas, TensorFlow, and advanced machine learning algorithms to turn data into insights.
        </p>

        <div className="details-grid">
          <div>
            <h3>📊 What You’ll Learn</h3>
            <ul>
              <li>Python programming & data manipulation</li>
              <li>Machine Learning, Deep Learning, and NLP</li>
              <li>Data visualization using Matplotlib & Seaborn</li>
              <li>Model deployment and performance tracking</li>
            </ul>
          </div>
          <div>
            <h3>🎓 Outcomes</h3>
            <ul>
              <li>Certified Data Science professional</li>
              <li>Hands-on ML projects and Kaggle-ready portfolio</li>
              <li>Career support and interview preparation</li>
            </ul>
          </div>
        </div>

        <button onClick={() => navigate("/explore-programs")} className="back-btn">
          ← Back to Explore Programs
        </button>
      </div>

      <style>{`
        .program-details-page { background: linear-gradient(135deg,#fff7ed,#fde68a);min-height:100vh;display:flex;justify-content:center;padding:60px 20px;font-family:'Inter',sans-serif;}
        .program-details-container{background:#fff;border-radius:20px;box-shadow:0 8px 24px rgba(0,0,0,0.08);padding:50px;max-width:1000px;width:100%;text-align:center;}
        .program-banner{width:100%;height:300px;object-fit:cover;border-radius:12px;margin:20px 0 40px;}
        h1{color:#1f2937;font-size:2.4rem;font-weight:800;}
        .intro{color:#4b5563;font-size:1.1rem;line-height:1.8;margin-bottom:40px;}
        .details-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:30px;text-align:left;}
        h3{color:#b45309;margin-bottom:12px;}
        ul{color:#444;line-height:1.8;padding-left:20px;}
        .back-btn{margin-top:40px;background:#f59e0b;color:white;border:none;padding:12px 28px;border-radius:8px;font-weight:600;cursor:pointer;transition:background 0.25s ease;}
        .back-btn:hover{background:#d97706;}
      `}</style>
    </section>
  );
}
