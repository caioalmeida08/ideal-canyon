import { Request, Response } from "express";

import Scooter from '../models/scooterModel';
import sequelize from "../database/db";
import { QueryTypes } from "sequelize";
import {validate} from "uuid";
import CustomValidationError from "../lib/customValidationError";
import handleValidationError from "../lib/handleValidationError";

type ReturnScooterDetails = {
    scooter_model_short?: string,
    scooter_model?: string,
    scooter_year?: number,
    scooter_max_speed?: number,
    scooter_max_load?: number,
    scooter_weight?: number,
    scooter_dim_h?: number,
    scooter_dim_w?: number,
    scooter_dim_l?: number,
    scooter_battery_type?: string,
    scooter_battery_capacity?: number,
    scooter_battery_range?: number,
    scooter_charging_time?: number,
    scooter_charging_power?: number,
    scooter_charging_voltage?: string,
    scooter_charging_output?: number,
    scooter_description?: string,
    scooter_price?: number,
    scooter_all_colors?: string[] | null,
    scooter_other_models?: [string, string] | null
}

type UpdateScooter = {
    scooter_model_short?: string,
    scooter_model?: string,
    scooter_year?: number,
    scooter_max_speed?: number,
    scooter_max_load?: number,
    scooter_weight?: number,
    scooter_dim_h?: number,
    scooter_dim_w?: number,
    scooter_dim_l?: number,
    scooter_battery_type?: string,
    scooter_battery_capacity?: number,
    scooter_battery_range?: number,
    scooter_charging_time?: number,
    scooter_charging_power?: number,
    scooter_charging_voltage?: string,
    scooter_charging_output?: number,
    scooter_description?: string,
    scooter_price?: number,
    scooter_color?: string,
}    

class ScooterController {
    /**
     * Returns all scooters
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
    async findDetails(req: Request, res: Response) {
        try {
            // get useful attributes for the scooter_model_short given in the request params
            let scooterDetails: ReturnScooterDetails = await Scooter.findAll({
                attributes: { exclude: ['scooter_id', 'scooter_is_active', 'scooter_is_sold', 'createdAt', 'updatedAt'] },
                where: {
                    scooter_model_short: req.params.scooter_model_short as string,
                    scooter_is_active: true,
                    scooter_is_sold: false,  
                },
                limit: 1
            }) as unknown as ReturnScooterDetails;

            // if no scooter was found, throw an error
            // if nothing is found, scooterDetail is an empty array
            if ((scooterDetails as ReturnScooterDetails[]).length === 0) throw new CustomValidationError("O modelo de scooter especificado não existe.", req.params.scooter_model_short);

            // convert the scooterDetails object array to a single object
            scooterDetails = (scooterDetails as ReturnScooterDetails[])[0] as ReturnScooterDetails;

            // get all available colors for the scooter_model_short given in the request query
            let scooterAllColors = await sequelize.query(
                `SELECT DISTINCT scooter_color FROM Scooter WHERE scooter_model_short = '${req.params.scooter_model_short}' AND scooter_is_active = true AND scooter_is_sold = false`,
                { type: QueryTypes.SELECT }
            ) as Object[];

            // convert the scooterAllColors array to an array of strings
            scooterAllColors = scooterAllColors.map((color: any) => color.scooter_color) as string[];

            // sort alphabetically
            scooterAllColors.sort();

            // append the colors to the scooterDetails object
            scooterDetails.scooter_all_colors = scooterAllColors as string[];

            // get the previous and the next scooter_model_short from
            // first get all scooter_model_shorts that are active and not sold
            let previousAndNextScooter = await sequelize.query(
                "SELECT DISTINCT scooter_model_short FROM Scooter WHERE scooter_is_active = true AND scooter_is_sold = false ORDER BY scooter_model_short ASC",
                { type: QueryTypes.SELECT }
            ) as Object[];

            // convert the previousAndNextScooter array to an array of strings
            previousAndNextScooter = previousAndNextScooter.map((scooter: any) => scooter.scooter_model_short) as string[];

            // get the index of the current scooter_model_short
            const currentScooterIndex = previousAndNextScooter.indexOf(req.params.scooter_model_short);

            // get the previous and the next scooter_model_short
            const previousScooter = previousAndNextScooter[currentScooterIndex - 1] || previousAndNextScooter[previousAndNextScooter.length - 1];
            const nextScooter = previousAndNextScooter[currentScooterIndex + 1] || previousAndNextScooter[0];

            // append the previous and the next scooter_model_short to the scooterDetails object
            scooterDetails.scooter_other_models = [previousScooter as string, nextScooter as string];

            res.status(200).json(scooterDetails);
        } catch (error: any) {
            handleValidationError(error, res);
        }
    }

    /**
     * Returns all scooters that are active and not sold
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
            const updateScooter: UpdateScooter = req.body;

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