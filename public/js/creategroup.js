$(function () {
  $("#submit").on("click", function (event) {

    let groupName = $("#groupName").val().trim();
    console.log(groupName);

    let city1Name = $("#city1").val().trim();
    let city2Name = $("#city2").val().trim();
    let city3Name = $("#city3").val().trim();
    let city4Name = $("#city4").val().trim();
    let city5Name = $("#city5").val().trim();
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
      location.reload();
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


      //--------------------------------------------------------------------
      console.log("New Group Member below!");
      console.log(newGroupMember);
      //grab the div with an ID of addedMembers and prepend the newGroupMember to it
      $(".addedMembers").prepend(newGroupMember);
      $(".addedMembers").prepend("<br>");
      $("#addGroupMembers").val("");

    });

});
