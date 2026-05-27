import Hero from '../components/hero';
import MarqueeStrip from '../components/marqueestrip';
import Kpicounter from '../components/kpicounter';
import Courses from '../components/courses';
import Why from '../components/why';
import Founder from '../components/founder';
import Placement from '../components/placement';
import About from '../components/about';
import Faq from '../components/faq';
import { useEffect } from 'react';

const sectionStyle = {
  scrollMarginTop: '80px', // Offset for navbar height
};

export default function HomePage() {
  useEffect(() => {
    // Handle hash-based navigation to sections on home page
    const handleHashChange = () => {
      if (window.location.hash) {
        setTimeout(() => {
          const element = document.querySelector(window.location.hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };

    // Check for hash on initial load
    if (window.location.hash) {
      handleHashChange();
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      <MarqueeStrip />
      <main>
        <section id="hero" style={sectionStyle}>
          <Hero />
        </section>

        <section style={sectionStyle}>
          <Kpicounter />
        </section>
        <section id="courses" style={sectionStyle}>
          <Courses />
        </section>
        <section id="why" style={sectionStyle}>
          <Why />
        </section>
        <section id="journey" style={sectionStyle}>
          <Founder />
        </section>
        <section id="founder" style={sectionStyle}>
          <div style={{marginTop: "2rem"}} />
        </section>
        <section id="placement" style={sectionStyle}>
          <Placement />
        </section>
        <section id="about" style={sectionStyle}>
          <About />
        </section>
        <section id="faq" style={sectionStyle}>
          <Faq />
        </section>
      </main>
    </>
  );
}
