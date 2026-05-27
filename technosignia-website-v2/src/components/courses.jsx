import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { FaJava, FaPython, FaDatabase, FaCloud, FaBug } from "react-icons/fa6";
import java from "../assets/java.png";
import python from "../assets/python.png";
import server from "../assets/server.png";
import data from "../assets/science-report.png";
import analytic from "../assets/data-analytics.png";
import aws from "../assets/aws.png";
import ui from "../assets/ui-design.png";
import secure from "../assets/software-testing.png";

/* ─── COURSE DATA ────────────────────────────────────────────────────────── */
const COURSES = [
  {
    id: "java-fullstack",
    pillar: "fullstack",
    title: "Java Full Stack Suite",
    subtitle: "Create web apps with Core Java, Spring Boot, MySQL.",
    badge: "Bestseller",
    duration: "6 Months",
    sessions: "50+ Live Sessions",
    level: "Freshers & Graduates",
    icon: <img src={java} alt="Java" style={{ width: 32, height: 32 }} />,
    highlights: [
      "3 Real-time production-grade projects",
      "ISO Certified Full Stack Java Certificate",
      "100% Internship Letter",
    ],
    learns: [
      "HTML, CSS, JS",
      "Core Java",
      "MySQL",
      "Spring Boot",
      "Microservices",
    ],
  },
  {
    id: "python-fullstack",
    pillar: "fullstack",
    title: "Python Full Stack Suite",
    subtitle: "Build full web apps using Python, Django and JavaScript.",
    badge: "Hot 🔥",
    duration: "6 Months",
    sessions: "120+ Instructor-led Classes",
    icon: <img src={python} alt="Python" style={{ width: 32, height: 32 }} />,
    highlights: [
      "3 Real-time production-grade projects",
      "ISO Certified Python Developer Certificate",
      "100% Internship Letter",
    ],
    learns: ["HTML, CSS, JavaScript", "Python", "Django", "SQL", "REST APIs"],
  },
  {
    id: "data-analyst",
    pillar: "dataai",
    title: "Data Analyst Specialist",
    subtitle: "Make data-driven decisions using Excel, SQL, Power BI.",
    badge: "Trending",
    duration: "6 Months",
    sessions: "120+ Instructor Led Classes",
    icon: <img src={analytic} alt="Data Analyst" style={{ width: 32, height: 32 }} />,
    highlights: [
      "3 Real-time production-grade projects",
      "ISO Certified Data Analyst Certificate",
      "100% Internship Letter",
    ],
    learns: [
      "Excel",
      "SQL",
      "Python (Pandas, Matplotlib)",
      "Power BI",
      "Tableau",
    ],
  },
  {
    id: "data-science",
    pillar: "dataai",
    title: "Data Science with Gen AI/ML",
    subtitle: "Become a data scientist using Gen AI and Python.",
    badge: "Advanced",
    duration: "6–7 Months",
    sessions: "140+ Interactive Classes",
    icon:<img src={data} alt='Data Science' style={{ width: 32, height: 32 }} />,
    highlights: [
      "2+ Real-world ML & Gen AI Projects",
      "ISO Certified Data Science Certificate",
      "100% Internship Letter",
    ],
    learns: [
      "Python, NumPy, Pandas",
      "Scikit-learn",
      "TensorFlow",
      "NLP & LangChain",
      "OpenAI API",
    ],
  },
  {
    id: "cloud-devops",
    pillar: "cloud",
    title: "Cloud & DevOps with AWS from Scratch",
    subtitle: "Learn DevOps on AWS using Git, Docker, Kubernetes.",
    badge: "Hot 🔥",
    duration: "2 Months",
    sessions: "80+ Tool-Focused Sessions",
    icon: <img src={server} alt="Cloud DevOps" style={{ width: 32, height: 32 }} />,
    highlights: [
      "3 Real-time production-grade projects",
      "ISO Certified DevOps Cloud Engineer Certificate",
      "100% Internship Letter",
    ],
    learns: [
      "AWS & CloudFormation",
      "Git & Jenkins",
      "Docker & Kubernetes",
      "Terraform",
      "Ansible",
    ],
  },
  {
    id: "aws-architect",
    pillar: "cloud",
    title: "AWS Certified Solutions Architect",
    subtitle:
      "Master cloud architecture on AWS—secure, scalable, cost-efficient.",
    badge: "Certification",
    duration: "2 Months (Weekends)",
    sessions: "60+ Sessions",
    icon: 
      <img src={aws} alt="AWS Architect" style={{ width: 32, height: 32 }} />,
    highlights: [
      "3 Real Cloud Architecture Projects",
      "SAA-C03 Exam Certification Preparation",
    ],
    learns: [
      "EC2, S3, RDS, VPC",
      "Lambda & IAM",
      "CloudFront & Route 53",
      "DynamoDB",
    ],
  },
  {
    id: "frontend-masterclass",
    pillar: "frontend",
    title: "Frontend Development",
    subtitle:
      "Build responsive websites with HTML, CSS, JavaScript, and React.",
    badge: "Essential",
    duration: "2.5 Months",
    sessions: "80+ Interactive Sessions",
    icon: <img src={ui} alt="Frontend Development" style={{ width: 32, height: 32 }} />,
    highlights: [
      "3 Real-time production-grade projects",
      "ISO Certified Frontend Web Developer Certificate",
      "100% Internship Letter",
    ],
    learns: [
      "HTML5 & CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Responsive Design",
      "API Integration",
    ],
  },
  {
    id: "software-testing",
    pillar: "testing",
    title: "Software Testing",
    subtitle: "Manual Testing + Core Java + Automation",
    badge: "Bestseller",
    duration: "6 Months",
    sessions: "120+ Practical Sessions",
    icon: <img src={secure} alt="Software Testing" style={{ width: 32, height: 32 }} />,
    highlights: [
      "3 Real-time production-grade projects",
      "ISO Certified QA Tester Certificate",
      "100% Internship Letter",
    ],
    learns: [
      "Manual Testing",
      "Core Java",
      "Selenium WebDriver",
      "Postman & RestAssured",
      "TestNG & JIRA",
    ],
  },
];

