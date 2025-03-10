import Captain from "../models/captain.model.js";

const captainService = {
  createCaptain: async ({
    firstname,
    middlename,
    lastname,
    email,
    password,
    vehicleColor,
    vehicleBrand,
    vehicleModel,
    vehicleNumber,
    vehicleCapacity,
    vehicleType,
  }) => {
    if (
      !firstname ||
      !email ||
      !password ||
      !vehicleColor ||
      !vehicleBrand ||
      !vehicleModel ||
      !vehicleNumber ||
      !vehicleCapacity ||
      !vehicleType
    ) {
      throw new Error("All fields Are Required To Enter");
    }

    const captain = await Captain.create({
      fullname: {
        firstname,
        middlename,
        lastname,
      },
      email,
      password,
      vehicle: {
        vehicleBrand,
        vehicleModel,
        vehicleColor,
        vehicleNumber,
        vehicleCapacity,
        vehicleType,
      },
    });
    return captain;
  },
};

export { captainService };
