import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const heroSlides = [
  {
    heading: "Get Certified. Get Ahead.",
    stats: [
      "8,000,000+ Careers advanced",
      "1,500+ Live classes every month",
      "85% Report career success",
    ],
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    primaryButton: "Explore Programs",
    secondaryButton: "For Businesses",
    primaryLink: "/explore-programs",
    secondaryLink: "/business",
  },
  {
    heading: "Advance Your Career With Professional Courses",
    stats: [
      "Learn from Industry Experts",
      "Flexible Online Learning",
      "Real-World Projects",
    ],
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
    primaryButton: "Browse Courses",
    secondaryButton: "Learn More",
    primaryLink: "/browse-all-courses", 
    secondaryLink: "/learn-more-about-us",
  },
  {
    heading: "Empower Your Team With Enterprise Learning",
    stats: [
      "Custom Learning Paths",
      "Analytics & Insights",
      "Dedicated Support",
    ],
    image:
      "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=1200&q=80",
    primaryButton: "Get Started",
    secondaryButton: "Learn More",
    primaryLink: "/business",
     secondaryLink: "/learn-more-about-us",
  },
];

export default function HeroBannerSlider() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);
  const [fade, setFade] = useState(false);

  // start the auto-slide timer
  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, []);

  function startTimer() {
    stopTimer();
    timerRef.current = setInterval(() => {
      goNext();
    }, 7000);
  }

  function stopTimer() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  // next slide with fade
  function goNext() {
    setFade(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
      setFade(false);
    }, 300);
  }

  // go to slide manually
  function goTo(index) {
    setFade(true);
    setTimeout(() => {
      setCurrent(index);
      setFade(false);
    }, 300);
  }

  const slide = heroSlides[current];

  return (
    <section
      className="hero-section"
      onMouseEnter={stopTimer}  // ✅ pause on hover
      onMouseLeave={startTimer} // ✅ resume on leave
    >
      <div className={`hero-wrapper ${fade ? "fade" : ""}`}>
        <div className="hero-left">
          <h1>{slide.heading}</h1>
          <ul className="hero-stats">
            {slide.stats.map((stat, i) => (
              <li key={i}>
                <span className="check">✔</span> {stat}
              </li>
            ))}
          </ul>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate(slide.primaryLink)}
            >
              {slide.primaryButton}
            </button>
            <button
              className="secondary-btn"
              onClick={() => navigate(slide.secondaryLink)}
            >
              {slide.secondaryButton}
            </button>
          </div>
        </div>

        <div className="hero-right">
          <img
            src={slide.image}
            alt={slide.heading}
            loading="lazy"
            onError={(e) =>
              (e.target.src =
                "https://via.placeholder.com/600x400?text=Image+Unavailable")
            }
          />
        </div>
      </div>

      <div className="hero-dots">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === current ? "active" : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      <style>{`
        .hero-section {
          width: 100%;
          background: #fff;
          overflow: hidden;
          padding: 60px 20px 40px;
          position: relative;
          margin-top:60px
        }

        .hero-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          transition: opacity 0.5s ease-in-out;
        }

        .hero-wrapper.fade {
          opacity: 0;
        }

        .hero-left {
          flex: 1;
          max-width: 550px;
        }

        .hero-left h1 {
          font-size: 2.8rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 24px;
          line-height: 1.2;
        }

        .hero-stats {
          list-style: none;
          margin: 0 0 28px;
          padding: 0;
          font-size: 1.1rem;
          color: #334155;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .check {
          color: #10b981;
          margin-right: 8px;
          font-weight: bold;
        }

        .hero-buttons {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .primary-btn {
          background: #2563eb;
          color: #fff;
          border: none;
          padding: 12px 24px;
          border-radius: 6px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .primary-btn:hover {
          background: #1d4ed8;
        }

        .secondary-btn {
          background: transparent;
          color: #2563eb;
          border: 2px solid #2563eb;
          padding: 12px 24px;
          border-radius: 6px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .secondary-btn:hover {
          background: #eff6ff;
        }

        .hero-right {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-right img {
          width: 100%;
          max-width: 540px;
          height: auto;
          min-height: 320px;
          object-fit: cover;
          border-radius: 12px;
          box-shadow: 0 6px 16px rgba(0,0,0,0.1);
          transition: transform 0.6s ease;
        }

        .hero-section:hover .hero-right img {
          transform: scale(1.03);
        }

        .hero-dots {
          margin-top: 24px;
          display: flex;
          justify-content: center;
          gap: 8px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 1px solid #cbd5e1;
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: #2563eb;
          border-color: #2563eb;
        }

        @media (max-width: 900px) {
          .hero-wrapper {
            flex-direction: column-reverse;
            text-align: center;
          }
          .hero-right img {
            max-width: 420px;
            min-height: 260px;
          }
          .hero-left h1 {
            font-size: 2rem;
          }
          .hero-stats {
            align-items: center;
          }
        }

        @media (max-width: 480px) {
          .hero-left h1 {
            font-size: 1.6rem;
          }
          .primary-btn, .secondary-btn {
            font-size: 0.9rem;
            padding: 10px 18px;
          }
        }
      `}</style>
    </section>
  );
}
