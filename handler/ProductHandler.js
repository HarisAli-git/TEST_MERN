const product = require("../model/product")

exports.getAllProducts = async () => {
    const results = await product.find()
    return results
}

exports.getOneProducts = async (id) => {
    const results = await product.findById(id);
    return results
}

exports.getProductsPaginate = async (limit, skip) => {
    console.log(limit, skip);
    const results = await product.find().limit(limit).skip(skip);
    console.log(results);
    return results
}
// exports.getAllProducts = async () => {
//     const results = await product.find()
//     return results
// }