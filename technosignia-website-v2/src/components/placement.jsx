import React, { useState, useEffect } from "react";
import im1 from "../assets/pl1.png";
import im2 from "../assets/pl2.png";
 import im3 from "../assets/pl3.png";
import im4 from "../assets/pl4.jpeg";
import im5 from "../assets/pl5.jpeg";
import im6 from "../assets/pl6.png";
import im7 from "../assets/pl7.png";
import cyb from "../assets/cyba.png";
import cap from "../assets/cap.png";
import infosys from "../assets/infosys.png";
import citi from "../assets/citibank.jpg.jpeg";
import iris from "../assets/IRIS.png";
import workday from "../assets/workday.png";
/* ─── PLACEMENT DATA ─────────────────────────────────────────────────────── */
const PLACEMENT_DATA = [
  {
    id: 1,
    avatar: im1,
    companyLogo: cyb,
    package: "₹ 7 LPA",
    name: "Aishwarya Dhamdhere",
    role: "Automation Tester",
    company: "Cybage",
    branch: "CSE",
    desc: "Led a redesign of a core payments module and improved latency by 45% through algorithmic improvements and mentoring interns.",
    tag: "top-mnc",
    tagLabel: "Top MNC",
  },
  {
    id: 2,
    avatar: im2,
    companyLogo: cap,
    package: "₹ 19 LPA",
    name: "Gauri Morale",
    role: "Principal Software Engineer",
    company: "Capgemini",
    branch: "CSE",
    desc: "Built scalable data pipelines to process streaming telemetry and delivered production models for anomaly detection.",
    tag: "top-mnc",
    tagLabel: "Top MNC",
  },
  {
    id: 3,
    avatar: im3,
    companyLogo: "https://logo.clearbit.com/meta.com?size=80",
    package: "₹ 12.5 LPA",
    name: "SurajKumar Borikar",
    role: "Java Developer",
    company: "NTT Data",
    branch: "CSE",
    desc: "Implemented reliable microservice orchestration and reduced error budgets by half through smarter retries.",
    tag: "recent",
    tagLabel: "Recent Placement",
  },
  {
    id: 4,
    avatar:im4,
    companyLogo: workday,
    package: "₹20 LPA",
    name: "Jil Kapadia",
    role: "Software Developer Intern",
    company: "Workday",
    branch: "CSE",
    desc: "Designed a cloud-native platform that scaled to millions of daily users with resilience and cost efficiency.",
    tag: "highest",
    tagLabel: "Highest Package",
  },
  {
    id: 5,
    avatar: im5,
    companyLogo: iris,
    package: "₹ 15 LPA",
    name: "Shriyash Thawali",
    role: "Software Engineer",
    company: "IRIS Software",
    branch: "IT",
    desc: "Translated customer research into product insights and supported roadmap decisions for a global SaaS release.",
    tag: "recent",
    tagLabel: "Recent Placement",
  },
  {
    id: 6,
    avatar:im6,
    companyLogo: infosys,
    package: "₹ 10.5 LPA",
    name: "Priyanka Gangurde",
    role: "Automation Tester",
    company: "Infosys",
    branch: "IT",
    desc: "Focused on accessible, high-performance UI components and shipped cross-platform responsive features.",
    tag: "top-mnc",
    tagLabel: "Top MNC",
  },
  {
    id: 7,
    avatar: im7,
    companyLogo: citi,
    package: "₹ 15.3 LPA",
    name: "Rajiya Ansari",
    role: "Java Developer",
    company: "Citi Bank",
    branch: "EE",
    desc: "Led model research for natural language processing workflows and improved accuracy on classification tasks.",
  },
 
];

