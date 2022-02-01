const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const p_collection = require("./mproduct");
const p_model = p_collection.Product_model;

const c_collection = require("./mcategories");
const c_model = c_collection.Category_model;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
  });

  mongoose.connect(
    "mongodb+srv://dbadmin:haris123456@GuruCluster.j8ef7.mongodb.net/Guru?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true }
).then(() => { console.log("Successfully Connected! to DB") }).catch((error) => { console.log("Hatchi Weeoes", error); });

app.get("/products", (request, response) => {
  console.log("/MongoDB_get_products page accessed");
  
  p_model.find().then((result) => {
      console.log(result);
      response.send(result);
  });
});

app.get("/categories", (request, response) => {
  console.log("/MongoDB_get_categories page accessed");
  c_model.find()
  .exec().then((result) => {
      console.log(result);
      response.send(result);
  });
});

app.get("/:id", (request, res, next) => {
  console.log("MongoDB get product :id/ page accessed");
  const id = request.params.id;
  p_model.findById(id).then(id)
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json({
            product: doc,
            request: {
                type: 'GET',
                url: 'http://localhost:3000/products'
            }
        });
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

app.patch("/:id", (req, res, next) => {
  const id = req.params.id;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Product.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
          message: 'Product updated',
          request: {
              type: 'GET',
              url: 'http://localhost:3000/products/' + id
          }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

app.delete("/:cid", (req, res, next) => {
  c_model.findById(req.params.cid)
    .then(category => {
      if (!category) {
        return res.status(404).json({
          message: "Category not found"
        });
      }
      else
      {
        console.log(p_model.remove({ category: category.name })
        .exec()
        .then(result => {
          res.status(200).json({
              message: 'Product deleted',
              request: {
                  type: 'POST',
                  url: 'http://localhost:3000/products',
                  body: { category: 'String', name: 'String', price: 'Number' }
              }
          });
        })
        );
      }
})});

app.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  p_model.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
          message: 'Product deleted',
          request: {
              type: 'POST',
              url: 'http://localhost:3000/products',
              body: { category: 'String', name: 'String', price: 'Number' }
          }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

app.post("/addCategory", (req, res, next) => {
  const category = new c_model({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
  });
  category
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Created Category successfully",
        createdCategory: {
            name: result.name,
            _id: result._id,
            request: {
                type: 'GET',
                url: "http://localhost:3000/categories/" + result._id
            }
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

app.post("/addProduct", (req, res, next) => {
  const product = new p_model({
    _id: new mongoose.Types.ObjectId(),
    category: req.body.category,
    name: req.body.name,
    price: req.body.price,
    img_src: req.body.img_src
  });
  product
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Created product successfully",
        createdProduct: {
            name: result.name,
            price: result.price,
            _id: result._id,
            request: {
                type: 'GET',
                url: "http://localhost:3000/products/" + result._id
            }
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

app.listen(3000, () => {
    console.log("Server started: Listening at port 3000");
});