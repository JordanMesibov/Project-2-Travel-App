$(function () {
  $("#submit").on("click", function (event) {

    let groupName = $("#groupName").val().trim();
    console.log(groupName);

    let city1Name = $("#city1").val().trim();
    console.log(city1Name);

    let city2Name = $("#city2").val().trim();
    console.log(city2Name);

    let city3Name = $("#city3").val().trim();
    console.log(city3Name);

    let city4Name = $("#city4").val().trim();
    console.log(city4Name);

    let city5Name = $("#city5").val().trim();
    console.log(city5Name);

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


      //--------------------------------------------------------------------
      console.log("New Group Member below!");
      console.log(newGroupMember);
      //grab the div with an ID of addedMembers and prepend the newGroupMember to it
      $(".addedMembers").prepend(newGroupMember);
      $(".addedMembers").prepend("<br>");
      $("#addGroupMembers").val("");

    });

});
