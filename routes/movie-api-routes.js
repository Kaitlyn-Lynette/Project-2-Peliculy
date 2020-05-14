// // Dependencies
// // =============================================================
var db = require('../models');
// // Routes
// // =============================================================
module.exports = function(app) {
  // If a user sends data to add a new Rec entry...


  //Allowing to look up all posts by users
  // app.get('/api/authors', function(req, res) {
  //   // Here we add an "include" property to our options in our findAll query
  //   // We set the value to an array of the models we want to include in a left outer join
  //   // In this case, just db.Post
  //   db.Author.findAll({
  //     include: [db.Recommendation]
  //   }).then(function(dbAuthor) {
  //     res.json(dbAuthor);
  //   });
  // });

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
    }
    );
  });


};