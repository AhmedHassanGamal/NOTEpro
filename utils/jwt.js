const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/config");

exports.generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email, type: user.type },
    JWT_SECRET,
    { expiresIn: "1h" }
  );
};

exports.verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};
