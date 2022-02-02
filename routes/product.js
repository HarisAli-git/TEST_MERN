const express = require('express');
const router = express.Router();

const ProductsController = require('../controller/ProductController');

// app.get("/products", (request, response) => {
//     console.log("/MongoDB_get_products page accessed");

    // ProductController.getProducts()
    
//     p_model.find().then((result) => {
//         console.log(result);
//         response.send(result);
//     });
// });

router.get("/", ProductsController.products_get_all);

router.post("/addProduct", ProductsController.products_create_product);

router.get("/:id", ProductsController.products_get_product);

router.patch("/:id", ProductsController.products_update_product);

router.delete("/:id", ProductsController.products_delete_product);

module.exports = router;