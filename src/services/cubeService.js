const Cube = require('../models/Cube');

exports.create = (cubeData) => Cube.create(cubeData);

exports.getAll = (search, from, to) => {
    let query = Cube.find();

    if (search) {
        query = query.where('name', new RegExp(search, 'i'));
    }

    if (from) {
        query = query.where('difficultyLevel').gte(Number(from));
    }

    if (to) {
        query = query.where('difficultyLevel').lte(Number(to));
    }

    const filteredCubes = query.exec();
    return filteredCubes;
}

exports.getById = (id) => Cube.findById(id).populate('accessories');

exports.attach = (accessory, cubeId) => Cube.findByIdAndUpdate(cubeId, { $push: { accessories: accessory } });