import React from "react";
import { useNavigate } from "react-router-dom";

export default function BrowseCourses() {
  const navigate = useNavigate();

  const courses = [
    {
      title: "Full Stack Development Bootcamp",
      desc: "Become a complete web developer. Learn HTML, CSS, React, Node.js, Express & MongoDB through hands-on projects.",
      duration: "6 Months",
      level: "Beginner to Advanced",
      learners: "12,000+ learners",
    },
    {
      title: "Data Science & Machine Learning Program",
      desc: "Master Python, Pandas, Machine Learning, Deep Learning, and AI — with practical real-world datasets.",
      duration: "8 Months",
      level: "Intermediate",
      learners: "9,500+ learners",
    },
    {
      title: "Cybersecurity & Ethical Hacking Certification",
      desc: "Understand network security, penetration testing, risk management, and tools like Wireshark & Metasploit.",
      duration: "5 Months",
      level: "Beginner to Pro",
      learners: "7,800+ learners",
    },
    {
      title: "Cloud Computing & DevOps Mastery",
      desc: "Work with AWS, Docker, Kubernetes, Terraform, and CI/CD pipelines to automate enterprise deployments.",
      duration: "7 Months",
      level: "Intermediate to Advanced",
      learners: "6,200+ learners",
    },
  ];

  return (
    <section className="browse-page">
      <div className="browse-container">
        <h1>Browse Our Courses</h1>
        <p className="browse-subtitle">
          Choose from our top-rated career programs designed by industry experts and delivered through live, mentor-led learning.
        </p>

        <div className="course-grid">
          {courses.map((course, i) => (
            <div className="course-card" key={i}>
              <h3>{course.title}</h3>
              <p>{course.desc}</p>
              <div className="meta">
                <span>⏳ {course.duration}</span>
                <span>📈 {course.level}</span>
                <span>👩‍🎓 {course.learners}</span>
              </div>
              <button className="enroll-btn" onClick={() => navigate("/login")}>
                Enroll Now →
              </button>
            </div>
          ))}
        </div>

        <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "instant" });
          navigate("/");
        }}
        className="back-btn"
      >
        ← Back to Home
      </button>
      </div>

      <style>{`
        .browse-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #eef2ff, #e0e7ff);
          font-family: 'Inter', sans-serif;
          padding: 80px 20px;
          display: flex;
          justify-content: center;
          text-align: center;
        }
        .browse-container {
          max-width: 1150px;
          width: 100%;
        }
        h1 {
          font-size: 2.6rem;
          font-weight: 800;
          color: #0b4da3;
          margin-bottom: 16px;
        }
        .browse-subtitle {
          font-size: 1.1rem;
          color: #475569;
          max-width: 700px;
          margin: 0 auto 50px;
        }
        .course-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 30px;
        }
        .course-card {
          background: #fff;
          padding: 25px 20px;
          border-radius: 14px;
          box-shadow: 0 6px 20px rgba(11,77,163,0.08);
          text-align: left;
          transition: all 0.3s ease;
        }
        .course-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 28px rgba(37,99,235,0.15);
        }
        .course-card h3 {
          color: #0b4da3;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .course-card p {
          color: #334155;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 16px;
        }
        .meta {
          display: flex;
          flex-direction: column;
          gap: 4px;
          color: #64748b;
          font-size: 0.9rem;
          margin-bottom: 12px;
        }
        .enroll-btn {
          background: #2563eb;
          color: white;
          border: none;
          padding: 10px 18px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .enroll-btn:hover {
          background: #1d4ed8;
        }
        .back-btn {
          margin-top: 50px;
          background: #0b4da3;
          color: white;
          border: none;
          padding: 12px 28px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
        }
        .back-btn:hover {
          background: #09377a;
        }
        @media (max-width: 600px) {
          h1 { font-size: 2rem; }
          .course-card { padding: 20px; }
        }
      `}</style>
    </section>
  );
}
