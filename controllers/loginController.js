const loginController = {
    index(req, res) {
        let data = {
            title: 'Ideal Canyon',
            styles: ['navbar', 'login'],
            navItems: [
                { title: 'Modelos', url: '/' },
                { title: 'Contatos', url: '/' },
                { title: 'Sobre nós', url: '/sobre' }]
        }

        res.render('login.ejs', data);
    },
};

module.exports = loginController;
