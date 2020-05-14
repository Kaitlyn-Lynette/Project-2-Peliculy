module.exports = function(sequelize, DataTypes) {
  var Recommend = sequelize.define('Recommend', {
    movieTitle: DataTypes.STRING,
    userName: DataTypes.STRING,
    recommendation: DataTypes.STRING,

    // rating
  });
  // Movie.associate = function(models) {
  //   Create the associations to recommendations
  // }
  return Recommend;
};