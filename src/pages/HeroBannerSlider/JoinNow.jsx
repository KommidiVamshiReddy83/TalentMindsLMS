import React from "react";
import { useNavigate } from "react-router-dom";

export default function JoinNow() {
  const navigate = useNavigate();

  return (
    <section className="page">
      <h1>Join the Global TalentMinds Community</h1>
      <p>Connect, learn, and grow with professionals and mentors around the world.</p>
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "instant" });
          navigate("/");
        }}
        className="back-btn"
      >
        ← Back to Home
      </button>

      <style>{`
        .page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #dbeafe, #bfdbfe);
          font-family: 'Inter', sans-serif;
          text-align: center;
          padding: 40px;
        }
        h1 {
          font-size: 2.8rem;
          color: #1e3a8a;
          margin-bottom: 20px;
        }
        p {
          max-width: 600px;
          font-size: 1.2rem;
          color: #374151;
        }
        .back-btn {
          margin-top: 40px;
          background: #2563eb;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
        }
        .back-btn:hover {
          background: #1d4ed8;
        }
      `}</style>
    </section>
  );
}
