import BlacklistToken from "../models/blacklistToken.model.js";
import captainModel from "../models/captain.model.js";
import { captainService } from "../services/captain.service.js";
import { validationResult } from "express-validator";

export const registerCaptain = async (req, res) => {
  try {
    try {
      // Validate request inputs
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { fullname, email, password, vehical } = req.body;

      // Check if captain already exists
      const isCaptainAlreadyExist = await captainModel.findOne({ email });
      if (isCaptainAlreadyExist) {
        return res.status(400).json({ message: "Captain already exists" });
      }

      // Hash password using captainModel method
      const hashedPassword = await captainModel.hashPassword(password);

      // Create captain using captainService
      const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        middlename: fullname.middlename,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vehical.vehicalColor,
        plate: vehical.plateNumber,
        capacity: vehical.capacity,
        type: vehical.vehicalType,
        brand: vehical.vehicalBrand,
      });

      // Generate authentication token
      const token = captain.generateAuthToken();

      res.status(201).json({
        message: "Captain registered successfully",
        token,
        captain,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } catch (error) {
    res.status(500).json({ error: "An unexpected error occurred" });
  }
};

export const loginCaptain = async (req, res) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }

    try {
      const { email, password } = req.body;

      // Find captain using email
      const captain = await captainModel.findOne({ email });
      if (!captain) {
        return res.status(400).json({ message: "Invalid Email or Password" });
      }

      // Compare password using captainModel method
      const isPasswordMatch = await captain.comparePassword(password);
      if (!isPasswordMatch) {
        return res.status(400).json({ message: "Invalid Email or Password" });
      }

      // Generate authentication token
      const token = captain.generateAuthToken();

      res.cookie("token", token);
      res.status(200).json({ token, captain });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } catch (error) {
    res.status(500).json({ error: "An unexpected error occurred" });
  }
};

export const getCaptainProfile = async (req, res) => {
  try {
    try {
      res.status(200).json({ captain: req.captain });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } catch (error) {
    res.status(500).json({ error: "An unexpected error occurred" });
  }
};

export const logoutCaptain = async (req, res) => {
  try {
    try {
      const token =
        req.cookies.token ||
        (req.headers.authorization && req.headers.authorization.split(" ")[1]);
      await BlacklistToken.create({ token });

      res.status(200).json({ message: "Captain Logged Out Successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } catch (error) {
    res.status(500).json({ error: "An unexpected error occurred" });
  }
};
