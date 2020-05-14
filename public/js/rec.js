// When user submits add-btn

$(document).ready(function() {

  //Getting jQuery references from the recommend.html
  var bodyInput = $('#body');
  var titleInput = $('#title');
  var recButton = $('#rec-button');
  var yourName = $('#name');
  var yourRating = $('#id');

  $('#rec-button').click(function(){
    event.preventDefault();
    // Constructing a newPost object to hand to the database
    var newPost = {
      movieTitle: titleInput
        .val()
        .trim(),
      recommendation: bodyInput
        .val()
        .trim(),
      name: yourName
        .val()
        .trim(),
    };
    function submitRecommendation(newPost) {
      $.post('/api/recommendation',newPost)
        .then(function() {
          window.location.replace('/newsfeed');
        });
    }
    submitRecommendation(newPost);
  });
});
