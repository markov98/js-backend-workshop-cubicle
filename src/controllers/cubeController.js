const router = require("express").Router();

router.get('/cube', (req, res) => {
    res.send("Hello!");
});

module.exports = router;