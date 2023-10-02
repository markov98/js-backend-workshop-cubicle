const Accessory = require('../models/Accessory');

exports.create = async (accessoryData) => await Accessory.create(accessoryData);

// TODO: Add other functions