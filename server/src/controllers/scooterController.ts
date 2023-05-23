import { Request, Response } from "express";

import Scooter from '../models/scooterModel';
import sequelize from "../database/db";
import { QueryTypes } from "sequelize";
import {validate} from "uuid";
import CustomValidationError from "../lib/customValidationError";
import handleValidationError from "../lib/handleValidationError";

const validateRequestScooterModelShort = async (req: Request) => {
    try {
        // check if the scooter_model_short was sent
        const scooterModelShort = req.params.scooter_model_short;
        if (!scooterModelShort) throw new CustomValidationError("O modelo da scooter não foi especificado.");

        // check if the scooter_model_short exists in the database
        const existsScooterModel = await Scooter.findOne({
            where: {
                scooter_model_short: scooterModelShort,
                scooter_is_active: true,
                scooter_is_sold: false
            }
        });

        // if the scooter_model_short doesn't exist, throw an error
        if (!existsScooterModel) throw new CustomValidationError("O modelo da scooter não existe.", scooterModelShort);

    } catch (error) {
        throw error;
    }
}


class ScooterController {
    /**
     * Returns all scooters
     * 
     * Requires admin privileges
     */
    async findAll(req: Request, res: Response) {
        try {
            const allScooters = await Scooter.findAll();
            res.status(200).json(allScooters);
        } catch (error) {
            res.status(400).json({message: error});
        }
    }

    /**
     * Returns details for the scooter_model_short given in the request params
     */
    async findOne(req: Request, res: Response) {
        try {
            // validate the request
            await validateRequestScooterModelShort(req);

            // get the scooter_model_short given in the request params
            const scooterModelShort = req.params.scooter_model_short;

            // get the scooter details
            let returnScooter: any = await Scooter.findOne({
                where: {
                    scooter_model_short: scooterModelShort,
                    scooter_is_active: true,
                    scooter_is_sold: false
                },
                attributes: {
                    exclude: ["scooter_id", "scooter_model_short", "scooter_is_active", "scooter_is_sold", "createdAt", "updatedAt"]
                }
            });

            // get all possible colors for the scooter
            const allColors = await sequelize.query(
                `SELECT DISTINCT scooter_color FROM Scooter WHERE scooter_model_short = '${scooterModelShort}' AND scooter_is_active = true AND scooter_is_sold = false`,
                {
                type: QueryTypes.SELECT
            })

            // attatch the colors to the scooter details
            returnScooter.dataValues.scooter_all_colors = allColors.map((color: any) => color.scooter_color);
            
            // get the previous and the next scooter_model_short
            // first get all scooter_model_shorts that are active and not sold
            let allScooterModelShorts = await sequelize.query(
                `SELECT DISTINCT scooter_model_short FROM Scooter WHERE scooter_is_active = true AND scooter_is_sold = false`,
                {
                type: QueryTypes.SELECT
            })

            // convert the allScooterModelShorts array to an array of strings
            allScooterModelShorts = allScooterModelShorts.map((scooter: any) => scooter.scooter_model_short);

            // get the index of the current scooter_model_short
            const currentScooterModelIndex = allScooterModelShorts.indexOf(scooterModelShort as Object);

            // get the previous and the next scooter_model_short
            const previousScooterModel = allScooterModelShorts[currentScooterModelIndex - 1] || allScooterModelShorts[allScooterModelShorts.length - 1];
            const nextScooterModel = allScooterModelShorts[currentScooterModelIndex + 1] || allScooterModelShorts[0];

            // append the previous and the next scooter_model_short to the returnScooter object
            returnScooter.dataValues.other_scooter_models = [previousScooterModel, nextScooterModel]

            // return the scooter details
            res.status(200).json(returnScooter);
            
        } catch (error: any) {
            handleValidationError(error, res);
        }
    }

    /**
     * Returns all scooters that are active and not sold
     * 
     * Requires admin privileges
     */
    async create(req: Request, res: Response) {
        try {
            await Scooter.create(req.body);
            res.status(200).json({message: "Scooter created"});
        } catch (error: any) {
            handleValidationError(error, res);
        }
    }

    /**
     * Updates the scooter with the scooter_id given in the request params
     * 
     * Requires admin privileges
    */
    async update(req: Request, res: Response) {
        try {
            // check if the scooter_id given in the request params is UUIDv4
            if (!validate(req.params.scooter_id)) throw new CustomValidationError("O ID da scooter não é válido.", req.params.scooter_id);

            // check if the scooter_id given in the request params exists
            const scooter = await Scooter.findOne({
                where: {
                    scooter_id: req.params.scooter_id
                }
            });

            // if the scooter_id given in the request params doesn't exist, throw an error
            if (!scooter) throw new CustomValidationError("O ID da scooter não existe.", req.params.scooter_id);

            // block changes in the imutable attributes
            // imutable attributes: scooter_id, updatedAt
            if (req.body.scooter_id) throw new CustomValidationError("O atributo scooter_id não pode ser alterado manualmente.", req.body.scooter_id);

            if (req.body.updatedAt) throw new CustomValidationError("O atributo updatedAt não pode ser alterado manualmente.", req.body.updatedAt);

            // cast the request body to updateScooter
            const updateScooter = req.body;

            // check if at least one attribute was sent
            if (Object.keys(updateScooter).length === 0) throw new CustomValidationError("Nenhum atributo foi enviado.");

            // check if every parameter sent is valid
            Object.keys(updateScooter).forEach((attribute: string) => {
                const scooterAttributes = Object.keys(Scooter.getAttributes());
                if (!scooterAttributes.includes(attribute)) throw new CustomValidationError(`O atributo ${attribute} não existe.`);
            });

            // update the scooter with the scooter_id given in the request params
            await Scooter.update(updateScooter, {
                where: {
                    scooter_id: req.params.scooter_id
                },
                limit: 1,
                validate: true
            });

            res.status(200).json({message: "Scooter updated"});
        } catch (error: any) {
            handleValidationError(error, res);
        }   
    }

    /**
     * Deletes the scooter with the scooter_id given in the request params
     * 
     * Requires admin privileges
     */
    async delete(req: Request, res: Response) {
        try {
            // check if the scooter_id given in the request params is UUIDv4
            if (!validate(req.params.scooter_id)) throw new CustomValidationError("O ID da scooter não é válido.", req.params.scooter_id);

            // check if the scooter_id given in the request params exists
            const scooter = await Scooter.findOne({
                where: {
                    scooter_id: req.params.scooter_id
                }
            });


            // if the scooter_id given in the request params doesn't exist, throw an error
            if (!scooter) throw new CustomValidationError("Nenhuma scooter com o ID especificado foi encontrada.", req.params.scooter_id);

            // turn scooter_is_active to false
            await Scooter.update({
                scooter_is_active: false
            }, {
                where: {
                    scooter_id: req.params.scooter_id
                },
                limit: 1,
            });

            res.status(200).json({message: "Scooter deleted"});
        } catch (error: any) {
            handleValidationError(error, res);
        }
    }
}

export const scooterController = new ScooterController();