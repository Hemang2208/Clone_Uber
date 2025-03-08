import userModel from "../models/user.model.js";

const userService = {
  createUser: async ({ firstname, middlename, lastname, email, password }) => {
    if (!firstname || !email || !password) {
      throw new Error("All fields are required");
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
