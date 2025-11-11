import React from "react";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../utils/scrollHelpers";

export default function ExploreProgramsCard({ title, desc, image, path }) {
  const navigate = useNavigate();

  const handleClick = () => {
    scrollToTop();
    navigate(path);
  };

  return (
    <div className="explore-programs-card" onClick={handleClick}>
      <img src={image} alt={title} className="explore-programs-card-image" />
      <div className="explore-programs-card-body">
        <h3 className="explore-programs-card-title">{title}</h3>
        <p className="explore-programs-card-desc">{desc}</p>
        <button className="explore-programs-card-btn">Explore →</button>
      </div>

      <style>{`
        .explore-programs-card {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .explore-programs-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.12);
        }

        .explore-programs-card-image {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }

        .explore-programs-card-body {
          padding: 20px;
          flex: 1;
        }

        .explore-programs-card-title {
          font-size: 1.4rem;
          color: #78350f;
          margin-bottom: 10px;
        }

        .explore-programs-card-desc {
          font-size: 1rem;
          color: #4b5563;
          margin-bottom: 16px;
        }

        .explore-programs-card-btn {
          background: #f59e0b;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 10px 20px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }

        .explore-programs-card-btn:hover {
          background: #d97706;
        }

        @media (max-width: 768px) {
          .explore-programs-card-image {
            height: 150px;
          }
        }
      `}</style>
    </div>
  );
}
