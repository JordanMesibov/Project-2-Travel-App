$(function () {
  $("#submit").on("click", function(event) {

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

    // below this is mostly code from one of the bootcamp activities using handlebars to use as reference.
    //     var newSleepState = {
    //       sleepy: newSleep
    //     };

    //     // Send the PUT request.
    //     $.ajax("/api/cats/" + id, {
    //       type: "PUT",
    //       data: newSleepState
    //     }).then(
    //       function() {
    //         console.log("changed sleep to", newSleep);
    //         // Reload the page to get the updated list
    //         location.reload();
    //       }
    //     );
    //   });

    //   $(".create-form").on("submit", function(event) {
    //     // Make sure to preventDefault on a submit event.
    //     event.preventDefault();

    //     var newCat = {
    //       name: $("#ca").val().trim(),
    //       sleepy: $("[name=sleepy]:checked").val().trim()
    //     };

    //     // Send the POST request.
    //     $.ajax("/api/cats", {
    //       type: "POST",
    //       data: newCat
    //     }).then(
    //       function() {
    //         console.log("created new cat");
    //         // Reload the page to get the updated list
    //         location.reload();
    //       }
    //     );
  });
});

// console.log("hello jordan");