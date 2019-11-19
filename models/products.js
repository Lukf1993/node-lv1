const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const itemSchema = new Shema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    item: {
        type: String,
        required: true
    } 
});



module.exports = Products = mongoose.model('products', itemSchema);