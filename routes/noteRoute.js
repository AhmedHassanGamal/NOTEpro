const express = require("express");
// const { check, validationResult } = require("express-validator");
const { noteValidationRules, validate } = require("../utils/validation");
const noteControllers = require("../controllers/noteControllers");
const router = express.Router();
const auth = require("../middleware/auth");

router.post(
  "/",
  auth,
  noteValidationRules,
  validate,
  noteControllers.createNote
);

router.get("/", auth, noteControllers.getAllNotes);

router.get("/:id", auth, noteControllers.getNoteById);

router.patch(
  "/notes/:id",
  auth,
  noteValidationRules,
  validate,
  noteControllers.updateNote
);

router.delete("/:id", auth, noteControllers.deleteNote);

module.exports = router;
