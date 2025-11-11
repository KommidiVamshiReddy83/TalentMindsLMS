import React from "react";
import HeroBannerSlider from "../components/HeroBannerSlider";
import CompanyMarquee from "../components/CompanyMarquee";
import Testimonials from "../components/Testimonials";
import LearnerTrust from "../components/LearnerTrust";
import SkillBoostBanner from "../components/SkillBoostBanner";
import ValueProposition from "../components/ValueProposition"; 
import CareerOutcomes from "../components/CareerOutcomes"; 
import TopEmployers from "../components/TopEmployers";

// 🆕 Newly added sections
import LearningJourney from "../components/LearningJourney";
import MentorShowcase from "../components/MentorShowcase";
import CertificationShowcase from "../components/CertificationShowcase";
import CorporateTraining from "../components/CorporateTraining";
import CommunitySpotlight from "../components/CommunitySpotlight";

export default function Home() {
  return (
    <div className="tm-home">
      {/* Hero Section */}
      <HeroBannerSlider />

      {/* Company Logos */}
      <div className="tm-marquee">
        <CompanyMarquee />
      </div>

      {/* Why Us */}
      <ValueProposition />

      {/* Learning Journey */}
      <LearningJourney />

      {/* Results */}
      <CareerOutcomes />

      {/* Mentors */}
      <MentorShowcase />

      {/* Certificates */}
      <CertificationShowcase />

      {/* Employers */}
      <TopEmployers />

      {/* Corporate Training */}
      <CorporateTraining />

      {/* Community */}
      <CommunitySpotlight />

      {/* Trust Section */}
      <LearnerTrust />

      {/* Testimonials */}
      <Testimonials />

      {/* Call to Action */}
      <SkillBoostBanner />

      <style>{`
        .tm-home {
          background: #f8fafc;
          font-family: "Open Sans", "Inter", sans-serif;
          color: #0f172a;
        }

        .tm-marquee {
          background: linear-gradient(90deg, #e0eafc 0%, #cfdef3 100%);
          padding: 32px 0 24px 0;
          margin-bottom: 32px;
        }

        @media (max-width: 768px) {
          .tm-courses-title { font-size: 1.8rem; }
        }

        @media (max-width: 480px) {
          .tm-btn { width: 100%; }
        }
      `}</style>
    </div>
  );
}
