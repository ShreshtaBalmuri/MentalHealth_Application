const express = require("express");
const router = express.Router();
const validator = require("express-validation");
const { evaluate } = require("../validations/result.validation");
const resultController = require("../controllers/result.controller");
const auth = require("../middlewares/authorization");

router.post(
  "/evaluate",
  auth(),
  validator(evaluate),
  resultController.evaluate
);

module.exports = router;
