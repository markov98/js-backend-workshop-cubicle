const Accessory = require('../models/Accessory');

exports.create = async (accessoryData) => await Accessory.create(accessoryData);

exports.getAll = async () => await Accessory.find().lean();

exports.getWithoutOwned = async (accessoryIds) => await Accessory.find({ _id: { $nin: accessoryIds } }).lean();