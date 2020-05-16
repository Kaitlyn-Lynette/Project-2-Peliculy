module.exports = function(sequelize, DataTypes) {
  var Recommend = sequelize.define('Recommend', {
    movieTitle: DataTypes.STRING,
    recommendation: DataTypes.STRING,
    userName: DataTypes.STRING,
  });
  return Recommend;
};
