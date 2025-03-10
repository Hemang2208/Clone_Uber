import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const captainSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [2, "First Name must be at least 2 characters long"],
    },
    middlename: {
      type: String,
      required: false,
      minlength: [2, "Middle Name must be at least 2 characters long"],
    },
    lastname: {
      type: String,
      required: false,
      minlength: [2, "Last Name must be at least 2 characters long"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    minlength: [5, "Email must be at least 5 characters long"],
    match: [
      /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketId: {
    type: String,
  },
  status: {
    type: String,
    required: false,
    enum: ["active", "inactive"],
    default: "inactive",
  },
  vehicle: {
    vehicleBrand: {
      type: String,
      required: true,
      minlength: [2, "Brand must be at least 2 characters long"],
    },
    vehicleModel: {
      type: String,
      required: true,
      minlength: [2, "Model must be at least 2 characters long"],
    },
    vehicleColor: {
      type: String,
      required: true,
      minlength: [2, "Color must be at least 2 characters long"],
    },
    vehicleNumber: {
      type: String,
      required: true,
      minlength: [8, "Plate Number must be at least 8 characters long"],
    },
    vehicleCapacity: {
      type: Number,
      required: true,
      min: [1, "Capacity must be at least 1"],
    },
    vehicleType: {
      type: String,
      required: true,
      enum: ["car", "auto", "bike"],
    },
  },
  location: {
    type: {
      type: String,
      enum: ["Rural", "Urban"],
      required: false,
    },
    pincode: {
      type: Number,
      required: false,
      minlength: [5, "Pincode must be at least 5 characters long"],
    },
    lan: {
      type: [Number],
      required: false,
    },
    long: {
      type: [Number],
      required: false,
    },
  },
});

captainSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  return token;
};

captainSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

captainSchema.statics.hashPassword = async function (password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const Captain = mongoose.model("Captain", captainSchema);
export default Captain;
