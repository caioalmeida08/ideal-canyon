import { Request, Response } from "express";

const controller = {
    // GET /scooter/details
    // Returns the details for the scooter_model_short in the request query
    // Example: http://localhost:5000/scooter/details?scooter_model_short=canyon-elite-scooter
    findDetails: (req: Request, res: Response) => {
        const scooter_model_short = req.query.scooter_model_short;
        return `Details for ${scooter_model_short}`;
    }
}

export { controller };