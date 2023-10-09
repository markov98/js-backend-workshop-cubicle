const router = require('express').Router();

router.get('/register', (req, res) => {
    res.render('user/register');
});

router.post('/register', (req, res) => {
    console.log(req.body);
    res.redirect('/users/login');
});

router.get('/login', (req, res) => {
    res.render('user/login');
});

module.exports = router;
