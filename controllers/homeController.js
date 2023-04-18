const homeController = {
    index(req, res) {
        let data = {
            title: 'Ideal Canyon',
            styles: ['navbar_light', 'home'],
            navItems: [
                { title: 'Modelos', url: '/' },
                { title: 'Contatos', url: '/' },
                { title: 'Sobre nós', url: '/sobre' }]
        }

        res.render('index.ejs', data);
    },
};

module.exports = homeController;
