module.exports = function(sequelize, DataTypes) {
  var Movie = sequelize.define('Movie', {
    movieTitle: DataTypes.STRING,
    recommendation: DataTypes.STRING,
    userName: DataTypes.STRING,
    // rating
  });
  // Movie.associate = function(models) {
  //   Create the associations to recommendations
  // }
  return Movie;
};
// // create model
// const Movie = sequelize.define('movie', {
//   //movie will turn into movies when searching db
//   movieTitle: Sequelize.STRING,
//   recommendation: Sequelize.STRING,
//   userName: Sequelize.STRING,
// //   rating: Sequelize.INTEGER,
// });
// Movie.sync();
// module.exports = Movie;