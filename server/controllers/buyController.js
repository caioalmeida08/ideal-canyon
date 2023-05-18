const buyController = {
    index(req, res) {
        let data = {
            title: 'Conheça a Ideal Canyon',
            styles: ['navbar', 'buy'],
            navItems: [
            ]
        }
        res.render('buy.ejs', data);
    },
};

module.exports = buyController;
