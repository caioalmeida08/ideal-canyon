import { Request, Response } from "express";

import Scooter from '../models/scooterModel';

class ScooterController {
    // GET /scooter/details
    // Returns the details for the scooter_model_short in the request query
    // Example: http://localhost:5000/scooter/details?scooter_model_short=canyon-elite-scooter
    public async findDetails(req: Request, res: Response) {
        try {
            await Scooter.create(req.body);
            res.status(200).json({message: "Scooter created"});
        } catch (error) {
            res.status(500).json({message: error});
        }
    }
}

export const scooterController = new ScooterController();