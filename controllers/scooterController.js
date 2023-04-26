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
};

module.exports = buyController;
