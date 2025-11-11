import React from "react";
import { Link } from "react-router-dom";

// --- Utility function for badge styling ---
const getBadgeStyle = (badgeText) => {
  switch (badgeText.toLowerCase().trim()) {
    case "our talent pick":
      return {
        background: 'linear-gradient(90deg, #0b4da3 0%, #38bdf8 100%)', // Primary Blue
        icon: '⭐',
        color: '#fff',
      };
    case "top trainer":
      return {
        background: '#f59e42', // Orange/Gold
        icon: '🏆',
        color: '#212121',
      };
    case "trending":
      return {
        background: '#10b981', // Green
        icon: '🔥',
        color: '#fff',
      };
    case "new":
      return {
        background: '#ef4444', // Red
        icon: '✨',
        color: '#fff',
      };
    case "certificate included":
      return {
        background: '#8b5cf6', // Purple
        icon: '📜',
        color: '#fff',
      };
    case "live class":
      return {
        background: '#f97316', // Orange
        icon: '🔴',
        color: '#fff',
      };
    default:
      return {
        background: '#6b7280', // Default Grey
        icon: '🏷️',
        color: '#fff',
      };
  }
};

export default function CourseCard({ course }) {
  const studentsCount = course?.students ?? 0;
  const rating = course?.rating ?? 0;
  const price = course?.price ?? 0;
  const subtitle = course?.subtitle ?? "";
  const slug = course?.slug ?? "";
  const title = course?.title ?? "Untitled Course";
  const image = course?.image ?? "https://via.placeholder.com/300x160?text=No+Image";
  
  // Logic: Use 'badges' array if present, otherwise check 'ourTalent' for backward compatibility.
  const badges = course?.badges ?? (course?.ourTalent ? ["Our Talent Pick"] : []); 

  return (
    <article className="tm-course-card">
      <Link to={`/courses/${slug}`}>
        <div className="tm-thumb">
          <img src={image} alt={title} loading="lazy" />
          
          <div className="tm-badge-container">
            {badges.map((badge, index) => {
              const style = getBadgeStyle(badge);
              return (
                <span 
                  key={index} 
                  className="tm-badge" 
                  style={{ 
                    background: style.background, 
                    color: style.color 
                  }}
                >
                  {badge} <span className="tm-badge-icon">{style.icon}</span>
                </span>
              );
            })}
          </div>

        </div>
      </Link>

      <div className="tm-body">
        <h3 className="tm-title">
          <Link to={`/courses/${slug}`}>{title}</Link>
        </h3>
        <p className="tm-sub">{subtitle}</p>

        <div className="tm-meta">
          <span className="tm-rating">
            <span className="star">★</span> {rating}
          </span>
          <span className="tm-students">
            {studentsCount.toLocaleString()} learners
          </span>
        </div>

        <div className="tm-bottom">
          <span className={`tm-price ${price === 0 ? "free" : ""}`}>
            {price === 0 ? "Free" : `₹${price}`}
          </span>
          <Link to={`/courses/${slug}`} className="tm-enroll">
            View Course
          </Link>
        </div>
      </div>

      <style>{`
        .tm-course-card {
          border-radius: 12px;
          box-shadow: 0 2px 16px rgba(0,0,0,0.07);
          background: #fff;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.2s;
          height: 100%;
        }

        .tm-course-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 24px rgba(11,77,163,0.15);
        }

        .tm-thumb {
          position: relative;
          height: 180px;
          background: #f6f7fb;
          overflow: hidden;
        }

        .tm-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .tm-course-card:hover img {
          transform: scale(1.05);
        }

        /* BADGE CONTAINER STYLING */
        .tm-badge-container {
            position: absolute;
            top: 10px;
            left: 10px;
            display: flex;
            flex-wrap: wrap; 
            gap: 8px; 
            z-index: 10;
        }

        .tm-badge {
          /* Background and color are set via inline styles from getBadgeStyle */
          font-size: 13px;
          font-weight: 700;
          padding: 6px 12px;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
          display: flex;
          align-items: center;
          gap: 4px;
          letter-spacing: 0.3px;
          white-space: nowrap;
          text-transform: capitalize; 
        }

        .tm-badge-icon {
          font-size: 14px;
        }
        /* END BADGE STYLING */

        .tm-body {
          padding: 18px 16px 16px 16px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .tm-title {
          margin: 0 0 8px;
          font-size: 19px;
          color: #0b4da3;
          font-weight: 700;
          line-height: 1.3;
        }

        .tm-title a {
          color: inherit;
          text-decoration: none;
        }

        .tm-sub {
          margin: 0 0 12px;
          color: #4b5563;
          font-size: 15px;
          min-height: 36px;
        }

        .tm-meta {
          display: flex;
          gap: 12px;
          align-items: center;
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 14px;
        }

        .tm-rating {
          color: #f59e42;
          font-weight: 600;
        }

        .tm-students {
          color: #6b7280;
        }

        .tm-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
        }

        .tm-price {
          font-size: 17px;
          font-weight: 700;
          color: #0b4da3;
        }

        .tm-price.free {
          color: #059669;
        }

        .tm-enroll {
          display: inline-block;
          padding: 8px 18px;
          background: #0b4da3;
          color: #fff;
          border-radius: 6px;
          font-weight: 600;
          text-decoration: none;
          font-size: 15px;
          transition: background 0.2s ease;
        }

        .tm-enroll:hover {
          background: #083b7a;
        }
      `}</style>
    </article>
  );
}