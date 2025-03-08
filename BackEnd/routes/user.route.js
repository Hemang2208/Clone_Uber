// Import modules using ES Modules syntax
import express from "express";
import { body } from "express-validator";
import authMidddleware from "../middlewares/auth.middleware.js";

// Import controller functions
import {
  registerUser,
  loginUser,
  getUserProfile,
  logoutUser,
} from "../controllers/user.controller.js";

const router = express.Router();

// Register route with input validation
router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid email"),

    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First Name must be at least 3 characters"),

    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  registerUser
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email"),

    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  loginUser
);

router.get("/profile", authMidddleware.authUser, getUserProfile);

router.get("/logout", authMidddleware.authUser, logoutUser);

// Export router as default for ES Modules
export default router;
