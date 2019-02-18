// console.log("grouppage.js linked!");
var userName;
//NavBar Code Start
$.ajax({
    url: '/api/users/status',
    method: 'GET'
  }).then(function (userInfo) {
    console.log(userInfo);
    const userId = userInfo.id;
    userName = $("#user-name").text(userInfo.full_name);
    $("#user-info")

      .append(`<p>Welcome: ${userInfo.userName}</p>`)
      .append(`<p>Email: ${userInfo.email}</p>`)
    getGroup(userId);
  })
  .catch(err => console.log(err));
//NavBar Code End


function getGroup(userId) {
  $.get("/api/groups/:id", userId);
  const groupId = $(this).GroupId
  userCities(groupId);
}
//function to get the cities for that user's group
function userCities(groupId) {

  console.log("This is the groupId " + data);
  $.ajax({
    url: "/api/vacations/:id" + groupId,
    method: "GET",
  }).then(function (data) {

    $("#memberPref1").append(data.city1, data.city2, data.city4, data.city4, data.city5);
    $("#memberPref2").append(data.city1, data.city2, data.city4, data.city4, data.city5);
    $("#memberPref3").append(data.city1, data.city2, data.city4, data.city4, data.city5);
    $("#memberPref4").append(data.city1, data.city2, data.city4, data.city4, data.city5);
    $("#memberPref5").append(data.city1, data.city2, data.city4, data.city4, data.city5);


    console.log("This is the data from vacations.city1 " + data.city1);
  });


};




$(function () {
  $("#submit").on("click", function (event) {

    let memberPref1 = $("#memberPref1").val();
    console.log(memberPref1);

    let memberPref2 = $("#memberPref2").val();
    console.log(memberPref2);

    let memberPref3 = $("#memberPref3").val();
    console.log(memberPref3);

    let memberPref4 = $("#memberPref4").val();
    console.log(memberPref4);

    let memberPref5 = $("#memberPref5").val();
    console.log(memberPref5);

    let memberRating1 = $("#memberRating1").val();
    console.log(memberRating1);

    let memberRating2 = $("#memberRating2").val();
    console.log(memberRating2);

    let memberRating3 = $("#memberRating3").val();
    console.log(memberRating3);

    let memberRating4 = $("#memberRating4").val();
    console.log(memberRating4);

    let memberRating5 = $("#memberRating5").val();
    console.log(memberRating5);

  });
});