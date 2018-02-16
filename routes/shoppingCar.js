'use strict'

var express = require('express');
var api = express.Router();

var ShoppingCar = require('../model/shoppingCar');
var ShoppingCarController = require('../controllers/shoppingCar');


//obtener carrito
api.get('', ShoppingCarController.getShoppingCar);

//Agregar al carrito
api.post('', ShoppingCarController.addProductToShoppingCar);

//Eliminar del carrito
api.delete('/:idInShoppingCar', ShoppingCarController.deleteProductFromShoppingCar);

module.exports = api;
