import React, { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is TalentMinds?",
      a: "TalentMinds is an online learning platform offering mentor-led programs in technology, business, and professional development. We bridge the gap between education and employability.",
    },
    {
      q: "Are the courses self-paced or live?",
      a: "TalentMinds offers both — self-paced modules for flexibility and live mentor-led sessions for interactive, guided learning experiences.",
    },
    {
      q: "Will I receive a certificate after completion?",
      a: "Yes. Learners who complete the required coursework and assessments earn an industry-recognized TalentMinds Certificate.",
    },
    {
      q: "Do you provide job assistance?",
      a: "Yes! Our Career Accelerator Program offers résumé workshops, interview training, and placement opportunities with hiring partners.",
    },
    {
      q: "Can businesses integrate TalentMinds with internal systems?",
      a: "Absolutely. Our LMS supports API-based integrations with HR, analytics, and enterprise training systems.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-page">
      <div className="container">
        <h1>Frequently Asked Questions</h1>
        <p className="subtitle">
          Find answers to the most common questions about TalentMinds learning programs, support, and partnerships.
        </p>

        <div className="faq-list">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`faq-item ${openIndex === i ? "open" : ""}`}
              onClick={() => toggleFAQ(i)}
            >
              <div className="faq-question">
                <h3>{item.q}</h3>
                <span>{openIndex === i ? "−" : "+"}</span>
              </div>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .faq-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
          font-family: 'Inter', sans-serif;
          padding: 80px 20px;
          text-align: center;
        }
        h1 {
          font-size: 2.6rem;
          color: #0b4da3;
          font-weight: 800;
          margin-bottom: 16px;
        }
        .subtitle {
          color: #475569;
          max-width: 750px;
          margin: 0 auto 50px;
        }
        .faq-list {
          max-width: 900px;
          margin: 0 auto;
          text-align: left;
        }
        .faq-item {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(11,77,163,0.08);
          margin-bottom: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 20px;
          font-weight: 700;
          color: #0b4da3;
          background: #f8fafc;
          transition: background 0.3s ease;
        }
        .faq-item:hover .faq-question {
          background: #eff6ff;
        }
        .faq-question span {
          font-size: 1.5rem;
          color: #2563eb;
        }
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          padding: 0 20px;
          transition: all 0.4s ease;
          background: white;
        }
        .faq-item.open .faq-answer {
          max-height: 300px;
          padding: 16px 20px 20px;
        }
        .faq-answer p {
          color: #334155;
          line-height: 1.6;
          font-size: 0.95rem;
        }
        @media (max-width: 600px) {
          h1 { font-size: 2rem; }
          .faq-question h3 { font-size: 1rem; }
        }
      `}</style>
    </section>
  );
}
