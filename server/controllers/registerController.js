const userModel = require('../models/userModel.js');
const addressModel = require('../models/addressModel.js');

const registerController = {
    async create(req, res) {
        try {
            const response = await userModel.create(req.body)
            res.status(201).send(response)
        } catch (error) {
            console.log(error)
            res.status(400).send(error.message)
        }
    },

    async update(req, res) {
        try {
            const response = await userModel.update(req.body, { where: { user_id: req.body.user_id } })
            if (response == 0) {
                res.status(400).send('Usuário não encontrado')
                return
            }
            res.status(201).send(response)
        } catch (error) {
            res.status(400).send(error.message)
        }
    },

    async delete(req, res) {
        try {
            const response = await userModel.findByPk(req.body.user_id)
            if (response == null) {
                res.status(400).send('Usuário não encontrado')
                return
            }

            response.destroy();

            res.status(201).send(response)
        } catch (error) {
            res.status(400).send(error.message)
        }
    },

    async debug(req, res) {
        try {
            const response = await userModel.findAll({ include: addressModel })

            res.status(201).send(response)
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
};

module.exports = registerController;
