// import React, { useState, useEffect, useRef } from "react";
// import shashank from "../assets/photos/shashank.jpg";
// import yugendar from "../assets/photos/yugendar.jpg";
// import manikanta from "../assets/photos/manikanta.jpg";
// import anusha from "../assets/photos/anusha.jpg";
// import saikiran from "../assets/photos/saikiran.jpg";

// const testimonials = [
//   {
//     name: "Sai Shashank",
//     role: "Full Stack Developer at Wipro",
//     text: "TalentMinds transformed my technical foundation. The full-stack program was practical, and the mentors ensured I could build scalable applications confidently.",
//     image: shashank,
//   },
//   {
//     name: "Yugendar G",
//     role: "Java Backend Developer at Hypergrid Technology Pvt. Ltd.",
//     text: "The real-time backend projects and mentor sessions helped me strengthen my Java and Spring Boot skills, which directly contributed to my job success.",
//     image: yugendar,
//   },
//   {
//     name: "Manikanta ",
//     role: "Frontend Developer at HealthOnus",
//     text: "TalentMinds helped me master frontend development from scratch. The React projects, design reviews, and guidance shaped my portfolio beautifully.",
//     image: manikanta,
//   },
//   // {
//   //   name: "Anusha",
//   //   role: "Network Engineer at Accenture",
//   //   text: "From networking fundamentals to advanced troubleshooting, the structured content and expert-led sessions helped me excel in real-world network setups.",
//   //   image: anusha,
//   // },
//   {
//     name: "Sai Kiran",
//     role: "Full Stack Developer at Hypergrid Technology Pvt. Ltd.",
//     text: "The project-based approach and deep mentor involvement made me confident in both frontend and backend stacks. I landed my dream role fast!",
//     image: saikiran,
//   },
// ];

// export default function Testimonials() {
//   const [index, setIndex] = useState(0);
//   const [paused, setPaused] = useState(false);
//   const timerRef = useRef();

//   useEffect(() => {
//     if (!paused) {
//       timerRef.current = setInterval(() => {
//         setIndex((prev) => (prev + 1) % testimonials.length);
//       }, 6000);
//     }
//     return () => clearInterval(timerRef.current);
//   }, [paused]);

//   const goTo = (dir) => {
//     setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
//   };

//   return (
//     <section
//       className="tm-testimonials-section"
//       onMouseEnter={() => setPaused(true)}
//       onMouseLeave={() => setPaused(false)}
//     >
//       {/* Animated Gradient Background */}
//       <div className="tm-bg-gradient"></div>

//       <h2 className="tm-testimonials-title">What Our Learners Say</h2>

//       <div className="tm-testimonials-carousel">
//         <button className="tm-arrow tm-arrow-left" onClick={() => goTo(-1)}>
//           ‹
//         </button>

//         <div key={index} className="tm-testimonial-card slide-in">
//           <div className="tm-img-wrap">
//             <img
//               src={testimonials[index].image}
//               alt={testimonials[index].name}
//               className="tm-testimonial-img"
//             />
//           </div>

//           <p className="tm-testimonial-text">“{testimonials[index].text}”</p>

//           <div className="tm-testimonial-meta">
//             <span className="tm-testimonial-name">{testimonials[index].name}</span>
//             <span className="tm-testimonial-role">{testimonials[index].role}</span>
//           </div>
//         </div>

//         <button className="tm-arrow tm-arrow-right" onClick={() => goTo(1)}>
//           ›
//         </button>
//       </div>

//       <div className="tm-dots">
//         {testimonials.map((_, i) => (
//           <span
//             key={i}
//             className={`tm-dot${i === index ? " active" : ""}`}
//             onClick={() => setIndex(i)}
//           />
//         ))}
//       </div>

//       <style>{`
//         /* Section Setup */
//         .tm-testimonials-section {
//           position: relative;
//           overflow: hidden;
//           padding: 120px 20px;
//           text-align: center;
//           font-family: 'Inter', sans-serif;
//           color: #0f172a;
//           z-index: 1;
//         }

//         /* TalentMinds Gradient Background */
//         .tm-bg-gradient {
//           position: absolute;
//           inset: 0;
//           background: radial-gradient(circle at 20% 20%, #e0f2fe, transparent 40%),
//                       radial-gradient(circle at 80% 80%, #fde68a, transparent 40%),
//                       linear-gradient(120deg, #e0f2fe, #fffaf0, #fef3c7);
//           background-size: 250% 250%;
//           animation: gradientShift 15s ease infinite;
//           z-index: -2;
//           opacity: 0.95;
//         }

