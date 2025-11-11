// import React from "react";
// import shashank from "../assets/photos/shashank.jpg";
// import yugendar from "../assets/photos/yugendar.jpg";
// import manikanta from "../assets/photos/manikanta.jpg";
// import anusha from "../assets/photos/anusha.jpg";
// import saikiran from "../assets/photos/saikiran.jpg";

// const mentors = [
//   { 
//     name: "Anusha", 
//     role: "Senior Network Engineer & Cloud Mentor|SIFY Technologies Pvt. Ltd.", 
//     exp: "8+ Years of Experience", 
//     image: anusha 
//   },
//   { 
//     name: "Sai Kiran", 
//     role: "Full Stack Mentor | Hypergrid Technologies Pvt. Ltd.", 
//     exp: "6+ Years of Experience", 
//     image: saikiran 
//   },
//   { 
//     name: "Manikanta", 
//     role: "Frontend Mentor | Health On Us", 
//     exp: "5+ Years of Experience", 
//     image: manikanta 
//   },
//   { 
//     name: "Yugendar", 
//     role: "Java Backend Mentor | Hypergrid Technologies Pvt. Ltd.", 
//     exp: "7+ Years of Experience", 
//     image: yugendar 
//   },
//   { 
//     name: "Sai Shashank", 
//     role: "Full Stack Engineering Mentor| Olive Crypto Pvt. Ltd.", 
//     exp: "9+ Years of Experience", 
//     image: shashank 
//   },
// ];

// export default function MentorShowcase() {
//   return (
//     <section className="ms-section">
//       <div className="ms-container">
//         <h2 className="ms-title">Learn from Our Expert Mentors</h2>
//         <p className="ms-subtitle">
//           Our mentors are real-world professionals who’ve guided hundreds of learners 
//           to excel in their careers with hands-on expertise and personalized coaching.
//         </p>

//         <div className="ms-grid">
//           {mentors.map((m, i) => (
//             <div key={i} className="ms-card">
//               <div className="ms-image-wrap">
//                 <img src={m.image} alt={m.name} />
//               </div>
//               <h3>{m.name}</h3>
//               <p className="ms-role">{m.role}</p>
//               <p className="ms-exp">{m.exp}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style>{`
//         .ms-section {
//           background: linear-gradient(180deg, #f9fbff 0%, #eef4ff 100%);
//           text-align: center;
//           padding: 100px 20px;
//           position: relative;
//           overflow: hidden;
//         }

//         .ms-container {
//           max-width: 1200px;
//           margin: 0 auto;
//           position: relative;
//           z-index: 1;
//         }

//         .ms-title {
//           font-size: 2.6rem;
//           font-weight: 800;
//           color: #0b4da3;
//           margin-bottom: 15px;
//           background: linear-gradient(90deg, #0b4da3 0%, #2563eb 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }

//         .ms-subtitle {
//           color: #475569;
//           margin-bottom: 60px;
//           font-size: 1.15rem;
//           line-height: 1.6;
//           max-width: 750px;
//           margin-left: auto;
//           margin-right: auto;
//         }

//         .ms-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
//           gap: 35px;
//           justify-items: center;
//         }

//         .ms-card {
//           background: #fff;
//           border-radius: 18px;
//           padding: 28px 20px;
//           box-shadow: 0 8px 22px rgba(11,77,163,0.08);
//           transition: all 0.4s ease;
//           border: 2px solid transparent;
//           position: relative;
//           overflow: hidden;
//         }

//         .ms-card::before {
//           content: "";
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(145deg, rgba(37,99,235,0.1), rgba(245,158,66,0.1));
//           opacity: 0;
//           transition: opacity 0.4s ease;
//           z-index: 0;
//         }

//         .ms-card:hover {
//           transform: translateY(-10px);
//           border-color: #2563eb;
//           box-shadow: 0 14px 30px rgba(37,99,235,0.15);
//         }

//         .ms-card:hover::before {
//           opacity: 1;
//         }

//         .ms-image-wrap {
//           width: 130px;
//           height: 130px;
//           border-radius: 50%;
//           overflow: hidden;
//           margin: 0 auto 18px;
//           border: 3px solid #2563eb;
//           position: relative;
//           z-index: 1;
//           transition: transform 0.3s ease;
//         }

//         .ms-card:hover .ms-image-wrap {
//           transform: scale(1.05);
//           border-color: #f59e42;
//         }

//         .ms-image-wrap img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//         }

//         .ms-card h3 {
//           font-weight: 700;
//           color: #0b4da3;
//           font-size: 1.2rem;
//           margin-bottom: 6px;
//           position: relative;
//           z-index: 1;
//         }

//         .ms-role {
//           color: #334155;
//           font-size: 0.95rem;
//           margin-bottom: 6px;
//           font-weight: 500;
//         }

