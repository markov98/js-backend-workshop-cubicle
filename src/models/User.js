const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true, 'Username is already taken!'],
        required: [true, 'Username is required!'],
        minLength: [5, 'Username must be at least 5 characters long!'],
        match: [/[A-Za-z0-9]+/, 'Username must only use Englist characters!']
    },

    password: {
        type: String,
        required: [true, 'Password is required!']
    }
});

userSchema.virtual('repeatPassword').set(function (value) {
    if (value !== this.password) {
        throw new mongoose.MongooseError('Passwords do not match!');
    }
});

userSchema.pre('save', async function () {
    this.password = await bcrypt.hash(this.password, 10);
});

const User = mongoose.model('User', userSchema);

module.exports = User;