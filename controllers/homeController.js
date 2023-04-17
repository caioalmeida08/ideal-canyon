const homeController = {
    index(req, res) {
        res.render('homeView/index.ejs', { title: 'Ideal Canyon', styles: ['navbar_light', 'home'], navItems: [{ title: 'Modelos', url: '/' }, { title: 'Contatos', url: '/' }, { title: 'Sobre nós', url: '/sobre' }] });
    },
};

module.exports = homeController;
