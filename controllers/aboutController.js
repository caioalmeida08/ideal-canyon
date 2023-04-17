const aboutController = {
    index(req, res) {
        res.render('aboutView/about.ejs', { title: 'Conheça a Ideal Canyon', styles: ['navbar', 'about'], navItems: [{ title: 'Modelos', url: '/' }, { title: 'Contatos', url: '/' }, { title: 'Sobre nós', url: '/sobre' }] });
    },
};

module.exports = aboutController;
