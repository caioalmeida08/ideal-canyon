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
            const response = await scooterModel.create(req.body);
            return res.status(201).json(response);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },

    async update(req, res) {
        try {
            const response = await scooterModel.update(req.body, { where: { scooter_id: req.body.scooter_id } });

            if (response == 0) {
                res.status(400).send('Usuário não encontrado')
                return
            }

            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },

    async delete(req, res) {
        try {
            const response = await scooterModel.findByPk(req.body.scooter_id);

            if (response == null) {
                res.status(400).send('Scooter não encontrada')
                return
            }

            response.destroy();

            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
};

module.exports = buyController;
