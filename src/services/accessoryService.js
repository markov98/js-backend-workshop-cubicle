const Accessory = require('../models/Accessory');

exports.create = async (accessoryData) => await Accessory.create(accessoryData);

exports.getAll = async () => await Accessory.find().lean();