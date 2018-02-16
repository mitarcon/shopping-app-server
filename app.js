'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//middlewares
app.use(
    bodyParser.urlencoded(
        {
            extended: false
        }
    )
);

app.use(
    bodyParser.json()
);

// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9000');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});

//rutas
var routeProduct = require('./routes/product');
var routeShoppingCar = require('./routes/shoppingCar');

app.use('/api/product', routeProduct);
app.use('/api/shoppingcar', routeShoppingCar);


//exportar
module.exports = app;
