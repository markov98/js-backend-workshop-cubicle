const router = require("express").Router();
const cubeService = require('../services/cubeService.js');

router.get('/', async (req, res) => {
    const { search, from, to } = req.query;
    console.log(req.user);
    const cubes = (await cubeService.getAll(search, from, to)).map(cube => cube.toObject());
    res.render("index", { cubes, search, from, to });
});

router.get('/about', (req, res) => {
    res.render("about");
});

router.get('/404', (req, res) => {
    res.status(404).render("404");
});

module.exports = router;