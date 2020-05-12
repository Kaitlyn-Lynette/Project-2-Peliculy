// When user submits add-btn
console.log('Hola');
$(document).ready(function() {

  $('#submit').on('click', function(event) {
    console.log('Hola submit button');
    event.preventDefault();
    console.log('submit button');
    // Make a newEntry object
    var newEntry = {
      movieTitle: $('#title').val().trim(),
      userName: $('#name').val().trim(),
      recommendation: $('#body').val().trim(),
      //   rating: $("#rating").val().trim()
    };
    console.log('newEntry', newEntry);
    // Send an AJAX POST-request with jQuery
    $.post('/api/new', newEntry)
    // On success, run the following code
      .then(function(data) {
        // Log the data we found
        console.log(data);
      });

    // Empty each input box by replacing the value with an empty string
    // $("#title").val("");
    // $("#name").val("");
    // $("#body").val("");
    // $("#rating").val("");

  });
});