import React from "react";

const companies = [
  { name: "Google", logo: "https://logo.clearbit.com/google.com" },
  { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
  { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
  { name: "Accenture", logo: "https://logo.clearbit.com/accenture.com" },
  { name: "Capgemini", logo: "https://logo.clearbit.com/capgemini.com" },
  { name: "Cognizant", logo: "https://logo.clearbit.com/cognizant.com" },
  { name: "TCS", logo: "https://logo.clearbit.com/tcs.com" },
  { name: "Infosys", logo: "https://logo.clearbit.com/infosys.com" },
  { name: "Wipro", logo: "https://logo.clearbit.com/wipro.com" },
  { name: "IBM", logo: "https://logo.clearbit.com/ibm.com" },
  { name: "HCLTech", logo: "https://logo.clearbit.com/hcltech.com" },
];

// Duplicate the array for seamless CSS animation
const companyLogos = companies.concat(companies);
const LOGO_COUNT = companies.length; // Used for dynamic width calculation

export default function CompanyMarquee() {
  // Setting the count as a style variable makes the animation precise
  const marqueeStyle = {
    '--logo-count': LOGO_COUNT,
  };

  return (
    <div className="marquee-wrapper">
      <div className="marquee-inner wrap">
        <h2 className="marquee-title">Trusted by TalentMinds Alumni at these Top Companies</h2>

        <div className="marquee" aria-hidden="true" style={marqueeStyle}>
          <div className="track">
            {/* Map over the combined array */}
            {companyLogos.map((c, i) => (
              <div className="logo" key={i}>
                <img 
                  src={c.logo} 
                  alt={c.name} 
                  title={c.name} // Added title for accessibility on hover
                  loading="lazy" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* Setup CSS Variables for dynamic width and animation */
        :root {
          --marquee-speed: 28s; /* Total time to complete one loop */
          --logo-gap: 36px;
          --logo-count: 11; /* Default count if JS fails, but JS overrides this */
        }
        .marquee-wrapper { 
            padding: 48px 0; 
            background: #f8fafc; 
            overflow: hidden; 
            user-select: none; /* Prevent selection */
        }
        .wrap { 
            max-width:1300px; /* Slightly wider wrap for more logos to show */
            margin:0 auto; 
            padding: 0 16px; 
            box-sizing:border-box; 
        }
        .marquee-title { 
            color:#0f172a; 
            font-size:1.6rem; 
            font-weight:700; 
            margin:0 0 30px; 
            text-align:center; /* Centered title is more common for this section */
        }

        .marquee { 
            overflow:hidden; 
            width:100%; 
        }
        
        .track {
          display:flex;
          flex-wrap: nowrap; 
          align-items:center;
          gap: var(--logo-gap);
          /* CRITICAL FIX: Calculates the width needed for one full cycle (2x logo set) */
          width: calc((var(--logo-width, 140px) + var(--logo-gap)) * var(--logo-count) * 2); 
          animation: scroll var(--marquee-speed) linear infinite;
        }

        /* PAUSE ON HOVER */
        .marquee:hover .track {
            animation-play-state: paused;
        }

        .logo { 
            flex: 0 0 auto; 
            display:flex; 
            align-items:center; 
            justify-content:center;
            padding: 0 10px; /* Added internal padding for hover area */
        }
        
        .logo img { 
            height:48px; 
            width:auto; 
            max-width: 140px; /* Set a max width for large logos */
            object-fit:contain; 
            display:block; 
            filter: grayscale(100%); /* Mute the colors */
            opacity: 0.4; /* Soften the logos */
            transition: all 0.3s ease;
        }

        .logo img:hover {
            filter: grayscale(0%); /* Restore color on hover */
            opacity: 1; /* Full opacity on hover */
            cursor: pointer;
        }

        @keyframes scroll {
          /* Translates the full width of one set of logos */
          0% { transform: translateX(0); }
          100% { 
            transform: translateX(calc(-1 * (var(--logo-width, 140px) + var(--logo-gap)) * var(--logo-count))); 
          }
        }

        /* responsive */
        @media (max-width: 1000px) {
           .marquee-title { font-size:1.4rem; }
        }
        @media (max-width: 900px) {
          :root { --logo-gap: 24px; --marquee-speed: 24s; }
          .logo img { height:40px; }
          .marquee-title { font-size:1.25rem; margin-bottom: 20px; }
        }

        @media (max-width: 420px) {
          :root { --logo-gap: 16px; --marquee-speed: 20s; }
          .logo img { height:34px; }
          .marquee-wrapper { padding: 28px 0; }
        }
      `}</style>
    </div>
  );
}