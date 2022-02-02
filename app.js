const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

const productRoutes = require('./routes/product');
const categoryRoutes = require('./routes/category');

mongoose.connect(
    "mongodb+srv://dbadmin:haris123456@GuruCluster.j8ef7.mongodb.net/Guru?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true }
  ).then(() => { console.log("Successfully Connected! to DB") }).catch((error) => { console.log("Hatchi Weeoes", error); });

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

// Routes which should handle requests
app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;

