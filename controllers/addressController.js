const addressModel = require("../models/addressModel");

const buyController = {
    async findOne(req, res) {
        try {
            const response = await addressModel.findByPk(req.params.user_id);

            if (!req.query.scooter_id || !response) {
                res.status(404).end();
                return
            }

            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },

    async create(req, res) {
        try {
            const response = await addressModel.create(req.body);

            return res.status(201).json(response);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },
};

module.exports = buyController;
