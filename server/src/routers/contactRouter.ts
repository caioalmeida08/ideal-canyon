import { Router } from "express";
import contactController from "../controllers/contactController";

const contactRouter = Router();

/**
 * GET /contacts/
 * returns all contacts
 * requires admin privileges
 */
contactRouter.get("/", contactController.findAll);

/**
 * GET /contacts/:contact_id
 * returns a contact by id
 * requires admin privileges
 */
contactRouter.get("/:contact_id", contactController.findOne);   

/**
 * POST /contacts/
 * creates a new contact
 * requires admin privileges
 */
contactRouter.post("/", contactController.create);

/**
 * PUT /contacts/:contact_id
 * updates a contact by id
 * requires admin privileges
 */
contactRouter.put("/:contact_id", contactController.update);

/**
 * DELETE /contacts/:contact_id
 * deletes a contact by id
 * requires admin privileges
 */
contactRouter.delete("/:contact_id", contactController.delete);

export default contactRouter;