import React from "react";
import { useNavigate } from "react-router-dom";

export default function CloudDevOpsProgramDetails() {
  const navigate = useNavigate();

  return (
    <section className="program-details-page">
      <div className="program-details-container">
        <h1>Cloud Computing & DevOps Program</h1>

        <img
          src="https://img.freepik.com/free-photo/devops-engineer-working-computer-multiple-screens_482257-21656.jpg"
          alt="Cloud Computing & DevOps"
          className="program-banner"
        />

        <p className="intro">
          The <strong>HG’s TalentMinds Cloud & DevOps Program</strong> 
          empowers you to design scalable systems, manage deployments, 
          and automate workflows using modern cloud platforms like AWS, Azure, and Google Cloud.
        </p>

        <div className="details-grid">
          <div>
            <h3>☁️ What You’ll Learn</h3>
            <ul>
              <li>Cloud architecture principles (AWS, Azure, GCP)</li>
              <li>CI/CD pipelines using Jenkins and GitHub Actions</li>
              <li>Containerization with Docker and Kubernetes</li>
              <li>Infrastructure as Code (Terraform, CloudFormation)</li>
              <li>Monitoring & scaling using Prometheus and Grafana</li>
            </ul>
          </div>
          <div>
            <h3>🏆 Outcomes</h3>
            <ul>
              <li>Certified Cloud & DevOps Practitioner credentials</li>
              <li>Hands-on deployment experience across environments</li>
              <li>Practical project portfolio for interviews</li>
              <li>In-demand DevOps engineer skills</li>
            </ul>
          </div>
        </div>

        <button onClick={() => navigate("/explore-programs")} className="back-btn">
          ← Back to Explore Programs
        </button>
      </div>

      <style>{`
        .program-details-page {
          background: linear-gradient(135deg, #fff7ed, #fde68a);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          padding: 60px 20px;
          font-family: 'Inter', sans-serif;
        }

        .program-details-container {
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          padding: 50px;
          max-width: 1000px;
          width: 100%;
          text-align: center;
        }

        .program-banner {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 12px;
          margin: 20px 0 40px;
        }

        h1 {
          color: #1f2937;
          font-size: 2.4rem;
          font-weight: 800;
        }

        .intro {
          color: #4b5563;
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 40px;
        }

        .details-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          text-align: left;
        }

        h3 {
          color: #b45309;
          margin-bottom: 12px;
        }

        ul {
          color: #444;
          line-height: 1.8;
          padding-left: 20px;
        }

        .back-btn {
          margin-top: 40px;
          background: #f59e0b;
          color: white;
          border: none;
          padding: 12px 28px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.25s ease;
        }

        .back-btn:hover {
          background: #d97706;
        }

        @media (max-width: 600px) {
          h1 {
            font-size: 2rem;
          }
          .intro {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
