// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

//Start of Willie's server that needs to be combined
// var path = require("path");
// // Sets up the Express App

// // =============================================================
// var app = express();
// var PORT = process.env.PORT || 4044;
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static("./Public"));


// // Static directory to be served
// // app.use(express.static("app/public"));

// // Routes
// // =============================================================
// require("./connection");
// require("./api_route")(app);
// require("./entries")(app);
// // Here we introduce HTML routing to serve different HTML files
// // require("./app/routes/html-routes.js")(app);

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "./Public/index.html"));
//   });

// // Starts the server to begin listening
// // =============================================================
// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });