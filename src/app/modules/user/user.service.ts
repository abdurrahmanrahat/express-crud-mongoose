import { TOrder, TUser } from "./user.interface";
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

// delete by: userId
const deleteUserIntoDb = async (userId: number) => {
  const result = await User.deleteOne({ userId });
  return result;
};

// update for add product
const addProductByUpdateUserIntoDb = async (
  userId: number,
  newProduct: TOrder
) => {
  const matchedUser = await User.findOne({ userId });
  if (!matchedUser) {
    throw new Error("User not found.");
  }

  let updatedOrders;
  if (matchedUser?.orders && matchedUser.orders.length > 0) {
    updatedOrders = [...matchedUser.orders, newProduct];
  } else {
    updatedOrders = [newProduct];
  }

  const result = await User.findOneAndUpdate(
    { userId },
    {
      $set: { orders: updatedOrders },
    },
    {
      new: true,
    }
  );
  return result;
};

// retrieve order /:userId
const retrieveUserOrdersFromDb = async (userId: number) => {
  const result = await User.findOne({ userId });
  const ordersResult = result?.orders;
  return ordersResult;
};

export const UserServices = {
  createUserIntoDb,
  getAllUsersFromDb,
  getUserFromDb,
  updateUserIntoDb,
  deleteUserIntoDb,
  addProductByUpdateUserIntoDb,
  retrieveUserOrdersFromDb,
};
