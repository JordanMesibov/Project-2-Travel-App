$(document).ready(function() {

$( "#logInBtn" ).click(function(e) {
  e.preventDefault();
    console.log("this hit");
    const userInfo = {
    
      email: $("#email-input").val().trim(),
      password: $("#password-input").val().trim()
    };

    $.ajax({
      url: '/api/users/login',
      method: 'POST',
      data: userInfo
    })
    .then((userInfo) => {
      location.replace(userInfo)
    })
    .catch(err => console.log(err));
  });


console.log("login.js Linked!");

});
