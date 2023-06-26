
const Inventory = require('../models/Inventory');

const postInventories = async (req, res) => {
    let databaseResponse = await Inventory.create(req.body);
    res.send(databaseResponse)
};


const getInventories =  async (req, res) => {
    let databaseResponse = await Inventory.find();
    res.send(databaseResponse)
}





module.exports = {
    getInventories,
    postInventories
}