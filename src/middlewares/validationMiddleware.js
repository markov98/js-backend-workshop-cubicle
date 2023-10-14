exports.isPasswordValid = (req, res, next) => {
    if (!req.body.password || req.body.password.length < 8) {
        const errMessage = 'Password must be at least 8 characters long.';
        res.status(404).render('user/register', { errMessage });
    } else {
        next();
    }
}

exports.isUsernameValid = (req, res, next) => {
    if (!req.body.username || req.body.username.length < 5) {
        const errMessage = 'Username must be at least 5 characters long.';
        res.status(404).render('user/register', { errMessage });
    } else {
        next();
    }
}

