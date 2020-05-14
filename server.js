// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================

var express = require('express');
// var path = require("path");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 4044;
require('dotenv').config();
// Requiring our models for syncing
var db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static('public'));

// Routes
// =============================================================
require('./routes/movie-api-routes.js')(app);
require('./routes/html-routes.js')(app);
require('./routes/rec-routes.js')(app);
// // Here we introduce HTML routing to serve different HTML files
// // require("./app/routes/html-routes.js")(app);

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "./Public/index.html"));
//   });

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
  });
});





