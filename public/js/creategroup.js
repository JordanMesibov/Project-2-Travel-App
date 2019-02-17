$(function () {
  $("#submit").on("click", function (event) {
    event.preventDefault();

    let groupName = $("#groupName").val().trim();
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
      city5: city5Name
    };

    console.log("This is creategroups city1 "+ city1Name);
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

    // $(".addedMembers").html("");
  });

   //set up the function for capturing added group members
    //when the submit button, which has an ID of addMembers becomes clicked:
    $("#addMembers").on("click", function (event) {
      event.preventDefault();
      //capture the input in the addGroupMembers form field
      let newGroupMember = $("#addGroupMembers").val().trim();
      //--------------------------------------------------------------------
      //right here is where we need to POST this user to the DB, before we reassign the newGroupMember variable!
        // ACTUALLY: SET IT UP SO THAT THE NEW GROUP MEMBERS ARE PUSHED TO AN EMPTY ARRAY, THEN HAVE THE PUT ROUTE OF THESE NEW USERS BE PUT INTO A GROUP ON CLICK OF THE SUBMIT BUTTON, NOT ON CLICK OF THE ADD MEMBERS BUTTON!

      //--------------------------------------------------------------------
      console.log("New Group Member below!");
      console.log(newGroupMember);
      //grab the div with an ID of addedMembers and prepend the newGroupMember to it
      $(".addedMembers").prepend(newGroupMember);
      $(".addedMembers").prepend("<br>");
      $("#addGroupMembers").val("");

    });

});
