// src/components/CertificationShowcase.jsx (Updated)

import React, { useEffect, useRef } from "react";
// Import the local image asset (assuming the file is .jpg - adjust extension if needed)
import talentmindsCertificate from "../assets/photos/TalentmindsCertificate.png"; 
// NOTE: For a real React Router app, you would use 'import { Link } from "react-router-dom";' 
// and wrap the link with <Link to="/partnerships">...</Link>

export default function CertificationShowcase() {
    const sectionRef = useRef(null);
    const imageRef = useRef(null); 

    // --- Intersection Observer (Animation on Scroll) ---
    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const obs = new IntersectionObserver(
            (entries) =>
                entries.forEach((e) => {
                    if (e.isIntersecting) section.classList.add("visible");
                }),
            { threshold: 0.2 }
        );
        obs.observe(section);
        return () => obs.disconnect();
    }, []);

    // --- Dynamic Image Tilt Effect ---
    useEffect(() => {
        // (Existing mouse move and leave logic remains here...)
        const handleMouseMove = (e) => {
            const imageWrapper = imageRef.current;
            if (imageWrapper) {
                const cert = imageWrapper.querySelector('.cs-cert-mockup');
                const rect = imageWrapper.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                
                cert.style.transform = `scale(1.05) rotateX(${-y * 5}deg) rotateY(${x * 5}deg)`;
                
                const glow = imageWrapper.querySelector('.cs-glow');
                glow.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
            }
        };

        const handleMouseLeave = () => {
            const imageWrapper = imageRef.current;
            if (imageWrapper) {
                const cert = imageWrapper.querySelector('.cs-cert-mockup');
                cert.style.transform = `scale(1.0) rotateX(0deg) rotateY(0deg)`;
                
                const glow = imageWrapper.querySelector('.cs-glow');
                glow.style.transform = `translate(0, 0)`;
            }
        };

        const currentImageRef = imageRef.current;
        if (currentImageRef) {
            currentImageRef.addEventListener("mousemove", handleMouseMove);
            currentImageRef.addEventListener("mouseleave", handleMouseLeave);
        }

        return () => {
            if (currentImageRef) {
                currentImageRef.removeEventListener("mousemove", handleMouseMove);
                currentImageRef.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, []);


    return (
        <section ref={sectionRef} className="cs-section">
            <div className="cs-container">
                <div className="cs-content">
                    <p className="cs-tagline">Certification of Excellence</p>
                    <h2 className="cs-title">
                        Your Success, <span className="highlight-text">Officially Recognized</span>
                    </h2>
                    <p className="cs-desc">
                        Earn the **HG's Talent Minds Everywhere** Certification, a benchmark for industry readiness. 
                        Our credentials are not just pieces of paper; they are a verifiable proof of mastery, respected by leading employers globally.
                    </p>

                    <div className="cs-badges">
                        <div className="cs-badge"><span>🔒</span> Blockchain Verified</div>
                        <div className="cs-badge"><span>🌐</span> Globally Recognized</div>
                        <div className="cs-badge"><span>🤝</span> Industry Partnered</div>
                    </div>
                    
                    <div className="cs-cta-block">
                        <p className="cs-cta-text">
                            Ready to demonstrate your expertise? 
                            {/* --- THE KEY CHANGE IS HERE --- */}
                            <a href="/partnerships" className="cs-cta-link">
                                See our Global Recognition Partners
                            </a>
                        </p>
                    </div>
                    
                </div>

                <div ref={imageRef} className="cs-image">
                    <div className="cs-glow"></div>
                    <div className="cs-cert-mockup">
                        <img 
                            src={talentmindsCertificate} 
                            alt="HG's Talent Minds Everywhere Professional Certification Diploma" 
                        />
                    </div>
                </div>
            </div>

            <style>{`
                /* (All your existing internal CSS is here...) */
                .cs-section {
                    position: relative;
                    background: linear-gradient(135deg, #0b1e3a 0%, #172d53 60%, #0b1e3a 100%);
                    color: #fff;
                    padding: 100px 20px;
                    overflow: hidden;
                    opacity: 0;
                    transform: translateY(60px);
                    transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .cs-section.visible { 
                    opacity: 1; 
                    transform: translateY(0); 
                }
                .cs-container {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    max-width: 1200px;
                    margin: 0 auto;
                    flex-wrap: wrap;
                    gap: 50px;
                    position: relative;
                    z-index: 2;
                }
                .cs-content { 
                    flex: 1; 
                    min-width: 300px;
                    max-width: 550px; 
                }
                .cs-tagline {
                    color: #facc15;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 10px;
                }
                .cs-title {
                    font-size: 2.8rem;
                    font-weight: 800;
                    line-height: 1.2;
                    margin-bottom: 20px;
                    text-shadow: 0 3px 10px rgba(0,0,0,0.3);
                }
                .cs-title .highlight-text {
                    background: linear-gradient(90deg, #fde047 0%, #fbbf24 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .cs-desc {
                    color: #e0e7ff;
                    font-size: 1.1rem;
                    line-height: 1.7;
                    margin-bottom: 40px; 
                }
                .cs-badges {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 15px;
                    margin-bottom: 30px; 
                }
                .cs-badge {
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 50px;
                    padding: 8px 18px;
                    font-weight: 600;
                    font-size: 0.95rem;
                    color: #fff;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    transition: background 0.3s ease;
                }
                .cs-badge span {
                    color: #fbbf24;
                    font-size: 1.1rem;
                }
                .cs-badge:hover {
                    background: rgba(255, 255, 255, 0.15);
                }
                .cs-cta-block {
                    margin-top: 20px;
                    padding: 15px 0;
                }
                .cs-cta-text {
                    font-size: 1rem;
                    color: #ccc;
                }
                .cs-cta-link {
                    color: #fbbf24; 
                    font-weight: 700;
                    text-decoration: none;
                    border-bottom: 2px solid rgba(251, 191, 36, 0.5);
                    transition: border-bottom-color 0.3s ease;
                }
                .cs-cta-link:hover {
                    border-bottom-color: #fde047;
                }
                .cs-image {
                    flex: 1;
                    min-width: 320px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    perspective: 1500px; 
                    padding: 30px; 
                    height: auto; 
                    max-width: 600px; 
                }
                .cs-glow {
                    position: absolute;
                    width: 80%;
                    height: 80%;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 60%);
                    filter: blur(50px);
                    transition: transform 0.4s ease;
                    z-index: 0;
                }
                .cs-cert-mockup {
                    position: relative; 
                    width: 100%; 
                    height: auto;
                    transform-style: preserve-3d;
                    transition: transform 0.4s ease;
                    z-index: 1;
                    margin: 0 auto;
                }
                .cs-image img {
                    width: 100%;
                    height: auto;
                    border-radius: 10px;
                    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7); 
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    will-change: transform;
                }
                @media (max-width: 900px) {
                    .cs-container { 
                        flex-direction: column; 
                        text-align: center; 
                        gap: 30px;
                    }
                    .cs-content { 
                        max-width: 100%; 
                    }
                    .cs-title { 
                        font-size: 2.2rem; 
                    }
                    .cs-desc { 
                        font-size: 1rem; 
                    }
                    .cs-badges { 
                        justify-content: center; 
                    }
                    .cs-image {
                        padding: 0;
                        margin-top: 30px;
                        max-width: 400px; 
                        height: auto; 
                    }
                }
                @media (max-width: 600px) {
                    .cs-title { font-size: 1.8rem; }
                    .cs-glow { filter: blur(30px); }
                }
            `}</style>
        </section>
    );
}