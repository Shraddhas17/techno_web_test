import express from "express";
import {
  getAllStudents,
  addStudent,
  updateStudent,
  deleteStudent,
  getStudentById,
} from "../controller/studentcontroller.js";
import { authMiddleware, adminOnly } from "../middleware/auth.js";

const router = express.Router();

// All student routes require authentication and admin role
router.get("/", authMiddleware, adminOnly, getAllStudents);
router.post("/add", authMiddleware, adminOnly, addStudent);
router.put("/:id", authMiddleware, adminOnly, updateStudent);
router.delete("/:id", authMiddleware, adminOnly, deleteStudent);
router.get("/:id", authMiddleware, getStudentById);

export default router;
