const router = require("express").Router();
const cubeService = require('../services/cubeService.js');
const accessoryService = require('../services/accessoryService.js');

router.get('/create', (req, res) => {
    res.render('cubes/create');
});

router.post('/create', async (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;
    await cubeService.create({ name, description, imageUrl, difficultyLevel: Number(difficultyLevel), owner: req.user });
    res.redirect('/');
});

router.get('/:cubeId/details', async (req, res) => {
    const cube = await cubeService.getById(req.params.cubeId).lean();

    if (!cube) {
        res.redirect('/404')
    }

    const hasAccessories = cube.accessories?.length > 0;

    res.render('cubes/details', { cube, hasAccessories });
});

router.get('/:cubeId/attach-accessory', async (req, res) => {
    const cube = await cubeService.getById(req.params.cubeId).populate();
    const accessories = await accessoryService.getWithoutOwned(cube.accessories).lean();
    const hasAccessory = accessories.length > 0;

    res.render('accessory/attach', { accessories, hasAccessory, cube });
});

router.post('/:cubeId/attach-accessory', async (req, res) => {
    const { accessory } = req.body;
    const { cubeId } = req.params;

    await cubeService.attach(accessory, cubeId);

    res.redirect(`/cubes/${cubeId}/details`);
});

router.get('/:cubeId/edit', async (req, res) => {
    const cube = await cubeService.getById(req.params.cubeId).lean();

    res.render('cubes/edit', { cube });
});

router.get('/:cubeId/delete', (req, res) => {
    res.render('cubes/delete');
});

module.exports = router;