import { Request, Response } from "express"

import Address from "../models/addressModel"
import User from "../models/userModel";

class AddressController {
    async findAll(req: Request, res: Response) {
        try {
            const addresses = await Address.findAll();
            const users = await User.findAll();

            return res.status(200).json(addresses);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

export default new AddressController();