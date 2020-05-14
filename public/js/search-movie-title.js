$(document).ready(function(){
  $('#search-btn').on('click', function(event) {
    event.preventDefault();

    // Save the book they typed into the book-search input
    var movieSearched = $('movie-search').val().trim();

    movieSearch = movieSearch.replace(/\s+/g, "").toLowerCase();

    // Make an AJAX get request to our api, including the user's book in the url
    $.get('/api/' + movieSearched, function(data) {
      console.log(data)

      $("#well-section").empty();
      // if the data is not there, then return an error message
      if (!data) {
        $("#well-section").append("<h2> There are no recommendations for that data. </h2>");
      }
      else {
        // otherwise
        // append the character name
        $("#well-section").append("<h2>Movie Title:" + data.movieTitle+ "</h2>");
        // the role
        $("#well-section").append("<h3>Recommendation: " + data.recommendation + "</h3>");
        // the age
        $("#well-section").append("<h3>Name:" + data.userName + "</h3>");
        // and the force points
      }
    });
  });

