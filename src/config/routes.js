const router = require("express").Router();
const homeContrl = require('../controllers/homeController.js');
const cubeContrl = require('../controllers/cubeController.js');

router.use(homeContrl);
router.use(cubeContrl);

router.get('*', (req, res) => {
    res.status(404).render("404");
});

module.exports = (app) => {
    app.use(router);
};