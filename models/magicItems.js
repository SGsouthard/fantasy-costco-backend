const mongoose = require('mongoose');
const { INTEGER } = require('sequelize/dist');

const magicItemSchema = new mongoose.Schema({
    name: Text,
    description: Text,
    cost: {
        amount: INTEGER,
        coins: Text
    },
    stats: Text
});

const MagicItem = mongoose.model("MagicItem", magicItemSchema);

module.exports = MagicItem;