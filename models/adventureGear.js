const mongoose = require('mongoose');
const { INTEGER } = require('sequelize/dist');

const adventureGearSchema = new mongoose.Schema({
    name: Text,
    description: Text,
    cost: {
        amount: INTEGER,
        coins: Text
    },
    stats: Text
});

const AdventureGear = mongoose.model("AdventureGear", adventureGearSchema);

module.exports = AdventureGear;