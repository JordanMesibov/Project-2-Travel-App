$(document).ready(function() {


  $.ajax({
    url: '/api/users/status',
    method: 'GET'
  }).then(function(userInfo) {
    console.log(userInfo);
    $("#user-name").text(userInfo.full_name);
    $("#user-info")
      .append(`<p>Email: ${userInfo.email}</p>`)
      .append(`<p>Username: ${userInfo.username}</p>`)
  })
  .catch(err => console.log(err));

  $.ajax({
    url: '/api/posts',
    method: 'GET'
  })
  .then(function(postData) {
    if (!postData.length) {
     return $("#posts").text("<h1>no posts found! Log in and create a post!<h1>")
    }
    console.log(postData);
    postData.forEach(post => {
      $("<li class='list-group-item'>")
        .append(
          post.photo ? `<img class='float-left img-fluid' src='${post.photo}'/>` : "",
          `<h4>${post.title}</h4>`,
          `<p>Written by: ${post.User.full_name}</p>`,
          `<p>Posted in: ${post.Categories.map(({category_name}) => category_name).join(', ')}</p>`
        )
        .appendTo($("#posts"));
    })
  })

});