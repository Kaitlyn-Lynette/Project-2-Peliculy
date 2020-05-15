// // Dependencies
// =============================================================
var db = require('../models');
// // Routes
// // =============================================================
module.exports = function(app) {

  app.get('/api/author/:author', function(req, res) {
    db.Recommend.findAll({
      where: {
        userName: req.params.author,
      }
    }).then(function(dbRecommend) {
      console.log(dbRecommend);
      res.json(dbRecommend);
    });
  });

  app.get('/api/title/:title', function(req, res) {
    db.Recommend.findAll({
      where: {
        movieTitle: req.params.title,
      }
    }).then(function(dbRecommend) {
      console.log(dbRecommend);
      res.json(dbRecommend);
    });
  });
};