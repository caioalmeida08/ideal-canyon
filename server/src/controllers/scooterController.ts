import { Request, Response } from "express";

import Scooter from '../models/scooterModel';
import sequelize from "../database/db";
import { QueryTypes } from "sequelize";

import CustomValidationError from "../lib/customValidationError";
import handleValidationError from "../lib/handleValidationError";
import validateRequestBody from "../lib/validateRequestBody";
import validateRequestUUID from "../lib/validateRequestUUID";
import validateIfOneExists from "../lib/validateIfOneExists";

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
                `SELECT DISTINCT scooter_color FROM Scooters WHERE scooter_model_short = '${scooterModelShort}' AND scooter_is_active = true AND scooter_is_sold = false`,
                {
                type: QueryTypes.SELECT
            })

            // attatch the colors to the scooter details
            returnScooter.dataValues.scooter_all_colors = allColors.map((color: any) => color.scooter_color);
            
            // get the previous and the next scooter_model_short
            // first get all scooter_model_shorts that are active and not sold
            let allScooterModelShorts = await sequelize.query(
                `SELECT DISTINCT scooter_model_short FROM ${Scooter.tableName} WHERE scooter_is_active = true AND scooter_is_sold = false`,
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
            // validate the request body
            validateRequestBody(Scooter, req)

            // create the scooter
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
            // validate the request uuid
            validateRequestUUID(Scooter, req);

            // validate the request body
            validateRequestBody(Scooter, req);

            // validate if at least one instance of the scooter_model_short exists
            await validateIfOneExists(Scooter, req);

            // update the scooter with the scooter_id given in the request params
            await Scooter.update(req.body, {
                where: {
                    scooter_id: req.params.scooter_id
                },
                limit: 1,
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
            // Validate the request uuid
            validateRequestUUID(Scooter, req);

            // validate if at least one instance of the scooter_model_short exists
            await validateIfOneExists(Scooter, req);

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