/* ─── VIBRANT AI-GENIC CSS ───────────────────────────────────────────────── */
const VIBRANT_AI_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700;900&display=swap');

  :root {
    --bg-base: #fdfdfd;
    --bg-surface: rgba(255, 255, 255, 0.65);
    
    /* Strict User Palette */
    --c-dark: #0c0c0c;
    --c-rose: #9c7979; 
    --c-blue-deep: #3468ad;
    --c-blue-soft: #4b88c4;
    --c-coral: #e8695c;
    
    --border-glow: rgba(156, 121, 121, 0.15);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  
  body {
    font-family: 'Outfit', sans-serif;
    background-color: var(--bg-base);
    color: var(--c-dark);
    overflow-x: hidden;
  }

  /* ---- ANIMATIONS ---- */
  @keyframes orbShift {
    0% { transform: translate(0, 0) scale(1); opacity: 0.6; }
    33% { transform: translate(30px, -50px) scale(1.1); opacity: 0.8; }
    66% { transform: translate(-20px, 30px) scale(0.9); opacity: 0.5; }
    100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes marqueeScroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  @keyframes marchAnts {
    0% { stroke-dashoffset: 0; transform: rotate(0deg); }
    100% { stroke-dashoffset: -100; transform: rotate(360deg); }
  }
  
  @keyframes pulseGlow {
    0%, 100% { box-shadow: 0 0 15px rgba(232, 105, 92, 0.2); }
    50% { box-shadow: 0 0 30px rgba(232, 105, 92, 0.5); }
  }

  /* ---- AMBIENT BACKGROUND ORBS ---- */
  .orb-container {
    position: fixed;
    top: 0; left: 0; width: 100vw; height: 100vh;
    overflow: hidden;
    z-index: -1;
    pointer-events: none;
  }
  .vibrant-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(90px);
    animation: orbShift 15s infinite ease-in-out alternate;
  }
  .orb-coral {
    background: radial-gradient(circle, rgba(232, 105, 92, 0.15) 0%, transparent 70%);
    width: 60vw; height: 60vw;
    top: -10vh; right: -10vw;
    animation-delay: -2s;
  }
  .orb-blue {
    background: radial-gradient(circle, rgba(75, 136, 196, 0.12) 0%, transparent 70%);
    width: 50vw; height: 50vw;
    bottom: -10vh; left: -10vw;
    animation-delay: -5s;
  }

  /* ---- TEXT EFFECTS ---- */
  .text-gradient-vibrant {
    background: linear-gradient(270deg, var(--c-blue-deep), var(--c-coral), var(--c-blue-soft));
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .text-gradient-package {
    background: linear-gradient(135deg, var(--c-coral) 0%, var(--c-blue-deep) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* ---- GLASS CARDS (WITH GRADIENT GLOW SHADOW) ---- */
  .glass-vibrant {
    background: var(--bg-surface);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border-radius: 20px;
    border: none;
    position: relative;
    /* Dual-tone glowing shadow to simulate a gradient effect */
    box-shadow: 
      0 10px 30px rgba(12, 12, 12, 0.05),
      -8px -8px 25px rgba(232, 105, 92, 0.18), /* Coral glow */
      8px 8px 25px rgba(52, 104, 173, 0.18);   /* Deep Blue glow */
    transition: all 0.4s ease;
    z-index: 1;
    display: flex;
    flex-direction: column;
  }
  
  .glass-vibrant:hover {
    transform: translateY(-6px);
    /* Intensify the multi-colored shadow on hover */
    box-shadow: 
      0 15px 40px rgba(12, 12, 12, 0.08),
      -12px -12px 35px rgba(232, 105, 92, 0.28), 
      12px 12px 35px rgba(52, 104, 173, 0.28);   
  }

  /* ---- MARQUEE STRIP ---- */
  .marquee-wrapper {
    width: 100%;
    overflow: hidden;
    padding: 35px 0; /* Increased padding slightly to accommodate glowing shadows */
    position: relative;
  }
  .marquee-track {
    display: flex;
    gap: 36px;
    width: max-content;
    animation: marqueeScroll 45s linear infinite;
  }
  .marquee-wrapper:hover .marquee-track {
    animation-play-state: paused;
  }
  
  .student-mini-card {
    width: 320px;
    padding: 24px;
    flex-shrink: 0;
    cursor: pointer;
  }

  /* ---- AVATAR GLOW ---- */
  .avatar-glow {
    position: relative;
    border-radius: 50%;
    padding: 3px;
    background: linear-gradient(135deg, var(--c-blue-soft), var(--c-coral));
    box-shadow: 0 10px 20px rgba(75, 136, 196, 0.2);
  }
  .avatar-glow img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #fff;
  }

  /* ---- BUTTONS & BADGES ---- */
  .btn-vibrant {
    background: linear-gradient(135deg, var(--c-blue-deep) 0%, var(--c-blue-soft) 100%);
    color: #ffffff;
    font-weight: 800;
    padding: 14px 32px;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 20px rgba(52, 104, 173, 0.25);
  }
  .btn-vibrant:hover {
    transform: scale(1.03);
    box-shadow: 0 12px 25px rgba(52, 104, 173, 0.35);
  }

  .badge-ai {
    background: rgba(232, 105, 92, 0.1);
    color: var(--c-coral);
    border: 1px solid rgba(232, 105, 92, 0.25);
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .badge-blue {
    background: rgba(52, 104, 173, 0.1);
    color: var(--c-blue-deep);
    border: 1px solid rgba(52, 104, 173, 0.25);
  }

  /* ---- UTILITIES & RESPONSIVE ---- */
  .animate-fade {
    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    opacity: 0;
  }
  .delay-2 { animation-delay: 0.2s; }

  @media (max-width: 900px) {
    .split-layout { grid-template-columns: 1fr !important; gap: 32px !important; }
  }
`;

/* ─── HELPER COMPONENTS ──────────────────────────────────────────────────── */
function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function CompanyLogo({ src, companyName }) {
  const [failed, setFailed] = useState(false);
  return (
    <div
      style={{
        width: 90,
        height: 90,
        // marginBottom: 20,
        // borderRadius: 10,
        // background: "rgba(255,255,255,0.9)",
        // border: "1px solid var(--border-glow)",
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
        // overflow: "hidden",
        flexShrink: 0,
      }}
    >
      {!failed ? (
        <img
          src={src}
          alt={companyName}
          onError={() => setFailed(true)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            padding: 4,
          }}
        />
      ) : (
        <span
          style={{
            fontSize: "1rem",
            fontWeight: 800,
            color: "var(--c-blue-deep)",
          }}
        >
          {getInitials(companyName)}
        </span>
      )}
    </div>
  );
}

/* ─── MAIN PLACEMENT COMPONENT ───────────────────────────────────────────── */
export default function Placement() {
  // Logic for the rotating "Featured" student in the right box
  const [featuredIdx, setFeaturedIdx] = useState(0);
  const featuredCandidates = PLACEMENT_DATA.filter(
    (s) => s.tag === "highest" || s.tag === "top-mnc",
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setFeaturedIdx((prev) => (prev + 1) % featuredCandidates.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredCandidates.length]);

  const featuredStudent = featuredCandidates[featuredIdx];

  // We duplicate the list to ensure the CSS infinite marquee loops seamlessly
  const marqueeItems = [...PLACEMENT_DATA, ...PLACEMENT_DATA];

  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        paddingBottom: "60px",
      }}
    >
      <style>{VIBRANT_AI_CSS}</style>

      {/* Ambient Background Orbs */}
      <div className="orb-container">
        <div className="vibrant-orb orb-coral" />
        <div className="vibrant-orb orb-blue" />
      </div>

      {/* Navigation Bar */}
      {/* <nav style={{ padding: "20px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--border-glow)", background: "rgba(253, 253, 253, 0.7)", backdropFilter: "blur(20px)", position: "sticky", top: 0, zIndex: 100 }}>
        
        <div style={{ display: "flex", gap: "24px" }}>
          <button style={{ background: "transparent", border: "1.5px solid var(--c-blue-deep)", color: "var(--c-blue-deep)", padding: "10px 24px", borderRadius: "12px", fontWeight: 700, cursor: "pointer", transition: "all 0.3s ease" }}>
            All Courses
          </button>
        </div>
      </nav> */}

      {/* Hero Header */}
      <div
        className="animate-fade"
        style={{
          textAlign: "center",
          paddingTop: "80px",
          paddingBottom: "20px",
        }}
      >
        <span
          style={{
            color: "var(--c-coral)",
            fontSize: "0.85rem",
            fontWeight: 800,
            letterSpacing: "2px",
            textTransform: "uppercase",
            background: "rgba(232, 105, 92, 0.1)",
            padding: "6px 16px",
            borderRadius: "100px",
          }}
        >
        Student Success Stories
        </span>
        <h1
           className="text-gradient-vibrant"
            style={{
              fontSize: "clamp(1.5rem, 5vw, 3rem)",
              fontWeight: 900,
              marginTop: "8px",
            }}
        >
          What Happens After TechnoSignia.

        </h1>
      </div>

      {/* 1. The Marquee Strip (Right to Left) */}
      <div className="marquee-wrapper animate-fade">
        <div className="marquee-track">
          {marqueeItems.map((student, idx) => (
            <div
              key={`${student.id}-${idx}`}
              className="glass-vibrant student-mini-card"
            >
              {/* Card Header: Tag & Company Logo */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 16,
                }}
              >
                <div>
                  {student.tagLabel && (
                    <span
                      className={`badge-ai ${student.tag === "top-mnc" ? "badge-blue" : ""}`}
                      style={{ display: "inline-block", marginBottom: 8 }}
                    >
                      {student.tagLabel}
                    </span>
                  )}
                  <div
                    className="text-gradient-package"
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: 900,
                      lineHeight: 1,
                    }}
                  >
                    {student.package}
                  </div>
                </div>
                {/* MNC/Company Logo in Top Right */}
                <CompanyLogo
                  src={student.companyLogo}
                  companyName={student.company}
                />
              </div>

              {/* Card Body: Avatar & Info */}
              <div
                style={{
                  display: "flex",
                  gap: 14,
                  alignItems: "center",
                  flexGrow: 1,
                }}
              >
                <div
                  className="avatar-glow"
                  style={{ width: 56, height: 56, flexShrink: 0 }}
                >
                  <img src={student.avatar} alt={student.name} loading="lazy" />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 800,
                      color: "var(--c-dark)",
                      marginBottom: 2,
                    }}
                  >
                    {student.name}
                  </h3>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--c-blue-deep)",
                      fontWeight: 700,
                    }}
                  >
                    {student.role}
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--c-rose)",
                      fontWeight: 600,
                      marginTop: 2,
                    }}
                  >
                    {student.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. The Split "Success Story" Section */}
      <div
        className="split-layout animate-fade delay-2"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.3fr",
          gap: "48px",
          maxWidth: "1200px",
          margin: "40px auto 0",
          padding: "0 24px",
        }}
      >
        {/* Left Side: The "Become Our Next Success Story" CTA Box */}
        <div
          className="glass-vibrant"
          style={{
            padding: "50px 30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          {/* Moving Empty Frame Placeholder */}
          <div
            style={{
              position: "relative",
              width: 140,
              height: 140,
              marginBottom: 24,
            }}
          >
            <svg
              width="140"
              height="140"
              viewBox="0 0 140 140"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                animation: "marchAnts 15s linear infinite",
              }}
            >
              <rect
                x="5"
                y="5"
                width="130"
                height="130"
                rx="65"
                fill="rgba(75, 136, 196, 0.05)"
                stroke="var(--c-coral)"
                strokeWidth="3"
                strokeDasharray="12 12"
              />
            </svg>
            {/* Center Icon/Text */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2.5rem",
                fontWeight: 900,
                color: "var(--c-blue-deep)",
                opacity: 0.5,
              }}
            >
              ?
            </div>
          </div>

          <h3
            style={{
              fontSize: "2rem",
              fontWeight: 900,
              color: "var(--c-dark)",
              marginBottom: 16,
              lineHeight: 1.2,
            }}
          >
            Become Our Next
            <br />
            Success Story
          </h3>
          <p
            style={{
              color: "var(--c-rose)",
              fontSize: "1rem",
              fontWeight: 500,
              lineHeight: 1.6,
              marginBottom: 32,
              padding: "0 10px",
            }}
          >
            Join a community of high-achieving students and land top placements
            with premium packages.
          </p>
          <button
            className="btn-vibrant"
            style={{ padding: "16px 40px", fontSize: "1.1rem" }}
          >
            Start Your Journey
          </button>
        </div>

        {/* Right Side: Rotating Featured Student Box */}
        <div
          className="glass-vibrant"
          style={{
            padding: "40px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Top Left / Top Right Tags */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 24,
              zIndex: 2,
            }}
          >
            <span
              className="badge-ai badge-blue"
              style={{ fontSize: "0.85rem" }}
            >
              High Packages
            </span>
            <span className="badge-ai" style={{ fontSize: "0.85rem" }}>
              Highest Package
            </span>
          </div>

          {/* Featured Profile Data (Wraps content to animate changes) */}
          <div
            key={featuredStudent.id}
            className="animate-fade"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              flexGrow: 1,
            }}
          >
            {/* Image centered */}
            <div
              className="avatar-glow"
              style={{
                width: 130,
                height: 130,
                marginBottom: 20,
                animation: "pulseGlow 3s infinite",
              }}
            >
              <img src={featuredStudent.avatar} alt={featuredStudent.name} />
            </div>

            {/* LPA Highlighted */}
            <div
              className="text-gradient-package"
              style={{
                fontSize: "3.5rem",
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: 16,
              }}
            >
              {featuredStudent.package}
            </div>

            {/* Student Info */}
            <h3
              style={{
                fontSize: "1.8rem",
                fontWeight: 800,
                color: "var(--c-dark)",
                marginBottom: 4,
              }}
            >
              {featuredStudent.name}
            </h3>
            <div
              style={{
                color: "var(--c-blue-deep)",
                fontWeight: 700,
                fontSize: "1.2rem",
                marginBottom: 2,
              }}
            >
              {featuredStudent.role}
            </div>
            <div
              style={{
                color: "var(--c-rose)",
                fontWeight: 600,
                fontSize: "1rem",
                marginBottom: 24,
              }}
            >
              {featuredStudent.company}{" "}
              <span style={{ margin: "0 6px", opacity: 0.5 }}>•</span>{" "}
              {featuredStudent.branch}
            </div>

            {/* Review / Quote */}
            <p
              style={{
                color: "var(--c-rose)",
                fontStyle: "italic",
                fontSize: "1.05rem",
                lineHeight: 1.6,
                maxWidth: "85%",
                marginBottom: 32,
              }}
            >
              "{featuredStudent.desc}"
            </p>

            {/* Read More Button */}
            {/* <button
              style={{
                background: "transparent",
                border: "1.5px solid var(--c-blue-deep)",
                color: "var(--c-blue-deep)",
                padding: "10px 32px",
                borderRadius: "12px",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.3s ease",
                marginTop: "auto",
                zIndex: 2,
              }}
              onMouseOver={(e) => {
                e.target.style.background = "var(--c-blue-deep)";
                e.target.style.color = "#fff";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "transparent";
                e.target.style.color = "var(--c-blue-deep)";
              }}
            >
              Read More ➝
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
