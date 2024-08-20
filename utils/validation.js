const { check, validationResult } = require("express-validator");

//validation of user
const userValidationRules = [
  check("username").not().isEmpty().withMessage("Username is required"),
  check("email").isEmail().withMessage("Please provide a valid email"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

//Validators of notes
const noteValidationRules = [
  check("title").not().isEmpty().withMessage("Title is required"),
  check("content").not().isEmpty().withMessage("Content is required"),
];

//middleware of validation results
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({ errors: errors.array() });
};

module.exports = {
  userValidationRules,
  noteValidationRules,
  validate,
};
