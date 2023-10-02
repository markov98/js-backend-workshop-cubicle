const router = require('express').Router();

router.get('/add-accessory', (req, res) => {
    res.render('accessory/create');
});

module.exports = router;