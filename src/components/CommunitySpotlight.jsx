import React, { useEffect } from "react";

export default function CommunitySpotlight() {
  useEffect(() => {
    const items = document.querySelectorAll(".cs2-grid img");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );
    items.forEach((img) => observer.observe(img));
  }, []);

  return (
    <section className="cs2-section">
      <div className="cs2-container">
        <h2 className="cs2-title">A Thriving Community of Learners</h2>
        <p className="cs2-subtitle">
          Connect, collaborate, and grow with thousands of learners and mentors across the world.
        </p>

        <div className="cs2-grid">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=60"
            alt="Collaborative learners"
          />
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=60"
            alt="Networking learners"
          />
          <img
            src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=900&q=60"
            alt="Learning together"
          />
        </div>

        <button className="cs2-btn">Join Our Community →</button>
      </div>

      <style>{`
        .cs2-section {
          background: linear-gradient(180deg, #f9fafc 0%, #eef4ff 100%);
          text-align: center;
          padding: 90px 20px;
          overflow: hidden;
        }
        .cs2-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .cs2-title {
          font-size: 2.3rem;
          font-weight: 800;
          color: #0b4da3;
          margin-bottom: 15px;
        }
        .cs2-subtitle {
          color: #475569;
          margin-bottom: 40px;
          font-size: 1.1rem;
        }
        .cs2-grid {
          display: flex;
          justify-content: center;
          gap: 24px;
          flex-wrap: wrap;
          margin-bottom: 50px;
        }
        .cs2-grid img {
          width: 340px;
          height: 220px;
          object-fit: cover;
          border-radius: 14px;
          box-shadow: 0 8px 24px rgba(11,77,163,0.1);
          transform: translateY(40px);
          opacity: 0;
          transition: all 0.8s ease;
        }
        .cs2-grid img.visible {
          transform: translateY(0);
          opacity: 1;
        }
        .cs2-grid img:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(37,99,235,0.2);
        }
        .cs2-btn {
          background: linear-gradient(90deg, #0b4da3 0%, #2563eb 100%);
          color: #fff;
          padding: 14px 34px;
          border: none;
          border-radius: 8px;
          font-weight: 700;
          font-size: 1.05rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .cs2-btn:hover {
          background: #083b7a;
          transform: translateY(-2px);
        }

        @media (max-width: 900px) {
          .cs2-grid img {
            width: 300px;
            height: 200px;
          }
        }
        @media (max-width: 600px) {
          .cs2-title { font-size: 2rem; }
          .cs2-grid img { width: 90%; height: auto; }
        }
      `}</style>
    </section>
  );
}
