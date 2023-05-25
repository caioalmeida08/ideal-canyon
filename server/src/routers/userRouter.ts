import { Router } from "express";
import userController from "../controllers/userController";

const userRouter = Router()

userRouter.get("/", userController.findAll)

export default userRouter;