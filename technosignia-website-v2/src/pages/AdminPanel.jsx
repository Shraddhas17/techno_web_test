import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useThemeTokens } from "../hooks/usetheme";
import { FiLogOut, FiUsers, FiPlus, FiEdit2, FiTrash2 } from "react-icons/fi";
import "../styles/admin.css";

export default function AdminPanel() {
  const { user, logout } = useAuth();
  const th = useThemeTokens();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("token");
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

  // Fetch students
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      console.log("Fetching students with token:", token?.substring(0, 20) + "...");
      const response = await fetch(`${API_URL}/api/students`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      console.log("Fetch response status:", response.status);
      const data = await response.json();
      console.log("Students data:", data);
      
      if (!response.ok) {
        setMessage(`Error: ${data.message || data.error}`);
        setStudents([]);
      } else {
        setStudents(data.data || []);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setMessage("Error fetching students: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();
    try {
      console.log("Sending add student request with token:", token?.substring(0, 20) + "...");
      console.log("Form data:", formData);
      
      const response = await fetch(`${API_URL}/api/students/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Response:", response.status, data);

      if (response.ok) {
        setMessage("Student added successfully!");
        setFormData({ name: "", email: "", phone: "", course: "", password: "" });
        setShowAddForm(false);
        fetchStudents();
      } else {
        setMessage(data.message || `Error: ${data.error || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setMessage("Error adding student: " + error.message);
    }
  };

  const handleDeleteStudent = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        const response = await fetch(`${API_URL}/api/students/${id}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.ok) {
          setMessage("Student deleted successfully!");
          fetchStudents();
        } else {
          setMessage("Error deleting student");
        }
      } catch (error) {
        setMessage("Error deleting student");
        console.error(error);
      }
    }
  };

  if (!user || user.role !== "admin") {
    return (
      <div style={{ padding: "20px", color: th.text }}>
        <p>Access Denied. Admin panel is only for administrators.</p>
      </div>
    );
  }

  return (
    <div
      className="admin-panel"
      style={{ background: th.bg, color: th.text, minHeight: "100vh", padding: "20px" }}
    >
      <div className="admin-header">
        <div>
          <h1>Admin Dashboard</h1>
          <p style={{ color: th.textMuted }}>Manage students and courses</p>
        </div>
        <button
          className="logout-btn"
          onClick={logout}
          style={{ background: "#D1344D" }}
        >
          <FiLogOut /> Logout
        </button>
      </div>

      {/* Message */}
      {message && (
        <div
          className={`message ${message.includes("Error") ? "error" : "success"}`}
          style={{
            background: message.includes("Error") ? "#fee" : "#efe",
            color: message.includes("Error") ? "#c33" : "#3c3",
            padding: "12px 16px",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          {message}
        </div>
      )}

      {/* Add Student Button */}
      <button
        className="add-student-btn"
        onClick={() => setShowAddForm(!showAddForm)}
        style={{
          background: "#2D5A9E",
          color: "#fff",
          padding: "10px 16px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <FiPlus /> Add New Student
      </button>

      {/* Add Student Form */}
      {showAddForm && (
        <form
          onSubmit={handleAddStudent}
          className="add-form"
          style={{
            background: th.bgCard,
            border: `1px solid ${th.border}`,
            padding: "20px",
            borderRadius: "12px",
            marginBottom: "20px",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              style={{
                background: th.inputBg,
                border: `1.5px solid ${th.border}`,
                color: th.text,
                padding: "10px 12px",
                borderRadius: "8px",
              }}
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              style={{
                background: th.inputBg,
                border: `1.5px solid ${th.border}`,
                color: th.text,
                padding: "10px 12px",
                borderRadius: "8px",
              }}
            />
            <input
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              style={{
                background: th.inputBg,
                border: `1.5px solid ${th.border}`,
                color: th.text,
                padding: "10px 12px",
                borderRadius: "8px",
              }}
            />
            <input
              type="text"
              placeholder="Course (Optional)"
              value={formData.course}
              onChange={(e) => setFormData({ ...formData, course: e.target.value })}
              style={{
                background: th.inputBg,
                border: `1.5px solid ${th.border}`,
                color: th.text,
                padding: "10px 12px",
                borderRadius: "8px",
              }}
            />
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              style={{
                background: th.inputBg,
                border: `1.5px solid ${th.border}`,
                color: th.text,
                padding: "10px 12px",
                borderRadius: "8px",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              background: "#2D5A9E",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              marginTop: "12px",
            }}
          >
            Add Student
          </button>
        </form>
      )}

      {/* Students Table */}
      <div
        className="students-table-container"
        style={{
          background: th.bgCard,
          border: `1px solid ${th.border}`,
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        {loading ? (
          <div style={{ padding: "20px", textAlign: "center" }}>Loading...</div>
        ) : students.length === 0 ? (
          <div style={{ padding: "20px", textAlign: "center", color: th.textMuted }}>
            No students found
          </div>
        ) : (
          <table className="students-table" style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: th.bgCard, borderBottom: `1px solid ${th.border}` }}>
                <th style={{ padding: "12px", textAlign: "left", color: th.text }}>Name</th>
                <th style={{ padding: "12px", textAlign: "left", color: th.text }}>Email</th>
                <th style={{ padding: "12px", textAlign: "left", color: th.text }}>Phone</th>
                <th style={{ padding: "12px", textAlign: "left", color: th.text }}>Course</th>
                <th style={{ padding: "12px", textAlign: "left", color: th.text }}>Status</th>
                <th style={{ padding: "12px", textAlign: "center", color: th.text }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr
                  key={student._id}
                  style={{ borderBottom: `1px solid ${th.border}` }}
                >
                  <td style={{ padding: "12px", color: th.text }}>{student.name}</td>
                  <td style={{ padding: "12px", color: th.textMuted }}>{student.email}</td>
                  <td style={{ padding: "12px", color: th.textMuted }}>{student.phone}</td>
                  <td style={{ padding: "12px", color: th.textMuted }}>
                    {student.course || "Not assigned"}
                  </td>
                  <td style={{ padding: "12px", color: th.textMuted }}>
                    <span
                      style={{
                        background:
                          student.status === "active" ? "#efe" : "#fee",
                        color: student.status === "active" ? "#3c3" : "#c33",
                        padding: "4px 8px",
                        borderRadius: "4px",
                        fontSize: "12px",
                      }}
                    >
                      {student.status}
                    </span>
                  </td>
                  <td
                    style={{
                      padding: "12px",
                      textAlign: "center",
                      display: "flex",
                      gap: "8px",
                      justifyContent: "center",
                    }}
                  >
                    <button
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "#2D5A9E",
                        cursor: "pointer",
                        fontSize: "16px",
                      }}
                      onClick={() => setEditingId(student._id)}
                    >
                      <FiEdit2 />
                    </button>
                    <button
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "#D1344D",
                        cursor: "pointer",
                        fontSize: "16px",
                      }}
                      onClick={() => handleDeleteStudent(student._id)}
                    >
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
