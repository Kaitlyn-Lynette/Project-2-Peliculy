const Sequelize = require('sequelize');
const sequelize = require('./connection.js');

// create model
const Movie = sequelize.define('movie', {
  //movie will turn into movies when searching db
  movieTitle: Sequelize.STRING,
  recommendation: Sequelize.STRING,
  userName: Sequelize.STRING,
//   rating: Sequelize.INTEGER,
});

Movie.sync();

module.exports = Movie;
