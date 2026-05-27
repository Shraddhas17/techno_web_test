import { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import { useTheme, useThemeTokens } from "../hooks/usetheme";
import { useAuth } from "../context/AuthContext";
import { NAV_LINKS } from "../constants/data";
import logo from "../assets/logo.png";
import { FaUserPlus, FaUserCheck } from "react-icons/fa6";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
// import { BsSunFill, BsMoonFill } from "react-icons/bs";

import "../assets/navbar.css";

export default function Navbar({ onShowLogin }) {
  const { dark } = useTheme();
  const th = useThemeTokens();
  const { user, logout } = useAuth();
  const [search, setSearch] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [scrollSection, setScrollSection] = useState(null); // For scroll-based detection
  const location = useLocation();
  const observerRef = useRef(null);

  const isHomeRoute = location.pathname === "/";

  // Helps highlight correct page even when user navigates via Link (pathname change)
  // and also when user lands on Home with a hash (e.g. /#faq).


  // Scroll-based section detection using Intersection Observer
  useEffect(() => {
    if (!isHomeRoute) return; // Only on home page

    const sectionIds = ["hero", "courses", "why-us", "journey", "founder", "placement", "about", "faq"];
    const observedSections = {};

    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          observedSections[entry.target.id] = entry.isIntersecting;
        });

        // Find the first section that's intersecting
        const visibleSection = sectionIds.find((id) => observedSections[id]);
        
        if (visibleSection) {
          setScrollSection(visibleSection);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of section is visible
        rootMargin: "-80px 0px -70% 0px", // Account for navbar height
      }
    );

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    observerRef.current = observer;

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [isHomeRoute]);

  // Helper function to check if link is active
  const isLinkActive = (path, hash) => {
    // If NOT on home page, use pathname matching
    if (!isHomeRoute) {
      return hash ? false : location.pathname === path;
    }

    // On home page, use scroll-based detection
    if (hash) {
      const sectionId = hash.replace("#", "");
      return scrollSection === sectionId || window.location.hash === hash;
    }

    if (path === "/") {
      // Home is active when either the hero section is visible (home page)
      // or there's no hash/section highlighted.
      return !window.location.hash ? (!scrollSection || scrollSection === "hero") : scrollSection === "hero";
    }

    if (path === "/courses") {
      return scrollSection === "courses" || window.location.hash === "#courses";
    }

    if (path === "/why-us") {
      return scrollSection === "why-us" || window.location.hash === "#why-us";
    }

    if (path === "/founder") {
      return scrollSection === "founder" || window.location.hash === "#founder";
    }
    
    if (path === "/journey") {
      return scrollSection === "journey" || window.location.hash === "#journey";
    }

    if (path === "/placement") {
      return scrollSection === "placement" || window.location.hash === "#placement";
    }

    if (path === "/about") {
      return scrollSection === "about" || window.location.hash === "#about";
    }

    if (path === "/" && hash === "#faq") {
      // Home page FAQ is at section id="faq"
      return scrollSection === "faq" || window.location.hash === "#faq";
    }


    return false;
  };

  return (
    <header
      className="navbar"
      style={{
        background: th.navBg,
        borderBottom: `1px solid ${th.border}`,
        boxShadow: dark
          ? "0 4px 24px rgba(0,0,0,0.4)"
          : "0 4px 24px rgba(0,0,0,0.08)",
      }}
    >
      <div className="navbar__inner">

        {/* ── Logo ── */}
        <Link to="/" className="navbar__logo" style={{ textDecoration: "none" }}>
          <img src={logo} alt="TechnoSignia" className="navbar__logo-img" />
          <div className="navbar__logo-text">
            <span style={{ color: "#D1344D" }}>Techno</span>
            <span style={{ color: "#2D5A9E" }}>Signia</span>
          </div>
        </Link>

        {/* ── Search (desktop only — hidden on mobile via CSS) ── */}
        <div className="search-bar navbar__search--desktop">
          <span className="search-icon" style={{ color: th.textDim }}>
            <FiSearch />
          </span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search courses, tracks, modules..."
            style={{
              background: th.inputBg,
              border: `1.5px solid ${th.border}`,
              color: th.text,
            }}
          />
        </div>

        {/* ── Desktop nav ── */}
        <nav className="navbar__nav navbar__nav--desktop">
          {NAV_LINKS.map(([label, path, hash]) => {
            const isActive = isLinkActive(path, hash);
            
            return (
              <Link
                key={label}
                to={hash && path === "/" ? `/${hash}` : path}
                className={`nav-link ${isActive ? "nav-link--active" : ""}`}
                style={{
                  color: isActive ? "#D1344D" : th.textMuted,
                  fontWeight: isActive ? "600" : "400",
                  transition: "color 0.2s ease",
                  textDecoration: "none",
                }}
              >
                {label}
              </Link>
            );
          })}

          {/* <div className="theme-toggle-wrap">
            <button
              className="sunmoon"
              onClick={() => setDark(!dark)}
              aria-label="Toggle theme"
              style={{ background: dark ? "#15181b" : "#ffffff" }}
              data-dark={dark}
            >
              <span style={{ fontSize: 16, color: th.textMuted }}>
                {dark ? <BsMoonFill /> : <BsSunFill />}
              </span>
            </button>
          </div> */}

          <div className="admin-icon" style={{ position: "relative" }}>
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "20px",
                color: th.textMuted,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {user ? <FaUserCheck /> : <FaUserPlus />}
            </button>

            {/* User Menu Dropdown */}
            {showUserMenu && (
              <div
                className="user-menu-dropdown"
                style={{
                  position: "absolute",
                  top: "100%",
                  right: 0,
                  background: th.bgCard,
                  border: `1px solid ${th.border}`,
                  borderRadius: "8px",
                  minWidth: "150px",
                  boxShadow: th.shadow,
                  zIndex: 100,
                  marginTop: "8px",
                }}
              >
                {user ? (
                  <>
                    <div style={{ padding: "12px 16px", borderBottom: `1px solid ${th.border}` }}>
                      <p style={{ margin: 0, fontSize: "12px", color: th.textMuted }}>
                        Logged in as
                      </p>
                      <p
                        style={{
                          margin: "4px 0 0 0",
                          fontSize: "14px",
                          fontWeight: "600",
                          color: th.text,
                        }}
                      >
                        {user.name}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        logout();
                        setShowUserMenu(false);
                      }}
                      style={{
                        width: "100%",
                        padding: "10px 16px",
                        border: "none",
                        background: "none",
                        color: "#D1344D",
                        cursor: "pointer",
                        textAlign: "left",
                        fontSize: "13px",
                        fontWeight: "600",
                      }}
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      onShowLogin?.();
                      setShowUserMenu(false);
                    }}
                    style={{
                      width: "100%",
                      padding: "10px 16px",
                      border: "none",
                      background: "none",
                      color: th.text,
                      cursor: "pointer",
                      textAlign: "left",
                      fontSize: "13px",
                      fontWeight: "600",
                    }}
                  >
                    Login / Sign Up
                  </button>
                )}
              </div>
            )}
          </div>
        </nav>

        {/* ── Mobile right: theme + admin + hamburger ── */}
        <div className="navbar__mobile-right">
          {/* <button
            className="sunmoon"
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
            style={{ background: dark ? "#15181b" : "#ffffff" }}
            data-dark={dark}
          >
            <span style={{ fontSize: 16, color: th.textMuted }}>
              {dark ? <BsMoonFill /> : <BsSunFill />}
            </span>
          </button> */}

          <div className="admin-icon" style={{ position: "relative" }}>
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "20px",
                color: th.textMuted,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {user ? <FaUserCheck /> : <FaUserPlus />}
            </button>

            {/* User Menu Dropdown */}
            {showUserMenu && (
              <div
                className="user-menu-dropdown"
                style={{
                  position: "absolute",
                  top: "100%",
                  right: 0,
                  background: th.bgCard,
                  border: `1px solid ${th.border}`,
                  borderRadius: "8px",
                  minWidth: "150px",
                  boxShadow: th.shadow,
                  zIndex: 100,
                  marginTop: "8px",
                }}
              >
                {user ? (
                  <>
                    <div style={{ padding: "12px 16px", borderBottom: `1px solid ${th.border}` }}>
                      <p style={{ margin: 0, fontSize: "12px", color: th.textMuted }}>
                        Logged in as
                      </p>
                      <p
                        style={{
                          margin: "4px 0 0 0",
                          fontSize: "14px",
                          fontWeight: "600",
                          color: th.text,
                        }}
                      >
                        {user.name}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        logout();
                        setShowUserMenu(false);
                      }}
                      style={{
                        width: "100%",
                        padding: "10px 16px",
                        border: "none",
                        background: "none",
                        color: "#D1344D",
                        cursor: "pointer",
                        textAlign: "left",
                        fontSize: "13px",
                        fontWeight: "600",
                      }}
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      onShowLogin?.();
                      setShowUserMenu(false);
                    }}
                    style={{
                      width: "100%",
                      padding: "10px 16px",
                      border: "none",
                      background: "none",
                      color: th.text,
                      cursor: "pointer",
                      textAlign: "left",
                      fontSize: "13px",
                      fontWeight: "600",
                    }}
                  >
                    Login / Sign Up
                  </button>
                )}
              </div>
            )}
          </div>

          <button
            className="hamburger"
            onClick={() => setDrawerOpen((o) => !o)}
            aria-label={drawerOpen ? "Close menu" : "Open menu"}
            style={{ color: th.text }}
          >
            {drawerOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <div className={`navbar__mobile-drawer${drawerOpen ? " navbar__mobile-drawer--open" : ""}`}
        style={{ background: th.navBg, borderTop: `1px solid ${th.border}` }}
      >
        {/* Search inside drawer */}
        <div className="navbar__mobile-search">
          <div className="search-bar" style={{ maxWidth: "100%" }}>
            <span className="search-icon" style={{ color: th.textDim }}>
              <FiSearch />
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search courses, tracks..."
              style={{
                background: th.inputBg,
                border: `1.5px solid ${th.border}`,
                color: th.text,
              }}
            />
          </div>
        </div>

        {/* Nav links */}
        {NAV_LINKS.map(([label, path, hash]) => {
          const isActive = isLinkActive(path, hash);
          
          return (
            <Link
              key={label}
              to={hash && path === "/" ? `/${hash}` : path}
              className={`navbar__drawer-link nav-link ${isActive ? "nav-link--active" : ""}`}
              style={{
                color: isActive ? "#D1344D" : th.textMuted,
                fontWeight: isActive ? "600" : "400",
                transition: "color 0.2s ease",
                textDecoration: "none",
                display: "block",
              }}
              onClick={() => setDrawerOpen(false)}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
