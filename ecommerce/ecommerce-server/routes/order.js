const express = require("express");
const checkAuthentication = require("../middlewares/checkAuthentication");
const Order = require("../models/Order");
const OrderItem = require("../models/OrderItem");
const Product = require("../models/Product");
const router = express.Router();

router.post("/api/orders", checkAuthentication, async (req, res) => {
  let order = await Order.create({
    userId: req.user.id,
    reference: "260320-" + Math.round(Math.random() * 1e9),
  });

  // req.body.order_items.forEach(async (item) => {   /// ERROR: we cannot use async await in forEach loop.
  //   let product = await Product.findByPk(item.productId);
  //   OrderItem.create({
  //     orderId: order.id,
  //     productId: item.productId,
  //     quantity: item.quantity,
  //     price: product.discountedPrice,
  //     name: product.title,
  //   });
  // });

  // for (let i = 0; index < req.body.order_items.lenght; i++) {}  //SOLUTION 1

  for (item of req.body.order_items) {
    let product = await Product.findByPk(item.productId);
    OrderItem.create({
      orderId: order.id,
      productId: item.productId,
      quantity: item.quantity,
      price: product.discountedPrice,
      productName: product.title,
    });
  }
  res.send("order created");
});

module.exports = router; // defualt export
