import { Request } from "express";
import CustomValidationError from "./customValidationError";

/**
 * Validates if the request body is valid
 * 
 * Deletes the fields that should not be manually created/updated
 * (model primary key, createdAt and updatedAt)
 * 
 * @param model Model to be validated (Class instance)
 * @param req Request object
 * @throws CustomValidationError
 */
const validateRequestBody = (Model: any, req: Request) => {
    try {
        // get the model primary key
        const primaryKey = Model.primaryKeyAttribute;

        // remove the fields that should not be manually created
        delete req.body[primaryKey];
        delete req.body.createdAt;
        delete req.body.updatedAt;
    
        // check if every parameter sent exists
        const modelAttributeKeys = Array.from(Object.keys(Model.getAttributes()));
        const bodyAttributeKeys = Array.from(Object.keys(req.body));
        
        bodyAttributeKeys.forEach((attribute: string) => {
            // if attribute not in requiredAttributeKeys, throw an error
            if (!modelAttributeKeys.includes(attribute)) throw new CustomValidationError(`O atributo ${attribute} não existe.`, req.body[attribute]);
        });
    
        // check if body is empty
        if (Object.keys(req.body).length === 0) throw new CustomValidationError("O corpo da requisição não pode estar vazio.");         
    } catch (error) {
        throw error;
    }
}

export default validateRequestBody;