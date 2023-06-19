const jwt = require('jsonwebtoken');

const JWT_SECRET="Ghost"
const verifyToken = async (req, res, next) => {
  const token = req.header("auth-token");
// checking token is provided or not 

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }
//   decoding the token
  try {
    const decoded = await jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = { verifyToken };
