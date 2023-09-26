const router = require("express").Router();
const cubeService = require('../services/cubeService.js')

router.get('/create', (req, res) => {
    console.log(cubeService.getAll());
    res.render('create');
});

router.post('/create', (req, res) => {
    cubeService.create(req.body);
    res.redirect('/');
});

router.get('/details', (req, res) => {
    res.render('details');
});

module.exports = router;