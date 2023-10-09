const router = require('express').Router();
const userService = require('../services/userService');

router.get('/register', (req, res) => {
    res.render('user/register');
});

router.post('/register', async (req, res) => {
    try {
        const { username, password, repeatPassword } = req.body;
        await userService.register(username, password, repeatPassword);
        res.redirect('/users/login');
    } catch (err) {
        console.log(err);
    }
});

router.get('/login', (req, res) => {
    res.render('user/login');
});

module.exports = router;
