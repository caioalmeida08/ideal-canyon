import { Request } from "express";
import CustomValidationError from "./customValidationError";

/**
 * Validates if at least one instance of the model exists
 * 
 * @param Model Model to be validated (Class instance)
 * @param req Request object
 * @throws CustomValidationError
 */
const validateIfOneExists = async (Model: any, req: Request) => {
    try {
        // get the primary key of the model
        const primaryKey = Model.primaryKeyAttribute;
        
        // check if the instance exists
        const exists = await Model.findOne({
            where: {
                [primaryKey]: req.params[primaryKey]
            }
        })

        if (!exists) throw new CustomValidationError(`Nenhuma instância de ${Model.name} com o ID fornecido foi encontrada.`, req.params[primaryKey]);
    } catch (error) {
        throw error;
    }
}

export default validateIfOneExists;