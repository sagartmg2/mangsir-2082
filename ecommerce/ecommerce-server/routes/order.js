const express = require("express");
const checkAuthentication = require("../middlewares/checkAuthentication");
const Order = require("../models/Order");
const OrderItem = require("../models/OrderItem");
const Product = require("../models/Product");
const router = express.Router();
const crypto = require("crypto");

router.post("/api/orders", checkAuthentication, async (req, res) => {
  let orderReference = "260320-" + Math.round(Math.random() * 1e9);
  let order = await Order.create({
    userId: req.user.id,
    reference: orderReference,
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
  let total = 0;
  for (item of req.body.order_items) {
    let product = await Product.findByPk(item.productId);
    await OrderItem.create({
      orderId: order.id,
      productId: item.productId,
      quantity: item.quantity,
      price: product.discountedPrice,
      productName: product.title,
    });

    total += parseFloat(product.discountedPrice) * item.quantity;
  }

  const message = `total_amount=${total},transaction_uuid=${orderReference},product_code=EPAYTEST`;
  const hashInBase64 = crypto.createHmac("sha256", "8gBm/:&EnhH.1/q").update(message).digest("base64");

  let esewaPayload = {
    amount: total,
    tax_amount: 0,
    total_amount: total,
    transaction_uuid: orderReference,
    product_code: "EPAYTEST",
    product_service_charge: 0,
    product_delivery_charge: 0,
    success_url: "http://localhost:5173/order/success/",
    failure_url: "http://localhost:5173/order/failure/",
    signed_field_names: "total_amount,transaction_uuid,product_code",
    signature: hashInBase64,
  };

  res.send({
    msg: "order created",
    esewaPayload,
  });
});

module.exports = router; // defualt export
