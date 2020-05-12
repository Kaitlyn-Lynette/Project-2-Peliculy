// // Dependencies
// // =============================================================
const Entry = require("./model_entry")
// // Routes
// // =============================================================
module.exports = function(app) {
  // If a user sends data to add a new recommendation entry...
  app.post("/api/new", function(req, res) {
    console.log(req)
    console.log("hit the server")
    var entryRec = req.body;
    console.log("entryREc", entryRec);
    Entry.create({
        // creates table in DB
        movieTitle: entryRec.movieTitle,
        userName: entryRec.userName,
        reommedation: entryRec.reommedation,
  }).then(function(result){
    console.log(result)
    res.json(result)
    res.end();}
  );
})}