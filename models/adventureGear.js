const mongoose = require('mongoose');
const { INTEGER } = require('sequelize/dist');

const adventureGearSchema = new mongoose.Schema({
    name: String,
    description: String,
    cost: {
        amount: Number,
        coins: String
    },
    stats: String
});

const AdventureGear = mongoose.model("AdventureGear", adventureGearSchema);

module.exports = AdventureGear;