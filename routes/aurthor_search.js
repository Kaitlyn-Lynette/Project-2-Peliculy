// When user hits the search-btn
$("#search-btn").on("click", function(event) {
  event.preventDefault();

  // Save the book they typed into the book-search input
  var movieSearched = $("movie-search").val().trim();

  // Make an AJAX get request to our api, including the user's book in the url
  $.get("/api/" + movieSearched, function(data) {
    db.movie.findAll({
            where: {
                movieTitle: movieSearched
            }
          }).then(function(dbmovies) {
            res.json(dbmovies);
          });
    // console.log(data);
    // // Call our renderBooks function to add our books to the page
    // renderMovies(data);

  });

});

// function renderBooks(data) {
//   if (data.length !== 0) {

//     $("#stats").empty();
//     $("#stats").show();

//     for (var i = 0; i < data.length; i++) {

//       var div = $("<div>");

//       div.append("<h2>" + data[i].title + "</h2>");
//       div.append("<p>Author: " + data[i].author + "</p>");
//       div.append("<p>Genre: " + data[i].genre + "</p>");
//       div.append("<p>Pages: " + data[i].pages + "</p>");
//       div.append("<button class='delete' data-id='" + data[i].id + "'>DELETE BOOK</button>");

//       $("#stats").append(div);

//     }

//   }
// }