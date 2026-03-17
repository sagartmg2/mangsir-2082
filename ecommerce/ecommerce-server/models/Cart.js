const { DataTypes } = require("sequelize");
const sequelize = require("../connections/database");
const User = require("./User");
const Product = require("./Product");

const Cart = sequelize.define(
  "Cart",
  {
    productId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: Product,
        key: "id",
      },
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    underscored: true,
    tableName: "carts",
    timestamps: true,
  },
);

Cart.belongsTo(Product, {
  foreignKey: "productId",
  as: "product",
});

module.exports = Cart;
