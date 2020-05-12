module.exports = function(sequelize, DataTypes) {
  var Recommendation = sequelize.define('Recommendation', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });
  Recommendation.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Recommendation.belongsTo(models.Author, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Recommendation;
};