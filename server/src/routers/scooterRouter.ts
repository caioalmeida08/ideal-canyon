import { Request, Response, Router } from "express";
import { controller as scooterRouter } from "../controllers/scooterRouter";

const router = Router();

// router.get('/', scooterController.findAll);
// router.get('/details', scooterController.findDetails);
// router.post('/', scooterController.create);
// router.put('/', scooterController.update);
// router.delete('/', scooterController.delete);

// GET /scooter/details
// Returns the details for the scooter_model_short in the request query
// Example: http://localhost:5000/scooter/details?scooter_model_short=canyon-elite-scooter
router.get('/details', (req: Request, res: Response) => {
    res.send(scooterRouter.findDetails(req, res));
})

export { router };