const express = require('express');
const router = express.Router();

const CategoriesController = require('../controller/CategoryController');

// app.get("/products", (request, response) => {
//     console.log("/MongoDB_get_products page accessed");

    // ProductController.getProducts()
    
//     p_model.find().then((result) => {
//         console.log(result);
//         response.send(result);
//     });
// });

router.get("/", CategoriesController.categories_get_all);

router.post("/addCategory", CategoriesController.categories_add_category);

module.exports = router;