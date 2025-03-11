import express from "express";
import { body } from "express-validator";
import {
  registerCaptain,
  loginCaptain,
  getCaptainProfile,
  logoutCaptain,
} from "../controllers/captain.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email Entered"),

    body("fullname.firstname")
      .isLength({ min: 2 })
      .withMessage("First Name must be at least 2 characters"),

    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),

    body("vehicle.vehicleBrand")
      .isLength({ min: 2 })
      .withMessage("Vehicle Name must be at least 2 characters"),

    body("vehicle.vehicleColor")
      .isLength({ min: 2 })
      .withMessage("Vehicle Color must be at least 2 characters"),

    body("vehicle.vehicleModel")
      .isLength({ min: 2 })
      .withMessage("Vehicle Model must be at least 2 characters"),

    body("vehicle.vehicleNumber")
      .isLength({ min: 8 })
      .withMessage("Vehicle Number must be at least 8 characters"),

    body("vehicle.vehicleType")
      .isIn(["car", "auto", "bike"])
      .withMessage("Invalid Vehicle Type"),

    body("vehicle.vehicleCapacity")
      .isInt({ min: 1 })
      .withMessage("Vehicle Capacity must be at least 1"),
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

router.get("/profile", authMiddleware.authCaptain, getCaptainProfile);

router.get("/logout", authMiddleware.authCaptain, logoutCaptain);

export default router;
