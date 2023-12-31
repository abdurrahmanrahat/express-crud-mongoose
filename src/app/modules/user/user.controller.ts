import { Request, Response } from "express";
import { UserServices } from "./user.service";
import UserValidationSchema from "./user.validation";

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const zodParseData = UserValidationSchema.parse(userData);
    const result = await UserServices.createUserIntoDb(zodParseData);

    res.status(200).json({
      success: true,
      message: "User created successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "User not found",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUsersFromDb();

    res.status(200).json({
      success: true,
      message: "Users fetched successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Users not found",
      error: error,
    });
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const result = await UserServices.getUserFromDb(userId);

    res.status(200).json({
      success: true,
      message: "User fetched successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const updatedUser = req.body;
    const result = await UserServices.updateUserIntoDb(userId, updatedUser);

    res.status(200).json({
      success: true,
      message: "User updated successfully!",
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const result = await UserServices.deleteUserIntoDb(userId);

    res.status(200).json({
      success: true,
      message: "User deleted successfully!",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};

const addProductByUpdateUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const newProduct = req.body;

    const result = await UserServices.addProductByUpdateUserIntoDb(
      userId,
      newProduct
    );
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};

const retrieveUserOrders = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const result = await UserServices.retrieveUserOrdersFromDb(userId);

    res.status(200).json({
      success: true,
      message: "Order fetched successfully!",
      data: {
        orders: result,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};

const calculateUserOrders = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const result = await UserServices.calculateUserOrdersFromDb(userId);

    res.status(200).json({
      success: true,
      message: "Total price calculated successfully!!",
      data: {
        totalPrice: result,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};

export const UserControllers = {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
  addProductByUpdateUser,
  retrieveUserOrders,
  calculateUserOrders,
};
