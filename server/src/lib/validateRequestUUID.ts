import { Request } from "express";
import CustomValidationError from "./customValidationError";
import { validate } from "uuid";

/**
 * Validates if the request params is valid
 * 
 * @param req Request object
 * @throws CustomValidationError
 */
const validateRequestUUID = (req: Request) => {
    try {
        // check if contact_id was sent
        if (!req.params.contact_id) throw new CustomValidationError("O ID do contato não pode estar vazio.");

        // check if the contact_id given in the request params is UUIDv4
        if (!validate(req.params.contact_id)) throw new CustomValidationError("O ID do contato não é válido.", req.params.contact_id);
    } catch (error) {
        throw error;
    }
}

export default validateRequestUUID;