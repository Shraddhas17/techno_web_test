import React from "react";

export const WHY = [
  {
    icon: "🖥️",
    title: "Hybrid Learning Hub",
    desc: "Pune lab, live online, or lifetime HD recordings. learn your way, never miss a session.",
  },
  {
    icon: "🎤",
    title: "Live Industry Projects",
    desc: "Build real Spring Boot, Django, Power BI & Selenium projects, not assignments, actual deployable work.",
  },
  {
    icon: "🔗",
    title: "Real Mock Interviews",
    desc: "MNC-style technical panels by TCS & Infosys engineers, crack real interviews before they happen.",
  },
  {
    icon: "📁",
    title: "LinkedIn + GitHub Portfolio",
    desc: "Recruiter-endorsed LinkedIn + live GitHub projects, get found by Pune's top IT hiring companies.",
  },
  {
    icon: "🏆",
    title: "Job Calls from Day 1",
    desc: "Interview shortlists start within weeks of enrolling, no waiting for course completion to begin your job search.",
  },
  {
    icon: "👩‍💼",
    title: "HR Connect Program",
    desc: "Your resume reaches 80+ Pune hiring partners directly, before the job goes live on any portal..",
  },
  {
    icon: "♾️",
    title: "100% Internship Guaranteed",
    desc: "Every student gets a verified industry internship with official letter.",
  },
  {
    icon: "📊",
    title: "Lifetime Career Support",
    desc: "Switch jobs, upskill, or restart anytime, once a TechnoSignia student, career guidance is yours forever, free.",
  },
];

const Why = () => {
  return (
    <section className="why-section">
      <div className="why-container">
        {/* Header Section */}
        <header className="why-header">
          <span className="section-label">⚡Why We're Different</span>
          <h2
            className="text-gradient-vibrant"
            style={{
              fontSize: "clamp(1.5rem, 5vw, 3rem)",
                    lineHeight: 1.3,   
              fontWeight: 900,
              marginTop: "8px",
            }}
          >
            The Reason Students Chose TechnoSignia 
          </h2>
        </header>

        {/* Grid Section */}
        <div className="why-grid">
          {WHY.map((tile, i) => (
            <article
              key={i}
              className="why-tile"
              style={{ animationDelay: `${i * 0.1}s` }} // Staggers the animation dynamically
            >
              <div className="icon-wrapper">{tile.icon}</div>
              <h3 className="tile-title">{tile.title}</h3>
              <p className="tile-desc">{tile.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
