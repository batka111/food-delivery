import express from "express";
import {
  signUp,
  // deleteUser,
  // getUsersByid,
  // updateUser,
  signIn,
} from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get("/users", signIn);
userRouter.post("/sign-in", signIn);
userRouter.post("/sign-up", signUp);
// userRouter.patch("/:userId", updateUser);
// userRouter.delete("/:userId", deleteUser);
// userRouter.get("/:userId", getUsersByid);

export default userRouter;
