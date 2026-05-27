import express from "express";
import Advisor from "../models/Advisor.js";

const router = express.Router();

// Save form data
router.post("/talk-to-advisor", async (req, res) => {
  try {
    const { name, phone } = req.body;

    const newUser = new Advisor({
      name,
      phone,
    });

    await newUser.save();

    res.status(201).json({
      message: "Form submitted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;