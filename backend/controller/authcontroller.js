import User from "../model/User.js";
import jwt from "jsonwebtoken";

// Admin login with fixed credentials
export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Fixed admin credentials
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@technosignia.com";
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "Admin@123";

    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
      return res.status(401).json({ message: "Invalid admin credentials" });
    }

    const token = jwt.sign(
      { id: "admin", email, role: "admin" },
      process.env.JWT_SECRET || "your_jwt_secret_key",
      { expiresIn: "7d" }
    );

    res.json({
      success: true,
      token,
      user: { id: "admin", email, role: "admin", name: "Admin" },
    });
  } catch (error) {
    res.status(500).json({ message: "Login error", error: error.message });
  }
};

// Student login
export const studentLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    if (user.status === "inactive") {
      return res.status(403).json({ message: "Your account is inactive" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, role: "student", name: user.name },
      process.env.JWT_SECRET || "your_jwt_secret_key",
      { expiresIn: "7d" }
    );

    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: "student",
        course: user.course,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Login error", error: error.message });
  }
};

// Get current user
export const getCurrentUser = async (req, res) => {
  try {
    if (req.user.role === "admin") {
      return res.json({
        user: { id: "admin", email: req.user.email, role: "admin", name: "Admin" },
      });
    }

    const user = await User.findById(req.user.id);
    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: "Error fetching user", error: error.message });
  }
};

// Logout
export const logout = (req, res) => {
  res.json({ success: true, message: "Logged out successfully" });
};
