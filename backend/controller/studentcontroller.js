import User from "../model/User.js";

// Get all students (Admin only)
export const getAllStudents = async (req, res) => {
  try {
    const students = await User.find({ role: "student" }).select("-password");
    res.json({ success: true, data: students });
  } catch (error) {
    res.status(500).json({ message: "Error fetching students", error: error.message });
  }
};

// Add new student (Admin only)
export const addStudent = async (req, res) => {
  try {
    console.log("Add student request received with data:", req.body);
    const { name, email, phone, course, password } = req.body;

    if (!name || !email || !phone || !password) {
      console.log("Missing required fields");
      return res.status(400).json({ message: "All fields are required" });
    }

    console.log("Checking if email already exists:", email);
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("Email already registered:", email);
      return res.status(400).json({ message: "Email already registered" });
    }

    console.log("Creating new student...");
    const newStudent = new User({
      name,
      email,
      phone,
      course: course || null,
      password,
      role: "student",
    });

    await newStudent.save();
    console.log("Student added successfully:", newStudent._id);

    res.status(201).json({
      success: true,
      message: "Student added successfully",
      data: {
        id: newStudent._id,
        name: newStudent.name,
        email: newStudent.email,
        phone: newStudent.phone,
        course: newStudent.course,
      },
    });
  } catch (error) {
    console.error("Error adding student - Full error object:", error);
    console.error("Error stack:", error.stack);
    res.status(500).json({ 
      message: "Error adding student", 
      error: error.message,
      stack: error.stack
    });
  }
};

// Update student (Admin only)
export const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, phone, course, status } = req.body;

    const student = await User.findById(id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    if (name) student.name = name;
    if (phone) student.phone = phone;
    if (course) student.course = course;
    if (status) student.status = status;

    await student.save();

    res.json({
      success: true,
      message: "Student updated successfully",
      data: student,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating student", error: error.message });
  }
};

// Delete student (Admin only)
export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await User.findByIdAndDelete(id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json({ success: true, message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting student", error: error.message });
  }
};

// Get student by ID
export const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await User.findById(id).select("-password");

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json({ success: true, data: student });
  } catch (error) {
    res.status(500).json({ message: "Error fetching student", error: error.message });
  }
};
