import { Request, Response } from "express";

import Order from '../models/orderModel';
import CustomValidationError from "../lib/customValidationError";
import handleValidationError from "../lib/handleValidationError";
import validateRequestBody from "../lib/validateRequestBody";
import validateRequestUUID from "../lib/validateRequestUUID";
import validateIfOneExists from "../lib/validateIfOneExists";

class OrderController {

    /**
     * Returns all orders
     * 
     * Requires admin privileges
     */
    async findAll(req: Request, res: Response){
        try {
            const orders = await Order.findAll();

            res.status(200).json(orders);
        } catch (error: any) {
            handleValidationError(error, res)
        }
    }

    /**
     * Returns a single contact
     * 
     * Requires admin privileges
     */
    async findOne(req: Request, res: Response){
        try {
            // validate the request params
            validateRequestUUID(Order, req)
            
            // do the query
            const contact = await Order.findByPk(req.params.order_id, {
                attributes:
                {
                    exclude: [
                    "order_id",
                    "order_is_active",
                    "createdAt",
                    "updatedAt"
                ]
                }
            });

            // if the order_id given in the request params doesn't exist, throw an error
            if (!contact) throw new CustomValidationError("Nenhum contato com o ID especificado foi encontrado.", req.params.order_id);

            res.status(200).json(contact);
        } catch (error: any) {
            handleValidationError(error, res)
        }
    }

    async create(req: Request, res: Response){
        try {
            // validate the request body
            validateRequestBody(Order, req);

            // create the contact
            await Order.create(req.body);

            res.status(201).json({message: "Order created"});
        } catch (error: any) {
            handleValidationError(error, res)
        }
    }

    async update(req: Request, res: Response){
        try {
            // validate the request params
            validateRequestUUID(Order, req)
            
            // validate the request body
            validateRequestBody(Order, req);

            // validate if at least one instance of the order_id exists
            await validateIfOneExists(Order, req);
            
            // update the contact
            await Order.update(req.body, {
                where: {
                    order_id: req.params.order_id
                },
                limit: 1,
            });

            res.status(200).json({message: "Order updated"});
        } catch (error: any) {
            handleValidationError(error, res)
        }
    }

    async delete(req: Request, res: Response){
        try {
            // validate the request params
            validateRequestUUID(Order, req)

            // validate if at least one instance of the order_id exists
            await validateIfOneExists(Order, req);

            // turn order_is_active to false
            await Order.update({
                order_is_active: false
            }, {
                where: {
                    order_id: req.params.order_id
                },
                limit: 1
            });

            res.status(200).json({message: "Order deleted"});
        } catch (error: any) {
            handleValidationError(error, res)
        }
    }

}

export default new OrderController();