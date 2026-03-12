const { DataTypes } = require("sequelize");
const sequelize = require("../connections/database");
const User = require("./User");

const Product = sequelize.define(
  "Product",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.NUMBER,
      allowNull: false,
      defaultValue: 0,
    },
    stock: {
      type: DataTypes.NUMBER,
      allowNull: false,
      defaultValue: 0,
    },
    userId: {
      type:DataTypes.BIGINT,
      allowNull:false,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    underscored: true,
    tableName: "products",
    timestamps: true,
  },
);

module.exports = Product;
