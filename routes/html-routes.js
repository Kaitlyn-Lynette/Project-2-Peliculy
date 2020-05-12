// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/movieview', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/movie-view.html'));
  });

  // authors route loads author-manager.html
  app.get('/newsfeed', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/newsfeed.html'));
  });

  // recommend route loads recommend.html
  app.get('/recommend', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/recommend.html'));
  });

  // search route loads search.html
  app.get('/search', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/search.html'));
  });

};
