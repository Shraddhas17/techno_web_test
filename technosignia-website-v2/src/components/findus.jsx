import React from 'react';

/* ─── VIBRANT AI-GENIC CSS (Custom Palette) ──────────────────────────────── */
const VIBRANT_AI_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700;900&display=swap');

  :root {
    --bg-base: #fdfdfd;
    --bg-surface: rgba(255, 255, 255, 0.7);
    
    /* Strict User Palette */
    --c-deep-blue: #0f2488;
    --c-light-blue: #7a99c8;
    --c-mid-blue: #3468ad;
    --c-muted-purple: #705a63;
    --c-coral: #e7685e;
    --c-dark-red: #c02e24;
    --c-sky-blue: #3883c3;
    
    --border-glow: rgba(122, 153, 200, 0.25);
  }

  .visit-page-wrapper {
    font-family: 'Outfit', sans-serif;
    background-color: var(--bg-base);
    min-height: 100vh;
    padding: 80px 24px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* ---- AMBIENT BACKGROUND ORBS ---- */
  .orb-container {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    overflow: hidden;
    z-index: 0;
    pointer-events: none;
  }
  
  @keyframes orbShift {
    0% { transform: translate(0, 0) scale(1); opacity: 0.5; }
    33% { transform: translate(40px, -40px) scale(1.1); opacity: 0.7; }
    66% { transform: translate(-30px, 40px) scale(0.9); opacity: 0.4; }
    100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
  }

  .vibrant-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
    animation: orbShift 15s infinite ease-in-out alternate;
  }
  .orb-coral {
    background: radial-gradient(circle, rgba(231, 104, 94, 0.15) 0%, transparent 70%);
    width: 60vw; height: 60vw;
    top: -10vh; right: -20vw;
    animation-delay: -2s;
  }
  .orb-blue {
    background: radial-gradient(circle, rgba(56, 131, 195, 0.12) 0%, transparent 70%);
    width: 50vw; height: 50vw;
    bottom: -10vh; left: -10vw;
    animation-delay: -5s;
  }

  /* ---- ANIMATIONS ---- */
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* ---- MAIN GLASS BOX (The Big Wrapper) ---- */
  .visit-glass-box {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 60%;
    max-width: 1300px;
    background: var(--bg-surface);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    border-radius: 32px;
    border: 1px solid rgba(255, 255, 255, 0.8);
    /* Dual-tone gradient glow shadow using the palette */
    box-shadow: 
      0 20px 50px rgba(15, 36, 136, 0.05),
      -10px -10px 40px rgba(231, 104, 94, 0.15), 
      10px 10px 40px rgba(56, 131, 195, 0.15);
    padding: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    animation: fadeInUp 0.8s ease forwards;
  }
    

  /* ---- LEFT SIDE: MAP ---- */
  .visit-left {
    width: 80%;
    height: 80%;
    min-height: 350px;
    border-radius: 24px;
    overflow: hidden;
    position: relative;
    border: 2px solid rgba(255, 255, 255, 0.9);
    box-shadow: 0 15px 35px rgba(15, 36, 136, 0.1);
    padding-top: 80%; /* 16:9 Aspect Ratio */
   justify-self: center;
   align-items: center;
   margin-top: 60px;
  
    
  }

  .visit-left iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
    /* Optional: Slight filter to make map match the aesthetic */
    filter: contrast(1.05) saturate(1.1) hue-rotate(-5deg);
  }

  /* ---- RIGHT SIDE: DETAILS ---- */
  .visit-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 0;
  }

  .visit-huge-text {
    font-size: clamp(3.5rem, 6vw, 5rem);
    font-weight: 900;
    line-height: 0.95;
    margin: 0 0 12px 0;
    /* Gradient text from Coral to Deep Blue */
    background: linear-gradient(135deg, var(--c-coral) 0%, var(--c-deep-blue) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: -1px;
    filter: drop-shadow(0 10px 20px rgba(231, 104, 94, 0.15));
  }

  .visit-full-form {
    font-size: clamp(1.4rem, 2vw, 1.8rem);
    font-weight: 800;
    color: var(--c-deep-blue);
    margin: 0 0 32px 0;
    line-height: 1.3;
  }

  /* Info Cards */
  .info-card {
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid var(--border-glow);
    border-radius: 16px;
    padding: 20px 24px;
    display: flex;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 16px;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(15, 36, 136, 0.03);
  }

  .info-card:hover {
    transform: translateX(5px);
    border-color: rgba(56, 131, 195, 0.3);
    box-shadow: 0 10px 25px rgba(56, 131, 195, 0.1);
  }

  .info-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: rgba(231, 104, 94, 0.1);
    color: var(--c-coral);
    flex-shrink: 0;
  }

  .info-icon.blue-tint {
    background: rgba(56, 131, 195, 0.1);
    color: var(--c-sky-blue);
  }

  .info-text-box {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .info-label {
    font-size: 0.85rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--c-light-blue);
  }

  .info-value {
    font-size: 1.05rem;
    color: var(--c-muted-purple);
    font-weight: 600;
    line-height: 1.5;
  }

  .info-value strong {
    color: var(--c-deep-blue);
    font-weight: 800;
  }

  /* Buttons */
  .visit-buttons {
    display: flex;
    gap: 16px;
    margin-top: 32px;
    flex-wrap: wrap;
  }

  .btn-primary {
    background: linear-gradient(135deg, var(--c-mid-blue) 0%, var(--c-sky-blue) 100%);
    color: #ffffff;
    font-weight: 800;
    padding: 16px 32px;
    border-radius: 12px;
    border: none;
    font-size: 1.05rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 25px rgba(56, 131, 195, 0.3);
    font-family: inherit;
    flex: 1;
    text-align: center;
  }
  .btn-primary:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(52, 104, 173, 0.4);
  }

  .btn-secondary {
    background: transparent;
    color: var(--c-dark-red);
    font-weight: 800;
    padding: 16px 32px;
    border-radius: 12px;
    border: 2px solid var(--c-coral);
    font-size: 1.05rem;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: inherit;
    flex: 1;
    text-align: center;
  }
  .btn-secondary:hover {
    background: rgba(231, 104, 94, 0.1);
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(231, 104, 94, 0.2);
  }

  /* ---- RESPONSIVE DESIGN ---- */
  @media (max-width: 1024px) {
    .visit-glass-box {
      grid-template-columns: 1fr;
      padding: 40px;
      gap: 40px;
    }
    .visit-left {
      min-height: 400px;
      order: 2; /* Put map below text on smaller screens */
    }
    .visit-right {
      order: 1;
      padding: 0;
      text-align: center;
    }
    .info-card {
      text-align: left;
    }
  }

  @media (max-width: 600px) {
    .visit-glass-box {
      padding: 24px;
    }
    .visit-huge-text {
      font-size: 3rem;
    }
    .visit-buttons {
      flex-direction: column;
    }
  }
