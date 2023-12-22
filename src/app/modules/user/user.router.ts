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

export const UserRoutes = router;
