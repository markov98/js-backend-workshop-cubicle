const router = require('express').Router();
const userService = require('../services/userService');
const { isPasswordValid, isUsernameValid } = require('../middlewares/validationMiddleware');

// Register Page

router.get('/register', (req, res) => {
    res.render('user/register');
});

router.post('/register', isUsernameValid, isPasswordValid, async (req, res) => {
    try {
        const { username, password, repeatPassword } = req.body;

        await userService.register(username, password, repeatPassword);
        res.redirect('/users/login');
    } catch (err) {
        const errMessage = err.message;
        res.status(404).render('user/register', { errMessage });
    }
});

// Login Page

router.get('/login', (req, res) => {
    res.render('user/login');
});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const token = await userService.login(username, password);

        res.cookie('auth', token, { httpOnly: true });
        res.redirect('/');
    } catch (err) {
        const errMessage = err.message;
        res.status(404).render('user/login', { errMessage });
    }
});

// Logout

router.get('/logout', (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
})

module.exports = router;
