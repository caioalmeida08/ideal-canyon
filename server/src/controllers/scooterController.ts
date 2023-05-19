import { Request, Response } from "express";

import Scooter from '../models/scooterModel';

class ScooterController {
    /**
     * Returns all scooters
     */
    public async findAll(req: Request, res: Response) {
        try {
            const allScooters = await Scooter.findAll();
            res.status(200).json(allScooters);
        } catch (error) {
            res.status(500).json({message: error});
        }
    }

    /**
     * Returns details for the scooter_model_short given in the request query
     */
    public async findDetails(req: Request, res: Response) {
        try {
            await Scooter.create(req.body);
            res.status(200).json({message: "Scooter created"});
        } catch (error) {
            res.status(500).json({message: error});
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
            res.status(400).json(errorMessages);
        }
    }
    
    update(arg0: string, update: any) {
        throw new Error("Method not implemented.");
    }

}

export const scooterController = new ScooterController();