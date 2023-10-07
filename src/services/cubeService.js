const Cube = require('../models/Cube');

exports.create = (cubeData) => Cube.create(cubeData);

exports.getAll = (search, from, to) => {
    let filterCubes = Cube.find();

    if (search) {
        filterCubes = filterCubes.filter((cube) =>
            cube.name.toLowerCase().includes(search.toLowerCase())
        );
    }

    if (from) {
        filterCubes = filterCubes.filter(
            (cube) => cube.difficultyLevel >= Number(from)
        );
    }

    if (to) {
        filterCubes = filterCubes.filter(
            (cube) => cube.difficultyLevel <= Number(to)
        );
    }

    return filterCubes;
}

exports.getById = (id) => Cube.findById(id).populate('accessories');

exports.attach = (accessory, cubeId) => Cube.findByIdAndUpdate(cubeId, { $push: { accessories: accessory } });