'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ShoppingCarSchema = Schema({
  product: {
      type: Schema.ObjectId, ref: 'Product'
  }
});

module.exports = mongoose.model('ShoppingCar', ShoppingCarSchema);
