import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      console.log("No auth header or invalid format:", authHeader);
      return res.status(401).json({ message: "No token provided. Use Bearer <token>" });
    }

    const token = authHeader.split(" ")[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || "your_jwt_secret_key");
      req.user = decoded;
      console.log("Auth successful for user:", decoded.id, decoded.role);
      next();
    } catch (jwtError) {
      console.log("JWT verification failed:", jwtError.message);
      return res.status(401).json({ message: "Invalid or expired token", error: jwtError.message });
    }
  } catch (error) {
    console.error("Auth middleware error:", error);
    return res.status(500).json({ message: "Authentication error", error: error.message });
  }
};

const adminOnly = (req, res, next) => {
  try {
    console.log("adminOnly middleware - req.user:", req.user);
    
    if (!req.user) {
      console.log("Admin access denied: No user in request");
      return res.status(401).json({ message: "User not authenticated" });
    }
    
    if (req.user.role !== "admin") {
      console.log("Admin access denied for user:", req.user.id, "role:", req.user.role);
      return res.status(403).json({ message: "Admin access only. Your role is: " + req.user.role });
    }
    
    console.log("Admin access granted for user:", req.user.id);
    next();
  } catch (error) {
    console.error("adminOnly middleware error:", error);
    res.status(500).json({ message: "Admin check failed", error: error.message });
  }
};

export { authMiddleware, adminOnly };
