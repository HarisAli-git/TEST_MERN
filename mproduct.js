const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    category: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    img_src: { type: String, required: true}

});

module.exports.Product_model = mongoose.model('Product', productSchema);