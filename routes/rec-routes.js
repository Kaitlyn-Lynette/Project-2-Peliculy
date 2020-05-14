// // Dependencies
var express = require('express');
var app = express();
// // =============================================================
var db = require('../models');
// // Routes
// // =============================================================
module.exports = function(app) {
//GET route for getting all the recommendations written
  app.get('/api/recommend',function(req,res) {
    db.Recommend.findAll({})
      .then(function(dbRecommend){
        console.log('This is db recommend', dbRecommend);
        res.json(dbRecommend);
      });
  });
  // / Get all reccomendations from a specific author
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
};