//         .ms-exp {
//           color: #f59e42;
//           font-weight: 600;
//           font-size: 0.9rem;
//         }

//         @media (max-width: 768px) {
//           .ms-title { font-size: 2.1rem; }
//           .ms-subtitle { font-size: 1rem; }
//         }

//         @media (max-width: 480px) {
//           .ms-card { padding: 20px 12px; }
//           .ms-image-wrap { width: 110px; height: 110px; }
//           .ms-title { font-size: 1.8rem; }
//         }
//       `}</style>
//     </section>
//   );
// }
import React from "react";

const mentors = [
  { 
    name: "Anusha", 
    role: "Senior Network Engineer & Cloud Mentor | SIFY Technologies Pvt. Ltd.", 
    exp: "8+ Years of Experience", 
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80" // woman in professional setting
  },
  { 
    name: "Sai Kiran", 
    role: "Full Stack Mentor | Hypergrid Technologies Pvt. Ltd.", 
    exp: "6+ Years of Experience", 
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=600&q=80" // man with glasses, coding setup
  },
  { 
    name: "Manikanta", 
    role: "Frontend Mentor | Health On Us", 
    exp: "5+ Years of Experience", 
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=600&q=80" // professional male portrait
  },
  { 
    name: "Yugendar", 
    role: "Java Backend Mentor | Hypergrid Technologies Pvt. Ltd.", 
    exp: "7+ Years of Experience", 
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=600&q=80" // man in tech/office
  },
  { 
    name: "Sai Shashank", 
    role: "Full Stack Engineering Mentor | Olive Crypto Pvt. Ltd.", 
    exp: "9+ Years of Experience", 
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=600&q=80"  // confident male portrait
  },
];

export default function MentorShowcase() {
  return (
    <section className="ms-section">
      <div className="ms-container">
        <h2 className="ms-title">Learn from Our Expert Mentors</h2>
        <p className="ms-subtitle">
          Our mentors are real-world professionals who’ve guided hundreds of learners 
          to excel in their careers with hands-on expertise and personalized coaching.
        </p>

        <div className="ms-grid">
          {mentors.map((m, i) => (
            <div key={i} className="ms-card">
              <div className="ms-image-wrap">
                <img src={m.image} alt={m.name} />
              </div>
              <h3>{m.name}</h3>
              <p className="ms-role">{m.role}</p>
              <p className="ms-exp">{m.exp}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .ms-section {
          background: linear-gradient(180deg, #f9fbff 0%, #eef4ff 100%);
          text-align: center;
          padding: 100px 20px;
          position: relative;
          overflow: hidden;
        }

        .ms-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .ms-title {
          font-size: 2.6rem;
          font-weight: 800;
          color: #0b4da3;
          margin-bottom: 15px;
          background: linear-gradient(90deg, #0b4da3 0%, #2563eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ms-subtitle {
          color: #475569;
          margin-bottom: 60px;
          font-size: 1.15rem;
          line-height: 1.6;
          max-width: 750px;
          margin-left: auto;
          margin-right: auto;
        }

        .ms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 35px;
          justify-items: center;
        }

        .ms-card {
          background: #fff;
          border-radius: 18px;
          padding: 28px 20px;
          box-shadow: 0 8px 22px rgba(11,77,163,0.08);
          transition: all 0.4s ease;
          border: 2px solid transparent;
          position: relative;
          overflow: hidden;
        }

        .ms-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(145deg, rgba(37,99,235,0.1), rgba(245,158,66,0.1));
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 0;
        }

        .ms-card:hover {
          transform: translateY(-10px);
          border-color: #2563eb;
          box-shadow: 0 14px 30px rgba(37,99,235,0.15);
        }

        .ms-card:hover::before {
          opacity: 1;
        }

        .ms-image-wrap {
          width: 130px;
          height: 130px;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 auto 18px;
          border: 3px solid #2563eb;
          position: relative;
          z-index: 1;
          transition: transform 0.3s ease;
        }

        .ms-card:hover .ms-image-wrap {
          transform: scale(1.05);
          border-color: #f59e42;
        }

        .ms-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .ms-card h3 {
          font-weight: 700;
          color: #0b4da3;
          font-size: 1.2rem;
          margin-bottom: 6px;
          position: relative;
          z-index: 1;
        }

        .ms-role {
          color: #334155;
          font-size: 0.95rem;
          margin-bottom: 6px;
          font-weight: 500;
        }

        .ms-exp {
          color: #f59e42;
          font-weight: 600;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .ms-title { font-size: 2.1rem; }
          .ms-subtitle { font-size: 1rem; }
        }

        @media (max-width: 480px) {
          .ms-card { padding: 20px 12px; }
          .ms-image-wrap { width: 110px; height: 110px; }
          .ms-title { font-size: 1.8rem; }
        }
      `}</style>
    </section>
  );
}

