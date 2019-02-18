console.log("dashboard.js linked!");

let groupLink = {
  GroupId: 0,
  UserId: 0
}
console.log(groupLink);
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
        
        groupLink.UserId = userInfo.id;
        console.log(groupLink);
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
    }).then(function (groupId) {
      // console.log(groupId);
      // console.log(groupId.id);
    groupLink.GroupId = groupId.id;
    console.log(groupLink);
postIds();



    });

function postIds() {
    //links usergroup/username id and sending to database
    $.ajax({
      url: "/api/usergroup",
      method: "POST",
      data: groupLink // req.body
    }).then(function (response) {
      console.log(response);
      location.reload();
    });
};

    // .then(function(data) {
    //   location.reload();
    // });


  });








  $(".joinGroup").click(function () {
    alert("CG clicked");
  });

});