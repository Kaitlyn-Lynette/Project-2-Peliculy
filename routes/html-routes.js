// Dependencies
// =============================================================
var path = require('path');
var db = require('../models');

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads  home page
  app.get('/', function(req, res) {
    res.render('index');
  });

  // search route loads recommend.html
  app.get('/newsfeed', function(req, res) {
    db.Recommend.findAll({})
      .then(function(dbRecommend){
        var dataVal = dbRecommend.map(function(recommendobj) {
          return recommendobj.dataValues;
        });
        res.render('newsfeed',{recommends: dataVal});
      });
  });

  // recommend route loads recommend.html
  app.get('/recommend', function(req, res) {
    res.render('recommend');
  });

  // search route loads search.html
  app.get('/search', function(req, res) {
    res.render('search');
  });

};
