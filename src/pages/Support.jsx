import React, { useState } from "react";

export default function Support() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Support request submitted! Our team will contact you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="support-page">
      <div className="container">
        <h1>We’re Here to Help</h1>
        <p className="subtitle">
          Need assistance? Our support team is available 24/7 to resolve your queries and technical issues.
        </p>

        <div className="grid">
          {/* Contact Info */}
          <div className="card">
            <h3>📞 Contact Us</h3>
            <p>Email: <strong>support@talentminds.io</strong></p>
            <p>Phone: <strong>+91 98765 43210</strong></p>
            <p>Working Hours: Mon–Sat, 9 AM to 7 PM (IST)</p>
          </div>

          {/* Ticket Form */}
          <div className="card form-card">
            <h3>🧾 Raise a Support Ticket</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Describe your issue..."
                value={form.message}
                onChange={handleChange}
                required
              />
              <button type="submit">Submit Ticket</button>
            </form>
          </div>
        </div>

        <div className="quick-links">
          <h3>🔗 Quick Help</h3>
          <ul>
            <li>📚 <a href="/faq">Read the FAQ</a></li>
            <li>🎓 <a href="/courses">Explore Courses</a></li>
            <li>💬 <a href="/contact">Contact Support</a></li>
          </ul>
        </div>
      </div>

      <style>{`
        .support-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #ecfdf5, #d1fae5);
          font-family: 'Inter', sans-serif;
          padding: 80px 20px;
          text-align: center;
        }
        h1 {
          font-size: 2.6rem;
          color: #065f46;
          font-weight: 800;
          margin-bottom: 16px;
        }
        .subtitle {
          color: #374151;
          max-width: 750px;
          margin: 0 auto 60px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }
        .card {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 6px 20px rgba(6,95,70,0.08);
          padding: 30px 20px;
          text-align: left;
          transition: all 0.3s ease;
        }
        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 28px rgba(6,95,70,0.15);
        }
        h3 {
          color: #047857;
          margin-bottom: 10px;
        }
        p {
          color: #334155;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        form {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 10px;
        }
        input, textarea {
          padding: 10px 12px;
          border: 1px solid #a7f3d0;
          border-radius: 8px;
          font-size: 0.95rem;
          outline: none;
          transition: border 0.2s ease;
        }
        input:focus, textarea:focus {
          border-color: #10b981;
        }
        textarea {
          resize: none;
          min-height: 100px;
        }
        button {
          background: #10b981;
          color: white;
          border: none;
          padding: 12px 20px;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        button:hover {
          background: #059669;
        }
        .quick-links {
          background: #f0fdf4;
          border-radius: 12px;
          padding: 20px;
          max-width: 700px;
          margin: 0 auto;
        }
        .quick-links h3 {
          color: #047857;
          margin-bottom: 10px;
        }
        .quick-links ul {
          list-style: none;
          padding: 0;
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        .quick-links a {
          color: #065f46;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.2s ease;
        }
        .quick-links a:hover {
          color: #10b981;
        }
        @media (max-width: 600px) {
          h1 { font-size: 2rem; }
        }
      `}</style>
    </section>
  );
}
