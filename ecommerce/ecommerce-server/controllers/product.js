const Product = require("../models/Product");
const ProductImage = require("../models/ProductImage");

const fetchProducts = async (req, res) => {
  let data = await Product.findAll({
    include: {
      as: "images",
      model: ProductImage,
    },
  });
  res.send({
    data,
  });
};

const createProduct = async (req, res) => {
  let product = await Product.create({
    title: req.body.title,
    basePrice: req.body.basePrice,
    discountedPrice: req.body.discountedPrice,
    description: req.body.description,
    category: req.body.category,
    stock: req.body.stock,
    userId: req.user.id,
  });

  req.files.map((el) => {
    ProductImage.create({
      productId: product.id,
      path: el.path,
    });
  });

  res.send({ data: product });
};

module.exports = {
  createProduct,
  fetchProducts,
};
