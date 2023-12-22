import express from "express";
import { UserControllers } from "./user.controller";

const router = express.Router();

// post route
router.post("/", UserControllers.createUser);

// get route
router.get("/", UserControllers.getAllUsers);

// :userId/get route
router.get("/:userId", UserControllers.getUser);

// :userId/update route
router.put("/:userId", UserControllers.updateUser);

// delete route(/:userId)
router.delete("/:userId", UserControllers.deleteUser);

// update (Add New Product in Order)
router.put("/:userId/orders", UserControllers.addProductByUpdateUser);

// get route (/:userId) / to retrieve all order
router.get("/:userId/orders", UserControllers.retrieveUserOrders);

export const UserRoutes = router;
