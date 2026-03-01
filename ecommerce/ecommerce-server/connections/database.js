const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("postgres://postgres:postgres@localhost:5437/postgres", {
  logging: false,
});

const checkDbConnection = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

checkDbConnection();

module.exports = sequelize; // common js

// export default sequelize // es module
