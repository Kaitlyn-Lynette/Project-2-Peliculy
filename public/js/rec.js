// When user submits add-btn

$(document).ready(function() {

  //Getting jQuery references from the recommend.html
  var bodyInput = $("#body");
  var titleInput = $("#title");
  var recForm = $("#rec-form");
  var yourName = $("#name");
  var yourRating = $("#id");

$(recForm).on('submit', handleFormSubmit);

  // var url = window.location.search;
  // var recommendationId;
  // var authorId;


submitPost();

// A function for handling what happens when the form to create a new post is submitted
function handleFormSubmit(event) {
  event.preventDefault();
  // Constructing a newPost object to hand to the database
  var newPost = {
    movieTitle: movieTitleInput
      .val()
      .trim(),
    recommendation: recInput
      .val()
      .trim(),
    name: nameInput
      .val()
      .trim(),
    rating: ratingInput
      .val(),
  };

  function submitPost(post) {
    $.post("/api/recommendations", post, function() {
      window.location.href = "/";
    });
  };

};

  // $('#submit').on('click', function(event) {
  //   console.log('Hola submit button');
  //   event.preventDefault();
  //   console.log('submit button');
  //   // Make a newEntry object
  //   var newEntry = {
  //     movieTitle: $('#title').val().trim(),
  //     userName: $('#name').val().trim(),
  //     recommendation: $('#body').val().trim(),
  //     //   rating: $("#rating").val().trim()
  //   };
  //   console.log('newEntry', newEntry);
  //   // Send an AJAX POST-request with jQuery
  //   $.post('/api/new', newEntry)
  //   // On success, run the following code
  //     .then(function(data) {
  //       // Log the data we found
  //       console.log(data);
  //     });

  //   // Empty each input box by replacing the value with an empty string
  //   // $("#title").val("");
  //   // $("#name").val("");
  //   // $("#body").val("");
  //   // $("#rating").val("");

  // });