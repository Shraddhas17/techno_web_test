import { ThemeProvider, useThemeTokens } from "./hooks/usetheme";
import { AuthProvider } from "./context/AuthContext";
import './App.css';
import Navbar from "./components/navbar";
import LoginModal from "./components/LoginModal";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Courses from "./components/courses";
import CourseLanding from "./components/courselanding";
import Founder from "./components/founder";
import Placement from "./components/placement";
import Hero from "./components/hero";
import Why from "./components/why";
import Journey from "./components/journey";
import About from "./components/about";
import Footer from "./components/footer";
import Faq from "./components/faq";

function AppInner() {
  const th = useThemeTokens();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const location = useLocation();
  const sectionStyle = { scrollMarginTop: "80px" };

  useEffect(() => {
    if (!location.hash) return;

    const element = document.getElementById(location.hash.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.pathname, location.hash]);

  return (
    <div
      className="app-root"
      style={{
        background: th.bg,
        color: th.text,
      }}
    >
      <Navbar onShowLogin={() => setShowLoginModal(true)} />
      <Routes>
        <Route path="/" element={
          <>
            <section id="hero" style={sectionStyle}>
              <Hero />
            </section>
            <section id="courses" style={sectionStyle}>
              <Courses />
            </section>
            <section id="why-us" style={sectionStyle}>
              <Why />
            </section>
            <section id="journey" style={sectionStyle}>
              <Journey />
            </section>
            <section id="founder" style={sectionStyle}>
              <Founder />
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
            <Footer />
          </>
        } />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseLanding />} />
        <Route path="/why-us" element={<Why />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <AppInner />
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

