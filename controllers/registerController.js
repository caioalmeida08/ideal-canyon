const uuidv4 = require('uuid').v4();
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

    register(req, res) {
        req.body.user_id = uuidv4;
        userModel.create(req.body).then((cont) => {
            res.send(cont)
        }).catch((err) => {
            res.send(err)
        })
    },

    debug(req, res) {
        userModel.findAll().then((cont) => {
            console.log(cont)
            res.send(cont)
        })
    }
};

module.exports = registerController;
