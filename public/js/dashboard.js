console.log("dashboard.js linked!");
let groupLink = {
  GroupId: 0,
  UserId: 0
}
let isLeader = {
  isLeader: true
}

let temp;
// console.log(groupLink);
$(document).ready(function () {
  //NavBar Code Start
  $.ajax({
    url: '/api/users/status',
    method: 'GET'
  }).then(function (userInfo) {
    // console.log(userInfo);
    $("#user-name").text(userInfo.full_name);
    $("#user-info")

      .append(`<p>Welcome: ${userInfo.userName}</p>`)
      .append(`<p>Email: ${userInfo.email}</p>`)

    groupLink.UserId = userInfo.id;
    // console.log(groupLink);

    //ajaxcall for group info on the user that is logged in
    console.log(groupLink.UserId);
    $.ajax({
        url: `/api/users/id/${groupLink.UserId}}`,
        method: 'GET'
      }).then(function (groupInfo) {
        // console.log(groupInfo);
        // console.log(groupInfo.Groups);
        let rawGroupsArray = groupInfo.Groups;
        console.log("rawgroup");
        console.log(rawGroupsArray);
        const newGroupArray = rawGroupsArray.map(element => element.name);
        console.log("newGroupArray");
        console.log(newGroupArray);

        // for (i = 0; i < newGroupArray.length; i++) {
        //   $("<div class='groups' />").text(newGroupArray[i]).appendTo(".groupdivs");
        // }
        for (i = 0; i < newGroupArray.length; i++) {
          $("<div class='groups' />").text(newGroupArray[i]).attr("data-id", newGroupArray[i]).appendTo(".groupdivs");
        }


      })
      .catch(err => console.log(err));
  });
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
      // console.log(groupLink);
      updateLeader();
      postIds();
      location.reload();
    });

    function postIds() {
      //links usergroup/username id and sending to database
      $.ajax({
        url: "/api/usergroup",
        method: "POST",
        data: groupLink // req.body
      }).then(function (response) {
        // console.log(response);
      });
    };

    function updateLeader() {
      $.ajax({
        url: `/api/users/id/${groupLink.UserId}`,
        method: "PUT",
        data: isLeader
      }).then(function (response) {
        // console.log(response);
      });
    };
  });

  $(".joinGroup").click(function () {
    alert("CG clicked");
  });
});