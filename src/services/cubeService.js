const uniqid = require('uniqid');

const cubes = [
    {
        id: 'nwl33cln05tdp4',
        name: 'cube1',
        description: 'testing',
        imageUrl: '/test/123',
        difficultyLevel: 2
      }
];

exports.create = (cubeData) => {
    const newCube = {
        id: uniqid(),
        ...cubeData
    };

    cubes.push(newCube);

    return newCube;
}

exports.getAll = () => {
    return [...cubes];
}

exports.getById = (id) => {
    return cubes.find(cube => cube.id === id);
}