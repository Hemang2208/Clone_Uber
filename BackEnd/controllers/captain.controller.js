import BlacklistToken from "../models/blacklistToken.model.js";
import captainModel from "../models/captain.model.js";
import { captainService } from "../services/captain.service.js";
import { validationResult } from "express-validator";

export const registerCaptain = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password, vehicle } = req.body;

    const isCaptainAlreadyExist = await captainModel.findOne({ email });
    if (isCaptainAlreadyExist) {
      return res.status(400).json({ message: "Captain Already Exists, Kindly Login." });
    }

    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
      firstname: fullname.firstname,
      middlename: fullname.middlename,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
      vehicleColor: vehicle.vehicleColor,
      vehicleNumber: vehicle.vehicleNumber,
      vehicleCapacity: vehicle.vehicleCapacity,
      vehicleType: vehicle.vehicleType,
      vehicleBrand: vehicle.vehicleBrand,
      vehicleModel: vehicle.vehicleModel,
    });

    const token = captain.generateAuthToken();

    res.status(201).json({
      message: "Captain registered successfully",
      token,
      captain,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const loginCaptain = async (req, res) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }

    const { email, password } = req.body;

    const captain = await captainModel.findOne({ email });
    if (!captain) {
      return res.status(400).json({ message: "Invalid Email or Password" });
    }

    const isPasswordMatch = await captain.comparePassword(password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Invalid Email or Password" });
    }

    const token = captain.generateAuthToken();

    res.cookie("token", token);
    res.status(200).json({ token, captain });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCaptainProfile = async (req, res) => {
  try {
    res.status(200).json({ captain: req.captain });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const logoutCaptain = async (req, res) => {
  try {
    const token =
      req.cookies.token ||
      (req.headers.authorization && req.headers.authorization.split(" ")[1]);
    await BlacklistToken.create({ token });

    res.status(200).json({ message: "Captain Logged Out Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
