const express = require("express");
const checkAuthentication = require("../middlewares/checkAuthentication");
const Order = require("../models/Order");
const OrderItem = require("../models/OrderItem");
const Product = require("../models/Product");
const router = express.Router();
const crypto = require("crypto");
const axios = require("axios");

router.post("/api/orders", checkAuthentication, async (req, res) => {
  let orderReference = "260320-" + Math.round(Math.random() * 1e9);
  let order = await Order.create({
    userId: req.user.id,
    reference: orderReference,
    paymentType: req.body.paymentType,
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
  for (item of req.body.orderItems) {
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

  let responseBody = {
    msg: "order created",
  };

  if (req.body.paymentType == "esewa") {
    const message = `total_amount=${total},transaction_uuid=${orderReference},product_code=EPAYTEST`;
    const hashInBase64 = crypto.createHmac("sha256", process.env.ESEWA_SECRET).update(message).digest("base64");

    let esewaPayload = {
      amount: total,
      tax_amount: 0,
      total_amount: total,
      transaction_uuid: orderReference,
      product_code: "EPAYTEST",
      product_service_charge: 0,
      product_delivery_charge: 0,
      success_url: `${process.env.CLIENT_URL}/order/success/`,
      failure_url: `${process.env.CLIENT_URL}/order/failure/`,
      signed_field_names: "total_amount,transaction_uuid,product_code",
      signature: hashInBase64,
      esewa_url: process.env.ESEWA_URL,
    };
    responseBody.esewaPayload = esewaPayload;
  }

  res.send(responseBody);
});

router.post("/api/orders-verification", checkAuthentication, async (req, res) => {
  let token = req.body.token;
  const base64ToBytes = (base64) => Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
  const decodedUnicode = new TextDecoder().decode(base64ToBytes(token));

  let esewa_payload = JSON.parse(decodedUnicode);

  let verificationResponse = await axios.get(`https://rc.esewa.com.np/api/epay/transaction/status/?product_code=EPAYTEST&total_amount=${esewa_payload.total_amount}&transaction_uuid=${esewa_payload.transaction_uuid}`);

  let { status, transaction_uuid } = verificationResponse.data;

  if (status == "COMPLETE") {
    let order = await Order.findOne({
      where: {
        reference: transaction_uuid,
      },
    });

    await order.update({
      paymentStatus: "completed",
    });

    res.send({ mesage: "verified" });
  } else {
    res.status(400).send({ message: "failed" });
  }
});

module.exports = router; // defualt export
