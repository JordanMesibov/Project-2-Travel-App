// console.log("grouppage.js linked!");
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

$(function() {
  $("#submit").on("click", function(event) {

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

