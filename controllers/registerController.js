const userModel = require('../models/userModel.js');

const registerController = {
    index(req, res) {
        let data = {
            title: 'Ideal Canyon',
            styles: ['navbar_dark', 'register'],
            navItems: [
                { title: 'Modelos', url: '/' },
                { title: 'Contatos', url: '/' },
                { title: 'Sobre nós', url: '/sobre' }]
        }

        res.render('register.ejs', data);
    },

    async create(req, res) {
        try {
            const response = await userModel.create(req.body)
            res.status(201).send(response)
        } catch (error) {
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
            const response = await userModel.findAll()
            res.status(201).send(response)
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
};

module.exports = registerController;
