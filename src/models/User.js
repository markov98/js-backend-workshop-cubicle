const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

userSchema.virtual('repeatPassword').set(value => {
    if (value !== this.password) {
        throw new mongoose.MongooseError('Passwords do not match!');
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;