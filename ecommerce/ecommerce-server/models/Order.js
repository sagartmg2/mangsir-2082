const { DataTypes } = require("sequelize");
const sequelize = require("../connections/database");
const User = require("./User");

const Order = sequelize.define(
  "Order",
  {
    // id,
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    paymentStatus: {
      type: DataTypes.ENUM,
      values: ["pending", "completed", "rejected"],
      defaultValue: "pending",
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM,
      values: ["pending", "accepted", "rejected", "partially-accepted"],
      defaultValue: "pending",
      allowNull: false,
    },
    reference: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // name
    // address
    // delivery charge...
  },
  {
    underscored: true,
    tableName: "orders",
    timestamps: true,
  },
);

// sequalizie  model associatons

// Order.hasMany(OrderItem, {
//   foreignKey: "orderItem",
//   as: "items",
// });

module.exports = Order;
