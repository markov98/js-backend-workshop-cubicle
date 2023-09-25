const router = require("express").Router();
const homeContrl = require('../controllers/homeController.js');

router.use(homeContrl);

router.get('*', (req, res) => {
    res.status(404).render("404");
});

module.exports = (app) => {
    app.use(router);
};