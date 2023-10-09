const User = require('../models/User');

exports.register = (username, password, repeatPassword) => User.create({username, password, repeatPassword});