/* ─── CSS STYLES ────────────────────────────────────────────────────────── */
const VIBRANT_AI_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700;900&display=swap');
  :root { 
    --bg-base: #fdfdfd; --bg-surface: rgba(255, 255, 255, 0.65);
    --c-dark: #0c0c0c; --c-rose: #9c7979; --c-blue-deep: #3468ad;
    --c-blue-soft: #4b88c4; --c-coral: #e8695c; --border-glow: rgba(156, 121, 121, 0.15);
  }
  body { font-family: 'Outfit', sans-serif; background-color: var(--bg-base); color: var(--c-dark); }
  
  /* Pillar Sidebar */
  .pillar-btn {
    background: rgba(255, 255, 255, 0.5);
    border: 1px solid var(--border-glow);
    padding: 18px 24px; border-radius: 16px; font-weight: 700;
    color: var(--c-rose); cursor: pointer; transition: all 0.3s ease;
    display: flex; justify-content: space-between; align-items: center; width: 100%;
  }
  .pillar-btn.active { background: rgba(52, 104, 173, 0.08); border-color: rgba(52, 104, 173, 0.3); color: var(--c-blue-deep); }
  
  /* Glass Cards */
  .glass-vibrant { background: var(--bg-surface); backdrop-filter: blur(30px); border: 1px solid rgba(255,255,255,0.4); border-radius: 24px; }
  .badge-ai { background: rgba(232, 105, 92, 0.1); color: var(--c-coral); border: 1px solid rgba(232, 105, 92, 0.3); padding: 6px 14px; border-radius: 8px; font-weight: 800; }
  
  /* New Buttons & Pills */
  .btn-demo { background: var(--c-coral); color: white; padding: 10px 16px; border-radius: 10px; border: none; cursor: pointer; font-weight: 700; transition: all 0.3s ease; }
  .btn-demo:hover { background: var(--c-blue-deep); }
  .btn-syllabus-box { border: 1px solid var(--c-blue-deep); color: var(--c-blue-deep); padding: 10px 21px; border-radius: 10px; background: transparent; font-weight: 700; cursor: pointer; transition: all 0.3s ease; }
  .btn-syllabus-box:hover { background: var(--c-blue-deep); color: white; }
  .tech-pill { display: inline-block; background: rgba(75, 136, 196, 0.1); color: var(--c-blue-deep); padding: 4px 10px; border-radius: 6px; font-size: 0.75rem; font-weight: 600; margin-right: 6px; margin-bottom: 6px; }
