const router = require('express').Router();
const accessoryService = require('../services/accessoryService');
const { isAuth } = require('../middlewares/authMiddleware.js');

router.get('/add-accessory', isAuth, (req, res) => {
    res.render('accessory/create');
});

router.post('/add-accessory', isAuth, async (req, res) => {
    const { name, description, imageUrl } = req.body;
    await accessoryService.create({ name, description, imageUrl });
    res.redirect('/');
});

module.exports = router;