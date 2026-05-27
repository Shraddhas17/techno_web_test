import React from 'react';
import aboutphoto from '../assets/im2.jpg';

/* ─── VIBRANT AI-GENIC CSS ───────────────────────────────────────────────── */
const VIBRANT_AI_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700;900&display=swap');

  :root {
    /* Strict Palette */
    --c-deep-blue: #0f2488;
    --c-light-blue: #7a99c8;
    --c-mid-blue: #3468ad;
    --c-muted-purple: #705a63;
    --c-coral: #e7685e;
    --c-dark-red: #c02e24;
    --c-sky-blue: #3883c3;

    --bg-base: #f8fafc;
    --bg-surface: rgba(255, 255, 255, 0.65);
    
    --text-main: #0c0c0c;
    --text-muted: #5e4b53;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .about-page-wrapper {
    font-family: 'Outfit', sans-serif;
    background-color: var(--bg-base);
    min-height: 100vh;
    padding: 100px 24px; 
    position: relative;
    overflow-x: hidden; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  /* ── AMBIENT ORBS ── */
  .orb-container {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    overflow: hidden;
    z-index: 0;
    pointer-events: none;
  }
  
  @keyframes orbShift {
    0% { transform: translate(0, 0) scale(1); opacity: 0.6; }
    33% { transform: translate(50px, -50px) scale(1.1); opacity: 0.8; }
    66% { transform: translate(-40px, 40px) scale(0.9); opacity: 0.5; }
    100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
  }

  .vibrant-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(120px);
    animation: orbShift 18s infinite ease-in-out alternate;
  }
  .orb-coral {
    background: radial-gradient(circle, rgba(231, 104, 94, 0.2) 0%, transparent 70%);
    width: 60vw; height: 60vw;
    top: -10vh; right: -15vw;
    animation-delay: -2s;
  }
  .orb-blue {
    background: radial-gradient(circle, rgba(56, 131, 195, 0.15) 0%, transparent 70%);
    width: 50vw; height: 50vw;
    bottom: -15vh; left: -10vw;
    animation-delay: -5s;
  }
  .orb-purple {
    background: radial-gradient(circle, rgba(112, 90, 99, 0.15) 0%, transparent 70%);
    width: 40vw; height: 40vw;
    top: 20vh; left: 20vw;
    animation-delay: -8s;
  }

  /* ── ANIMATIONS ── */
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes gradientAnim {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  /* Staggered entrance for content */
  .stagger-1 { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; animation-delay: 0.1s; }
  .stagger-2 { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; animation-delay: 0.2s; }
  .stagger-3 { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; animation-delay: 0.3s; }
  .stagger-4 { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; animation-delay: 0.4s; }

  /* ── MAIN GLASS CARD ── */
  .about-glass-box {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.5) 100%);
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px);
    border-radius: 32px;
    border: 1px solid rgba(255, 255, 255, 0.9);
    box-shadow: 
      0 30px 80px rgba(15, 36, 136, 0.08),
      -10px -10px 40px rgba(231, 104, 94, 0.1), 
      10px 10px 40px rgba(56, 131, 195, 0.1);
    padding: 60px 80px;
    display: grid;
    grid-template-columns: 1.1fr 0.9fr; /* Perfectly balanced grid */
    gap: 70px;
    align-items: stretch;
    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  /* ── TYPOGRAPHY & SECTIONS ── */
  .main-page-title {
    font-size: clamp(2.5rem, 4vw, 3.5rem);
    font-weight: 900;
    line-height: 1.2;
    margin-bottom: 40px;
    background: linear-gradient(135deg, var(--c-coral), var(--c-deep-blue));
    background-size: 200% 200%;
    animation: gradientAnim 8s ease infinite;
    -webkit-background-clip: text; 
    -webkit-text-fill-color: transparent;
    letter-spacing: -1px;
   
  }

  .content-section {
    margin-bottom: 32px;
  }

  .section-header {
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: -0.5px;
    margin-bottom: 16px;
    background: linear-gradient(135deg, var(--c-deep-blue), var(--c-sky-blue));
    -webkit-background-clip: text; 
    -webkit-text-fill-color: transparent;
    display: inline-block;
  }

  .text-block {
    position: relative;
    padding-left: 20px;
    border-left: 3px solid rgba(56, 131, 195, 0.2);
    transition: border-color 0.4s ease;
  }
  .text-block:hover {
    border-left-color: var(--c-coral);
  }

  .text-body {
    font-size: 0.95rem; /* Reduced for elegance */
    color: var(--text-muted);
    line-height: 1.7;
    margin-bottom: 12px;
    font-weight: 500;
    text-align: justify; /* Crisp alignment */
  }
  
  .text-body strong {
    color: var(--c-deep-blue);
    font-weight: 800;
  }

  /* ── RIGHT COLUMN LAYOUT ── */
  .about-visual-col {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  /* ── GLOWING IMAGE FRAME ── */
  .image-glow-wrapper {
    width: 90%;
    height: 240px; 
    border-radius: 24px;
    overflow: hidden;
    position: relative;
    margin-top: 50px;
    margin-bottom: 32px;
    /* The requested borderless glowing shadow */
    box-shadow: 
      0 20px 50px rgba(15, 36, 136, 0.15),
      0 0 35px rgba(56, 131, 195, 0.3),
      0 0 35px rgba(231, 104, 94, 0.2);
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
  }

  .image-glow-wrapper:hover {
    transform: translateY(-8px);
    box-shadow: 
      0 30px 60px rgba(15, 36, 136, 0.2),
      0 0 45px rgba(56, 131, 195, 0.4),
      0 0 45px rgba(231, 104, 94, 0.3);
  }

  .image-glow-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.6s ease;
  }

  .image-glow-wrapper:hover img {
    transform: scale(1.03);
  }




  /* ── RESPONSIVE ── */
  @media (max-width: 1024px) {
    .about-glass-box {
      grid-template-columns: 1fr;
      padding: 50px 40px;
      gap: 50px;
    }
  }
  @media (max-width: 600px) {
    .about-page-wrapper { padding: 40px 16px; }
    .about-glass-box { padding: 32px 24px; }
    .main-page-title { font-size: 2.5rem; margin-bottom: 24px; }
    .section-header { font-size: 1.6rem; }
    .image-glow-wrapper { height: 260px; }
  }
