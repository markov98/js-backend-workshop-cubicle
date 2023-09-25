const router = require("express").Router();

router.get('/', (req, res) => {
    res.render("index");
});

router.get('*', (req, res) => {
    res.status(404).render("404");
});

module.exports = (app) => {
    app.use(router);
};