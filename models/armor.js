const mongoose = require('mongoose');
const { INTEGER } = require('sequelize/dist');

const armorSchema = new mongoose.Schema({
    name: Text,
    description: Text,
    cost: {
        amount: INTEGER,
        coins: Text
    },
    stats: Text
});

const Armor = mongoose.model("Armor", armorSchema);

module.exports = Armor;