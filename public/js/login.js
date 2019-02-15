$(document).ready(function() {

  
$( "#logInBtn" ).click(function(e) {

  var alert = `<div class="alert alert-danger" role="alert">
  e-mail address or password incorrect!
</div>`;
  e.preventDefault();
    console.log("this hit");

    $("form input").each(function(i) {
      if (!$(this).val()) {
        $(this).addClass("is-invalid");
        return false;
      } else {
        $(this).removeClass("is-invalid").addClass("is-valid");
      }
    })

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
      console.log(userInfo);
      location.replace("/dashboard");
    })
    .catch(err => $('#alert').html(alert)
    
      // console.log("Your password or username incorrect!"+err));
     
)});


console.log("login.js Linked!");

});

