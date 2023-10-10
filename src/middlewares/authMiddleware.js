const { jwt } = require('../librery/jwt');
const { SECRET } = require('../config/constConfig');

exports.auth = async (req, res, next) => {
    const token = req.cookies['auth'];

    if (token) {
        try {
            const decodedToken = await jwt.verify(token, SECRET);
            req.user = decodedToken;
            next();
        } catch (err) {
            console.log(err);
            res.cookieClear('auth');
            res.redirect('/users/login');
        }
    } else {
        next();
    }
}