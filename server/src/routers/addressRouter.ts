import { Router } from "express";
import addressController from "../controllers/addressController";

const addressRouter = Router();

/**
 * GET /addresses/
 * 
 * returns all addresses
 * 
 * requires admin privileges
 */
addressRouter.get("/", addressController.findAll);

/**
 * GET /addresses/:address_id
 * 
 * returns address by id
 * 
 * requires admin privileges
 */
addressRouter.get("/:address_id", addressController.findOne);

/**
 * POST /addresses/
 * 
 * creates a new address
 * 
 * requires admin privileges
 */
addressRouter.post("/", addressController.create)


export default addressRouter;