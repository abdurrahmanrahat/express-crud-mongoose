import { Request, Response } from "express";
import { UserServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const result = await UserServices.createUserIntoDb(userData);
    res.status(200).json({
      success: true,
      message: "User created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User not found",
      error: error,
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getUsersFromDb();
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

export const UserControllers = {
  createUser,
  getAllUsers,
};
