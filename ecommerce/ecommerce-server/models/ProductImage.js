const { DataTypes } = require("sequelize");
const sequelize = require("../connections/database");
const Product = require("./Product");

const ProductImage = sequelize.define(
  "ProductImage",
  {
    productId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: Product,
        key: "id",
      },
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },

  {
    underscored: true,
    tableName: "product_images",
    timestamps: true,
  },
);

// ProductImage.belongsTo(Product, {
//   foreignKey: "product_id",
//   as:"product",
// });

module.exports = ProductImage;
