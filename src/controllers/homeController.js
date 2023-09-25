const router = require("express").Router();

router.get('/', (req, res) => {
    res.render("index");
});

router.get('/about', (req, res) => {
    res.render("about");
});

router.get('/404', (req, res) => {
    res.status(404).render("404");
});

module.exports = router;