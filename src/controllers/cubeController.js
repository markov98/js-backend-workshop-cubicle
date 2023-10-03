const router = require("express").Router();
const cubeService = require('../services/cubeService.js');
const accessoryService = require('../services/accessoryService.js');

router.get('/create', (req, res) => {
    res.render('cubes/create');
});

router.post('/create', async (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;
    await cubeService.create({ name, description, imageUrl, difficultyLevel: Number(difficultyLevel) });
    res.redirect('/');
});

router.get('/:cubeId/details', async (req, res) => {
    const cube = await cubeService.getById(req.params.cubeId);

    if (!cube) {
        res.redirect('/404')
    }

    res.render('cubes/details', { cube });
});

router.get('/:cubeId/attach-accessory', async (req, res) => {
    const accessories = await accessoryService.getAll();
    const cube = await cubeService.getById(req.params.cubeId);
    const hasAccessory = accessories.length > 0;

    res.render('accessory/attach', { accessories, hasAccessory, cube });
});

router.post('/:cubeId/attach-accessory', async (req, res) => {
    const { accessory } = req.body;
    const { cubeId } = req.params;

    await cubeService.attach(accessory, cubeId);

    res.redirect(`/cubes/${cubeId}/details`);
});

module.exports = router;