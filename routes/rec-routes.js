// // Dependencies
// =============================================================
var db = require('../models');
// // Routes
// // =============================================================
module.exports = function(app) {
  app.get('/api/recommend',function(req,res) {
    db.Recommend.findAll({})
      .then(function(dbRecommend){
        res.json(dbRecommend);
      });
  });

  // POST- Allows an author to create a recommendation
  app.post('/api/recommend', function(req, res) {
    const entryRec = req.body;
    db.Recommend.create({
      movieTitle: entryRec.movieTitle,
      recommendation: entryRec.recommendation,
      userName: entryRec.userName,
    }).then(function(result){
      res.json(result);
      res.end();
    });
  });

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