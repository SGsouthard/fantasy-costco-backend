const mongoose = require('mongoose');
const { INTEGER } = require('sequelize/dist');

const armorSchema = new mongoose.Schema({
    name: String,
    description: String,
    cost: {
        amount: Number,
        coins: String
    },
    stats: String
});

const Armor = mongoose.model("Armor", armorSchema);

module.exports = Armor;