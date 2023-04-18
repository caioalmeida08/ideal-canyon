const aboutController = {
    index(req, res) {
        let data = {
            title: "Sobre nós",
            styles: ['navbar', "about"],
            navItems: [{ title: "Modelos", url: "/" }, { title: "Contatos", url: "/" }, { title: "Sobre nós", url: "/sobre" }],
        };

        res.render("about.ejs", data);
    },
};

module.exports = aboutController;
