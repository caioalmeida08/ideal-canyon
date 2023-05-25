import { Request, Response } from "express";
import User from "../models/userModel";
import handleValidationError from "../lib/handleValidationError";
import CustomValidationError from "../lib/customValidationError";
import validateIfOneExists from "../lib/validateIfOneExists";
import validateRequestBody from "../lib/validateRequestBody";
import validateRequestUUID from "../lib/validateRequestUUID";

class UserController {
    /**
     * Returns all users
     * 
     * requires admin privileges
     */
    async findAll(req: Request, res: Response) {
        try {
            const users = await User.findAll();

            return res.status(200).json(users);
        } catch (error: any) {
            handleValidationError(error, res)
        }
    }

    /**
     * Returns address by id
     * 
     * requires admin privileges
     */
    async findOne(req: Request, res: Response) {
        try {
            // validate request uuid
            validateRequestUUID(User, req);

            // make the query
            const address = await User.findByPk(req.params.user_id,  {
                attributes: {
                    exclude: [
                        "user_id",
                        "user_password",
                        "createdAt",
                        "updatedAt"
                    ]
                }
            });

            // if the user_id given in the request params doesn't exist, throw an error
            if (!address) throw new CustomValidationError("Nenhum endereço com o ID especificado foi encontrado.", req.params.user_id);

            // return the result
            return res.status(200).json(address);
        } catch (error: any) {
            handleValidationError(error, res)
        }   
    }

    /**
     * Creates a new address
     * 
     * requires admin privileges
     */
    async create(req: Request, res: Response) {
        try {
            // validate the request body
            validateRequestBody(User, req);

            // password will be hashed by sequelize prior to going to database

            // make the query
            await User.create(req.body)

            // send the response
            res.status(201).send("User created")
        } catch (error: any) {
            console.log(error)
            handleValidationError(error, res);
        }
    }

    /**
     * Updates an existing address
     * 
     * requires admin privileges
     */
    async update(req: Request, res: Response){
        try {
            // validate the request params
            validateRequestUUID(User, req)
            
            // validate the request body
            validateRequestBody(User, req);

            // validate if at least one instance of the user exists
            await validateIfOneExists(User, req);
            
            // update the User
            User.update(req.body, {
                where:{
                    user_id: req.params.user_id
                }
            })

            res.status(200).json({message: "User updated"});
        } catch (error: any) {
            handleValidationError(error, res)
        }
    }

    /**
    * Updates an existing address
    * 
    * requires admin privileges
    */
    async delete(req: Request, res: Response){
        try {
            // validate if uuid is valid
            validateRequestUUID(User, req);
    
            // validate if one exists
            await validateIfOneExists(User, req);
    
            // destroy the instance
            User.destroy({
                where: {
                    user_id: req.params.user_id
                }
            })

            res.status(200).send("User deleted")
        } catch (error: any) {
            handleValidationError(error, res);
        }
    }
}

export default new UserController();