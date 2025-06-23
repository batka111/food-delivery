import express from "express";
import {
  createUsers,
  deleteUser,
  getAllUsers,
  getUsersByid,
  updateUser,
} from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.post("/", createUsers);
userRouter.patch("/:userId", updateUser);
userRouter.delete("/:userId", deleteUser);
userRouter.get("/:userId", getUsersByid);

export default userRouter;
