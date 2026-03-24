const { Sequelize, DataTypes } = require("sequelize");
const pg = require("pg");
const sequelize = new Sequelize("postgres://postgres:postgres@localhost:5437/postgres", {
  logging: false,
  dialectModule: pg,
});

const checkDbConnection = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    // await sequelize.sync({ alter: true, force: true });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

checkDbConnection();

module.exports = sequelize; // common js

// export default sequelize // es module
