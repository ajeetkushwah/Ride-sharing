const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be 3 charcter long "),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must at least 6 charcter long"),
  ],
  userController.registerUser
);

module.exports = router;
