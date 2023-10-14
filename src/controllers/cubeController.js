const router = require("express").Router();
const cubeService = require('../services/cubeService.js');
const accessoryService = require('../services/accessoryService.js');
const { difficultyLevelOptionsViewData } = require('../utils/viewData.js');
const { isAuth } = require('../middlewares/authMiddleware.js');

// Create Page

router.get('/create', isAuth, (req, res) => {
    res.render('cubes/create');
});

router.post('/create', isAuth, async (req, res) => {
    try {
        const { name, description, imageUrl, difficultyLevel } = req.body;
        await cubeService.create({ name, description, imageUrl, difficultyLevel: Number(difficultyLevel), owner: req.user });
        res.redirect('/');
    } catch (err) {
        const errMessage = err.message;
        res.status(404).render('cubes/create', { errMessage });
    }
});

// Details Page

router.get('/:cubeId/details', async (req, res) => {
    const cube = await cubeService.getById(req.params.cubeId).lean();

    if (!cube) {
        res.redirect('/404')
    }

    const hasAccessories = cube.accessories?.length > 0;
    const isOwner = cube.owner?.toString() === req.user?._id;

    res.render('cubes/details', { cube, hasAccessories, isOwner });
});

// Attach accessory page

router.get('/:cubeId/attach-accessory', async (req, res) => {
    const cube = await cubeService.getById(req.params.cubeId).populate();
    const accessories = await accessoryService.getWithoutOwned(cube.accessories).lean();
    const hasAccessory = accessories.length > 0;

    if (cube.owner?.toString() !== req.user?._id) {
        return res.redirect('/404');
    }

    res.render('accessory/attach', { accessories, hasAccessory, cube });
});

router.post('/:cubeId/attach-accessory', async (req, res) => {
    const { accessory } = req.body;
    const { cubeId } = req.params;
    const cube = await cubeService.getById(cubeId).lean();

    if (cube.owner?.toString() !== req.user?._id) {
        return res.redirect('/404');
    }

    await cubeService.attach(accessory, cubeId);

    res.redirect(`/cubes/${cubeId}/details`);
});

// Edit Page

router.get('/:cubeId/edit', async (req, res) => {
    const cube = await cubeService.getById(req.params.cubeId).lean();
    const options = difficultyLevelOptionsViewData(cube.difficultyLevel);

    if (cube.owner?.toString() !== req.user?._id) {
        return res.redirect('/404');
    }

    res.render('cubes/edit', { cube, options });
});

router.post('/:cubeId/edit', async (req, res) => {
    const { cubeId } = req.params;
    const cube = await cubeService.getById(cubeId).lean();

    try {
        const { name, description, imageUrl, difficultyLevel } = req.body;

        if (!cube || cube.owner?.toString() !== req.user?._id) {
            return res.redirect('/404');
        }

        await cubeService.update(cubeId, { name, description, imageUrl, difficultyLevel: Number(difficultyLevel) });

        res.redirect(`/cubes/${cubeId}/details`);
    } catch (err) {
        const errMessage = err.message;
        const options = difficultyLevelOptionsViewData(cube.difficultyLevel);
        res.status(404).render('cubes/edit', { errMessage, cube, options });
    }
});

// Delete Page

router.get('/:cubeId/delete', async (req, res) => {
    const cube = await cubeService.getById(req.params.cubeId).lean();
    const options = difficultyLevelOptionsViewData(cube.difficultyLevel);

    if (cube.owner?.toString() !== req.user?._id) {
        return res.redirect('/404');
    }

    res.render('cubes/delete', { cube, options });
});

router.post('/:cubeId/delete', async (req, res) => {
    const cube = await cubeService.getById(req.params.cubeId).lean();

    if (cube.owner?.toString() !== req.user?._id) {
        return res.redirect('/404');
    }

    await cubeService.delete(req.params.cubeId);

    res.redirect("/");
});

module.exports = router;