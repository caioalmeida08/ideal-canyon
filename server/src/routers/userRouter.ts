import { Router } from "express";
import userController from "../controllers/userController";

const userRouter = Router();

/**
 * GET /user/
 * 
 * returns all users
 * 
 * requires admin privileges
 */
userRouter.get("/", userController.findAll);

/**
 * GET /user/:user_id
 * 
 * returns user by id
 * 
 * requires admin privileges
 */
userRouter.get("/:user_id", userController.findOne);

/**
 * POST /user/
 * 
 * creates a new user
 * 
 * requires admin privileges
 */
userRouter.post("/", userController.create)


/**
 * PUT /user/:user_id
 * 
 * updates an existing user
 * 
 * requires admin privileges
 */
userRouter.put("/:user_id", userController.update)


/**
 * DELETE /users/:user_id
 * 
 * updates an existing user
 * 
 * requires admin privileges
 */
userRouter.delete("/:user_id", userController.delete)
export default userRouter;