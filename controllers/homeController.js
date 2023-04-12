const homeController = {
    index(req, res) {
        res.render('homeView/index.ejs');
    },
};

module.exports = homeController;
