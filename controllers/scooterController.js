const uuidv4 = require("uuid").v4();
const scooterModel = require("../models/scooterModel");

const buyController = {
    async findAll(req, res) {
        try {
            const response = await scooterModel.findAll();
            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },

    async create(req, res) {
        try {
            req.body.scooter_id = uuidv4;
            const response = await scooterModel.create(req.body);
            return res.status(201).json(response);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
};

module.exports = buyController;
