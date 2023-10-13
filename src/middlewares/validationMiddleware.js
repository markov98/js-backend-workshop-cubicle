exports.isPasswordValid = (req, res, next) => {
    if (!req.body.password || req.body.password.length < 8) {
        res.send('Password must be at least 8 chars long.');
    } else {
        next();
    }
}

exports.isUsernameValid = (req, res, next) => {
    if (!req.body.username || req.body.username.length < 5) {
        res.send('Username must be at least 5 chars long.');
    } else {
        next();
    }
}