`;

function CoursesHub() {
  const [activePillar, setActivePillar] = useState("fullstack");
  const navigate = useNavigate();

  const pillars = [
    ["fullstack", "💻", "Full Stack Dev"],
    ["dataai", "📊", "Data & AI"],
    ["cloud", "☁️", "Cloud & DevOps"],
    ["frontend", "🎨", "Frontend"],
    ["testing", "🧑‍💻", "Software Testing"],
  ];

  const list = COURSES.filter((c) => c.pillar === activePillar);

  return (
    <div style={{ padding: "0px 48px", maxWidth: 1400, margin: "0 auto" }}>
      {/* Header Section */}
      <header className="why-header">
        <span className="section-label">Job Oriented Program</span>
        <h2
          className="text-gradient-vibrant"
          style={{
            fontSize: "clamp(1.5rem, 5vw, 3rem)",
                  lineHeight: 1.3,   
            fontWeight: 900,
            marginTop: "8px",
          }}
        >
          Career Transforming Courses — Built for IT Job Market
        </h2>
      </header>
      <div
        style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: 48 }}
      >
        {/* Sidebar Pillars */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {pillars.map(([id, icon, label]) => (
            <button
              key={id}
              className={`pillar-btn ${activePillar === id ? "active" : ""}`}
              onClick={() => setActivePillar(id)}
            >
              <span
                style={{ display: "flex", alignItems: "center", gap: "14px" }}
              >
                <span style={{ fontSize: "1.4rem" }}>{icon}</span> {label}
              </span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}
        >
          {list.map((c, i) => (
            <div
              key={i}
              className="glass-vibrant"
              style={{ padding: 40, display: "flex", flexDirection: "column" }}
            >
              <div
                style={{
                  marginBottom: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span className="badge-ai" style={{ fontSize: "0.85rem" }}>
                  {c.badge === "Bestseller" ? "Bestselling" : c.badge}
                </span>
                <span style={{ fontSize: "2rem" }}>{c.icon}</span>
              </div>

              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 800,
                  color: "var(--c-dark)",
                  marginBottom: 12,
                }}
              >
                {c.title}
              </h3>

              {/* Tech Stack Pills */}
              <div style={{ marginBottom: 16 }}>
                {c.learns.slice(0, 4).map((tech, idx) => (
                  <span key={idx} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>

              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--c-rose)",
                  marginBottom: 20,
                  fontWeight: 500,
                }}
              >
                {c.subtitle}
              </p>

              <ul style={{ listStyle: "none", marginBottom: 24, flexGrow: 1 }}>
                {c.highlights.slice(0, 3).map((hl, idx) => (
                  <li
                    key={idx}
                    style={{
                      fontSize: "0.85rem",
                      marginBottom: 8,
                      display: "flex",
                      alignItems: "start",
                      gap: 8,
                    }}
                  >
                    <span style={{ color: "var(--c-coral)" }}>✔</span> {hl}
                  </li>
                ))}
              </ul>

              {/* Buttons */}
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  borderTop: "1px solid var(--border-glow)",
                  paddingTop: 20,
                }}
              >
                <button className="btn-demo" style={{ marginRight: "140px" }}>
                  Watch Demo
                </button>
                <button
                  className="btn-syllabus-box"
                  onClick={() => navigate(`/courses/${c.id}`)}
                >
                  Syllabus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Courses() {
  return (
    <>
      <style>{VIBRANT_AI_CSS}</style>
      <Routes>
        <Route index element={<CoursesHub />} />
      </Routes>
    </>
  );
}
