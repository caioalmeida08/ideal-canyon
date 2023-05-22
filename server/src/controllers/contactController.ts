import { Request, Response } from "express";

import Contact from '../models/contactModel';
import CustomValidationError from "../lib/customValidationError";
import handleValidationError from "../lib/handleValidationError";
import { validate } from "uuid";

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

    /**
     * Returns a single contact
     */
    async findOne(req: Request, res: Response){
        try {
            // check if contact_id was sent
            if (!req.params.contact_id) throw new CustomValidationError("O ID do contato não pode estar vazio.");

            // check if the contact_id given in the request params is UUIDv4
            if (!validate(req.params.contact_id)) throw new CustomValidationError("O ID do contato não é válido.", req.params.contact_id);
            
            // do the query
            const contact = await Contact.findOne({
                where: {
                    contact_id: req.params.contact_id
                },
                limit: 1
            });

            // if the contact_id given in the request params doesn't exist, throw an error
            if (!contact) throw new CustomValidationError("Nenhum contato com o ID especificado foi encontrado.", req.params.contact_id);

            res.status(200).json(contact);
        } catch (error: any) {
            handleValidationError(error, res)
        }
    }

    async create(req: Request, res: Response){
        try {
            // check if every parameter sent exists
            const requiredAttributes = Object.keys(Contact.getAttributes());
            requiredAttributes.forEach((attribute: string) => {
                // skip the contact_id attribute, createdAt and updatedAt
                if (attribute === "contact_id" || attribute === "createdAt" || attribute === "updatedAt") {
                    throw new CustomValidationError(`O atributo ${attribute} não pode ser definido manualmente.`);
                };

                if (!req.body[attribute]) throw new CustomValidationError(`O atributo ${attribute} não pode estar vazio (ou não existe).`);
            });

            // create the contact
            await Contact.create(req.body);

            res.status(201).json({message: "Contact created"});
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