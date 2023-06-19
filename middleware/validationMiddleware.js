require("dotenv").config();
const jwt = require("jsonwebtoken");
const logger = require("../logger");
const key = process.env.SECREAT_KEY;

const verifyToken = async (req, res, next) => {
  const token = req.header("auth-token");

  // checking if token exist
  if (!token) {
    logger.error("No token provided");
    return res.status(401).json({ message: "No token provided" });
  }

  // decoding token
  try {
    const decoded = await jwt.verify(token, key);
    req.user = decoded;
    next();
  } catch (error) {
    logger.error("Invalid token", error);
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = { verifyToken };
