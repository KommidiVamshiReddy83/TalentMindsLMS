import React, { useState } from "react";

export default function Business() {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    interest: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `✅  Thanks, ${form.name}! A member of the HG’s TalentMinds enterprise team will contact you at ${form.email} within 24 hours.`
    );
    setShowModal(false);
  };

  return (
    <section className="business">
      <div className="container">
        {/* ─────────────────── HERO PITCH ─────────────────── */}
        <h1>Transform Your Workforce with HG’s TalentMinds Corporate Solutions</h1>
        <p className="subtitle">
          Build a future-ready organization through <strong>AI-driven learning, adaptive
          analytics,</strong> and <strong>scalable enterprise enablement.</strong>  
          From upskilling engineers to empowering executives, TalentMinds delivers measurable impact across the talent lifecycle.
        </p>

        {/* ─────────────────── VALUE GRID ─────────────────── */}
        <div className="grid">
          <div className="card">
            <h3>🎯  Intelligence-Based Learning Paths</h3>
            <p>
              Role-mapped curricula powered by data. Whether you’re reskilling cloud engineers or training
              cybersecurity analysts, every learner follows a personalized AI-curated path aligned with business goals.
            </p>
          </div>
          <div className="card">
            <h3>🧑‍🏫  Expert-Led Bootcamps + Mentorship</h3>
            <p>
              Blended programs delivered live by certified practitioners and industry leaders. Each participant receives 1-to-1 mentor feedback and access to a dedicated success coach.
            </p>
          </div>
          <div className="card">
            <h3>🛠️  Applied Projects & Labs</h3>
            <p>
              Teams practice on simulated enterprise systems—AI models, CI/CD pipelines, SOC dashboards—turning theoretical knowledge into job-ready expertise.
            </p>
          </div>
          <div className="card">
            <h3>🌍  Global Roll-Out at Speed</h3>
            <p>
              Deployed in 70 + countries with multi-language content, 24 × 7 cloud access, and compliance with corporate security and GDPR standards.
            </p>
          </div>
          <div className="card highlight-card">
            <h3>📊  Enterprise Intelligence Dashboard</h3>
            <p>
              Real-time insight into learner engagement, certification progress, and ROI. Track skill gaps, benchmark departments, and link learning outcomes to performance metrics.
            </p>
          </div>
        </div>

        <button className="cta-btn" onClick={() => setShowModal(true)}>
          Book a Strategy Consultation →
        </button>

        {/* ─────────────────── OUTCOME METRICS ─────────────────── */}
        <div className="stats">
          <h2>🚀  Measurable Results, Proven at Scale</h2>
          <p className="stats-subtitle">
            Organizations partnering with TalentMinds achieve faster innovation, reduced attrition, and tangible revenue impact.
          </p>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>210 K +</h3>
              <p>Employees upskilled worldwide</p>
            </div>
            <div className="stat-card">
              <h3>40 %</h3>
              <p>Reduction in time-to-productivity</p>
            </div>
            <div className="stat-card">
              <h3>3 : 1</h3>
              <p>Average CLTV : CAC ratio for enterprise clients</p>
            </div>
            <div className="stat-card">
              <h3>88 %</h3>
              <p>Managers reporting measurable ROI</p>
            </div>
          </div>
        </div>

        {/* ─────────────────── TESTIMONIALS ─────────────────── */}
        <div className="testimonial-section">
          <h2>💬  What Our Enterprise Partners Say</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p>
                “HG’s TalentMinds equipped our 5 000 + engineers with AI and
                data-engineering skills in under six months—productivity went up 33 %.”
              </p>
              <span>— Rita Menon, CTO • TechNova Global</span>
            </div>
            <div className="testimonial-card">
              <p>
                “Their analytics dashboard changed the way we measure learning ROI.
                We now correlate training outcomes directly with project delivery KPIs.”
              </p>
              <span>— Luis Martinez, Director of L&D • Siemens Digital</span>
            </div>
            <div className="testimonial-card">
              <p>
                “TalentMinds became our strategic partner for continuous
                reskilling—excellent content, enterprise-grade support, and clear business results.”
              </p>
              <span>— Akira Sato, VP People Ops • Fujitech Systems</span>
            </div>
          </div>
        </div>

        {/* ─────────────────── GROWTH / INVESTOR SECTION ─────────────────── */}
        <div className="growth-section">
          <h2>📈  Sustainable Growth & Market Leadership</h2>
          <p className="growth-subtitle">
            Our business model is built on long-term enterprise relationships,
            recurring revenue, and product innovation that scales with AI adoption trends.
          </p>

          <div className="metric-grid">
            <div className="metric-card">
              <h4>💵  92 % Recurring ARR</h4>
              <p>
                Multi-year contracts across tech, BFSI, and manufacturing sectors create stable, predictable revenue streams.
              </p>
            </div>
            <div className="metric-card">
              <h4>🤖  AI-First Product Roadmap</h4>
              <p>
                Continuous integration of generative AI for adaptive learning, assessment automation, and skill forecasting.
              </p>
            </div>
            <div className="metric-card">
              <h4>🌱  ESG & Diversity Commitment</h4>
              <p>
                48 % of learners enrolled through our social-impact initiatives belong to under-represented communities in tech.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ─────────────────── MODAL ─────────────────── */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Book a Demo / Consultation</h2>
            <p>
              Tell us a little about your organization and we’ll craft a personalized upskilling proposal.
            </p>
            <form onSubmit={handleSubmit}>
              <input
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Work Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <input
                name="company"
                placeholder="Company Name"
                value={form.company}
                onChange={handleChange}
                required
              />
              <select
                name="interest"
                value={form.interest}
                onChange={handleChange}
                required
              >
                <option value="">Select Interest Area</option>
                <option>AI & Data Transformation</option>
                <option>Cloud & DevOps Modernization</option>
                <option>Cybersecurity Enablement</option>
                <option>Leadership & Agile Culture</option>
              </select>
              <button className="submit-btn" type="submit">
                Submit Request →
              </button>
            </form>
            <button className="close-btn" onClick={() => setShowModal(false)}>
              ✕
            </button>
          </div>
        </div>
      )}

      {/* ─────────────────── STYLES ─────────────────── */}
      <style>{`
        .business {
          font-family: 'Inter', sans-serif;
          background: linear-gradient(135deg,#e0f2fe,#bfdbfe);
          padding: 100px 20px;
          text-align: center;
          marginTop:"30px";

        }
        .container{max-width:1200px;margin:0 auto;}
        h1{color:#0b4da3;font-size:2.6rem;font-weight:800;margin-bottom:20px;}
        .subtitle{color:#475569;max-width:850px;margin:0 auto 60px;font-size:1.15rem;line-height:1.8;}
        .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:25px;margin-bottom:60px;}
        .card{background:#fff;padding:25px 20px;border-radius:16px;border:1px solid #dbeafe;
              box-shadow:0 6px 20px rgba(11,77,163,0.08);text-align:left;transition:.3s;}
        .card:hover{transform:translateY(-6px);box-shadow:0 10px 28px rgba(37,99,235,0.2);}
        .highlight-card{border:2px solid #2563eb;background:#eff6ff;}
        .cta-btn{background:#2563eb;color:#fff;border:none;padding:16px 40px;border-radius:10px;font-weight:700;
                 font-size:1.1rem;cursor:pointer;box-shadow:0 6px 18px rgba(37,99,235,0.4);transition:.3s;}
        .cta-btn:hover{background:#1d4ed8;}
        .stats{margin-top:100px;background:#fff;border-radius:20px;padding:70px 25px;box-shadow:0 8px 30px rgba(0,0,0,.05);}
        .stats h2{color:#0b4da3;font-size:2rem;margin-bottom:15px;}
        .stats-subtitle{color:#475569;max-width:700px;margin:0 auto 40px;}
        .stats-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:20px;}
        .stat-card{background:#eff6ff;border-radius:12px;padding:25px;}
        .stat-card h3{color:#2563eb;font-size:2rem;margin-bottom:6px;}
        .testimonial-section{margin-top:100px;}
        .testimonial-section h2{color:#0b4da3;font-size:2rem;margin-bottom:30px;}
        .testimonial-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:25px;}
        .testimonial-card{background:#fff;border-radius:16px;padding:25px 20px;
                          box-shadow:0 6px 20px rgba(37,99,235,.1);font-style:italic;}
        .testimonial-card span{display:block;color:#2563eb;font-weight:600;margin-top:10px;}
        .growth-section{padding:80px 20px 60px;margin-top:80px;background:#fff;border-radius:20px;
                        box-shadow:0 10px 30px rgba(0,0,0,.05);}
        .growth-section h2{color:#0b4da3;font-size:2.2rem;font-weight:800;margin-bottom:10px;}
        .growth-subtitle{color:#475569;max-width:700px;margin:0 auto 40px;}
        .metric-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;}
        .metric-card{background:#f1f5f9;padding:20px;border-radius:12px;text-align:left;border-left:5px solid #2563eb;}
        .metric-card h4{color:#1d4ed8;font-weight:700;margin-bottom:6px;}
        /* Modal */
        .modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.6);display:flex;justify-content:center;
                       align-items:center;z-index:1000;}
        .modal{background:#fff;padding:30px;border-radius:12px;width:95%;max-width:450px;position:relative;text-align:left;}
        .modal h2{color:#0b4da3;margin-bottom:8px;}
        .modal p{color:#475569;margin-bottom:15px;}
        .modal input,.modal select{width:100%;margin-bottom:12px;padding:12px;border:1px solid #cbd5e1;
                                   border-radius:8px;font-size:1rem;}
        .submit-btn{background:#2563eb;color:#fff;border:none;padding:12px 24px;border-radius:8px;
                    cursor:pointer;font-weight:600;}
        .submit-btn:hover{background:#1d4ed8;}
        .close-btn{position:absolute;top:12px;right:16px;background:none;border:none;font-size:1.3rem;
                   cursor:pointer;color:#475569;}
        @media(max-width:768px){h1{font-size:2rem;}.cta-btn{padding:14px 28px;font-size:1rem;}
          .grid,.stats-grid,.testimonial-grid,.metric-grid{grid-template-columns:1fr;}
          .stats,.growth-section{padding:50px 15px;}}
      `}</style>
    </section>
  );
}
