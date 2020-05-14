var db = require('../models');

// Routes
// =============================================================
module.exports = function(app) {
  // Get all recommendations
  app.get('/api/newsfeed', function(req, res) {
    db.Reccomendation.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Get a specific film
  app.get('/api/:film', function(req, res) {
    db.Reccomendation.findAll({
      where: {
        title: req.params.reccomend
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  // Get all reccomendations from a specific author
  app.get('/api/author/:author', function(req, res) {
    db.Author.findAll({
      where: {
        author: req.params.userName
      }
    }).then(function(results) {
      res.json(results);
    });
  });
};