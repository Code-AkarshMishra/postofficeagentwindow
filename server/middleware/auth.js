const { verifyToken } = require("../utils/jwt");

module.exports = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // ❗ check header exists
    if (!authHeader) {
      return res.status(401).json({ message: "No token provided" });
    }

    // ❗ check Bearer format
    if (!authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Invalid token format" });
    }

    const token = authHeader.split(" ")[1];

    // ❗ verify token
    const decoded = verifyToken(token);

    if (!decoded) {
      return res.status(401).json({ message: "Token verification failed" });
    }

    req.user = decoded;

    next();

  } catch (err) {
    console.error("Auth middleware error:", err);

    res.status(401).json({
      message: "Unauthorized",
    });
  }
};