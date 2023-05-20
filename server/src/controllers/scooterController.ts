import { Request, Response } from "express";

import Scooter from '../models/scooterModel';
import sequelize from "../database/db";
import { QueryTypes } from "sequelize";

interface returnScooterDetails {
    scooter_model_short: string,
    scooter_model: string,
    scooter_year: number,
    scooter_max_speed: number,
    scooter_max_load: number,
    scooter_weight: number,
    scooter_dim_h: number,
    scooter_dim_w: number,
    scooter_dim_l: number,
    scooter_battery_type: string,
    scooter_battery_capacity: number,
    scooter_battery_range: number,
    scooter_charging_time: number,
    scooter_charging_power: number,
    scooter_charging_voltage: string,
    scooter_charging_output: number,
    scooter_description: string,
    scooter_price: number,
    scooter_all_colors: string[] | null,
    scooter_other_models: [string, string] | null
}

class ScooterController {
    /**
     * Returns all scooters
     */
    public async findAll(req: Request, res: Response) {
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
    public async findDetails(req: Request, res: Response) {
        try {
            // get useful attributes for the scooter_model_short given in the request params
            let scooterDetails = await Scooter.findAll({
                attributes: { exclude: ['scooter_id', 'scooter_is_active', 'scooter_is_sold', 'createdAt', 'updatedAt'] },
                where: {
                    scooter_model_short: req.params.scooter_model_short as string,
                    scooter_is_active: true,
                    scooter_is_sold: false,  
                },
                limit: 1
            }) as any;

            // if no scooter was found, throw an error
            if (scooterDetails.length === 0) throw new Error(`Nenhuma scooter do modelo especificado foi encontrada. Modelo especificado: ${req.params.scooter_model_short}`).message;

            // cast the scooterDetails object to the returnScooterDetails interface
            scooterDetails = scooterDetails[0] as returnScooterDetails;

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
            scooterDetails.dataValues.scooter_all_colors = scooterAllColors;

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
            scooterDetails.dataValues.scooter_other_models = [previousScooter, nextScooter];

            res.status(200).json(scooterDetails);
        } catch (error) {
            console.log(error);
            res.status(400).json({message: error});
        }
    }

    public async create(req: Request, res: Response) {
        try {
            await Scooter.create(req.body);
            res.status(200).json({message: "Scooter created"});
        } catch (error: any) {
            const errorMessages = error.errors.map(
                (err: any) => ({message: `${err.message} Valor enviado: ${err.value}.`})
            );
            res.status(400).json({message: errorMessages});
        }
    }
    
    update(arg0: string, update: any) {
        throw new Error("Method not implemented.");
    }

}

export const scooterController = new ScooterController();