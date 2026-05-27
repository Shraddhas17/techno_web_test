import React from "react";
import logo from '../assets/logo.png'; 

/* ─── VIBRANT AI-GENIC CSS ───────────────────────────────────────────────── */
const VIBRANT_AI_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700;900&display=swap');

  :root {
    --c-deep-blue: #0f2488;
    --c-light-blue: #7a99c8;
    --c-mid-blue: #3468ad;
    --c-muted-purple: #705a63;
    --c-coral: #e7685e;
    --c-dark-red: #c02e24;
    --c-sky-blue: #3883c3;

    --bg-base: #f8fafc;
    --border-glow: rgba(122, 153, 200, 0.25);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  /* ── MAIN WRAPPER ── */
  .slim-footer-wrapper {
    font-family: 'Outfit', sans-serif;
    background-color: var(--bg-base);
    padding: 60px 24px 40px 24px;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    
  }

  /* ── AMBIENT ORBS ── */
  .footer-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
    pointer-events: none;
    z-index: 0;
    animation: floatOrb 15s infinite ease-in-out alternate;
  }
  @keyframes floatOrb {
    0% { transform: translate(0, 0) scale(1); opacity: 0.5; }
    100% { transform: translate(30px, -30px) scale(1.1); opacity: 0.8; }
  }
  .orb-1 { width: 500px; height: 500px; background: rgba(231, 104, 94, 0.15); bottom: -200px; left: -100px; }
  .orb-2 { width: 600px; height: 600px; background: rgba(56, 131, 195, 0.12); top: -200px; right: -150px; animation-delay: -5s; }

  /* ── GLASSMORPHIC CARD (The Footer Hub) ── */
  .footer-glass-card {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 1350px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.5) 100%);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    border-radius: 32px;
    border: 1px solid rgba(255, 255, 255, 0.9);
    box-shadow: 
      0 20px 50px rgba(15, 36, 136, 0.05),
      -5px -5px 30px rgba(231, 104, 94, 0.08), 
      5px 5px 30px rgba(56, 131, 195, 0.08);
    padding: 48px;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  /* ── GRID LAYOUT ── */
  .footer-grid {
    display: grid;
    grid-template-columns: 1.8fr 1fr 1.5fr 2fr;
    gap: 40px;
    /* This ensures all columns stretch to equal height automatically */
    align-items: stretch;
  }

  /* ── COL 1: BRANDING (UPDATED) ── */
  .footer-col-brand { 
    display: flex; 
    flex-direction: column; 
    align-items: flex-start; /* Ensures everything aligns flush-left */
  }
  
  .brand-header-row {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 12px;
    margin-left: 30px;
  }
  
  .footer-logo { 
    height: 64px; 
    width: auto; 
    object-fit: contain; 
    filter: drop-shadow(0 4px 10px rgba(15, 36, 136, 0.15)); 
    
  }
  
  .brand-name {
    font-size: 2.2rem;
    font-weight: 900;
    letter-spacing: -1px;
    line-height: 1;
  }
  .brand-techno { color: var(--c-dark-red); }
  .brand-signia { color: var(--c-deep-blue); }

  .brand-slogan {
    font-size: 1.05rem;
    font-weight: 800;
    font-style: italic;
    color: var(--c-deep-blue);
    background: linear-gradient(90deg, rgba(231, 104, 94, 0.12) 0%, transparent 100%);
    border-left: 4px solid var(--c-coral);
    padding: 10px 16px;
    border-radius: 0 12px 12px 0;
    margin-bottom: 20px;
    line-height: 1.4;
    width: 100%;
    max-width: 95%;
    margin-left: 30px;
  }

  .footer-desc { 
    font-size: 0.95rem; 
    color: var(--c-muted-purple); 
    line-height: 1.6; 
    font-weight: 500; 
    margin-bottom: 24px; 
    max-width: 95%; 
    text-align: left;
    margin-left: 30px;
  }
  
  .social-row { 
    display: flex; 
    gap: 12px; 
    justify-content: flex-start; 
    align-items: center;
    width: 100%;
    margin-top: auto; /* Pushes the social buttons to the bottom to align beautifully */
  }
  
  .social-btn {
    width: 44px; height: 44px;
    display: flex; align-items: center; justify-content: center;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid var(--border-glow);
    border-radius: 12px;
    color: var(--c-deep-blue);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 4px 10px rgba(0,0,0,0.02);
    margin-left: 30px;
  }
  .social-btn svg { width: 20px; height: 20px; transition: transform 0.3s ease; }
  
  .social-btn.insta:hover { background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); color: white; border-color: transparent; transform: translateY(-4px); box-shadow: 0 10px 20px rgba(220, 39, 67, 0.25); }
  .social-btn.youtube:hover { background: #FF0000; color: white; border-color: transparent; transform: translateY(-4px); box-shadow: 0 10px 20px rgba(255, 0, 0, 0.25); }
  .social-btn.linkedin:hover { background: #0077b5; color: white; border-color: transparent; transform: translateY(-4px); box-shadow: 0 10px 20px rgba(0, 119, 181, 0.25); }
  .social-btn:hover svg { transform: scale(1.1); }

  /* ── COL 2 & 3: LINKS & CONTACT ── */
  .footer-col-title {
    font-size: 1.05rem;
    font-weight: 800;
    color: var(--c-deep-blue);
    margin-bottom: 20px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-left: 100px;
    margin-top: 30px;
  }
  
  .footer-links { list-style: none; display: flex; flex-direction: column; gap: 12px; }
  .footer-links li {
    font-size: 0.95rem; color: var(--c-muted-purple); font-weight: 500;
    transition: all 0.2s ease; cursor: pointer;
    display: flex; align-items: center;
    margin-left: 50px;
  }
  .footer-links li::before {
    content: '→'; font-size: 0.8rem; color: var(--c-coral);
    opacity: 0; transform: translateX(-10px); transition: all 0.3s ease; margin-right: 0; width: 0;
    margin-left: 50px;
  }
  .footer-links li:hover { color: var(--c-sky-blue); font-weight: 700; transform: translateX(4px); }
  .footer-links li:hover::before { opacity: 1; transform: translateX(0); margin-right: 8px; width: auto; }


  .contact-col {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 50px;
  }

  .contact-item {
    display: flex; align-items: flex-start; gap: 12px; margin-bottom: 16px;
    padding: 8px; border-radius: 12px; transition: background 0.3s ease;
    margin-left: 50px;
  }
  .contact-item:hover { background: rgba(255, 255, 255, 0.6); }
  .contact-icon {
    width: 32px; height: 32px; border-radius: 8px;
    display: flex; align-items: center; justify-content: center; flex-shrink: 0;
    background: rgba(56, 131, 195, 0.1); color: var(--c-sky-blue);
    margin-left: 50px;
  }
  .contact-icon.red { background: rgba(231, 104, 94, 0.1); color: var(--c-coral); }
  .contact-text { display: flex; flex-direction: column; gap: 2px; }
  .contact-label { font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: var(--c-light-blue); }
  .contact-val { font-size: 0.9rem; color: var(--c-deep-blue); font-weight: 700; line-height: 1.4; }

 
   

  /* ── BOTTOM TIER ── */
  .footer-bottom {
    border-top: 1px solid rgba(15, 36, 136, 0.1);
    padding-top: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.9rem;
    color: var(--c-muted-purple);
    font-weight: 600;
  }
  .footer-bottom strong { color: var(--c-deep-blue); }
  
  .footer-badges { display: flex; gap: 12px; }
  .mini-badge {
    background: rgba(255,255,255,0.8); border: 1px solid var(--border-glow);
    padding: 4px 10px; border-radius: 6px; font-size: 0.75rem; font-weight: 800;
    color: var(--c-mid-blue); letter-spacing: 0.5px;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 1100px) {
    .footer-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
    .footer-map-wrapper { height: 280px; } /* Fixed height on tablet wrap */
  }
  @media (max-width: 768px) {
    .footer-grid { grid-template-columns: 1fr; gap: 40px; }
    .footer-bottom { flex-direction: column; gap: 16px; text-align: center; }
    .footer-glass-card { padding: 32px 24px; }
  }
`;

const Footer = () => {
  return (
     <footer className="slim-footer-wrapper">
   <style>{VIBRANT_AI_CSS}</style>

      {/* Ambient Orbs */}
      <div className="section  footer-orb orb-1"></div>
      <div className="footer-orb orb-2"></div>

      {/* Main Glass Card */}
      <div className="footer-glass-card">
        
        <div className="footer-grid">
          
          {/* COLUMN 1: BRANDING */}
          <div className="footer-col-brand">
            
            {/* Logo and Name Side-by-Side */}
            <div className="brand-header-row">
              <img src={logo} alt="TechnoSignia Logo" className="footer-logo" />
              <h2 className="brand-name">
                <span className="brand-techno">Techno</span>
                <span className="brand-signia">Signia</span>
              </h2>
            </div>
            
            {/* Highly Highlighted Slogan */}
            <div className="brand-slogan">
              "Crown by skills, empowered by TechnoSignia"
            </div>

            <p className="footer-desc">
              ISO 9001:2015 certified IT training center. Empowering the next generation of software architects through industry-standard training and 100% placement assistance.
            </p>
            
            {/* Flushed Left Social Buttons */}
            <div className="social-row">
              <a href="https://www.linkedin.com/company/technosignia" target="_blank" rel="noreferrer" className="social-btn linkedin" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/technosignia?igsh=aGh0amJ0dGdkOGVm" target="_blank" rel="noreferrer" className="social-btn insta" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://youtube.com/@technosignia3924?si=iXlUAUTWX3mpY4dr" target="_blank" rel="noreferrer" className="social-btn youtube" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"></polygon>
                </svg>
              </a>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div style={{ width: '100%' }}>
            <h4 className="footer-col-title">Explore</h4>
            <ul className="footer-links">
              <li>Home</li>
              <li>Career Tracks</li>
              <li>Success Stories</li>
              <li>Free Demo</li>
              <li>About Us</li>
            </ul>
          </div>
 {/* COLUMN 2: QUICK LINKS */}
          <div >
            <h4 className="footer-col-title">Explore</h4>
            <ul className="footer-links">
              <li>WhyUs</li>
              <li>Founders</li>
              <li>Blogs</li>
              <li>FAQ</li>
              <li>Courses</li>
            </ul>
          </div>

          {/* COLUMN 3: COURSES */}
          <div style={{ marginRight: 60}}>
            <h4 className="footer-col-title">Courses</h4>
            <ul className="footer-links">
              <li>Software Testing (Manual+Core Java+Automation)</li>
              <li>AWS Certified Solutions Architect</li>
              <li>Cloud & DevOps with AWS</li>
              <li>Data Analyst</li>
              <li>Data Science with Gen AI/ML</li>
              <li>Frontend Development</li>
              <li>Java Full Stack Development</li>
              <li>Python Full Stack Development</li>
            </ul>
          </div>
        </div>

       

        {/* BOTTOM TIER: COPYRIGHT & BADGES */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} <strong>Technosignia Software Training Institute Pvt. Ltd.</strong> | All Rights Reserved.
          </div>
          <div className="footer-badges">
            <span className="mini-badge">ISO 9001:2015</span>
            <span className="mini-badge">100% Placement</span>
          </div>
        </div>


    
      </div>
    </footer>
  );
};

export default Footer;