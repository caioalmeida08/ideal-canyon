import { Request, Response } from "express";

import Scooter from '../models/scooterModel';

const controller = {
    // GET /scooter/details
    // Returns the details for the scooter_model_short in the request query
    // Example: http://localhost:5000/scooter/details?scooter_model_short=canyon-elite-scooter
    findDetails: (req: Request, res: Response) => {
        const scooter_model_short = Scooter.findAll();
        return `Details for ${scooter_model_short}`;
    }
}

export { controller };