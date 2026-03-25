//  modal associalations.

const Cart = require("./Cart");
const Product = require("./Product");
const ProductImage = require("./ProductImage");

Cart.belongsTo(Product, {
  foreignKey: "productId",
  as: "product",
});


Product.hasMany(ProductImage,{
  foreignKey:"product_id",
  as:"images"
})

