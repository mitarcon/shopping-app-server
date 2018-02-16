'use strict'

var ShoppingCar = require('../model/shoppingCar');

function getShoppingCar (req, res){
  console.log("---> getShoppingCar");

  ShoppingCar.find({})
  .populate('product')
  .exec(
    function(err, docs) {
      if(err){
          return res.status(500)
          .send("Error al consultar carrito");
      }
      return res.status(200)
      .send({
          shoppingCar: docs
      });
    });
}

function addProductToShoppingCar (req, res){
  console.log("---> addProductToShoppingCar");

  var params = req.body;

  var _shoppingCar = new ShoppingCar();
  _shoppingCar.product = params.idProduct;

  _shoppingCar.save((err, doc) => {
      if (err)
          return res.status(500).send({
              message: "Error al agregar al carrito"
          });

      if (!doc)
          return res.status(404).send({
              message: res.__('producto no encotrado')
          });

      return res.status(200).send({
          doc
      });

  })
}

function deleteProductFromShoppingCar (req, res){
  console.log("---> deleteProductFromShoppingCar ", req.params.idInShoppingCar);

  var idInShoppingCar = req.params.idInShoppingCar;

  ShoppingCar.findOneAndRemove({
      _id: idInShoppingCar,
  }, (err, doc) => {
      if (err)
          return res.status(500).send({
              message: "Error al eliminar del carrito"
          });

      if(!doc)
          return res.status(404).send({
              message: "Producto no encontrado"
          });

      return res.status(200).send({
          message: "Producto eliminado"
      });
  });
}

module.exports = {
  getShoppingCar,
  addProductToShoppingCar,
  deleteProductFromShoppingCar
}
