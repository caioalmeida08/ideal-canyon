import { Router } from "express";
import addressController from "../controllers/addressController";

const addressRouter = Router();

/**
 * GET /addresses/
 * returns all addresses
 * requires admin privileges
 */
addressRouter.get("/", addressController.findAll);

export default addressRouter;