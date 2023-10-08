const router = require("express").Router();
const homeContrl = require('../controllers/homeController.js');
const cubeContrl = require('../controllers/cubeController.js');
const accesrContrl = require('../controllers/accessoryController.js');
const userContrrl = require('../controllers/userController.js');

router.use(homeContrl);
router.use('/cubes', cubeContrl);
router.use('/accessories', accesrContrl);
router.use('/users', userContrrl);

router.get('*', (req, res) => {
    res.redirect('/404')
});

module.exports = (app) => {
    app.use(router);
};