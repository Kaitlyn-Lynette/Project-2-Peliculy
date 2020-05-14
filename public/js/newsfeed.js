$(document).ready(function(){
  var newsfeedContainer = $('.newsfeed-container');
  var recs;

  $.get('/api/recommendation', function(data){
    console.log('Recommendations', data);
    recommendations = data;
    if(!recommendations || !recommendations.length) {
      displayEmpty();
    } else {
      initializeRows();
    }
  });

  function initializeRows() {
    newsfeedContainer.empty();
    var recsToAdd = [];
    for (var i = 0; i < recs.length; i++) {
      // eslint-disable-next-line no-use-before-define
      recsToAdd.push(createNewRow(recs[i]));
    }
    newsfeedContainer.append(recsToAdd);
  }

  function createNewRow(post) {
    var newPostCard = $('<div>');
    newPostCard.addClass('card');
    var newPostCardHeading = $('<div>');
    newPostCardHeading.addClass('card-header');
    var deleteBtn = $('<button>');
    deleteBtn.text('x');
    deleteBtn.addClass('delete btn btn-danger');
    var editBtn = $('<button>');
    editBtn.text('EDIT');
    editBtn.addClass('edit btn btn-default');
    var newPostTitle = $('<h2>');
    var newPostDate = $('<small>');
    var newPostCategory = $('<h5>');
    newPostCategory.text(post.category);
    newPostCategory.css({
      float: 'right',
      'font-weight': '700',
      'margin-top':
      '-15px'
    });
    var newPostCardBody = $('<div>');
    newPostCardBody.addClass('card-body');
    var newPostBody = $('<p>');
    newPostTitle.text(post.title + ' ');
    newPostBody.text(post.body);
    var formattedDate = new Date(post.createdAt);
    formattedDate = moment(formattedDate).format('MMMM Do YYYY, h:mm:ss a');
    newPostDate.text(formattedDate);
    newPostTitle.append(newPostDate);
    newPostCardHeading.append(deleteBtn);
    newPostCardHeading.append(editBtn);
    newPostCardHeading.append(newPostTitle);
    newPostCardHeading.append(newPostCategory);
    newPostCardBody.append(newPostBody);
    newPostCard.append(newPostCardHeading);
    newPostCard.append(newPostCardBody);
    newPostCard.data('post', post);
    return newPostCard;
  }

});