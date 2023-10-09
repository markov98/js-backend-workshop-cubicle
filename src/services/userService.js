const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.register = (username, password, repeatPassword) => User.create({username, password, repeatPassword});

exports.login = async (username, password) => {
    const user = await User.findOne({username});

    if (!user) {
       throw new Error('Invalid username or password!');
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Invalid username or password!');
     }

    return user;
}