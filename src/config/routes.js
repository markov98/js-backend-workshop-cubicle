const router = require("express").Router();
const homeContrl = require('../controllers/homeController.js');
const cubeContrl = require('../controllers/cubeController.js');
const accesrContrl = require('../controllers/accessoryController.js');

router.use(homeContrl);
router.use('/cubes', cubeContrl);
router.use('/accessories', accesrContrl);

router.get('*', (req, res) => {
    res.redirect('/404')
});

module.exports = (app) => {
    app.use(router);
};