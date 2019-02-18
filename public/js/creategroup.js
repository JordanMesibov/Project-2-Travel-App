<<<<<<< HEAD
const newGroupMembers = [];
let groupName;
//dummy data: (get rid of it when we are done)
groupName = "supergroup";
let groupId;
// search DB for where the name of a group = groupName, and get the primary id of that group

//dummy data: (get rid of it when we are done)
groupId = "1";



=======
let groupNameClicked = localStorage.getItem("groupNameClicked");
console.log(groupNameClicked);
>>>>>>> 962d9ca51a20ee753688c5d5e7e517ad9d94f085



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





// $(document).ready(function(){
// this function hides form1 on submit click
$(function () {
  //declare the showForm3() function here so it can be used in different places with this whole function.
  //make function to show form3
  function showForm3() {
    $(".form3").addClass("present");
    $(".form3").removeClass("hidden");

  }

  // only show form1 if the vacation options are not null, otherwise, run showForm3();
  $.ajax({
    url: '/api/groups/' + groupId,
    method: 'GET'
  }).then(function(res) {
    console.log(res);
    if (!res[0].VacationOptions[0]) {
      showForm1();
    } else {
      console.log("trying to run showForm3");
      showForm3();
    }
  });

  // function to show form1
  function showForm1() {
    $(".form1").addClass("present");
    // $(".form1").classList.remove("hidden");
    console.log("showing form1");

  }

  $("#submit").on("click", function (event) {
    event.preventDefault();
    
    console.log("The groupName is:");
    console.log(groupName);

    let city1Name = $("#city1").val().trim();
    let city2Name = $("#city2").val().trim();
    let city3Name = $("#city3").val().trim();
    let city4Name = $("#city4").val().trim();
    let city5Name = $("#city5").val().trim();
    console.log("The cities that have been entered are:");
    console.log(city1Name);
    console.log(city2Name);
    console.log(city3Name);
    console.log(city4Name);
    console.log(city5Name);

    let vacaInfo = {
      city1: city1Name,
      city2: city2Name,
      city3: city3Name,
      city4: city4Name,
      city5: city5Name,
      //---------------
      //must get groupname from dashboard
      groupName: groupName
    };

    console.log("This is creategroups city1 " + city1Name);
    $.ajax({
        url: '/api/vacations',
        method: 'POST',
        data: vacaInfo
      })
      .then(() => {
        //CHECK IF THIS (LOCATION.RELOAD();) IS WHAT IS FORCING A RELOAD OF THE PAGE BECAUSE I DONT WANT THAT TO HAPPEN WHILE I AM WORKING WITH THE DATA FOR NOW - JORDAN

        // location.reload();
        console.log("reload prevented! Nice find, Jordan!");
      })
      .catch(err => console.log(err));


    function hideForm1() {
    $(".form1").addClass("hidden");
    $(".form1").removeClass("present");
    // show form2
    showForm2();

    }
    hideForm1();
  });

  //only show form2 if user is groupLeader and if users have not been added yet.
  //easier solution: only show form2 if a second member of the group does not exist yet!

  // $.ajax({
  //   url: '/api/groups/' + groupId,
  //   method: 'GET'
  // }).then(function(res) {
  //   console.log(res);
  //   if (!res[0].Users[1]) {
  //     showForm2();
  //   }
  // });

  // make function to show form2
  function showForm2() {
    console.log("showing form2");
    $(".form2").addClass("present");
    $(".form2").removeClass("hidden");

  }

  // here I will put the code for displaying form2 and capturing the data from those fields
  //set up the function for capturing added group members
  //when the submit button, which has an ID of addMembers becomes clicked:
  $("#addMembers").on("click", function (event) {
    event.preventDefault();
    //capture the input in the addGroupMembers form field
    
    let newGroupMember = $("#addGroupMembers").val().trim();
    newGroupMembers.push(newGroupMember);
    //--------------------------------------------------------------------
    
    // ACTUALLY: SET IT UP SO THAT THE NEW GROUP MEMBERS ARE PUSHED TO AN EMPTY ARRAY, THEN HAVE THE PUT ROUTE OF THESE NEW USERS BE PUT INTO A GROUP ON CLICK OF THE SUBMIT BUTTON, NOT ON CLICK OF THE ADD MEMBERS BUTTON!

    //--------------------------------------------------------------------
    console.log("New Group Member below!");
    console.log(newGroupMember);
    //grab the div with an ID of addedMembers and prepend the newGroupMember to it
    $(".addedMembers").prepend(newGroupMember);
    $(".addedMembers").prepend("<br>");
    $("#addGroupMembers").val("");

  });
  
    $("#adding-members-submit").on("click", function (event) {
      event.preventDefault();
      console.log(`newGroupMembers arr: ${newGroupMembers}`);

      //----------------------------------------------
      // here is where Charity will loop through the newGroupMembers array and add all of those members to the group in the DB






      // --------------------------------------------------------------------------------------

      function hideForm2() {
        $(".form2").removeClass("present");
        $(".form2").addClass("hidden");


      }
      hideForm2();
    
      // //make function to show form3
      // function showForm3() {
      //   $(".form3").addClass("present");
      //   $(".form3").removeClass("hidden");
    
      // }
      showForm3();
    });


  //make function to hide form2

  // add on click event for capturing form 3 info (grab this code from grouppage.js)
  //function to get the cities for that user's group
  // function userCities() {

  //   $.ajax({
  //     url: "/api/vacations/" + userName,
  //     method: "GET",
  //   }).then(function (data) {
  //     console.log("This is the data from vacations " + data + "using this group name " + userName);
  //     // location.reload();
  //   });

  // }
  // userCities();
  //*************
  // here is where we will populate the form by populating city options for that group!







  //*************

  // adding in code for grabbing preferences on submit
  $("#submit-prefs").on("click", function(event) {
    event.preventDefault();

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

  // });




  //make function to hide form3
  function hideForm3() {
    $(".form3").addClass("hidden");
    $(".form3").removeClass("present");
  }
  hideForm3();


  // make function to display "Thank you for voting!" text
  function showThankYou() {
    $(".thankYou").addClass("present");
    $(".thankYou").removeClass("hidden");

  }
  showThankYou();

});
});


// check if the user is groupLeader = true, if they are the leader, show the tally votes button.





// });