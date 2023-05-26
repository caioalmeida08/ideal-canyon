import { Request } from "express";
import CustomValidationError from "./customValidationError";
import { validate } from "uuid";

/**
 * Validates if the request params is valid
 * 
 * @param Model Model to be validated (Class instance)
 * @param req Request object
 * @throws CustomValidationError
 */
const validateRequestUUID = (Model: any, req: Request) => {
    try {
        // get the primary key of the model
        const primaryKey = Model.primaryKeyAttribute;

        // check if uuid was sent
        if (!req.params[primaryKey]) throw new CustomValidationError(`O ID de ${Model.name} no pode estar vazio.`);

        // check if the uuid given in the request params is UUIDv4
        if (!validate(req.params[primaryKey])) throw new CustomValidationError(`O ID de ${Model.name} não é válido.`, req.params[primaryKey]);
    } catch (error) {
        throw error;
    }
}

export default validateRequestUUID;