$(document).ready(function(){
  // $('#movie-search').val("Titanic")
  $('#recommender-search-btn').on('click', function(event) {
    event.preventDefault();
    // Save the book they typed into the book-search input
    var movieRecommender = $('#movie-recommender').val().trim().replace(/\s+/g, '').toLowerCase();
    console.log(movieRecommender);
    // Make an AJAX get request to our api, including the user's book in the url
    $.get('/api/author/' + movieRecommender, function(data) {
      $('#well-section').empty();
      // if the data is not there, then return an error message
      if (!data) {
        $('#well-section').append('<h2> There are no recommendations for that data. </h2>');
      } else {
        for(var i = 0; i<=data.length; i++) {
          $('#well-section').append('<p>Movie Title:' + data[i].movieTitle+ '</p>');
          $('#well-section').append('<p>Recommendation: ' + data[i].recommendation + '</p>');
          $('#well-section').append('<p>Name:' + data[i].userName + '</p>');
          $('#well-section').append('<hr>');
        }
      }
    });
  });
});