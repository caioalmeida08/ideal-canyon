import { Request, Response, Router } from "express";
import {scooterController} from "../controllers/scooterController";

const scooterRouter = Router();
/**
 * GET /scooter/
 * Returns all scooters
 */
scooterRouter.get('/', scooterController.findAll);

/** 
 * GET /scooter/details
 * Returns details for the scooter_model_short given in the request query
 */
scooterRouter.get('/:scooter_model_short', scooterController.findDetails);

/**
 * POST /scooter/
 * Creates a scooter
 */
scooterRouter.post('/', scooterController.create);

/** 
 * PUT /scooter/
 * Updates a scooter
 */
scooterRouter.put('/', scooterController.update);

/**
 * DELETE /scooter/
 * Deletes a scooter
 */
// scooterRouter.delete('/', scooterController.delete);

export default scooterRouter;

