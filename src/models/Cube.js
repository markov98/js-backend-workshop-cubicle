const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
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
    },
    difficultyLevel: Number,
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: 'Accessory'
    }]
});

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;