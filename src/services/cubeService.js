const Cube = require('../models/Cube');

exports.create = async (cubeData) => await Cube.create(cubeData);

exports.getAll = async (search, from, to) => {
    let filterCubes = await Cube.find();

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

exports.getById = async (id) => await Cube.findById(id);