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
    email: {
      type: DataTypes.STRING, // database validation
      allowNull: false, // // database validation 
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isSeller: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    // enum
  },
  {
    underscored: true,
    tableName: "users",
    timestamps: true,
  },
);

module.exports = User;
