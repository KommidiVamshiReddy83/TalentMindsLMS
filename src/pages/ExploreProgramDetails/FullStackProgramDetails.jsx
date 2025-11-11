import React from "react";

export default function FullStackProgramDetails() {
  return (
    <section className="program-details-page">
      <div className="program-details-container">
        <h1>Full Stack Web Development Program</h1>
        <img
          src="https://img.freepik.com/free-photo/programming-background-collage_23-2149901785.jpg"
          alt="Full Stack Development"
          className="program-banner"
        />
        <p className="intro">
          Become a <strong>Full Stack Developer</strong> through HG’s TalentMinds. 
          Learn to build complete web applications using modern frameworks like React, Node.js, and MongoDB.
        </p>

        <div className="details-grid">
          <div>
            <h3>💻 What You’ll Learn</h3>
            <ul>
              <li>Frontend development with React</li>
              <li>Backend with Node.js & Express</li>
              <li>Database design with MongoDB</li>
              <li>Version control & deployment with Git & CI/CD</li>
            </ul>
          </div>
          <div>
            <h3>🎯 Outcomes</h3>
            <ul>
              <li>Build real-world full-stack projects</li>
              <li>Get certified as a Full Stack Developer</li>
              <li>Career support for tech placements</li>
            </ul>
          </div>
        </div>

        {/* WHY TALENTMINDS */}
        <section className="why-talentminds wrap">
          <h2>Why Choose HG’s TalentMinds?</h2>
          <p className="intro">
            We offer the perfect blend of mentorship, projects, and real hiring connections.
          </p>
          <div className="why-grid">
            <div className="why-card"><h3>👩‍🏫 Mentorship</h3><p>Learn from experienced developers.</p></div>
            <div className="why-card"><h3>🧩 Projects</h3><p>Build job-ready apps and showcase your skills.</p></div>
            <div className="why-card"><h3>🏆 Certification</h3><p>Globally recognized credentials.</p></div>
          </div>
        </section>
      </div>

      <style>{`
        .program-details-page { background: linear-gradient(135deg,#fff7ed,#fde68a);min-height:100vh;display:flex;justify-content:center;padding:60px 20px;font-family:'Inter',sans-serif;}
        .program-details-container{background:#fff;border-radius:20px;box-shadow:0 8px 24px rgba(0,0,0,0.08);padding:50px;max-width:1000px;width:100%;text-align:center;}
        .program-banner{width:100%;height:300px;object-fit:cover;border-radius:12px;margin:20px 0 40px;}
        .intro{color:#4b5563;font-size:1.1rem;line-height:1.8;margin-bottom:40px;}
        .details-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:30px;text-align:left;}
        .why-talentminds{background:linear-gradient(135deg,#ecfeff,#f0fdfa);padding:60px 20px;border-radius:30px;margin-top:50px;}
        .why-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px;}
        .why-card{background:#fff;padding:20px;border-radius:14px;box-shadow:0 8px 24px rgba(0,0,0,0.05);}
      `}</style>
    </section>
  );
}
