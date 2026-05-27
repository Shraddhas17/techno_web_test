import { useState } from "react";
import { useThemeTokens } from "../hooks/usetheme";

export default function Hero() {
  const th = useThemeTokens();
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (formData.name && formData.phone) setSubmitted(true);
  };

  return (
    <>
      <style>{`
        .form__fields select {
          appearance: none;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 16px center;
          background-size: 1.25rem;
          padding-right: 45px;
        }

        .form__fields select:focus {
          border-color: #2D5A9E !important;
        }

        @media (max-width: 768px) {
          .hero-section {
            flex-direction: column;
          }

          .hero__content {
            order: 1;
          }

          .hero__form {
            order: 2;
            width: 100%;
          }
        }
      `}</style>

      <section className="hero-section">
        {/* Left: Headline */}
        <div
          className="hero__content fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="tag">
            <span className="tag__dot" style={{ background: th.red }} />
            ISO 9001:2015 Audited Accelerator
          </span>

          <h1
            className="text-gradient-vibrant"
            style={{
              fontSize: "clamp(1.5rem, 5vw, 3rem)",
              lineHeight: 1.3,   
              fontWeight: 900,
              marginTop: "8px",
            }}
          >
            Top IT Training in Pune
            <br />
            <span style={{ color: th.red }}>with 100% Internship</span>
            <br />
            <span style={{ color: th.blue }}>& Lifetime Placement Support</span>
          </h1>

          <p className="hero__subtitle" style={{ color: th.textMuted }}>
            TechnoSignia is the most trusted IT training institute in Pune.
            Whether you're a fresher,engineering graduate, or
            career switcher, our industry-designed courses get you
            job-ready from Day 1. Every student completes a real industry
            internship. Lifetime career support included.
          </p>

          <div className="hero__cta-row">
            <a href="#courses" className="btn-primary">
              Explore Career Tracks
            </a>
            <a
              href="#cta"
              className="btn-secondary"
              style={{ color: th.text, border: `1.5px solid ${th.border}` }}
            >
              Request Free Syllabus
            </a>
          </div>

          <div className="hero__stats">
            {[
              ["⭐ 4.9/5", "Google Reviews"],
              ["🏅 ISO", "9001:2015"],
              ["🎯 18 LPA", "Top Package"],
            ].map(([v, l]) => (
              <div key={l}>
                <div className="hero__stat-value" style={{ color: th.text }}>
                  {v}
                </div>
                <div
                  className="hero__stat-label"
                  style={{ color: th.textMuted }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Lead form */}
        <div
          id="cta"
          className="card hero__form fade-up"
          style={{
            background: th.bgCard,
            border: `1px solid ${th.border}`,
            boxShadow: th.shadow,
            animationDelay: "0.2s",
          }}
        >
          {!submitted ? (
            <>
              <h3 className="form__heading" style={{ color: th.text }}>
                Talk to an Advisor
              </h3>
              <p className="form__sub" style={{ color: th.textMuted }}>
                Get a custom curriculum + fee structure in 24 hours.
              </p>
              <div className="form__fields">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  style={{
                    background: th.inputBg,
                    border: `1.5px solid ${th.border}`,
                    color: th.text,
                  }}
                />
                <input
                  type="tel"
                  placeholder="Phone Number (+91)"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  style={{
                    background: th.inputBg,
                    border: `1.5px solid ${th.border}`,
                    color: th.text,
                  }}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  style={{
                    background: th.inputBg,
                    border: `1.5px solid ${th.border}`,
                    color: th.text,
                  }}
                />

                <select
                  value={formData.interest}
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, interest: e.target.value })
                  }
                  style={{
                    background: th.inputBg,
                    border: `1.5px solid ${th.border}`,
                    color: th.text,
                    padding: "12px 16px",
                    fontSize: "13px",
                    fontFamily: "'Poppins', sans-serif",
                    borderRadius: "12px",
                    cursor: "pointer",
                    transition: "border-color 0.2s",
                    width: "100%",
                    outline: "none",
                  }}
                >
                  <option value="" disabled selected hidden>
                    I'm interested in...
                  </option>
                  <option value="fullstack">Java/Python Full Stack</option>
                  <option value="dataai">Data Science & AI</option>
                  <option value="cloud">Cloud & DevOps</option>
                  <option value="testing">QA Automation Testing</option>
                </select>
              </div>
              <br />

              <div className="form__cta">
                <button
                  className="btn-primary btn--full"
                  onClick={handleSubmit}
                >
                  Secure My Spot →
                </button>
              </div>
              <p className="form__note" style={{ color: th.textDim }}>
                No spam. No pressure. Just clarity on your career path.
              </p>
            </>
          ) : (
            <div className="form__success">
              <div className="form__success-icon">✅</div>
              <h3 style={{ color: th.text }}>You're on the list!</h3>
              <p style={{ color: th.textMuted }}>
                Our advisory team will reach you within 24 hours.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
