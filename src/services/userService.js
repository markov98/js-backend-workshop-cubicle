const User = require('../models/User');
const bcrypt = require('bcrypt');
const { jwt } = require('../librery/jwt');
const { SECRET } = require('../config/constConfig');

exports.register = (username, password, repeatPassword) => User.create({ username, password, repeatPassword });

exports.login = async (username, password) => {
    const user = await User.findOne({ username });

    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error('Invalid username or password!');
    }

    const payload = {
        _id: user._id,
        username: user.username
    };

    const token = await jwt.sign(payload, SECRET, {expiresIn: '3d'});

    return token;
};