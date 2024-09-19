import express from "express";
import {
  getUser,
  updateUser,
  createUser,
  deleteUser,
  loginUser,
  logoutUser,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/:id", getUser);
userRouter.post("/", createUser);
userRouter.post("/login", loginUser);
userRouter.post("/logout", logoutUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

export default userRouter;
