'use strict'

var Product = require('../model/product');


function getProducts (req, res){
  console.log("---> getProducts");
  Product.find({},
    function(err, docs) {
      if(err){
          return res.status(500)
          .send("error al consultar productos");
      }
      return res.status(200)
      .send({
          products: docs
      });
    });
}

function saveProducts(req, res){
  console.log("---> saveProducts");
  var _product = new Product();
  var params = req.body;

  _product.name = params.name;
  _product.decription = params.decription;
  _product.type = params.type;
  _product.price = params.price;
  _product.ranking = params.ranking;
  _product.image = params.image;
  _product.offer = params.offer;

  _product.save(
  (err, productStored) => {
      if(err){
          return res.status(500)
          .send("error al guardar producto");
      }
      if(productStored){
          return res.status(200)
          .send({
              product: productStored
          });
      }else{
          return res.status(404)
          .send("producto no encontrado");
      }
  });
}

module.exports = {
  getProducts,
  saveProducts
}
