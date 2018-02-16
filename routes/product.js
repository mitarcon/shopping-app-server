'use strict'

var express = require('express');
var api = express.Router();

var Product = require('../model/product');
var ProductsController = require('../controllers/product');

//Obtener la lista de productos
api.get('',  ProductsController.getProducts);

//Guardar un nuevo producto
api.post('', ProductsController.saveProducts);

module.exports = api;
