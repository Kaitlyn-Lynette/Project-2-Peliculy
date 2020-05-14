$(document).ready(function(){
  var newsfeedContainer = $('.newsfeed-container');
  var recs;

  //This will grabs posts from the database and update the view
  $.get('/api/recommendations', function(data){
    console.log(data);

    const recommend = [
        {
            movieTitle: "Jaws",
            recommendation: "It was scary",
            userName: "Ben"
        }
    ];
        res.json(recommendation);
        $("#movie-title").text(data.name);
        $("#recommendation").text(data.role);
        $("#username").text(data.userName);
    });

module.export