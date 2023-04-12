const homeController = {
    index(req, res) {
        res.render('homeView/index.ejs', { title: 'Ideal Canyon', styles: [], navItems: ['Modelos', 'Contatos', 'Sobre nós'] });
    },
};

module.exports = homeController;
