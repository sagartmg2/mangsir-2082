const { DataTypes } = require("sequelize");
const sequelize = require("../connections/database");

const User = sequelize.define(
  "User",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    // email
    // passowrd
    // role
  },
  {
    underscored: true,
    tableName: "users",
    timestamps: true,
  },
);

module.exports = User;
