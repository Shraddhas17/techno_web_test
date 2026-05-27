import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { FaJava} from "react-icons/fa6";
import java from "../assets/java.png";
import python from "../assets/python.png";
import server from "../assets/server.png";
import data from "../assets/science-report.png";
import analytic from "../assets/data-analytics.png";
import aws from "../assets/aws.png";
import ui from "../assets/ui-design.png";
import secure from "../assets/software-testing.png";

const VIBRANT_AI_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700;900&display=swap');

  :root {
    --bg-base: #fdfdfd;
    --bg-surface: rgba(255, 255, 255, 0.65);
    
    /* Strict Palette */
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
  @keyframes float {
    0% { transform: translateY(0px) scale(1); }
    50% { transform: translateY(-20px) scale(1.05); }
    100% { transform: translateY(0px) scale(1); }
  }

  @keyframes orbShift {
    0% { transform: translate(0, 0) scale(1); opacity: 0.6; }
    33% { transform: translate(30px, -50px) scale(1.1); opacity: 0.8; }
    66% { transform: translate(-20px, 30px) scale(0.9); opacity: 0.5; }
    100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
  }

  @keyframes gradientText {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* ---- VIBRANT AI BACKGROUND ORBS ---- */
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
    filter: blur(80px);
    animation: orbShift 15s infinite ease-in-out alternate;
  }
  .orb-coral {
    background: radial-gradient(circle, rgba(232, 105, 92, 0.25) 0%, transparent 70%);
    width: 60vw; height: 60vw;
    top: -10vh; right: -10vw;
    animation-delay: -2s;
  }
  .orb-blue {
    background: radial-gradient(circle, rgba(75, 136, 196, 0.2) 0%, transparent 70%);
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
    animation: gradientText 6s ease infinite;
  }

  /* ---- GLASS CARDS ---- */
  .glass-vibrant {
    background: var(--bg-surface);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    border: 1px solid rgba(255,255,255,0.4);
    border-radius: 24px;
    box-shadow: 
      0 20px 40px rgba(12, 12, 12, 0.05),
      inset 0 0 0 1px rgba(255, 255, 255, 0.5);
    position: relative;
    overflow: hidden;
    transition: all 0.4s ease;
  }
  .glass-vibrant:hover {
    box-shadow: 
      0 30px 60px rgba(75, 136, 196, 0.15),
      inset 0 0 0 1px rgba(255, 255, 255, 0.8);
    transform: translateY(-5px);
  }

  /* ---- BUTTONS & BADGES ---- */
  .btn-vibrant {
    background: linear-gradient(135deg, var(--c-blue-deep) 0%, var(--c-blue-soft) 100%);
    color: #ffffff;
    font-weight: 800;
    padding: 14px 32px;
    border-radius: 14px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 25px rgba(52, 104, 173, 0.3);
    position: relative;
    overflow: hidden;
    z-index: 1;
  }
  .btn-vibrant::before {
    content: '';
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(135deg, var(--c-coral) 0%, #ff8b7e 100%);
    z-index: -1;
    transition: opacity 0.4s ease;
    opacity: 0;
  }
  .btn-vibrant:hover::before { opacity: 1; }
  .btn-vibrant:hover { transform: scale(1.02); box-shadow: 0 15px 35px rgba(232, 105, 92, 0.4); }

  .badge-ai {
    background: rgba(232, 105, 92, 0.1);
    color: var(--c-coral);
    border: 1px solid rgba(232, 105, 92, 0.3);
    padding: 6px 14px;
    border-radius: 8px;
    font-size: 0.8rem;
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: uppercase;
    box-shadow: 0 0 15px rgba(232, 105, 92, 0.2);
  }

  /* ---- TECH TREE ACCORDION ---- */
  .tech-tree { position: relative; padding-left: 30px; }
  .tech-tree::before {
    content: '';
    position: absolute;
    top: 10px; bottom: 10px; left: 10px;
    width: 2px;
    background: linear-gradient(to bottom, var(--c-blue-soft), var(--c-coral));
    border-radius: 2px;
  }
  .tree-node {
    position: relative;
    margin-bottom: 24px;
    background: rgba(255,255,255,0.7);
    border: 1px solid var(--border-glow);
    border-radius: 16px;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
  }
  .tree-node:hover { border-color: rgba(52, 104, 173, 0.3); box-shadow: 0 10px 30px rgba(75, 136, 196, 0.1); }
  .tree-node::before {
    content: '';
    position: absolute;
    top: 24px; left: -26px;
    width: 14px; height: 14px;
    background: var(--bg-base);
    border: 3px solid var(--c-blue-deep);
    border-radius: 50%;
    transition: all 0.3s ease;
    z-index: 2;
  }
  .tree-node.active::before { border-color: var(--c-coral); background: var(--c-coral); box-shadow: 0 0 15px var(--c-coral); }

  .tree-header {
    width: 100%;
    background: none;
    border: none;
    color: var(--c-dark);
    font-size: 1.15rem;
    font-weight: 800;
    padding: 20px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    text-align: left;
    font-family: inherit;
  }
  .tree-content { padding: 0 24px 24px 24px; color: var(--c-dark); }
  .topic-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(75, 136, 196, 0.08);
    border: 1px solid rgba(75, 136, 196, 0.15);
    padding: 8px 16px;
    border-radius: 100px;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--c-blue-deep);
    margin: 6px;
    transition: all 0.2s ease;
  }
  .topic-pill:hover { background: rgba(232, 105, 92, 0.1); color: var(--c-coral); border-color: rgba(232, 105, 92, 0.2); transform: translateY(-2px); }

  .animate-fade { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
  .delay-1 { animation-delay: 0.1s; }
  .delay-2 { animation-delay: 0.2s; }
`;

const COURSES = [
  {
    id: "java-fullstack",
    pillar: "fullstack",
    title: "Java Full Stack Suite",
    subtitle: "JAVA + Spring Boot + React + Database",
    badge: "BestSelling",
    duration: "6 Months",
    sessions: "50+ Live Sessions",
    level: "Beginner to Advanced",
    icon: <img src={java} alt="Java Full Stack" style={{ width: 100, height: 100 }} />,
    tagline: "Create web apps with Core Java, Spring Boot, MySQL.",
    subtagline: "Freshers, Engineering & non-IT graduates and career gap candidates aiming for Java Developer and Full Stack Software roles.",
    highlights: ["HTML, CSS, JS, Core Java, MySQL", "3 Real-time production-grade projects", "ISO Certified Full Stack Java Developer Certificate + Internship Letter"],
    salary: "8–18 LPA",
    roles: ["Java Developer", "Backend Engineer", "Full Stack Developer", "Software Engineer"],
    curriculum: [
      { title: "Core Java", topics: ["JDK/JRE/JVM", "Variables & Data Types", "OOPs Concepts", "Collections Framework"] },
      { title: "Advance Java & DB", topics: ["JDBC", "Multithreading", "SQL Basics", "Hibernate ORM"] },
      { title: "Spring Framework", topics: ["IoC and DI", "Spring Boot Setup", "RESTful APIs", "Spring Security"] },
      { title: "Frontend Integration", topics: ["React.js Basics", "State Management", "API Consumption"] }
    ]
  },
  {
    id: "python-fullstack",
    pillar: "fullstack",
    title: "Python Full Stack Suite",
    subtitle: "Python + Django + SQL + Frontend",
    badge: "Bestseller",
    duration: "6 Months",
    sessions: "120+ Sessions",
    level: "Beginner to Advanced",
    icon: <img src={python} alt="Python Full Stack" style={{ width: 85, height: 85 }} />,
    tagline: "Build full web apps using Python, Django and JavaScript.",
    subtagline: "Freshers, Graduates, Diploma students, and career restart candidates looking to build a career in Python development, Web Development and Full Stack software roles.",
    highlights: ["HTML, CSS, JavaScript, Python, Django, SQL", "3 Real-time production-grade projects", "ISO Certified Full Stack Python Developer Certificate + Internship Letter"],
    salary: "6–14 LPA",
    roles: ["Python Developer", "Django Developer", "Backend Engineer", "Full Stack Developer"],
    curriculum: [
      { title: "Python Fundamentals", topics: ["Data Types", "Loops & Functions", "OOPs in Python"] },
      { title: "Database & SQL", topics: ["MySQL/PostgreSQL Basics", "Complex Queries", "ORM Integration"] },
      { title: "Django Framework", topics: ["MVT Architecture", "Django Admin", "Models & Forms", "Django REST Framework"] },
      { title: "Frontend", topics: ["HTML/CSS/JS", "Bootstrap", "Responsive Layouts"] }
    ]
  },
  {
    id: "data-analyst",
    pillar: "dataai",
    title: "DATA ANALYST SPECIALIST",
    subtitle: "Excel + SQL + Power BI + Python",
    badge: "Analytics",
    duration: "6 Months",
    sessions: "120+ Sessions",
    level: "Beginner Friendly",
    icon: <img src={analytic} alt="Data Analyst" style={{ width: 85, height: 85 }} />,
    tagline: "Make data-driven decisions using Excel, SQL, Power BI.",
    subtagline: "Freshers, Engineering & non-IT graduates, diploma students and career gap candidates aiming for Data Analyst, Business Analyst, and reporting roles.",
    highlights: ["Excel, SQL, Python, Power BI", "2 Real-time production-grade projects", "ISO Certified Data Analyst Certificate + Internship Letter"],
    salary: "4–10 LPA",
    roles: ["Data Analyst", "Business Analyst", "Reporting Analyst"],
    curriculum: [
      { title: "Data Basics", topics: ["Advanced Excel", "Formulas & Pivot Tables", "Data Cleaning"] },
      { title: "SQL & Databases", topics: ["SQL Queries", "Joins & Subqueries", "Database Design"] },
      { title: "Python for Data", topics: ["Pandas", "Matplotlib", "Seaborn"] },
      { title: "Visualization", topics: ["Power BI", "Tableau", "Dashboarding"] }
    ]
  },
  {
    id: "data-science",
    pillar: "dataai",
    title: "Data Science with Gen AI / ML",
    subtitle: "Python + ML + Deep Learning + NLP + Generative AI",
    badge: "Hot 🔥",
    duration: "6 Months",
    sessions: "140+ Sessions",
    level: "Intermediate",
    icon: <img src={data} alt="Data Science" style={{ width: 85, height: 85 }} />,
    tagline: "Become a data scientist using Gen AI and Python.",
    subtagline: "Freshers, Graduates, career switchers targeting Data Scientist, AI Engineer, or Machine Learning Roles.",
    highlights: ["Python, NumPy, Pandas, Scikit-learn, TensorFlow, NLP, Lang Chain, OpenAI API", "3+ Real-world ML & Gen AI Projects", "ISO Certified Data Science with Gen AI Certificate + Internship Letter"],
    salary: "8–20 LPA",
    roles: ["Data Scientist", "ML Engineer", "AI Engineer", "GenAI Developer"],
    curriculum: [
      { title: "Python & Stats", topics: ["Pandas, NumPy", "Descriptive Statistics", "EDA"] },
      { title: "Machine Learning", topics: ["Regression", "Clustering", "Decision Trees", "Ensemble Methods"] },
      { title: "Deep Learning & NLP", topics: ["ANN, CNN, RNN", "Text Preprocessing", "TensorFlow & PyTorch"] },
      { title: "Generative AI", topics: ["HuggingFace", "LLMs (GPT, Llama)", "LangChain Integration"] }
    ]
  },
  {
    id: "cloud-devops",
    pillar: "cloud",
    title: "Cloud & DevOps with AWS from Scratch",
    subtitle: "AWS + Docker + Kubernetes + Jenkins + Terraform + CI/CD",
    badge: "Hot 🔥",
    duration: "2 Months",
    sessions: "80+ Sessions",
    level: "Beginner to Advanced",
    icon: <img src={server} alt="Cloud DevOps" style={{ width: 85, height: 85 }} />,
    tagline: "Learn DevOps on AWS using Git, Docker, Kubernetes.",
    subtagline: "Freshers, Graduates, career switchers and career gap candidates aiming for Cloud Engineer, AWS Devops Engineer and other Devops roles.",
    highlights: ["AWS, Git, Jenkins, Docker, Kubernetes, Terraform, Ansible, CloudFormation", "3 Real-time production-grade projects", "ISO Certified DevOps Cloud Engineer Certificate + Internship Letter"],
    salary: "8–20 LPA",
    roles: ["DevOps Engineer", "Cloud Engineer", "SRE", "AWS Architect"],
    curriculum: [
      { title: "AWS Core Services", topics: ["EC2, S3, VPC", "IAM & Security", "RDS & DynamoDB"] },
      { title: "Containerization", topics: ["Docker Architecture", "Writing Dockerfiles", "Docker Compose"] },
      { title: "Orchestration", topics: ["Kubernetes (EKS)", "Pods & Deployments", "Scaling Apps"] },
      { title: "CI/CD & IaC", topics: ["Jenkins Pipelines", "GitHub Actions", "Terraform Basics"] }
    ]
  },
  {
    id: "aws-architect",
    pillar: "cloud",
    title: "AWS Certified Solutions Architect",
    subtitle: "Master cloud architecture on AWS",
    badge: "Certification",
    duration: "2 Months",
    sessions: "60+ Sessions",
    level: "Intermediate",
    icon: <img src={aws} alt="AWS Architect" style={{ width: 85, height: 85 }} />,
    tagline: "Master cloud architecture on AWS—secure, scalable, cost-efficient.",
    subtagline: "Freshers, Graduates, working professionals, Devops Engineer and career switcher upgrading to cloud or developers adding AWS credentials.",
    highlights: ["EC2, S3, RDS, VPC, Lambda, IAM, CloudFront, Route 53, DynamoDB", "2 Real-time cloud architecture projects", "Prep for SAA-C03 Exam"],
    salary: "10–25 LPA",
    roles: ["Cloud Architect", "Solutions Architect", "AWS Consultant"],
    curriculum: [
      { title: "AWS Fundamentals", topics: ["IAM", "VPC & Networking", "EC2 Compute"] },
      { title: "Storage & DB", topics: ["S3", "EBS", "RDS & DynamoDB"] },
      { title: "Serverless & Messaging", topics: ["Lambda", "SQS", "SNS"] },
      { title: "Architecting", topics: ["Well-Architected Framework", "Cost Optimization", "Exam Prep"] }
    ]
  },
  {
    id: "frontend-masterclass",
    pillar: "frontend",
    title: "FRONTEND DEVELOPMENT",
    subtitle: "HTML + CSS + JavaScript + ReactJS + Cloud Deployment",
    badge: "Essential",
    duration: "2.5 Months",
    sessions: "80+ Hours",
    level: "Beginner Friendly",
    icon: <img src={ui} alt="Frontend Development" style={{ width: 85, height: 85 }} />,
    tagline: "Build responsive websites with HTML, CSS, JavaScript, and React.",
    subtagline: "Freshers, Diploma students, graduates, career gap candidates and aspiring web developers aiming for Frontend developer, React developer and full stack web development roles.",
    highlights: ["HTML5, CSS3, JavaScript, React.js", "3 Real-time production-grade projects", "ISO Certified Frontend Web Developer Certificate + Internship Letter"],
    salary: "4–12 LPA",
    roles: ["Frontend Developer", "React Developer", "UI Developer"],
    curriculum: [
      { title: "Web Fundamentals", topics: ["Semantic HTML", "Advanced CSS & Flexbox/Grid", "Responsive Design"] },
      { title: "JavaScript Mastery", topics: ["DOM Manipulation", "Async/Await & Promises", "ES6+ Features"] },
      { title: "React Ecosystem", topics: ["Components & Props", "React Hooks", "React Router", "State Management"] },
      { title: "Deployment", topics: ["Git & GitHub", "Vercel/Netlify Deployments", "Performance Optimization"] }
    ]
  },
  {
    id: "software-testing",
    pillar: "testing",
    title: "SOFTWARE TESTING",
    subtitle: "Manual + Core Java + Automation",
    badge: "QA",
    duration: "6 Months",
    sessions: "120+ Sessions",
    level: "Beginner Friendly",
    icon: <img src={secure} alt="Software Testing" style={{ width: 85, height: 85 }} />,
    tagline: "Learn QA testing with Selenium, JIRA, and TestNG.",
    subtagline: "Freshers, Career changers, IT & non-IT backgrounds looking for Software Testing, QA Automation and entry level IT roles.",
    highlights: ["Selenium, Postman, RestAssured, TestNG", "2 Real-time production-grade projects", "ISO Certified QA Tester Certificate + Internship Letter"],
    salary: "4–9 LPA",
    roles: ["QA Tester", "Automation Engineer", "Software Tester"],
    curriculum: [
      { title: "Manual Testing", topics: ["SDLC", "STLC", "Test Cases", "JIRA"] },
      { title: "Automation Java", topics: ["Core Java", "TestNG", "Maven"] },
      { title: "Automation Tools", topics: ["Selenium WebDriver", "Cucumber", "CI/CD Integration"] },
      { title: "API Testing", topics: ["Postman", "RestAssured", "Payload Validation"] }
    ]
  }
];

export default function CourseLanding() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [openModule, setOpenModule] = useState(0);

  const course = COURSES.find(c => c.id === courseId);

  if (!course) return <div style={{ color: "var(--c-dark)", textAlign: "center", marginTop: "100px", fontWeight: 700 }}>Course Protocol Not Found.</div>;

  return (
    <>
      <style>{VIBRANT_AI_CSS}</style>
      <div style={{ minHeight: "100vh", position: "relative", paddingBottom: "100px" }}>
        <div className="orb-container">
          <div className="vibrant-orb orb-coral" style={{ top: "-20vh", right: "10vw", width: "70vw", height: "70vw", opacity: 0.6 }} />
          <div className="vibrant-orb orb-blue" style={{ bottom: "10vh", left: "-20vw", width: "80vw", height: "80vw", opacity: 0.5 }} />
        </div>
        
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 24px" }} className="animate-fade">
          <button onClick={() => navigate("/")} style={{ background: "rgba(255,255,255,0.5)", border: "1px solid var(--border-glow)", color: "var(--c-blue-deep)", cursor: "pointer", fontSize: "0.9rem", fontWeight: 700, padding: "8px 16px", borderRadius: "100px", marginBottom: "40px", display: "inline-flex", alignItems: "center", gap: "8px", backdropFilter: "blur(10px)", transition: "all 0.3s ease" }}>
            ← Back to Hub
          </button>

          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "60px", alignItems: "center" }}>
            <div style={{ animation: "float 6s ease-in-out infinite" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "20px" }}>
                <div style={{ fontSize: "4.5rem", filter: "drop-shadow(0 10px 20px rgba(232, 105, 92, 0.3))" }}>{course.icon}</div>
                <div className="badge-ai">{course.badge}</div>
              </div>
              
              <h1 className="text-gradient-vibrant" style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: "16px", paddingBottom: "10px" }}>
                {course.title}
              </h1>
              <p style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--c-blue-deep)", marginBottom: "14px" }}>{course.subtitle}</p>
              <p style={{ fontSize: "1.1rem", color: "var(--c-rose)", lineHeight: 1.7, marginBottom: "-6%", maxWidth: "600px", fontWeight: 800 }}>
                {course.tagline}
              </p>
              <p style={{ fontSize: "1.1rem", color: "var(--c-rose)", lineHeight: 1.7, marginBottom: "40px", maxWidth: "600px", fontWeight: 500 }}>
                {course.subtagline && <><br/><br/>{course.subtagline}</>}
              </p>

              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                {[
                  { label: "Experience", val: course.level },
                  { label: "Avg. Salary", val: course.salary }
                ].map(stat => (
                  <div key={stat.label} className="glass-vibrant" style={{ padding: "16px 24px", borderRadius: "16px", minWidth: "160px" }}>
                    <div style={{ fontSize: "0.8rem", color: "var(--c-rose)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px", fontWeight: 800 }}>{stat.label}</div>
                    <div style={{ fontSize: "1.2rem", fontWeight: 900, color: "var(--c-blue-deep)" }}>{stat.val}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-vibrant" style={{ padding: "40px", border: "2px solid rgba(255,255,255,0.8)", boxShadow: "0 30px 60px rgba(75, 136, 196, 0.2)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "var(--c-coral)", boxShadow: "0 0 10px var(--c-coral)", animation: "float 2s infinite alternate" }} />
                <h3 style={{ fontSize: "1.5rem", fontWeight: 900, color: "var(--c-dark)" }}>Secure Your Spot</h3>
              </div>
              <p style={{ color: "var(--c-rose)", marginBottom: "30px", fontSize: "1rem", fontWeight: 500 }}>Next cohort initializes soon. System capacity is limited.</p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "30px" }}>
                <div style={{ background: "rgba(255,255,255,0.6)", padding: "20px", borderRadius: "16px", textAlign: "center", border: "1px solid rgba(255,255,255,0.9)" }}>
                  <div style={{ fontSize: "1.8rem", fontWeight: 900, color: "var(--c-dark)" }}>{course.duration.split(" ")[0]}</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--c-blue-soft)", fontWeight: 800, textTransform: "uppercase" }}>Months</div>
                </div>
                <div style={{ background: "rgba(255,255,255,0.6)", padding: "20px", borderRadius: "16px", textAlign: "center", border: "1px solid rgba(255,255,255,0.9)" }}>
                  <div style={{ fontSize: "1.8rem", fontWeight: 900, color: "var(--c-dark)" }}>{course.sessions.split("+")[0]}+</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--c-blue-soft)", fontWeight: 800, textTransform: "uppercase" }}>Sessions</div>
                </div>
              </div>

              <button className="btn-vibrant" style={{ width: "100%", padding: "18px", fontSize: "1.2rem" }}>Enroll Now</button>
              
              <div style={{ marginTop: "30px", display: "flex", flexDirection: "column", gap: "14px" }}>
                {course.highlights.map(h => (
                  <div key={h} style={{ display: "flex", alignItems: "center", gap: "12px", color: "var(--c-dark)", fontSize: "0.95rem", fontWeight: 600 }}>
                    <div style={{ background: "var(--c-blue-soft)", color: "#fff", width: "20px", height: "20px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem" }}>✓</div> 
                    {h}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: "1000px", margin: "80px auto 0", padding: "0 24px" }} className="animate-fade delay-2">
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 900, color: "var(--c-dark)", marginBottom: "10px" }}>
              Curriculum Architecture
            </h2>
            <p style={{ color: "var(--c-rose)", fontSize: "1.1rem", fontWeight: 500 }}>Expand the data nodes to view module pathways.</p>
          </div>
          
          <div className="tech-tree">
            {course.curriculum.map((mod, i) => (
              <div key={i} className={`tree-node ${openModule === i ? 'active' : ''}`}>
                <button className="tree-header" onClick={() => setOpenModule(openModule === i ? -1 : i)}>
                  <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                    <span style={{ color: openModule === i ? "var(--c-coral)" : "var(--c-blue-deep)", fontSize: "1.2rem", fontFamily: "monospace", fontWeight: 900, transition: "color 0.3s ease" }}>M—0{i + 1}</span>
                    {mod.title}
                  </div>
                  <span style={{ 
                    transform: openModule === i ? "rotate(180deg)" : "rotate(0)", 
                    transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)", 
                    fontSize: "1.5rem", 
                    color: openModule === i ? "var(--c-coral)" : "var(--c-blue-soft)"
                  }}>▼</span>
                </button>
                
                {openModule === i && (
                  <div className="tree-content animate-fade">
                    <div style={{ display: "flex", flexWrap: "wrap", paddingTop: "10px" }}>
                      {mod.topics.map((t, j) => (
                        <span key={j} className="topic-pill">
                          <span style={{ color: "var(--c-coral)" }}>✦</span> {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}