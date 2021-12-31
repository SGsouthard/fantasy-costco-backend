const mongoose = require('mongoose');
const { INTEGER } = require('sequelize/dist');

const magicItemSchema = new mongoose.Schema({
    name: String,
    description: String,
    cost: {
        amount: Number,
        coins: String
    },
    stats: String
});

const MagicItem = mongoose.model("MagicItem", magicItemSchema);

module.exports = MagicItem;