`;

export default function AboutSection() {
  return (
    <div className="about-page-wrapper">
      <style>{VIBRANT_AI_CSS}</style>

      {/* Ambient Background Orbs */}
      <div className="orb-container">
        <div className="vibrant-orb orb-coral" />
        <div className="vibrant-orb orb-blue" />
        <div className="vibrant-orb orb-purple" />
      </div>

      {/* Main Glassmorphic Card */}
      <div className="about-glass-box">

        {/* ==========================================
            LEFT COLUMN: Main Title, Who We Are, Mission 
            ========================================== */}
        <div className="about-content">

          <h1 className="main-page-title stagger-1">About    <br/> TechnoSignia</h1>

          <div className="content-section stagger-2">
            <h2 className="section-header">Who We Are</h2>
            <div className="text-block">
              <p className="text-body">
                <strong>Welcome to the forefront of education.</strong> Get ready to take your career to the next level with Technosignia Software Training Institute. Our range of courses covers everything from Java and Spring Boot to React, Python, and Cloud technologies.
              </p>
              <p className="text-body" style={{ marginBottom: 0 }}>
                With our expert instructors and hands-on learning approach, you can be sure you're getting the best possible training in today's most in-demand technologies. Technosignia stands out in software development & testing education with its innovative curriculum, experienced instructors, and practical learning approach, ensuring students acquire industry-ready skills for a successful career.
              </p>
            </div>
          </div>

          <div className="content-section stagger-3" style={{ marginBottom: 0 }}>
            <h2 className="section-header" >
              Our Mission
            </h2>
            <div className="text-block">
              <p className="text-body">
                At Technosignia, our mission is to revolutionize the way individuals learn and master programming. We believe in democratizing access to high-quality education, empowering learners of all backgrounds to excel in the dynamic world of technology.
              </p>
              <p className="text-body" style={{ marginBottom: 0 }}>
                Through meticulously crafted courses, hands-on projects, and personalized guidance, we aim to instill not just coding skills, but a deep understanding of the logic and problem-solving mindset essential for today's tech landscape.
              </p>
            </div>
          </div>

        </div>

        {/* ==========================================
            RIGHT COLUMN: Vision, Glowing Image, Socials 
            ========================================== */}
        <div className="about-visual-col stagger-4">

          <div className="content-section" style={{ marginBottom: '24px',marginTop: '170px' }}>
            <h2 className="section-header">Our Vision</h2>
            <div className="text-block">
              <p className="text-body" style={{ marginBottom: 0 }}>
                With a commitment to fostering innovation, creativity, and a lifelong passion for coding, we aspire to equip our students with the tools they need to shape the digital future. We envision a world where every aspiring tech professional can transition seamlessly into the industry with absolute confidence. </p>
            </div>
          </div>

          {/* Borderless, Glowing AI-Genic Image */}
          <div className="image-glow-wrapper" style={{marginTop: '110px',marginLeft: '30px'}}>
            <img src={aboutphoto} alt="Technosignia Education" />
          </div>

         

        </div>

      </div>
    </div>
  );
}