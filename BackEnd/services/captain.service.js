import Captain from "../models/captain.model.js";

const captainService = {
  createCaptain: async ({
    firstname,
    middlename,
    lastname,
    email,
    password,
    vehicalColor,
    vehicalBrand,
    vehicalModel,
    plateNumber,
    capacity,
    vehicalType,
  }) => {
    if (
      !firstname ||
      !middlename ||
      !lastname ||
      !email ||
      !password ||
      !vehicalColor ||
      !vehicalBrand ||
      !vehicalModel ||
      !plateNumber ||
      !capacity ||
      !vehicalType
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
      vehicalDetails: {
        color: vehicalColor,
        brand: vehicalBrand,
        model: vehicalModel,
        plateNumber,
        capacity,
        type: vehicalType,
      },
    });

    return captain;
  },
};

export { captainService };
