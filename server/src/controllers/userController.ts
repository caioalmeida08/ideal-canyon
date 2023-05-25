import { Request, Response } from "express";
import User from "../models/userModel";
import handleValidationError from "../lib/handleValidationError";

class UserController {
    async findAll(req: Request, res: Response){
        try {
            const users = await User.findAll();
            res.status(200).send(users)
        } catch (error: any) {
            handleValidationError(error, res)
        }
    }
}

export default new UserController();