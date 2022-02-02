const product = require("../model/product")

exports.getAllProducts = async () => {
    const results = await product.find()
    return results
}

exports.getOneProducts = async () => {
    const results = await Product.findById(id);
    return results
}

// exports.getAllProducts = async () => {
//     const results = await product.find()
//     return results
// }