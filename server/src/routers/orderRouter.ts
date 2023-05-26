import { Router } from "express";
import orderController from "../controllers/orderController";

const orderRouter = Router();

/**
 * GET /order/
 * returns all contacts
 * requires admin privileges
 */
orderRouter.get("/", orderController.findAll);

/**
 * GET /order/:order_id
 * returns an order by id
 * requires admin privileges
 */
orderRouter.get("/:order_id", orderController.findOne);   

/**
 * POST /order/
 * creates a new contact
 * requires admin privileges
 */
orderRouter.post("/", orderController.create);

/**
 * PUT /order/:order_id
 * updates an order by id
 * requires admin privileges
 */
orderRouter.put("/:order_id", orderController.update);

/**
 * DELETE /order/:order_id
 * deletes an order by id
 * requires admin privileges
 */
orderRouter.delete("/:order_id", orderController.delete);

export default orderRouter;