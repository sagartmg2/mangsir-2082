const { DataTypes } = require("sequelize");
const sequelize = require("../connections/database");
const User = require("./User");
const ProductImage = require("./ProductImage");

const Product = sequelize.define(
  "Product",
  {
    // id:{
    //   type:DataTypes.BIGINT,
    //   autoIncrement:true,
    //   primaryKey:true
    // },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    basePrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
    },
    discountedPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false,
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

// sequalize associations
Product.hasMany(ProductImage,{
  foreignKey:"product_id",
  as:"images"
})



module.exports = Product;
