import { ValidationError } from "sequelize";
import CustomValidationError from "./customValidationError";
import { Response } from "express";

/**
 * Handles error from Sequelize validation or CustomValidationError.
 *  
 * Automatically sends a 400 response with the error messages
 * @returns void
 */
const handleValidationError = (error: CustomValidationError | ValidationError, res: Response) => {
    const errorMessages = error.errors.map(
        (err: any) => (`${err.message} Valor enviado: ${err.value}.`)
    );
    return res.status(400).json({message: errorMessages});
}

export default handleValidationError;