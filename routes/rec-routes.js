// // Dependencies
// // =============================================================
var db = require('../models');
// // Routes
// // =============================================================
module.exports = function(app) {


  // POST route for saving a new recommendation
  app.post('/api/recommendations', function(req, res) {
    db.Recommendations.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });
};