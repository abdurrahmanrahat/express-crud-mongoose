import express from "express";
import { UserControllers } from "./user.controller";

const router = express.Router();

// post route
router.post("/", UserControllers.createUser);

// get route
router.get("/", UserControllers.getAllUsers);

export const UserRoutes = router;
