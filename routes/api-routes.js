// // Dependencies
// // =============================================================
const Entry = require("./model_entry")
// // Routes
// // =============================================================
module.exports = function(app) {
  // If a user sends data to add a new recommendation entry...
  app.post("/api/recommend", function(req, res) {
    console.log(req)
    console.log("hit the server")
    var entryRec = req.body;
    console.log("entryREc", entryRec);
    db.Recommend.create({
        // creates table in DB
        movieTitle: entryRec.movieTitle,
        userName: entryRec.userName,
        reommendation: entryRec.reommendation,
  }).then(function(result){
    console.log(result)
    res.json(result)
    res.end();}
  );
})}