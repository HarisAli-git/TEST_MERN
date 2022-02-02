const mongoose = require('mongoose');
const Category = require('../model/category');

exports.categories_get_all = async (req, res) => {
    console.log("/MongoDB_get_categories page accessed");
    const result = await Category.find().exec();
    res.send(result);
  }; 

exports.categories_add_category = async (req, res, next) => {
   
    const category = new Category({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
    });
    
    const result = await category.save();
    res.send(result);
  };  