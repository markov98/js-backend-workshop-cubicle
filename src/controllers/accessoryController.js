const router = require('express').Router();
const accessoryService = require('../services/accessoryService');

router.get('/add-accessory', (req, res) => {
    res.render('accessory/create');
});

router.post('/add-accessory', async (req, res) => {
    await accessoryService.create(req.body);
    res.redirect('/');
});

module.exports = router;