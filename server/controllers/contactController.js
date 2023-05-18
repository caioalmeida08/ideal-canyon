const { sequelize } = require('../database/db');
const contactModel = require('../models/contactModel');

const contactController = {
    async create(req, res) {
        try {
            console.log(req.body)
            const response = await contactModel.create(req.body);
            return res.status(201).json(response);
        } catch (error) {
            console.log(error.message)
            // remove 'Validation error: ' from error message
            error.message = error.message.split(":")[1]
            return res.status(400).json(error.message);
        }
    },

};

module.exports = contactController;