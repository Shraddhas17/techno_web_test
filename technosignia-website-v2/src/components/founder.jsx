import React from 'react';
import Photo from "../assets/founder.jpg";
  import im1 from "../assets/im1.jpg";
 import im2 from  "../assets/im2.jpg";
 import im3 from  "../assets/im3.jpg";
 import im4 from  "../assets/im4.jpg"
 import im5 from   "../assets/im5.jpg";
  import im6 from "../assets/im6.jpg";
  import gayatri from "../assets/Gaytri.png";
  import nivi from "../assets/Nivi.png";
import karishma from "../assets/Karishma.png";
import pooja from "../assets/pooja.png"; 


const teamMembers = [
  { id: 1, name: "alex", expertise: "Lead Developer", exCompany: "Ex-Google", img: gayatri },
  { id: 2, name: "Sarah Jenkins", expertise: "UI/UX Designer", exCompany: "Ex-Airbnb", experience: "15+ Years", img: nivi },
  { id: 3, name: "Marcus Johnson", expertise: "Marketing Head", exCompany: "Ex-HubSpot", experience: "12+ Years", img: karishma },
  { id: 4, name: "Priya Patel", expertise: "Product Manager", exCompany: "Ex-Microsoft", experience: "13+ Years", img: pooja },
  { id: 5, name: "David Kim", expertise: "Data Scientist", exCompany: "Ex-Meta", experience: "10+ Years", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80" },
  { id: 6, name: "Emma Wilson", expertise: "Operations", exCompany: "Ex-Amazon", experience: "15+ Years", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80" }
];

const portfolioImages = [

im1,im2,im3,im4,im5,im6
];

const Founder = () => {
  return (
    <div className="page-wrapper">
     <header className="why-header">
          <span className="section-label">Built by an MNC Engineer. Designed for the Real IT World.

</span>
          <h2   className="text-gradient-vibrant"
            style={{
              fontSize: "clamp(1.5rem, 5vw, 3rem)",
              fontWeight: 900,
              marginTop: "8px",
            }}>The Mind Behind TechnoSignia</h2>
        </header>

    
      {/* --- Main Founder Card --- */}
      <div className="founder-card">
        <div className="card-left">
          <img 
            src={Photo}
            alt="Mallinath Paratnale - Founder Portrait" 
          />
        </div>
        
        <div className="card-right">
          <h1 className="founder-name">Mallinath Paratnale</h1>
          <h2 className="founder-headline">Founder | Java Architect | EdTech Leader</h2>
          
          {/* NEW: Founder Ex-Company Information */}
          <div className="founder-ex-company">
            <span>💼</span> Ex-Technical Director @ humancloud | Ex-GS Lab | Ex-Gibsons
          </div>
          
          <p className="founder-description">
            With over a decade of experience in IT and EdTech, I am the Founder of <strong>Starcentauri Technologies</strong> and <strong>Technosignia</strong> based in Pune. 
            Previously Technical Director at HumanCloud, I specialize in bridging business needs with scalable <strong>Java, Cloud (AWS/Azure), and DevOps</strong> solutions for global enterprises like Visa Cards and Avaya. 
            I am deeply passionate about digital transformation and empowering future-ready talent.
          </p>
          
          <div className="social-links">
            <a href="https://www.linkedin.com/in/mallinath-paratnale-ba0030130?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" className="icon">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/itsmallinath?igsh=d2plb25yc3c2ZGl1" aria-label="Instagram">
               <svg viewBox="0 0 24 24" fill="currentColor" className="icon">
                 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
               </svg>
            </a>
            {/* <a href="#twitter" aria-label="Twitter">
               <svg viewBox="0 0 24 24" fill="currentColor" className="icon">
                 <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
               </svg>
            </a> */}
            <a href="mailto:contact@starcentauri.com" aria-label="Email">
               <svg viewBox="0 0 24 24" fill="currentColor" className="icon">
                 <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
               </svg>
            </a>
          </div>
        </div>
      </div>
     <header className="why-header">
          
          <h3 className="text-gradient-vibrant"
            style={{
              fontSize: "clamp(1rem, 4vw, 2rem)",
              fontWeight: 900,
              marginTop: "8px",
            }}>Experts Who've Done the Job — Not Just Taught It</h3>
        </header>
      {/* --- Marquee 1: Team Members (Right to Left) --- */}
      <div className="marquee-section">
        <div className="marquee-track move-left">
          {[...teamMembers, ...teamMembers].map((member, index) => (
            <div className="team-card" key={`team-${index}`}>
              <img src={member.img} alt={member.name} />
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-expertise">{member.expertise}</p>
                {/* NEW: Team Ex-Company Tag */}
                <span className="team-ex-company">{member.exCompany}</span>
                <p className="team-experience">{member.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Marquee 2: Portfolio Placeholders (Left to Right) --- */}
      <div className="marquee-section">
        <div className="marquee-track move-right">
          {[...portfolioImages, ...portfolioImages].map((imgUrl, index) => (
            <div className="portfolio-card" key={`portfolio-${index}`}>
              <img src={imgUrl} alt="Portfolio placeholder" />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Founder;