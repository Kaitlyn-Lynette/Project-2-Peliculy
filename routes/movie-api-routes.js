// // Dependencies
// // =============================================================
var db = require('../models');
// // Routes
// // =============================================================
module.exports = function(app) {
  // If a user sends data to add a new Rec entry...

  // POST Route- Allows an author to create a recommendation
  app.post('/api/recommend', function(req, res) {
    console.log(req);
    console.log('hit the server');
    var entryRec = req.body;
    console.log('db right here',db);
    console.log('db.Movie',db.Movie);
    console.log('entryRec', entryRec);
    db.Recommend.create({
      // creates table in DB
      movieTitle: entryRec.movieTitle,
      userName: entryRec.userName,
      recommendation: entryRec.recommendation,
    }).then(function(result){
      console.log(result);
      res.json(result);
      res.end();
    }
    );
  });

};