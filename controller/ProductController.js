const mongoose = require('mongoose');
const { getAllProducts } = require('../handler/ProductHandler');
const Product = require('../model/product');

exports.products_delete_product = async (req, res, next) => {
  const id = req.params.id;
  const result = await Product.remove({ _id: id }).exec()
  res.send(result);
};

exports.products_get_all = async (req, res) => {
  try{
  console.log("/MongoDB_get_products page accessed");
  // let {page, size} = req.query;
  if (!page)
  {
    page = 1;
  }
  if (!size)
  {
    size = 2;
  }

  const limit = parseInt(2);
  const skip = (1 - 1) * 2;

  const result = await product.find().limit(limit).skip(skip);
  res.send({
    page,
    size,
    data: result,
  });

  }
  catch (error) {
    res.sendStatus(500).send(error.message);
  }
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