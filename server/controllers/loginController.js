const loginController = {
    index(req, res) {
        let data = {
            title: 'Ideal Canyon',
            styles: ['navbar_dark', 'login'],
            navItems: [
                { title: 'Modelos', url: '/' },
                { title: 'Contatos', url: '/' },
                { title: 'Sobre nós', url: '/sobre' },
                { title: 'Cadastre-se', url: '/cadastrar' }]
        }

        res.render('login.ejs', data);
    },
};

module.exports = loginController;
