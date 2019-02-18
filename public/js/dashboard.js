console.log("dashboard.js linked!");
$(document).ready(function () {


  //NavBar Code Start
  $.ajax({
      url: '/api/users/status',
      method: 'GET'
    }).then(function (userInfo) {
      console.log(userInfo);
      $("#user-name").text(userInfo.full_name);
      $("#user-info")

        .append(`<p>Welcome: ${userInfo.userName}</p>`)
        .append(`<p>Email: ${userInfo.email}</p>`)
    })
    .catch(err => console.log(err));
  //NavBar Code End



  $(".submitcreategroup").on("click", function (event) {
    event.preventDefault();
    // alert( "CG clicked" );
    let groupName = {
      name: $("#newgroupname-input").val()
    };
    // console.log(groupName);
    $.ajax({
      url: "/api/groups",
      method: "POST",
      data: groupName // req.body
    })
    $.ajax({
      url: "/api/groups",
      method: "GET",
    }).then(function (groupid){
      console.log(groupid)
    })



    // .then(function(data) {
    //   location.reload();
    // });


  });








  $(".joinGroup").click(function () {
    alert("CG clicked");
  });

});