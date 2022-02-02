const mongoose = require('mongoose');
const Product = require('../model/product');

exports.products_delete_product = async (req, res, next) => {
  const id = req.params.id;
  const result = await Product.remove({ _id: id }).exec()
  res.send(result);
};

exports.products_get_all = async (req, res) => {
    console.log("/MongoDB_get_products page accessed");

    const result = await Product.find();
    console.log(result);
    res.send(result);
};

// async (e) => {
//   const resp = await Fetch_cat_Mongo()
//   setCat(resp.data)

exports.products_get_product = async (request, res) => {
    console.log("MongoDB get product :id/ page accessed");
    const id = request.params.id;
    const result = await Product.findById(id);
    res.send(result);
};

exports.products_create_product = async (req, res, then) => {
    const product = new Product({
      _id: new mongoose.Types.ObjectId(),
      category: req.body.category,
      name: req.body.name,
      price: req.body.price,
      img_src: req.body.img_src
    });
    const result = await product.save()
    res.send(result);

  };