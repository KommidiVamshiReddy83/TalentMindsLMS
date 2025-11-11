import React from "react";
import { useNavigate } from "react-router-dom";

export default function CyberSecurityProgramDetails() {
  const navigate = useNavigate();

  return (
    <section className="program-details-page">
      <div className="program-details-container">
        <h1>Cybersecurity & Ethical Hacking Program</h1>

        <img
          src="https://img.freepik.com/free-photo/cyber-security-concept-digital-padlock-with-binary-data_53876-104097.jpg"
          alt="Cybersecurity & Ethical Hacking"
          className="program-banner"
        />

        <p className="intro">
          The <strong>HG’s TalentMinds Cybersecurity & Ethical Hacking Program</strong> 
          is built for aspiring ethical hackers and security professionals. 
          Learn to identify, prevent, and respond to cyber threats while protecting 
          organizations from real-world attacks.
        </p>

        <div className="details-grid">
          <div>
            <h3>🔐 What You’ll Learn</h3>
            <ul>
              <li>Foundations of cybersecurity and ethical hacking</li>
              <li>Network security, firewalls, and VPNs</li>
              <li>Vulnerability assessment & penetration testing (VAPT)</li>
              <li>Security tools like Metasploit, Wireshark, and Burp Suite</li>
              <li>Incident response and system hardening</li>
            </ul>
          </div>
          <div>
            <h3>🎯 Outcomes</h3>
            <ul>
              <li>Certified Ethical Hacker-level skills</li>
              <li>Ability to secure real-world applications and systems</li>
              <li>Hands-on cybersecurity project portfolio</li>
              <li>Job-ready skills for roles like SOC Analyst or Pen Tester</li>
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
