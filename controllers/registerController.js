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
};

module.exports = registerController;
