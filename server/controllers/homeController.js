const sequelize = require('../database/db').sequelize;

const homeController = {
    index(req, res) {
        let data = {
            title: 'Ideal Canyon',
            styles: ['navbar', 'home', 'aside'],
            navItems: [
                { title: 'Modelos', url: '/' },
                { title: 'Contatos', url: '/' },
                { title: 'Sobre nós', url: '/sobre' }]
        }

        res.json(data);

    },
};

module.exports = homeController;
