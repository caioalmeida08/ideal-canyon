import { Request, Response } from "express";

import Contact from '../models/contactModel';
import CustomValidationError from "../lib/customValidationError";
import handleValidationError from "../lib/handleValidationError";

class ContactController {

    /**
     * Returns all contacts
     * 
     * Requires admin privileges
     */
    async findAll(req: Request, res: Response){
        try {

            const contacts = await Contact.findAll();
            res.status(200).json(contacts);
        } catch (error: any) {
            handleValidationError(error, res)
        }
    }

    async findOne(req: Request, res: Response){
        try {
            throw new CustomValidationError("Não implementado. FindOne.")
        } catch (error: any) {
            handleValidationError(error, res)
        }
    }

    async create(req: Request, res: Response){
        try {
            throw new CustomValidationError("Não implementado. Create.")
        } catch (error: any) {
            handleValidationError(error, res)
        }
    }

    async update(req: Request, res: Response){
        try {
            throw new CustomValidationError("Não implementado. Update.")
        } catch (error: any) {
            handleValidationError(error, res)
        }
    }

    async delete(req: Request, res: Response){
        try {
            throw new CustomValidationError("Não implementado. Delete.")
        } catch (error: any) {
            handleValidationError(error, res)
        }
    }

}

export default new ContactController();