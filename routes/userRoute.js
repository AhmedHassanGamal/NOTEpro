const express = require("express");
const { userValidationRules, validate } = require("../utils/validation");
const { check } = require("express-validator");
const userController = require("../controllers/userControllers");
const auth = require("../middleware/auth");
const router = express.Router();

// User register
router.post(
  "/register",
  userValidationRules,
  validate,
  userController.register
);

// User login
router.post(
  "/login",
  [
    check("email").isEmail().withMessage("Email is required"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  validate,
  userController.login
);
// Get user
router.get('/', auth, userController.getUsers);

module.exports = router;