//         @keyframes gradientShift {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }

//         /* Title Styling */
//         .tm-testimonials-title {
//           font-size: 2.7rem;
//           font-weight: 800;
//           color: #0b4da3;
//           margin-bottom: 70px;
//           text-shadow: 0 2px 8px rgba(11, 77, 163, 0.2);
//         }

//         /* Carousel Layout */
//         .tm-testimonials-carousel {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 30px;
//           flex-wrap: wrap;
//           max-width: 900px;
//           margin: 0 auto;
//           position: relative;
//         }

//         /* Testimonial Card */
//         .tm-testimonial-card {
//           background: rgba(255, 255, 255, 0.96);
//           border-radius: 20px;
//           box-shadow: 0 10px 30px rgba(37, 99, 235, 0.15);
//           padding: 50px 30px;
//           max-width: 420px;
//           text-align: center;
//           transition: all 0.4s ease;
//           border: 1px solid #e2e8f0;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//         }

//         .tm-testimonial-card:hover {
//           transform: translateY(-10px);
//           box-shadow: 0 15px 40px rgba(11, 77, 163, 0.25);
//         }

//         /* Animation */
//         .slide-in {
//           animation: slideIn 0.8s ease-in-out;
//         }

//         @keyframes slideIn {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         /* Centered Image */
//         .tm-img-wrap {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           width: 100%;
//           margin-bottom: 25px;
//         }

//         .tm-testimonial-img {
//           width: 110px;
//           height: 110px;
//           border-radius: 50%;
//           object-fit: cover;
//           border: 4px solid #0b4da3;
//           box-shadow: 0 0 25px rgba(11, 77, 163, 0.25);
//           background: #fff;
//         }

//         /* Text & Meta */
//         .tm-testimonial-text {
//           font-size: 1.1rem;
//           color: #1e293b;
//           margin-bottom: 25px;
//           line-height: 1.6;
//           font-style: italic;
//           max-width: 360px;
//         }

//         .tm-testimonial-name {
//           font-weight: 700;
//           color: #0b4da3;
//           font-size: 1.1rem;
//           display: block;
//           margin-top: 5px;
//         }

//         .tm-testimonial-role {
//           color: #f59e42;
//           font-size: 0.95rem;
//           display: block;
//           margin-top: 3px;
//         }

//         /* Arrows */
//         .tm-arrow {
//           background: rgba(255, 255, 255, 0.85);
//           border: none;
//           border-radius: 50%;
//           width: 52px;
//           height: 52px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 28px;
//           color: #0b4da3;
//           cursor: pointer;
//           transition: all 0.3s ease;
//         }

//         .tm-arrow:hover {
//           background: #0b4da3;
//           color: #fff;
//           transform: scale(1.1);
//         }

//         /* Dots */
//         .tm-dots {
//           display: flex;
//           justify-content: center;
//           gap: 10px;
//           margin-top: 40px;
//         }

//         .tm-dot {
//           width: 12px;
//           height: 12px;
//           border-radius: 50%;
//           background: #cbd5e1;
//           cursor: pointer;
//           transition: all 0.3s ease;
//         }

//         .tm-dot.active {
//           background: #f59e42;
//           transform: scale(1.3);
//         }

