import { TUser } from "./user.interface";
import { User } from "./user.model";

// post
const createUserIntoDb = async (userData: TUser) => {
  const result = await User.create(userData);
  return result;
};

export const UserServices = {
  createUserIntoDb,
};
