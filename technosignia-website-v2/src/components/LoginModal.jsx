import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useThemeTokens } from "../hooks/usetheme";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import "../styles/login.css";

export default function LoginModal({ onClose }) {
  const { login, loading } = useAuth();
  const th = useThemeTokens();
  const [role, setRole] = useState("student"); // "student" or "admin"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    const result = await login(email, password, role);

    if (result.success) {
      setSuccess(`Welcome ${result.user.name}!`);
      setTimeout(() => {
        onClose();
      }, 1500);
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="login-modal-overlay" onClick={onClose}>
      <div
        className="login-modal"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: th.bgCard,
          border: `1px solid ${th.border}`,
          boxShadow: th.shadow,
        }}
      >
        <button className="login-modal-close" onClick={onClose}>
          ✕
        </button>

        <div className="login-modal-header">
          <h2 style={{ color: th.text }}>Welcome Back</h2>
          <p style={{ color: th.textMuted }}>
            Sign in to access your dashboard
          </p>
        </div>

        {/* Role Selection */}
        <div className="role-selector">
          <button
            className={`role-btn ${role === "student" ? "role-btn--active" : ""}`}
            onClick={() => {
              setRole("student");
              setError("");
            }}
            style={{
              background:
                role === "student" ? "#D1344D" : th.inputBg,
              color: role === "student" ? "#fff" : th.text,
            }}
          >
            <FiUser /> Student
          </button>
          <button
            className={`role-btn ${role === "admin" ? "role-btn--active" : ""}`}
            onClick={() => {
              setRole("admin");
              setError("");
            }}
            style={{
              background:
                role === "admin" ? "#2D5A9E" : th.inputBg,
              color: role === "admin" ? "#fff" : th.text,
            }}
          >
            <FiUser /> Admin
          </button>
        </div>

        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="form-group">
            <label style={{ color: th.text }}>Email</label>
            <div className="input-wrapper">
              <FiMail style={{ color: th.textMuted }} />
              <input
                type="email"
                placeholder={role === "admin" ? "admin@technosignia.com" : "Your email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  background: th.inputBg,
                  border: `1.5px solid ${th.border}`,
                  color: th.text,
                }}
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="form-group">
            <label style={{ color: th.text }}>Password</label>
            <div className="input-wrapper">
              <FiLock style={{ color: th.textMuted }} />
              <input
                type="password"
                placeholder={role === "admin" ? "Admin@123" : "Your password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  background: th.inputBg,
                  border: `1.5px solid ${th.border}`,
                  color: th.text,
                }}
              />
            </div>
          </div>

          {/* Error Message */}
          {error && <div className="error-message">{error}</div>}

          {/* Success Message */}
          {success && <div className="success-message">{success}</div>}

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="login-btn"
            style={{
              background: role === "admin" ? "#2D5A9E" : "#D1344D",
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? "Logging in..." : "Sign In"}
          </button>
        </form>

     
      </div>
    </div>
  );
}