//         /* Responsive */
//         @media (max-width: 768px) {
//           .tm-testimonials-title { font-size: 2.1rem; }
//           .tm-testimonial-card { max-width: 90%; padding: 35px 20px; }
//           .tm-testimonial-img { width: 90px; height: 90px; }
//         }
//       `}</style>
//     </section>
//   );
// }
import React, { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Sai Shashank",
    role: "Full Stack Developer at Wipro",
    text: "TalentMinds transformed my technical foundation. The full-stack program was practical, and the mentors ensured I could build scalable applications confidently.",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Yugendar G",
    role: "Java Backend Developer at Hypergrid Technology Pvt. Ltd.",
    text: "The real-time backend projects and mentor sessions helped me strengthen my Java and Spring Boot skills, which directly contributed to my job success.",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Manikanta",
    role: "Frontend Developer at HealthOnus",
    text: "TalentMinds helped me master frontend development from scratch. The React projects, design reviews, and guidance shaped my portfolio beautifully.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Sai Kiran",
    role: "Full Stack Developer at Hypergrid Technology Pvt. Ltd.",
    text: "The project-based approach and deep mentor involvement made me confident in both frontend and backend stacks. I landed my dream role fast!",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef();

  useEffect(() => {
    if (!paused) {
      timerRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % testimonials.length);
      }, 6000);
    }
    return () => clearInterval(timerRef.current);
  }, [paused]);

  const goTo = (dir) => {
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section
      className="tm-testimonials-section"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="tm-bg-gradient"></div>

      <h2 className="tm-testimonials-title">What Our Learners Say</h2>

      <div className="tm-testimonials-carousel">
        <button className="tm-arrow tm-arrow-left" onClick={() => goTo(-1)}>
          ‹
        </button>

        <div key={index} className="tm-testimonial-card slide-in">
          <div className="tm-img-wrap">
            <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className="tm-testimonial-img"
            />
          </div>

          <p className="tm-testimonial-text">“{testimonials[index].text}”</p>

          <div className="tm-testimonial-meta">
            <span className="tm-testimonial-name">{testimonials[index].name}</span>
            <span className="tm-testimonial-role">{testimonials[index].role}</span>
          </div>
        </div>

        <button className="tm-arrow tm-arrow-right" onClick={() => goTo(1)}>
          ›
        </button>
      </div>

      <div className="tm-dots">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`tm-dot${i === index ? " active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      <style>{`
        .tm-testimonials-section {
          position: relative;
          overflow: hidden;
          padding: 120px 20px;
          text-align: center;
          font-family: 'Inter', sans-serif;
          color: #0f172a;
          z-index: 1;
        }

        .tm-bg-gradient {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 20% 20%, #e0f2fe, transparent 40%),
                      radial-gradient(circle at 80% 80%, #fde68a, transparent 40%),
                      linear-gradient(120deg, #e0f2fe, #fffaf0, #fef3c7);
          background-size: 250% 250%;
          animation: gradientShift 15s ease infinite;
          z-index: -2;
          opacity: 0.95;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .tm-testimonials-title {
          font-size: 2.7rem;
          font-weight: 800;
          color: #0b4da3;
          margin-bottom: 70px;
          text-shadow: 0 2px 8px rgba(11, 77, 163, 0.2);
        }

        .tm-testimonials-carousel {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
          max-width: 900px;
          margin: 0 auto;
          position: relative;
        }

        .tm-testimonial-card {
          background: rgba(255, 255, 255, 0.96);
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(37, 99, 235, 0.15);
          padding: 50px 30px;
          max-width: 420px;
          text-align: center;
          transition: all 0.4s ease;
          border: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .tm-testimonial-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(11, 77, 163, 0.25);
        }

        .slide-in {
          animation: slideIn 0.8s ease-in-out;
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .tm-img-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin-bottom: 25px;
        }

        .tm-testimonial-img {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #0b4da3;
          box-shadow: 0 0 25px rgba(11, 77, 163, 0.25);
          background: #fff;
        }

        .tm-testimonial-text {
          font-size: 1.1rem;
          color: #1e293b;
          margin-bottom: 25px;
          line-height: 1.6;
          font-style: italic;
          max-width: 360px;
        }

        .tm-testimonial-name {
          font-weight: 700;
          color: #0b4da3;
          font-size: 1.1rem;
          display: block;
          margin-top: 5px;
        }

        .tm-testimonial-role {
          color: #f59e42;
          font-size: 0.95rem;
          display: block;
          margin-top: 3px;
        }

        .tm-arrow {
          background: rgba(255, 255, 255, 0.85);
          border: none;
          border-radius: 50%;
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          color: #0b4da3;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tm-arrow:hover {
          background: #0b4da3;
          color: #fff;
          transform: scale(1.1);
        }

        .tm-dots {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 40px;
        }

        .tm-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #cbd5e1;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tm-dot.active {
          background: #f59e42;
          transform: scale(1.3);
        }

        @media (max-width: 768px) {
          .tm-testimonials-title { font-size: 2.1rem; }
          .tm-testimonial-card { max-width: 90%; padding: 35px 20px; }
          .tm-testimonial-img { width: 90px; height: 90px; }
        }
      `}</style>
    </section>
  );
}
