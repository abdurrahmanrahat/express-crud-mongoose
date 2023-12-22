import { TUser } from "./user.interface";
import { User } from "./user.model";

// post
const createUserIntoDb = async (userData: TUser) => {
  const result = await User.create(userData);
  return result;
};

// get
const getUsersFromDb = async () => {
  const result = await User.find(
    {},
    {
      username: true,
      fullName: true,
      age: 1,
      email: 1,
      address: 1,
    }
  );
  return result;
};

export const UserServices = {
  createUserIntoDb,
  getUsersFromDb,
};
