import React from "react";
import { useAuth } from "../context/AuthContext";
import { useThemeTokens } from "../hooks/usetheme";
import { FiLogOut, FiUser } from "react-icons/fi";
import "../styles/dashboard.css";

export default function StudentDashboard() {
  const { user, logout } = useAuth();
  const th = useThemeTokens();

  if (!user || user.role !== "student") {
    return (
      <div style={{ padding: "20px", color: th.text }}>
        <p>Access Denied. Student dashboard is only for students.</p>
      </div>
    );
  }

  return (
    <div
      className="student-dashboard"
      style={{ background: th.bg, color: th.text, minHeight: "100vh", padding: "20px" }}
    >
      <div className="dashboard-header">
        <div>
          <h1>Welcome, {user.name}!</h1>
          <p style={{ color: th.textMuted }}>Your learning dashboard</p>
        </div>
        <button
          className="logout-btn"
          onClick={logout}
          style={{ background: "#D1344D" }}
        >
          <FiLogOut /> Logout
        </button>
      </div>

      <div
        className="dashboard-card"
        style={{
          background: th.bgCard,
          border: `1px solid ${th.border}`,
          borderRadius: "12px",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "#D1344D",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
            }}
          >
            <FiUser />
          </div>
          <div>
            <h2 style={{ margin: "0 0 4px 0", color: th.text }}>{user.name}</h2>
            <p style={{ margin: 0, color: th.textMuted }}>{user.email}</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "20px" }}>
          <div
            style={{
              background: th.inputBg,
              padding: "16px",
              borderRadius: "8px",
              border: `1px solid ${th.border}`,
            }}
          >
            <p style={{ color: th.textMuted, margin: "0 0 4px 0", fontSize: "12px" }}>ENROLLED COURSE</p>
            <p style={{ color: th.text, margin: 0, fontSize: "18px", fontWeight: "600" }}>
              {user.course || "Not assigned yet"}
            </p>
          </div>
          <div
            style={{
              background: th.inputBg,
              padding: "16px",
              borderRadius: "8px",
              border: `1px solid ${th.border}`,
            }}
          >
            <p style={{ color: th.textMuted, margin: "0 0 4px 0", fontSize: "12px" }}>ACCOUNT STATUS</p>
            <p
              style={{
                color: "#3c3",
                margin: 0,
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              Active
            </p>
          </div>
        </div>

        <div style={{ marginTop: "20px", padding: "16px", background: th.inputBg, borderRadius: "8px" }}>
          <p style={{ color: th.textMuted, margin: "0 0 8px 0", fontSize: "12px" }}>ACCOUNT DETAILS</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={{ color: th.text, padding: "6px 0", borderBottom: `1px solid ${th.border}` }}>
              <strong>Email:</strong> {user.email}
            </li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: "20px", padding: "16px", background: "#efe", borderRadius: "8px", color: "#3c3" }}>
        <p>📚 Your courses and learning materials will appear here.</p>
      </div>
    </div>
  );
}
