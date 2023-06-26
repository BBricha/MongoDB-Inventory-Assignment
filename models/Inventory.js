
const mongoose = require('mongoose')



const inventorySchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        price: {type: Number, required: true},
        inventory: {type: Number, required: true, min: 0},
        nextDelivery: {type: Date, required: true},
        deliveryAmt: {type: Number, required: true},
    },
    {timestamps: true}
);

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;