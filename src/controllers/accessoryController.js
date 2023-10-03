const router = require('express').Router();
const accessoryService = require('../services/accessoryService');

router.get('/add-accessory', (req, res) => {
    res.render('accessory/create');
});

router.post('/add-accessory', async (req, res) => {
    const { name, descreiption, imageUrl } = req.body;
    await accessoryService.create({ name, descreiption, imageUrl });
    res.redirect('/');
});

module.exports = router;