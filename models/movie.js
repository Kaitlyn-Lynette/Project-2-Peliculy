module.exports = function(sequelize, DataTypes) {
  var Movie = sequelize.define('Movie', {
    movieTitle: DataTypes.STRING,
    recommendation: DataTypes.STRING,
    userName: DataTypes.STRING,
  });

  return Movie;
};
