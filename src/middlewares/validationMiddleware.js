exports.isPasswordValid = (req, res, next) => {
    if (!req.body.password || req.body.password.length < 6) {
        res.send('Password must be at least 6 chars long.');
    } else {
        next();
    }
}

exports.isUsernameValid = (req, res, next) => {
    if (!req.body.username || req.body.username.length < 6) {
        res.send('Username must be at least 6 chars long.');
    } else {
        next();
    }
}

