const { DataTypes } = require("sequelize");
const sequelize = require("../connections/database");
const Product = require("./Product");
const Order = require("./Order");

const OrderItem = sequelize.define(
  "OrderItem",
  {
    orderId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: Order,
        key: "id",
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    productId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: Product,
        key: "id",
      },
    },
    price: {
      type: DataTypes.DECIMAL(10, 2), // snapshot : price at that time of order.
      defaultValue: 0,
    },
    productName: {
      // snapshot:
      type: DataTypes.STRING,
      defaultValue: 0,
    },
    status: {
      type: DataTypes.ENUM,
      values: ["pending", "accepted", "shipment", "rejected", "partially-accepted"],
      defaultValue: "pending",
      allowNull: false,
    },
  },
  {
    underscored: true,
    tableName: "order_items",
    timestamps: true,
  },
);

// sequalizie  model associatons

// OrderItem.belongsTo(Order, {
//   foreignKey: "orderId",
//   as: "order",
// });

module.exports = OrderItem;
