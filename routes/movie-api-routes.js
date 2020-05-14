// // Dependencies
// // =============================================================
var db = require('../models');
// // Routes
// // =============================================================
module.exports = function(app) {
  // If a user sends data to add a new Rec entry...


  app.get('/api/recommend',function(req,res) {
    db.Recommend.findAll({})
      .then(function(dbRecommend){
        // console.log('This is db recommend', dbRecommend);
        res.json(dbRecommend);
      });
  });

  //Get all reccomendations from a specific author
  app.get('/api/author/:author', function(req, res) {
    db.Recommend.findAll({
      where: {
        userName: req.params.author,
      }
    }).then(function(dbRecommend) {
      console.log(dbRecommend);
      res.json(dbRecommend);
      console.log(author);
    });
  });

  //    //Get all reccomendations from a specific author
  //   app.get('/api/title/:title', function(req, res) {
  //     db.Recommend.findAll({
  //       where: {
  //         movieTitle: req.params.title,
  //       }
  //     }).then(function(dbRecommend) {
  //       console.log(dbRecommend);
  //       res.json(dbRecommend);
  //       console.log(author);
  //     });
  //   });
  //   };

  // POST- Allows an author to create a recommendation
  app.post('/api/recommend', function(req, res) {
    console.log(req);
    console.log('hit the server');
    var entryRec = req.body;
    console.log('db right here',db);
    console.log('db.Movie',db.Recommend);
    console.log('entryRec', entryRec);
    db.Recommend.create({
      // creates table in DB
      movieTitle: entryRec.movieTitle,
      recommendation: entryRec.recommendation,
      userName: entryRec.userName,
    }).then(function(result){
      console.log(result);
      res.json(result);
      res.end();
    });
  });
};
