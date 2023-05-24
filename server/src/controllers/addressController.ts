import { Request, Response } from "express"

import Address from "../models/addressModel"
import validateRequestUUID from "../lib/validateRequestUUID";
import handleValidationError from "../lib/handleValidationError";
import { validate } from "uuid";
import validateRequestBody from "../lib/validateRequestBody";
import CustomValidationError from "../lib/customValidationError";

class AddressController {
    /**
     * Returns all addresses
     * 
     * requires admin privileges
     */
    async findAll(req: Request, res: Response) {
        try {
            const addresses = await Address.findAll();

            return res.status(200).json(addresses);
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
            validateRequestUUID(Address, req);

            // make the query
            const address = await Address.findByPk(req.params.id,  {
                attributes: {
                    exclude: [
                        "address_id",
                        "address_owner_id",
                        "address_owner",
                        "createdAt",
                        "updatedAt"
                    ]
                }
            });

            // if the address_id given in the request params doesn't exist, throw an error
            if (!address) throw new CustomValidationError("Nenhum endereço com o ID especificado foi encontrado.", req.params.address_id);

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
            validateRequestBody(Address, req);

            // make the query
            await Address.create(req.body)

            // send the response
            res.status(201).send("Address created")
        } catch (error: any) {
            handleValidationError(error, res);
        }
    }

    /**
     * Updates an existing address
     * 
     * requires admin privileges
     */

}

export default new AddressController();