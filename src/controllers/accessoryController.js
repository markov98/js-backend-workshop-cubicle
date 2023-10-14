const router = require('express').Router();
const accessoryService = require('../services/accessoryService');
const { isAuth } = require('../middlewares/authMiddleware.js');

router.get('/add-accessory', isAuth, (req, res) => {
    res.render('accessory/create');
});

router.post('/add-accessory', isAuth, async (req, res) => {
    try {
        const { name, description, imageUrl } = req.body;
        await accessoryService.create({ name, description, imageUrl });
        res.redirect('/');
    } catch (err) {
        const errMessage = err.message;
        res.status(404).render('accessory/create', { errMessage });
    }
});

module.exports = router;