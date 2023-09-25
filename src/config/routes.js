const router = require("express").Router();
const homeContrl = require('../controllers/homeController.js');
const cubeContrl = require('../controllers/cubeController.js');

router.use(homeContrl);
router.use('/cubes', cubeContrl);

router.get('*', (req, res) => {
    res.redirect('/404')
});

module.exports = (app) => {
    app.use(router);
};