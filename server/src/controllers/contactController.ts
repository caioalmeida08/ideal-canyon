import { Request, Response } from "express";

import Contact from '../models/contactModel';
import CustomValidationError from "../lib/customValidationError";
import handleValidationError from "../lib/handleValidationError";
import validateRequestBody from "../lib/validateRequestBody";
import validateRequestUUID from "../lib/validateRequestUUID";
import validateIfOneExists from "../lib/validateIfOneExists";

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
     * 
     * Requires admin privileges
     */
    async findOne(req: Request, res: Response){
        try {
            // validate the request params
            validateRequestUUID(Contact, req)
            
            // do the query
            const contact = await Contact.findByPk(req.params.contact_id, {
                attributes:
                {
                    exclude: [
                    "contact_agrees_with_terms",
                    "contact_is_active",
                    "contact_is_solved",
                    "createdAt",
                    "updatedAt"
                ]
                }
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
            // validate the request body
            validateRequestBody(Contact, req);

            // create the contact
            await Contact.create(req.body);

            res.status(201).json({message: "Obrigado por entrar em contato! Recebemos a sua mensagem. Aguarde a resposta via e-mail."});
        } catch (error: any) {
            handleValidationError(error, res)
        }
    }

    async update(req: Request, res: Response){
        try {
            // validate the request params
            validateRequestUUID(Contact, req)
            
            // validate the request body
            validateRequestBody(Contact, req);

            // validate if at least one instance of the contact_model_short exists
            await validateIfOneExists(Contact, req);
            
            // update the contact
            await Contact.update(req.body, {
                where: {
                    contact_id: req.params.contact_id
                },
                limit: 1,
            });

            res.status(200).json({message: "Contact updated"});
        } catch (error: any) {
            handleValidationError(error, res)
        }
    }

    async delete(req: Request, res: Response){
        try {
            // validate the request params
            validateRequestUUID(Contact, req)

            // validate if at least one instance of the contact_model_short exists
            await validateIfOneExists(Contact, req);

            // turn contact_is_active to false
            await Contact.update({
                contact_is_active: false
            }, {
                where: {
                    contact_id: req.params.contact_id
                },
                limit: 1
            });

            res.status(200).json({message: "Contact deleted"});
        } catch (error: any) {
            handleValidationError(error, res)
        }
    }

}

export default new ContactController();