`;

export default function About() {
  return (
    <div className="visit-page-wrapper">
      <style>{VIBRANT_AI_CSS}</style>

      {/* Ambient Background Orbs */}
      <div className="orb-container">
        <div className="vibrant-orb orb-coral" />
        <div className="vibrant-orb orb-blue" />
      </div>

      {/* The Big Glassmorphic Box */}
      <div className="visit-glass-box">
        
        {/* Left Side: Map */}
        <div className="visit-left">
          <iframe
            title="TechnoSignia Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.4429986348126!2d73.766752!3d18.6042129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9a71a179373%3A0xa9a528cc297120db!2sTechnoSignia!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Right Side: Details & Typography */}
        <div className="visit-right">
          <h1 className="text-gradient-vibrant" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, marginTop: '8px' }}>Find Us</h1>
          <h2 className="visit-full-form">Visit Our Training Center</h2>

          {/* Address Card */}
          <div className="info-card">
            <div className="info-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div className="info-text-box">
              <span className="info-label">Headquarters</span>
              <span className="info-value">
                <strong>Floor 2nd, 21 Square</strong><br/>
                Kalewadi Phata Road, Near Dange Chowk,<br/>
                Thergaon, Pune 411033
              </span>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="info-card">
            <div className="info-icon blue-tint">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div className="info-text-box">
              <span className="info-label">Call Us</span>
              <span className="info-value"><strong>+91 7499259142</strong></span>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon blue-tint">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div className="info-text-box">
              <span className="info-label">Email Us</span>
              <span className="info-value"><strong>admin@technosignia.in</strong></span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="visit-buttons">
            <button className="btn-primary" onClick={() => window.open("https://maps.google.com/?q=TechnoSignia+Pune", "_blank")}>
              Get Directions
            </button>
            <button className="btn-secondary" onClick={() => window.location.href = "tel:+917499259142"}>
              Call Now
            </button>
          </div>
          
        </div>

      </div>
    </div>
  );
}