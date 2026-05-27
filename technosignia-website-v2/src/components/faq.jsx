import React, { useState } from "react";

/* ─── FAQ DATA ───────────────────────────────────────────────────────────── */
const FAQ_DATA = [
  {
    q: "Do you provide 100% placement assistance?",
    a: "Yes! TechnoSignia has a dedicated placement cell. We conduct mock interviews, resume-building sessions, and connect you directly with our network of over 200+ top MNC and startup hiring partners.",
  },
  {
    q: "What is the duration of the Full Stack courses?",
    a: "Our intensive Full Stack programs (Java, Python, MERN) typically run for 5 to 6 months. This includes core training, real-time project building, and interview preparation phases.",
  },
  {
    q: "Are the classes conducted online or offline?",
    a: "We offer hybrid flexibility. You can choose to attend our highly interactive offline batches at our Pune campus, or join live online sessions with access to recorded playbacks.",
  },
  {
    q: "Do I need a technical background to join?",
    a: "Not necessarily. Our curriculum is engineered from the ground up, starting from absolute basics to advanced enterprise-level architectures. Dedication is the only prerequisite.",
  },
  {
    q: "Who will be mentoring me during the course?",
    a: "You will be trained directly by industry veterans and ex-MNC professionals with over 10+ years of active development experience, ensuring you learn production-ready standards.",
  },
];

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
    
    --border-glow: rgba(122, 153, 200, 0.25); /* Based on --c-light-blue */
  }

  .faq-page-wrapper {
    font-family: 'Outfit', sans-serif;
    background-color: var(--bg-base);
    min-height: 100vh;
    padding: 80px 24px;
    position: relative;
    overflow: hidden;
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
    background: radial-gradient(circle, rgba(231, 104, 94, 0.15) 0%, transparent 70%); /* --c-coral */
    width: 60vw; height: 60vw;
    top: -10vh; right: -20vw;
    animation-delay: -2s;
  }
  .orb-blue {
    background: radial-gradient(circle, rgba(56, 131, 195, 0.12) 0%, transparent 70%); /* --c-sky-blue */
    width: 50vw; height: 50vw;
    bottom: -10vh; left: -10vw;
    animation-delay: -5s;
  }

  /* ---- ANIMATIONS ---- */
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-10px); max-height: 0; }
    to { opacity: 1; transform: translateY(0); max-height: 500px; }
  }

  /* ---- MAIN GLASS BOX (The Big Wrapper) ---- */
  .faq-glass-box {
    position: relative;
    z-index: 1;
    max-width: 1400px;
    margin: 0 auto;
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
    padding: 80px 60px;
    display: grid;
    grid-template-columns: 1fr 1.3fr;
    gap: 80px;
    animation: fadeInUp 0.8s ease forwards;
  }

  /* ---- LEFT SIDE CONTENT ---- */
  .faq-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .faq-huge-text {
    font-size: clamp(5rem, 10vw, 8rem);
    font-weight: 900;
    line-height: 0.9;
    margin: 0 0 10px 0;
    /* Gradient text from Coral to Deep Blue */
    background: linear-gradient(135deg, var(--c-coral) 0%, var(--c-deep-blue) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: -2px;
    filter: drop-shadow(0 10px 20px rgba(231, 104, 94, 0.2));
  }

  .faq-full-form {
    font-size: clamp(1.5rem, 2.5vw, 2.2rem);
    font-weight: 800;
    color: #9c7979;
    margin: 0 0 24px 0;
    line-height: 1.3;
  }

  .faq-desc {
    font-size: 1.1rem;
    color: var(--c-muted-purple);
    font-weight: 500;
    line-height: 1.7;
    margin: 0 0 40px 0;
  }
  
  .faq-desc strong {
    color: var(--c-deep-blue);
    font-weight: 800;
  }

  .faq-buttons {
    display: flex;
    gap: 16px;
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
  }
  .btn-secondary:hover {
    background: rgba(231, 104, 94, 0.1);
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(231, 104, 94, 0.2);
  }

  /* ---- RIGHT SIDE ACCORDION (Q&A) ---- */
  .faq-right {
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
  }

  .faq-item-box {
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid var(--border-glow);
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(15, 36, 136, 0.03);
  }
  
  .faq-item-box:hover {
    border-color: rgba(56, 131, 195, 0.4); /* --c-sky-blue */
    box-shadow: 0 10px 25px rgba(56, 131, 195, 0.15);
    transform: translateY(-2px);
  }
  
  .faq-item-box.open {
    border-color: var(--c-coral);
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 15px 35px rgba(231, 104, 94, 0.15);
  }

  .faq-question-btn {
    width: 100%;
    background: none;
    border: none;
    padding: 24px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-family: inherit;
    text-align: left;
    gap: 20px;
  }

  .faq-question-text {
    font-size: 1.15rem;
    font-weight: 800;
    color: var(--c-deep-blue);
    line-height: 1.4;
    transition: color 0.3s ease;
  }

  .faq-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(122, 153, 200, 0.15); /* --c-light-blue */
    color: var(--c-mid-blue);
    font-size: 1.5rem;
    font-weight: 300;
    flex-shrink: 0;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .faq-item-box.open .faq-icon {
    transform: rotate(45deg);
    background: var(--c-coral);
    color: #ffffff;
    box-shadow: 0 5px 15px rgba(231, 104, 94, 0.4);
  }

  .faq-answer-container {
    padding: 0 30px 24px 30px;
    animation: slideDown 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  .faq-answer-text {
    font-size: 1.05rem;
    color: var(--c-muted-purple);
    line-height: 1.7;
    font-weight: 500;
    margin: 0;
    border-top: 1px dashed rgba(122, 153, 200, 0.3);
    padding-top: 20px;
  }

  /* ---- RESPONSIVE DESIGN ---- */
  @media (max-width: 1024px) {
    .faq-glass-box {
      grid-template-columns: 1fr;
      padding: 60px 40px;
      gap: 50px;
    }
    .faq-left {
      text-align: center;
      align-items: center;
    }
    .faq-buttons {
      justify-content: center;
    }
    .faq-huge-text {
      text-align: center;
    }
  }

  @media (max-width: 600px) {
    .faq-glass-box {
      padding: 40px 24px;
    }
    .faq-question-btn {
      padding: 20px;
    }
    .faq-answer-container {
      padding: 0 20px 20px 20px;
    }
    .faq-huge-text {
      font-size: 2rem;
    }
  }
`;

export default function Faq() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="faq-page-wrapper">
      <style>{VIBRANT_AI_CSS}</style>

      {/* Ambient Background Orbs */}
      <div className="orb-container">
        <div className="vibrant-orb orb-coral" />
        <div className="vibrant-orb orb-blue" />
      </div>

      {/* The Big Glassmorphic Box */}
      <div className="faq-glass-box">
        {/* Left Side: Typography & Buttons */}
        <div className="faq-left">
          <h1
            className="faq-huge-text"
            style={{
              fontSize: "clamp(1.5rem, 5vw, 3rem)",
              fontWeight: 900,
              marginTop: "8px",
            }}
          >
            {" "}
            FAQ
          </h1>
          <h2 className="faq-full-form">
            Everything You Want to Know Before Enrolling at TechnoSignia, Pune
          </h2>
          <p className="faq-desc">
            At <strong>TechnoSignia</strong>, we believe in transparent,
            career-driven education. Whether you are curious about our
            industry-aligned curriculum, placement protocols, or mentorship
            programs, find the answers you need to kickstart your journey into
            tech.
          </p>
          <div className="faq-buttons">
            <button className="btn-primary">Connect to our expert</button>
            <button className="btn-secondary">Email us</button>
          </div>
        </div>

        {/* Right Side: Attractive Box-Format Q&A */}
        <div className="faq-right">
          {FAQ_DATA.map((item, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={i} className={`faq-item-box ${isOpen ? "open" : ""}`}>
                <button
                  className="faq-question-btn"
                  onClick={() => toggleFaq(i)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{item.q}</span>
                  <span className="faq-icon">+</span>
                </button>

                {isOpen && (
                  <div className="faq-answer-container">
                    <p className="faq-answer-text">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
