const express = require("express");
const checkAuthentication = require("../middlewares/checkAuthentication");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const ProductImage = require("../models/ProductImage");
const router = express.Router();

router.post("/api/carts", checkAuthentication, async (req, res) => {
  let existingCartItem = await Cart.findOne({
    where: {
      productId: req.body.productId,
      userId: req.user.id,
    },
  });

  if (existingCartItem) {
    existingCartItem.update({
      quantity: existingCartItem.quantity + 1,
    });
  } else {
    await Cart.create({
      productId: req.body.productId,
      userId: req.user.id,
      quantity: 1,
    });
  }

  res.send("");
});

router.get("/api/carts", checkAuthentication, async (req, res) => {
  let data = await Cart.findAll({
    where: {
      userId: req.user.id,
    },
    include: {
      model: Product,
      as: "product",
      include: {
        model: ProductImage,
        as: "images",
      },
    },
  });
  res.send({ data });
});

module.exports = router; // defualt export
