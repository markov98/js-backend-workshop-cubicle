const Cube = require('../models/Cube');

const cubes = [
    {
        id: 'nwl33cln05tdp4',
        name: 'cube1',
        description: 'testing',
        imageUrl: '/test/123',
        difficultyLevel: 2
    }
];

exports.create = async (cubeData) => {
    await Cube.create(cubeData);
}

exports.getAll = (search, from, to) => {
    let filterCubes = [...cubes];

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

exports.getById = (id) => {
    return cubes.find(cube => cube.id === id);
}