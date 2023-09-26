const router = require("express").Router();
const cubeService = require('../services/cubeService.js')

router.get('/create', (req, res) => {
    console.log(cubeService.getAll());
    res.render('create');
});

router.post('/create', (req, res) => {
    const {name, description, difficultyLevel} =  req.body;
    cubeService.create({name, description, difficultyLevel: Number(difficultyLevel)})
    res.redirect('/');
});

router.get('/details', (req, res) => {
    res.render('details');
});

module.exports = router;