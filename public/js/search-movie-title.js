$(document).ready(function(){
  // $('#movie-search').val("Titanic")
  $('#search-btn').on('click', function(event) {
    event.preventDefault();

    // Save the book they typed into the book-search input
    var movieSearched = $('#movie-search').val().trim().replace(/\s+/g, '').toLowerCase();

    // Make an AJAX get request to our api, including the user's book in the url
    $.get('/api/title/' + movieSearched, function(data) {

      $('#well-section').empty();
      // if the data is not there, then return an error message
      if (!data) {
        $('#well-section').append('<h2> There are no recommendations for that data. </h2>');
      } else {
        for(var i = 0; i<=data.length; i++) {
          $('#well-section').append('<h2>Movie Title:' + data[i].movieTitle+ '</h2>');
          $('#well-section').append('<h3>Recommendation: ' + data[i].recommendation + '</h3>');
          $('#well-section').append('<h3>Name:' + data[i].userName + '</h3>');
          $('#well-section').append('<hr>');
        }
      }
    });
  });
});