const mongoose = require('mongoose');


const bikeSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    imgurl: {
        type: String,
        required: true
    }
});



const Bike = mongoose.model('Bike', bikeSchema);

module.exports = Bike;
