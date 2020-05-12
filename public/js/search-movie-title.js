$(document).ready(function(){
    $("#search-btn").on("click", function(event) {
      event.preventDefault();
    
      // Save the book they typed into the book-search input
      var movieSearched = $("movie-search").val().trim();
    
      // Make an AJAX get request to our api, including the user's book in the url
      $.get("/api/" + movieSearched, function(data) {
        Entry.findAll({
                where: {
                    movieTitle: movieSearched
                }
              }).then(function(dbmovies) {
                res.json(dbmovies);
              });
      })})})