import React, { useEffect, useState } from "react";

const employers = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/Accenture.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Deloitte", logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg" },
  { name: "KPMG", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/KPMG_logo.svg" },
  { name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/5/52/Tata_Consultancy_Services_Logo.svg" },
  { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Infosys_logo.svg" },
  { name: "Capgemini", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Capgemini_201x_logo.svg" },
];

export default function TopEmployers() {
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    const items = document.querySelectorAll(".te-logo-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    items.forEach((item) => observer.observe(item));
  }, []);

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => [...prev, index]);
  };

  return (
    <section className="te-section">
      <div className="te-container">
        <h2 className="te-title">Our Learners Work With Leading Global Employers</h2>
        <p className="te-subtitle">
          Trusted by recruiters and global enterprises for job-ready, project-proven talent.
        </p>

        {/* Desktop Grid */}
        <div className="te-logos-grid">
          {employers.map((emp, i) => (
            <div className="te-logo-card fade-up" key={i}>
              {!loadedImages.includes(i) && <div className="te-logo-skeleton" />}
              <img
                src={emp.logo}
                alt={emp.name}
                loading="lazy"
                onLoad={() => handleImageLoad(i)}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://via.placeholder.com/120x60?text=${emp.name}`;
                }}
                style={{ display: loadedImages.includes(i) ? "block" : "none" }}
              />
            </div>
          ))}
        </div>

        {/* Mobile Scrolling Strip */}
        <div className="te-scroll-container">
          <div className="te-scroll-track">
            {employers.concat(employers).map((emp, i) => (
              <div className="te-scroll-logo" key={i}>
                <img
                  src={emp.logo}
                  alt={emp.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://via.placeholder.com/120x60?text=${emp.name}`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* --- Section --- */
        .te-section {
          background: linear-gradient(180deg, #ffffff 0%, #f0f5fa 100%);
          padding: 90px 20px;
          text-align: center;
          overflow: hidden;
        }

        .te-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .te-title {
          font-size: 2.4rem;
          font-weight: 800;
          color: #0b4da3;
          margin-bottom: 10px;
        }

        .te-subtitle {
          color: #475569;
          font-size: 1.1rem;
          margin-bottom: 50px;
        }

        /* --- Grid (Desktop) --- */
        .te-logos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 35px;
          justify-items: center;
          align-items: center;
          transition: all 0.3s ease;
        }

        .te-logo-card {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          width: 160px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.6s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .te-logo-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .te-logo-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(11, 77, 163, 0.15);
          border-color: #2563eb;
        }

        .te-logo-card img {
          max-width: 120px;
          max-height: 60px;
          object-fit: contain;
          filter: grayscale(100%);
          opacity: 0.7;
          transition: all 0.3s ease;
        }

        .te-logo-card:hover img {
          filter: grayscale(0%);
          opacity: 1;
        }

        /* --- Skeleton --- */
        .te-logo-skeleton {
          position: absolute;
          width: 60%;
          height: 30%;
          background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%);
          background-size: 200% 100%;
          border-radius: 8px;
          animation: shimmer 1.5s infinite;
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        /* --- Mobile Scrolling --- */
        .te-scroll-container {
          display: none;
          position: relative;
          overflow: hidden;
          margin-top: 40px;
        }

        .te-scroll-track {
          display: flex;
          align-items: center;
          animation: scrollTrack 25s linear infinite;
          width: max-content;
        }

        @keyframes scrollTrack {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .te-scroll-logo {
          flex: 0 0 auto;
          margin: 0 25px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .te-scroll-logo img {
          max-height: 60px;
          filter: grayscale(100%);
          opacity: 0.7;
          transition: all 0.3s ease;
        }

        .te-scroll-logo img:hover {
          filter: grayscale(0%);
          opacity: 1;
        }

        /* --- Responsive --- */
        @media (max-width: 850px) {
          .te-logos-grid { display: none; }
          .te-scroll-container { display: block; }
          .te-title { font-size: 2rem; }
        }

        @media (max-width: 480px) {
          .te-section { padding: 60px 15px; }
          .te-scroll-logo img { max-height: 50px; }
        }
      `}</style>
    </section>
  );
}
