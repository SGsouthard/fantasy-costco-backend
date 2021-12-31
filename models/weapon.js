const mongoose = require('mongoose');
const { INTEGER } = require('sequelize/dist');

const weaponSchema = new mongoose.Schema({
    name: String,
    description: String,
    cost: {
        amount: Number,
        coins: String
    },
    stats: {
        damageType: String,
        diceAmount: String
    },
});

const Weapon = mongoose.model("Weapon", weaponSchema);

module.exports = Weapon;