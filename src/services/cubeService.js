const cubes = [];

exports.create = () => {
    const newCube = {};

    cubes.push(newCube);
}

exports.getAll = () => {
    return [...cubes];
}