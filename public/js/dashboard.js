console.log("dashboard.js linked!");

//NavBar Code Start
$.ajax({
  url: '/api/users/status',
  method: 'GET'
}).then(function(userInfo) {
  console.log(userInfo);
  $("#user-name").text(userInfo.full_name);
  $("#user-info")
    
    .append(`<p>Welcome: ${userInfo.userName}</p>`)
    .append(`<p>Email: ${userInfo.email}</p>`)
})
.catch(err => console.log(err));
//NavBar Code End

$( ".createGroup" ).click(function() {
  alert( "CG clicked" );
});

$( ".joinGroup" ).click(function() {
  alert( "CG clicked" );
});