'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = Schema({
  name: String,
  decription: String,
  type: String,
  price: Number,
  ranking: Number,
  image: String,
  offer: Boolean
});

module.exports = mongoose.model('Product', ProductSchema);
