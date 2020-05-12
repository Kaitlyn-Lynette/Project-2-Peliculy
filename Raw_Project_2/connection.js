// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Requiring mysql package
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "movies_DB",
  "root",
  "Physics212!",
  {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });

// Exporting our connection
module.exports = sequelize;
