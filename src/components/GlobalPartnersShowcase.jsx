// src/components/GlobalPartnersShowcase.jsx

import React from "react";

// Using stable, publicly accessible URLs for common tech partners
// Note: In a production environment, you should host these images yourself 
// to ensure availability and performance.
const globalPartners = [
  { 
    name: "AWS", 
    logoUrl: "https://d1.awsstatic.com/training-and-certification/Certification%20Badges/AWS-Certified-Solutions-Architect-Associate-2020_badge.8091176b91c136f1c4f52f4c3b708b1a5120a1f0.png", 
    category: "Cloud Computing",
    link: "https://aws.amazon.com/certification/"
  },
  { 
    name: "Google Cloud", 
    logoUrl: "https://storage.googleapis.com/gcp-community/GCP_Associate_Cloud_Engineer.png", 
    category: "Cloud & Data",
    link: "https://cloud.google.com/certification"
  },
  { 
    name: "Microsoft Azure", 
    logoUrl: "https://learn.microsoft.com/en-us/media/learn/certification/logo-az-900.svg", 
    category: "Cloud Services",
    link: "https://learn.microsoft.com/en-us/certifications/"
  },
  { 
    name: "CompTIA", 
    logoUrl: "https://images.credly.com/images/318e8d88-b223-4416-bf10-a292d3f6a27e/Security-Plus-ce.png", 
    category: "Cybersecurity & IT",
    link: "https://www.comptia.org/certifications"
  },
  { 
    name: "PMI", 
    logoUrl: "https://images.credly.com/images/5084918e-04fa-4809-9b93-4a11c1e5a593/Project_Management_Professional__PMP_.png", 
    category: "Project Management",
    link: "https://www.pmi.org/"
  },
  { 
    name: "The Linux Foundation", 
    logoUrl: "https://images.credly.com/images/07d2f8e1-512c-4734-9333-3392437df49e/Kubernetes-Certified-Administrator.png", 
    category: "Open Source & DevOps",
    link: "https://www.linuxfoundation.org/certification"
  },
];

export default function GlobalPartnersShowcase() {
  return (
    <section className="partners-section">
      <div className="partners-container">
        <h2 className="partners-title">
          Ready to demonstrate your expertise?
        </h2>
        <h3 className="partners-subtitle">
          See our Global Recognition Partners
        </h3>
        <p className="partners-description">
          Our curriculum is officially aligned with the world's most sought-after
          industry certifications. Your skills will be verified, validated, and
          recognized by major tech employers worldwide.
        </p>
        
        <div className="partners-logo-grid">
          {globalPartners.map((partner, index) => (
            <a 
              key={index} 
              href={partner.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="partner-card"
              title={`Learn more about ${partner.name} certification`}
            >
              <div className="partner-logo-wrap">
                <img 
                  src={partner.logoUrl} 
                  alt={`${partner.name} Certification Badge`} 
                  loading="lazy"
                />
              </div>
              <p className="partner-name">{partner.name}</p>
              <span className="partner-category">{partner.category}</span>
            </a>
          ))}
        </div>
        
        <div className="partners-cta-box">
            <p className="partners-cta-text">
                Unlock your potential with globally recognized credentials.
            </p>
            <a href="/explore-programs" className="partners-cta-button">
                View Program Pathways
            </a>
        </div>
      </div>

      <style>{`
        /* --- General Setup --- */
        .partners-section {
          background-color: #f7f9fc; /* Soft, light background */
          padding: 100px 20px;
          text-align: center;
          font-family: 'Inter', sans-serif; 
        }
        
        .partners-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        /* --- Headings --- */
        .partners-title {
          font-size: 1.8rem;
          font-weight: 600;
          color: #3b82f6; /* Accent color */
          margin-bottom: 5px;
        }
        
        .partners-subtitle {
          font-size: 3.2rem;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 20px;
          letter-spacing: -0.05em;
        }

        .partners-description {
          font-size: 1.15rem;
          color: #475569;
          max-width: 900px;
          margin: 0 auto 70px;
          line-height: 1.7;
        }

        /* --- Logo Grid --- */
        .partners-logo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); 
          gap: 30px;
          margin-top: 50px;
          margin-bottom: 80px;
        }

        .partner-card {
            background-color: #ffffff;
            padding: 30px 15px;
            border-radius: 16px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            text-decoration: none; 
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: 2px solid transparent;
        }

        .partner-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 30px rgba(59, 130, 246, 0.2);
            border-color: #3b82f6;
        }

        .partner-logo-wrap {
          height: 90px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
        }

        .partner-logo-wrap img {
          max-width: 85%;
          max-height: 100%;
          object-fit: contain;
          filter: grayscale(100%); 
          opacity: 0.8;
          transition: filter 0.4s ease, opacity 0.4s ease;
        }
        
        .partner-card:hover .partner-logo-wrap img {
            filter: grayscale(0%); 
            opacity: 1;
        }
        
        .partner-name {
            font-size: 1.1rem;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 5px;
        }

        .partner-category {
            font-size: 0.85rem;
            font-weight: 500;
            color: #10b981; 
            background-color: #ecfdf5;
            padding: 4px 10px;
            border-radius: 4px;
            text-transform: uppercase;
        }

        /* --- Call to Action Box --- */
        .partners-cta-box {
            background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); 
            padding: 45px 30px;
            border-radius: 12px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            box-shadow: 0 15px 30px rgba(245, 158, 11, 0.3);
        }

        .partners-cta-text {
            color: #ffffff;
            font-size: 1.6rem;
            font-weight: 700;
            margin: 0;
            margin-right: 50px;
        }

        .partners-cta-button {
            background-color: #ffffff;
            color: #d97706; 
            font-weight: 700;
            padding: 15px 30px;
            border-radius: 8px;
            text-decoration: none;
            transition: background-color 0.3s ease, transform 0.2s ease;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            white-space: nowrap;
        }
        
        .partners-cta-button:hover {
            background-color: #f7f7f7;
            transform: scale(1.05);
        }
        
        /* --- Media Queries --- */
        @media (max-width: 768px) {
            .partners-subtitle { font-size: 2.5rem; }
            .partners-cta-box {
                flex-direction: column;
            }
            .partners-cta-text {
                margin-right: 0;
                margin-bottom: 20px;
                text-align: center;
                font-size: 1.4rem;
            }
        }
      `}</style>
    </section>
  );
}