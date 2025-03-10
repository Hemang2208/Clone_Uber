import userModel from "../models/user.model.js";

const userService = {
  createUser: async ({ firstname, middlename, lastname, email, password }) => {
    if (!firstname || !email || !password) {
      throw new Error("All fields Are Required To Enter");
    }

    const user = await userModel.create({
      fullname: {
        firstname,
        middlename,
        lastname,
      },
      email,
      password,
    });

    return user;
  },
};

export { userService };
