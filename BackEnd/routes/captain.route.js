import express from "express";
import { body } from "express-validator";
import {
  registerCaptain,
  loginCaptain,
  getCaptainProfile,
  logoutCaptain,
} from "../controllers/captain.controller.js";
import authMidddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email Entered"),

    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First Name must be at least 3 characters"),

    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),

    body("vehical.vehicalBrand")
      .isLength({ min: 2 })
      .withMessage("Vehical Name must be at least 2 characters"),

    body("vehical.vehicalColor")
      .isLength({ min: 3 })
      .withMessage("Vehical Color must be at least 3 characters"),

    body("vehical.plateNumber")
      .isLength({ min: 9 })
      .withMessage("Vehical Number must be at least 9 characters"),

    body("vehical.vehicalType")
      .isIn(["car", "auto", "bike"])
      .withMessage("Invalid Vehical Type"),

    body("vehical.capacity")
      .isInt({ min: 1 })
      .withMessage("Vehical Capacity must be at least 1"),
  ],
  registerCaptain
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email"),

    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  loginCaptain
);

router.get("/profile", authMidddleware.authCaptain, getCaptainProfile);

router.get("/logout", authMidddleware.authCaptain, logoutCaptain);

export default router;
