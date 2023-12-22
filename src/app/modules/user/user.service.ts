import { TUser } from "./user.interface";
import { User } from "./user.model";

// post
const createUserIntoDb = async (userData: TUser) => {
  const result = await User.create(userData);
  return result;
};

// get
const getAllUsersFromDb = async () => {
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

// get/:userId
const getUserFromDb = async (userId: number) => {
  const result = await User.findOne({ userId });
  return result;
};

// update by: userId
const updateUserIntoDb = async (userId: number, updatedUser: TUser) => {
  const result = await User.updateOne({ userId: userId }, updatedUser);
  return result;
};

export const UserServices = {
  createUserIntoDb,
  getAllUsersFromDb,
  getUserFromDb,
  updateUserIntoDb,
};
