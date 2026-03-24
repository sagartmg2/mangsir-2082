const { Sequelize, DataTypes } = require("sequelize");
const pg = require("pg");

const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;

// const sequelize = new Sequelize("postgres://postgres:postgres@localhost:5437/postgres", {
// const sequelize = new Sequelize(`postgresql://neondb_owner:npg_7JOAth6fwQSi@ep-noisy-truth-amq4xarx-pooler.c-5.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require`, {
const sequelize = new Sequelize(`postgresql://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?sslmode=require&channel_binding=require`, {
  logging: false,
  dialectModule: pg,
});

const checkDbConnection = async () => {
  try {
    await sequelize.authenticate();
    // await sequelize.sync({ alter: true });
    // await sequelize.sync({ alter: true, force: true });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

checkDbConnection();

module.exports = sequelize; // common js

// export default sequelize // es module
