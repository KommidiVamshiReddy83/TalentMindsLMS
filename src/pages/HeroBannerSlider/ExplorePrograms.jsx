import React from "react";
import { useNavigate } from "react-router-dom";

export default function ExplorePrograms() {
  const navigate = useNavigate();

  const programs = [
    {
      id: "fullstack",
      title: "Full Stack Development",
      description:
        "Master front-end and back-end technologies. Learn React, Node.js, Express, and MongoDB by building real-world applications from scratch.",
      image:
        "https://img.freepik.com/free-photo/programming-background-collage_23-2149901782.jpg",
    },
    {
      id: "datascience",
      title: "Data Science & AI",
      description:
        "Explore data analytics, machine learning, and AI models. Learn Python, Pandas, TensorFlow, and gain expertise in predictive modeling.",
      image:
        "https://img.freepik.com/free-photo/artificial-intelligence-digital-transformation-concept_53876-124677.jpg",
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity & Ethical Hacking",
      description:
        "Understand the world of security and ethical hacking. Learn to identify threats, protect systems, and perform penetration testing safely.",
      image:
        "https://img.freepik.com/free-photo/cyber-security-concept-digital-padlock-with-binary-data_53876-104097.jpg",
    },
    {
      id: "cloud-devops",
      title: "Cloud Computing & DevOps",
      description:
        "Get hands-on experience with AWS, Azure, Docker, Kubernetes, and CI/CD pipelines. Build scalable and automated solutions for enterprises.",
      image:
        "https://img.freepik.com/free-photo/devops-engineer-working-computer-multiple-screens_482257-21656.jpg",
    },
  ];

  return (
    <section className="explore-page">
      <div className="explore-container">
        {/* Header */}
        <h1>Explore Our Learning Programs</h1>
        <p className="intro">
          At <strong>HG’s TalentMinds</strong>, we bridge the gap between
          learning and industry. Each program combines expert mentorship,
          hands-on projects, and globally recognized certifications to help you
          become career-ready.
        </p>

        {/* Programs Section */}
        <div className="program-grid">
          {programs.map((program) => (
            <div key={program.id} className="program-card">
              <img src={program.image} alt={program.title} />
              <div className="program-content">
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <button
                  onClick={() => navigate(`/programs/${program.id}`)}
                  className="join-btn"
                >
                  Join Program →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Highlights Section */}
        <div className="highlights">
          <div className="highlight">
            <h4>🎓 Industry-Recognized Certificates</h4>
            <p>
              Gain credentials trusted by top companies — boost your résumé and
              stand out in interviews.
            </p>
          </div>
          <div className="highlight">
            <h4>🧑‍🏫 Expert Mentorship</h4>
            <p>
              Learn from experienced mentors and industry professionals who
              guide your journey personally.
            </p>
          </div>
          <div className="highlight">
            <h4>⚙️ Real-World Projects</h4>
            <p>
              Apply what you learn through hands-on labs, assignments, and
              hackathons designed by experts.
            </p>
          </div>
          <div className="highlight">
            <h4>🌍 Community & Networking</h4>
            <p>
              Join a global network of learners, developers, and professionals.
              Grow, collaborate, and share ideas.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <h2>Start Your Learning Journey Today 🚀</h2>
          <p>
            Pick a program, build skills that matter, and become part of the
            HG’s TalentMinds tech community.
          </p>
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
      </div>

      {/* Internal CSS */}
      <style>{`
        .explore-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #fff7ed, #fde68a);
          font-family: 'Inter', sans-serif;
          padding: 60px 20px;
          display: flex;
          justify-content: center;
        }

        .explore-container {
          width: 100%;
          max-width: 1200px;
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          padding: 50px 40px;
          text-align: center;
        }

        h1 {
          font-size: 2.8rem;
          color: #1f2937;
          font-weight: 800;
          margin-bottom: 16px;
        }

        .intro {
          font-size: 1.15rem;
          color: #4b5563;
          max-width: 800px;
          margin: 0 auto 50px;
          line-height: 1.8;
        }

        .program-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .program-card {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          overflow: hidden;
          text-align: left;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          display: flex;
          flex-direction: column;
        }

        .program-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }

        .program-content {
          padding: 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .program-card h3 {
          color: #f59e0b;
          font-size: 1.3rem;
          margin-bottom: 10px;
          font-weight: 700;
        }

        .program-card p {
          color: #475569;
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .join-btn {
          background: #f59e0b;
          color: white;
          border: none;
          padding: 10px 18px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          align-self: flex-start;
          transition: background 0.25s ease, transform 0.2s ease;
        }

        .join-btn:hover {
          background: #d97706;
          transform: translateY(-2px);
        }

        .program-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 18px rgba(0,0,0,0.1);
        }

        .highlights {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          margin-bottom: 60px;
        }

        .highlight {
          background: #fffbea;
          border: 1px solid #fde68a;
          border-radius: 14px;
          padding: 20px;
          text-align: left;
        }

        .highlight h4 {
          color: #b45309;
          font-size: 1.15rem;
          margin-bottom: 10px;
        }

        .highlight p {
          color: #444;
          line-height: 1.6;
        }

        .cta-section {
          background: #fff7ed;
          border-radius: 16px;
          padding: 40px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .cta-section h2 {
          color: #1f2937;
          font-size: 2rem;
          margin-bottom: 16px;
        }

        .cta-section p {
          color: #4b5563;
          font-size: 1.1rem;
          margin-bottom: 30px;
        }

        .back-btn {
          background: #f59e0b;
          color: white;
          border: none;
          padding: 14px 32px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.25s ease, transform 0.2s ease;
        }

        .back-btn:hover {
          background: #d97706;
          transform: translateY(-2px);
        }

        @media (max-width: 600px) {
          h1 {
            font-size: 2rem;
          }
          .intro {
            font-size: 1rem;
          }
          .cta-section h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
