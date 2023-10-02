const router = require("express").Router();
const cubeService = require('../services/cubeService.js');

router.get('/create', (req, res) => {
    res.render('cubes/create');
});

router.post('/create', async (req, res) => {
    const {name, description, imageUrl, difficultyLevel} =  req.body;
    await cubeService.create({name, description, imageUrl, difficultyLevel: Number(difficultyLevel)});
    res.redirect('/');
});

router.get('/details/:id', async (req, res) => {
    const cubeId = req.params.id;
    const cube = await cubeService.getById(cubeId);

    if (!cube) {
        res.redirect('/404')
    }

    res.render('cubes/details', {cube});
});

module.exports = router;