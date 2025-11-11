import React, { useEffect, useRef } from "react";

export default function CorporateTraining() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null); // Ref for the image for interactive effects

  // --- Intersection Observer (Animation on Scroll) ---
  useEffect(() => {
    const section = sectionRef.current;
    // Fallback if ref is not yet assigned (though sectionRef.current is usually set on mount)
    if (!section) return; 

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) section.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );
    obs.observe(section);
    return () => obs.disconnect();
  }, []);

  // --- Dynamic Image Tilt Effect ---
  useEffect(() => {
    const handleMouseMove = (e) => {
      const imageWrapper = imageRef.current;
      if (imageWrapper) {
        const img = imageWrapper.querySelector('img');
        const rect = imageWrapper.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        
        // Tilt the image on hover for a 3D effect
        img.style.transform = `scale(1.05) rotateX(${-y * 5}deg) rotateY(${x * 5}deg)`;
        
        // Move the internal glow slightly
        const glow = imageWrapper.querySelector('.ct-img-glow');
        glow.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
      }
    };

    const handleMouseLeave = () => {
      const imageWrapper = imageRef.current;
      if (imageWrapper) {
        const img = imageWrapper.querySelector('img');
        img.style.transform = `scale(1.01) rotateX(0deg) rotateY(0deg)`;
        
        const glow = imageWrapper.querySelector('.ct-img-glow');
        glow.style.transform = `translate(0, 0)`;
      }
    };

    const currentImageRef = imageRef.current;
    if (currentImageRef) {
      currentImageRef.addEventListener("mousemove", handleMouseMove);
      currentImageRef.addEventListener("mouseleave", handleMouseLeave);
      // Set initial state for powerful appearance
      const img = currentImageRef.querySelector('img');
      img.style.transform = `scale(1.01)`;
    }

    return () => {
      if (currentImageRef) {
        currentImageRef.removeEventListener("mousemove", handleMouseMove);
        currentImageRef.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const corporateTrainingImg = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1000&h=700&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <section ref={sectionRef} className="ct-section">
      <div className="ct-overlay"></div>
      <div className="ct-container">
        <div className="ct-content">
          <h2 className="ct-title">
            Unleash Potential with <span className="highlight-text">HG's Talent Minds Everywhere</span>
          </h2>
          <p className="ct-subtitle">
            Instantly transform your organization with **hyper-personalized** corporate training.
            Our expert-led, outcome-driven programs deliver a guaranteed ROI by focusing on 
            **measurable business objectives** and future-proofing your workforce.
          </p>

          <div className="ct-features">
            <div className="ct-feature">
              <span>🚀</span> Guaranteed ROI & Measurable Outcomes
            </div>
            <div className="ct-feature">
              <span>🧠</span> AI-Driven Personalization
            </div>
            <div className="ct-feature">
              <span>💼</span> Executive Skill Acceleration
            </div>
          </div>

          <button className="ct-btn">Start Your Transformation →</button>
        </div>

        <div ref={imageRef} className="ct-image">
          <div className="ct-img-glow"></div>
          <img
            src={corporateTrainingImg}
            alt="Teams collaborating in a modern office, representing corporate training and upskilling"
          />
        </div>
      </div>

      <style>{`
        .ct-section {
          position: relative;
          /* Deeper, more aggressive blue gradient */
          background: linear-gradient(135deg, #0b1e3a 0%, #1e3a8a 50%, #2563eb 100%);
          color: #fff;
          padding: 120px 20px; /* More vertical space */
          overflow: hidden;
          opacity: 0;
          transform: translateY(80px);
          transition: all 1.2s cubic-bezier(0.2, 0.8, 0.2, 1); /* Smoother, more dramatic transition */
        }

        .ct-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .ct-overlay {
          position: absolute;
          inset: 0;
          /* Subtler, more concentrated central glow */
          background: radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, transparent 65%);
          z-index: 0;
        }

        .ct-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1300px; /* Wider container */
          margin: 0 auto;
          flex-wrap: wrap;
          gap: 60px; /* Larger gap */
          position: relative;
          z-index: 1;
        }

        .ct-content {
          flex: 1;
          min-width: 320px;
        }

        .ct-title {
          font-size: 3.2rem; /* Larger, bolder title */
          font-weight: 900;
          margin-bottom: 25px;
          line-height: 1.15;
          text-shadow: 0 4px 10px rgba(0,0,0,0.3); /* Add depth to title */
        }

        .highlight-text {
          background: linear-gradient(90deg, #fde047 0%, #fbbf24 100%); /* Brighter gold highlight */
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ct-subtitle {
          font-size: 1.3rem; /* Larger subtitle */
          color: #e0e7ff;
          margin-bottom: 50px; /* More spacing */
          max-width: 650px;
          line-height: 1.7;
        }
        
        .ct-subtitle strong {
            font-weight: 700;
            color: #fff; /* Ensure bold text stands out */
        }

        .ct-features {
          display: flex;
          flex-wrap: wrap;
          gap: 20px; /* Larger gap for features */
          margin-bottom: 50px;
        }

        .ct-feature {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 10px; /* More rounded */
          padding: 12px 20px; /* Larger padding */
          font-weight: 700;
          font-size: 1.05rem;
          color: #facc15;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.4s ease;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        .ct-feature:hover {
          transform: translateY(-3px) scale(1.02); /* More dynamic hover */
          background: rgba(255,255,255,0.15);
          box-shadow: 0 8px 15px rgba(0,0,0,0.2);
        }

        .ct-btn {
          background: linear-gradient(90deg, #f59e42 0%, #fbbf24 100%);
          color: #0b1e3a; /* Darker text for high contrast */
          padding: 18px 50px; /* Larger button */
          border: none;
          border-radius: 12px;
          font-weight: 800;
          font-size: 1.2rem;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(0,0,0,0.3), 0 0 40px rgba(255, 191, 0, 0.4); /* Stronger shadow/glow */
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          text-transform: uppercase;
        }

        .ct-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.4), 0 0 50px rgba(255, 215, 0, 0.6);
        }

        .ct-image {
          flex: 1;
          min-width: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          /* Crucial for 3D/tilt effect */
          perspective: 1000px;
          padding: 20px; /* Padding for the glow to breathe */
        }

        .ct-img-glow {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 16px;
            background: rgba(255, 191, 0, 0.2); /* Soft internal glow color */
            filter: blur(40px);
            opacity: 0.6;
            transition: transform 0.4s ease;
            z-index: 1;
        }

        .ct-image img {
          position: relative;
          z-index: 2;
          width: 550px; /* Larger image */
          max-width: 100%;
          border-radius: 18px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.5); /* Stronger shadow */
          border: 4px solid rgba(255,255,255,0.2); /* More prominent border */
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          background: #333; /* Dark background for empty space */
          will-change: transform;
          transform-style: preserve-3d; /* Enable 3D rotation */
        }

        /* Responsive Adjustments */
        @media (max-width: 1024px) {
          .ct-title { font-size: 2.8rem; }
          .ct-subtitle { font-size: 1.15rem; }
          .ct-image img { width: 450px; }
        }

        @media (max-width: 900px) {
          .ct-container { flex-direction: column; text-align: center; }
          .ct-title { font-size: 2.5rem; }
          .ct-subtitle { font-size: 1.1rem; margin: 0 auto 35px; }
          .ct-features { justify-content: center; }
          .ct-image { padding: 0; margin-top: 40px; }
          .ct-image img { width: 90%; }
          .ct-img-glow { display: none; } /* Hide 3D elements on small screens for performance/simplicity */
        }

        @media (max-width: 600px) {
          .ct-section { padding: 80px 15px; }
          .ct-title { font-size: 2rem; }
          .ct-subtitle { font-size: 1rem; }
          .ct-btn { width: 100%; padding: 16px 0; font-size: 1.1rem; }
          .ct-feature { font-size: 0.95rem; }
        }
      `}</style>
    </section>
  );
}
