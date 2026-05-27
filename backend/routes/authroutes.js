import express from "express";
import {
  adminLogin,
  studentLogin,
  getCurrentUser,
  logout,
} from "../controller/authcontroller.js";
import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

router.post("/admin/login", adminLogin);
router.post("/student/login", studentLogin);
router.get("/me", authMiddleware, getCurrentUser);
router.post("/logout", authMiddleware, logout);

export default router;
