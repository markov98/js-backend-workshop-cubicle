const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minLength: [5, 'Name must be at least 5 chars long!'],
        match: [/^[A-Za-z0-9 ]+$/ , 'Name should only contain English letters, digits and white spaces.']
    },
    description: {
        type: String,
        minLength: [20, 'Description must be at least 20 chars long.'],
        match: [/^[A-Za-z0-9 ]+$/ , 'Description should only contain English letters, digits and white spaces.']
    },
    imageUrl: {
        type: String,
        match: [/^https?:\/\//, 'Invalid image URL!']
    }
});

const Accessory = mongoose.model('Accessory', accessorySchema, 'accessories');

module.exports = Accessory;