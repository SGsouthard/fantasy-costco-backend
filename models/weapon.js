const mongoose = require('mongoose');
const { INTEGER } = require('sequelize/dist');

const weaponSchema = new mongoose.Schema({
    name: Text,
    description: Text,
    cost: {
        amount: INTEGER,
        coins: Text
    },
    stats: {
        damageType: Text,
        diceAmount: Text
    },
});

const Weapon = mongoose.model("Weapon", weaponSchema);

module.exports = Weapon;