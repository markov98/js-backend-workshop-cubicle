const uniqid = require('uniqid');

const cubes = [
    {
        id: 'nwl33cln05tdp4',
        name: 'cube1',
        description: 'testing',
        imageUrl: '/details/5c3a6888f78d6638ec8fdad6',
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