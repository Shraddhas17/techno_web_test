import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [light, setLight] = useState(true);
  return (
    <ThemeContext.Provider value={{ light, setLight }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}

/** Returns a theme tokens object based on dark flag */
export function useThemeTokens() {
  const { light } = useTheme();
  return {
    bg: light ? "#F1F5F9" : "#F1F5F9",
    bgCard: light ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.9)",
    bgCardAlt: light ? "gba(241,245,249,0.8)" : "rgba(241,245,249,0.8)",
    border: light ? "rgba(0,0,0,0.1)" : "rgba(0,0,0,0.1)",
    borderHov: light ? "rgba(45,90,158,0.4)" : "rgba(45,90,158,0.4)",
    text: light ? "#1E293B" : "#1E293B",
    textMuted: light ? "#282b30" : "#282b30",
    textDim: light ? "#94A3B8" : "#94A3B8",
    navBg: light ? "rgba(248,250,252,0.97)" : "rgba(248,250,252,0.97)",
    inputBg: light ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.9)",
    stripBg: light ? "#f3f1f1" : "#f3f1f1",
    red: "#D1344D",
    blue: "#2D5A9E",
    shadow: light ? "0 25px 50px rgba(0,0,0,0.12)" : "0 25px 50px rgba(0,0,0,0.12)",
    light,
  };
}
