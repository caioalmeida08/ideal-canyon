import { Router } from "express";
import {scooterController} from "../controllers/scooterController";

const scooterRouter = Router();
/**
 * GET /scooter/
 * Returns all scooters
 * Requires admin privileges
 */
scooterRouter.get('/', scooterController.findAll);

/** 
 * GET /scooter/:scooter_model_short
 * Returns details for the scooter_model_short given in the request query
 */
scooterRouter.get('/:scooter_model_short', scooterController.findDetails);

/**
 * POST /scooter/
 * Creates a scooter
 * Requires admin privileges
 */
scooterRouter.post('/', scooterController.create);

/** 
 * PUT /scooter/:scooter_id
 * Updates a scooter
 * Requires admin privileges
 */
scooterRouter.put('/:scooter_id', scooterController.update);

/**
 * DELETE /scooter/scooter_id
 * Deletes a scooter (turns scooter_is_active to false)
 * Requires admin privileges
 */
scooterRouter.delete('/:scooter_id', scooterController.delete);

export default scooterRouter;

