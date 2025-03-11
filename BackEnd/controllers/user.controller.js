import userModel from "../models/user.model.js";
import { validationResult } from "express-validator";
import { userService } from "../services/user.service.js";
import BlacklistTokenModel from "../models/blacklistToken.model.js";

export const registerUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { fullname, email, password } = req.body;

      const isUserAlreadyExist = await userModel.findOne({ email });
      if (isUserAlreadyExist) {
        return res.status(400).json({ message: "User Already Exists" });
      }

      const hashPassword = await userModel.hashPassword(password);

      const user = await userService.createUser({
        firstname: fullname.firstname,
        middlename: fullname.middlename,
        lastname: fullname.lastname,
        email,
        password: hashPassword,
      });

      const token = await user.generateAuthToken();

      res.status(201).json({
        message: "User Registered Successfully",
        token,
        user,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "An Unexpected Error Occurred, While Running" });
  }
};

export const loginUser = async (req, res) => {
  try {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email, password } = req.body;

      const user = await userModel.findOne({ email }).select("+password");
      if (!user) {
        return res.status(401).json({ message: "Invalid Email or PassWord" });
      }

      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid Email or Password" });
      }

      const token = user.generateAuthToken();
      res.cookie("token", token);
      res.status(200).json({ token, user });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "An Unexpected Error Occurred, While Running" });
  }
};

export const getUserProfile = async (req, res) => {
  try {
    try {
      res.status(200).json(req.user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "An Unexpected Error Occurred, While Running" });
  }
};

export const logoutUser = async (req, res) => {
  try {
    try {
      res.clearCookie("token");
      const token =
        req.cookies.token || req.headers.authorization.split(" ")[1];

      await BlacklistTokenModel.create({ token });

      res.status(200).json({ message: "Logged Out Successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "An Unexpected Error Occurred, While Running" });
  }
};
