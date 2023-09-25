const router = require("express").Router();

router.get('/create', (req, res) => {
    res.render('create');
});

router.get('/details', (req, res) => {
    res.render('details');
});

module.exports = router;