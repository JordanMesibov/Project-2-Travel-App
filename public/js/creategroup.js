let groupNameClicked = localStorage.getItem("groupNameClicked");
console.log(groupNameClicked);
let groupNameClickedId = localStorage.getItem("groupNameClickedId");
console.log(groupNameClickedId);

let acquireUserIds = [];
let findUserId;



const newGroupMembers = [];
const newGroupMembersIds = [];
// let groupName = groupNameClicked;
//dummy data: (get rid of it when we are done)
// groupName = "supergroup";
// let groupId;
// search DB for where the name of a group = groupName, and get the primary id of that group

//dummy data: (get rid of it when we are done)
// groupId = "1";






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
    url: '/api/groups/' + groupNameClickedId,
    method: 'GET'
  }).then(function (res) {
    console.log("here is the response to the groupId get request below");
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
    console.log(groupNameClicked);

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

      GroupId: groupNameClickedId
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
    // this is where I am working!


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
    // here is where I will loop through the newGroupMembers array and add all of those members to the group in the DB

    //here I need to loop thru all users and find the ones whose usernames are in the newGroupMembers arr. Loop thru all users, then do a for loop of all newGroupMembers, and if users[i] === newGroupMembers[j], then I will hit the route: /api/usergroup **POST** route - in order to associate that userId with that GroupId





    $.ajax({
      url: '/api/users',
      method: 'GET'
    }).then(function (response) {
        console.log("here is all of the data on all of our users");
        console.log(response);
        console.log("now running gettingUserIds(). In here, make the loop that pushes all of the userIds of the users that we are trying to add to the group (push these userIds to the acquireUserIds arr).");
        //for now, we can just loop thru all users of the app since we will only have the user in the group for the demo. This is why I changed the exit condition to be u < response.length -1
        for (u = 0; u < response.length - 1; u++) {
          console.log((response[u]).id);
          console.log("pushing these Ids to acquireUserIds arr");
          acquireUserIds.push(response[u].id);
        }
        console.log("The final version of acquireUserIds arr is below");
        console.log(acquireUserIds);

        // set up the ajax request where I join the userIds in acuireUserIds arr to groupNameClickedId
        let userGroupObject = {
          UserId: 0,
          GroupId: 1
        };
        for (m = 0; m < acquireUserIds.length; m++) {

          userGroupObject.UserId = acquireUserIds[m],
            userGroupObject.GroupId = groupNameClickedId

          $.ajax({
            url: '/api/usergroup/',
            method: 'POST',
            data: userGroupObject
          }).then(function (resp) {
            console.log("ajax response to adding users to the group below:");
            console.log(resp);

          });
        };

      }







    );

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
    //=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=
    function userCities() {

      $.ajax({
        url: "/api/vacations/group/" + groupNameClickedId,
        method: "GET",
      }).then(function (res) {
        console.log(res);
        // YOU WERE ABOUT TO TEST THIS RESPONSE JORDAN!!!!!
        //make groupNameh1 be the groupNameClicked below

      });

    }
    userCities();
  });

  //-==-=--==-=--==-=--==-=-==--=-=-=-
  // console.log("Outside of the ajax request, this is what acquireUserIds arr looks like (below):");
  // console.log(acquireUserIds);



  // $.ajax({
  //   url: '/api/usergroup/',
  //   method: 'POST',
  //   data: userGroupObj
  // }).then(function (res) {
  //   for (i = 0; i < newGroupMembers.length; i++) {
  //     console.log("looping through and looking for userId of the added groupmembers");
  //     console.log(res);
  //   }


  // });






  // --------------------------------------------------------------------------------------

  // });


  //make function to hide form2

  // add on click event for capturing form 3 info (grab this code from grouppage.js)
  //function to get the cities for that user's group
  //*************
  // here is where we will populate the form by populating city options for that group!







  //*************

  // adding in code for grabbing preferences on submit
  $("#submit-prefs").on("click", function (event) {
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

    // send all of this (memberPrefs and memberRatings) to the DB, so that their preferences are associated with the userId and their GroupId! Then, we can pull this data from the DB to populate the variables for rankedVoting.js





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

    // I will put the rankedVoting.js code in here to trigger a 'vote' with the dummy data I set up for now. remove this when getting the app fully functional since rankedVoting.js will be modularized/in its own file.
    // -=-=-=-=--=-==-++++++++=-=-=-=-=-=-++++++++++-=-=-=-=-=-=--=+++++++++++-=-=-=-=-=-=++++++++++



    $("#tally-votes-button").on("click", function (event) {

      //declare all global variables first.

      let city1Name = "";
      let city2Name = "";
      let city3Name = "";
      let city4Name = "";
      let city5Name = "";
      let winner = "";
      let loser = [];
      let loser2 = [];
      let loser3 = [];
      let loser4 = [];
      let cities = [];
      let cities2 = [];
      let cities3 = [];
      let cities4 = [];
      let groupMembers = [];
      let city1Count = 0;
      let city2Count = 0;
      let city3Count = 0;
      let city4Count = 0;
      let city5Count = 0;
      let cityCountArr = [];
      let cityCountArr2 = [];
      let cityCountArr3 = [];
      let cityCountArr4 = [];



      function grabCitiesFromGroup() {
        //*******************/
        //here is where we will grab the cities of a group from the database. When doing this, add code so that if city#Name doesn't exist, make it false!
        //for now, I make dummy data below.
        city1Name = "Paris";
        city2Name = "London";
        city3Name = "Orlando";
        city4Name = "Shanghai";
        city5Name = "Tokyo";
        //*******************/


        //create an empty array that will hold all of the cities for the group from the DB
        if (city1Name) {
          cities.push(city1Name);
        }
        if (city2Name) {
          cities.push(city2Name);
        }
        if (city3Name) {
          cities.push(city3Name);
        }
        if (city4Name) {
          cities.push(city4Name);
        }
        if (city5Name) {
          cities.push(city5Name);
        }

        console.log("The array of cities competing in the election: " + cities);
        console.log("----------");

      }
      grabCitiesFromGroup();

      function grabGroupMembersFromGroup() {
        //*******************
        //here is where I will the names of the group members in a given group AS WELL AS the preferences of those group members. For now, I will insert dummy data below
        //*******************
        groupMembers.push({
          name: "Jimmy",
          memberPrefs: []
        });
        groupMembers.push({
          name: "Hassan",
          memberPrefs: []
        });
        groupMembers.push({
          name: "Kelsey",
          memberPrefs: []
        });
        groupMembers.push({
          name: "Jared",
          memberPrefs: []
        });
        groupMembers.push({
          name: "Akofa",
          memberPrefs: []
        });
        console.log("The group members are: ");

        function consoleLogGroupMemberNames() {
          for (i = 0; i < groupMembers.length; i++) {
            console.log(groupMembers[i].name);
          }
        };
        consoleLogGroupMemberNames();
        console.log("---------");
      }
      grabGroupMembersFromGroup();


      function grabPrefsFromGroup() {
        //*******************/
        //Grab the actual preferences of each group member from the DB in the final version instead of using the dummy data below
        //*******************/

        groupMembers[0].memberPrefs.push(city1Name, city2Name, city3Name, city4Name, city5Name);
        console.log(`${groupMembers[0].name}'s preferences listed below:`)
        console.log(groupMembers[0].memberPrefs);

        groupMembers[1].memberPrefs.push(city5Name, city3Name, city1Name, city2Name, city4Name);
        console.log(`${groupMembers[1].name}'s preferences listed below:`)
        console.log(groupMembers[1].memberPrefs);

        groupMembers[2].memberPrefs.push(city5Name, city4Name, city3Name, city2Name, city1Name);
        console.log(`${groupMembers[2].name}'s preferences listed below:`)
        console.log(groupMembers[2].memberPrefs);

        groupMembers[3].memberPrefs.push(city3Name, city2Name, city1Name, city5Name, city4Name);
        console.log(`${groupMembers[3].name}'s preferences listed below:`)
        console.log(groupMembers[3].memberPrefs);

        groupMembers[4].memberPrefs.push(city1Name, city2Name, city3Name, city4Name, city5Name);
        console.log(`${groupMembers[4].name}'s preferences listed below:`)
        console.log(groupMembers[4].memberPrefs);

        console.log("----------");
      }
      grabPrefsFromGroup();



      //loop thru the memberPrefs to see what city is first place for each person and increase its count by 1 for each first place vote it recieves
      function countFirstPlaceVotes() {
        for (i = 0; i < groupMembers.length; i++) {
          if (groupMembers[i].memberPrefs[0] === city1Name) {
            city1Count++;
            console.log(`new city1Count: ${city1Count}`);
          }
          if (groupMembers[i].memberPrefs[0] === city2Name) {
            city2Count++;
            console.log(`new city2Count: ${city2Count}`);
          }
          if (groupMembers[i].memberPrefs[0] === city3Name) {
            city3Count++;
            console.log(`new city3Count: ${city3Count}`);
          }
          if (groupMembers[i].memberPrefs[0] === city4Name) {
            city4Count++;
            console.log(`new city4Count: ${city4Count}`);
          }
          if (groupMembers[i].memberPrefs[0] === city5Name) {
            city5Count++;
            console.log(`new city5Count: ${city5Count}`);
          }
        }
      };
      countFirstPlaceVotes();

      function findHighestAndLowest() {
        cityCountArr.push(city1Count);
        cityCountArr.push(city2Count);
        cityCountArr.push(city3Count);
        cityCountArr.push(city4Count);
        cityCountArr.push(city5Count);
        console.log("----------");
        console.log(`cityCountArr: ${cityCountArr}`);

        let votedHighest = Math.max(...cityCountArr);
        console.log(`votedHighest: Most votes recieved by any one option was ${votedHighest}`);

        let votedLowest = Math.min(...cityCountArr);
        console.log(`votedLowest: Fewest votes received by any one option was ${votedLowest}`);

        function declareWinner() {
          if (city1Count > (groupMembers.length) / 2) {
            winner = city1Name;
            console.log(`winner = ${winner}`);
          }
          if (city2Count > (groupMembers.length) / 2) {
            winner = city2Name;
            console.log(`winner = ${winner}`);
          }
          if (city3Count > (groupMembers.length) / 2) {
            winner = city3Name;
            console.log(`winner = ${winner}`);
          }
          if (city4Count > (groupMembers.length) / 2) {
            winner = city4Name;
            console.log(`winner = ${winner}`);
          }
          if (city5Count > (groupMembers.length) / 2) {
            winner = city5Name;
            console.log(`winner = ${winner}`);
          } else {
            console.log("No option recieved majority of first place votes yet. I will now run the function removeLosers()");
            removeLosers();
          }
        }
        declareWinner();

        function removeLosers() {
          console.log("Running removeLosers");
          // declare loser(s)
          if (votedLowest === city1Count) {
            loser.push(city1Name);
          }
          if (votedLowest === city2Count) {
            loser.push(city2Name);
          }
          if (votedLowest === city3Count) {
            loser.push(city3Name);
          }
          if (votedLowest === city4Count) {
            loser.push(city4Name);
          }
          if (votedLowest === city5Count) {
            loser.push(city5Name);
          }
          console.log(`Loser(s) established: ${loser}`);


          // loop thru all group members
          for (i = 0; i < groupMembers.length; i++) {
            // loop thru all of the preferences of any given member
            for (j = 0; j < groupMembers[i].memberPrefs.length; j++) {
              //loop thru the losers array
              // for (k = 0; k < loser.length; k++) {
              // remove the city from their preferences where that city name is equal to loser[x]
              if (groupMembers[i].memberPrefs[j] === loser[0]) {
                groupMembers[i].memberPrefs.splice(j, 1);
              }
              // }


            }
            console.log(`Group member preferences updated to reflect deletion of losers`);
            console.log(`${groupMembers[i].name}'s new memberPrefs: ${groupMembers[i].memberPrefs}`);

          }

          rerunElection();
        }

        function rerunElection() {
          // run console.log of all members preferences to see if the new prefs are still stored properly
          // for (i=0; i < groupMembers.length; i++) {
          //   console.log(`${groupMembers[i]}'s preferences inside of the rerunElection function: ${groupMembers[i].memberPrefs}`);
          // }

          // first, I must recount the votes for each groupMembers[i].memberPref[0]. This will require me to reset each city's count to 0. I MUST ONLY INTERACT WITH THE CITIES STILL IN CONTENTION! this means I must check to see if the city#Name exists within a given member's memberPrefs before resetting it to 0. If that city#Name does not exist, then that city#Count must be made to not exist and not be considered in the recounting of the votes. Maybe I can do this by redeclaring the remaining cities in contention as city6Name, city7Name, city8Name, and city9Name if applicable. Then I can give them city6Count, city8Count, and city9Count so I don't have to worry about resetting old counts anymore.

          //to do what I described above, I must go thru the remaining preferences of a groupMember and reassign the value of each city#Name to be city6Name, city7Name, etc.


          //go thru the 4 remaining possiblities of remaining indices
          // when I tried to check if the city#Name existed and declaring the variable inside of that if loop, I had scoping issues and city7/8/9Name was not defined outside of that if loop.
          let city6Name = groupMembers[0].memberPrefs[0];
          console.log(`city6Name: ${city6Name}`);
          // if (groupMembers[0].memberPrefs[1]) {
          let city7Name = groupMembers[0].memberPrefs[1];
          console.log(`city7Name: ${city7Name}`);
          // }
          // if (groupMembers[0].memberPrefs[2]) {
          let city8Name = groupMembers[0].memberPrefs[2];
          console.log(`city8Name: ${city8Name}`);
          // }
          // if (groupMembers[0].memberPrefs[3]) {
          let city9Name = groupMembers[0].memberPrefs[3];
          console.log(`city9Name: ${city9Name}`);
          // }
          if (city6Name) {
            cities2.push(city6Name);
          }
          if (city7Name) {
            cities2.push(city7Name);
          }
          if (city8Name) {
            cities2.push(city8Name);
          }
          if (city9Name) {
            cities2.push(city9Name);
          }
          console.log(`cities2 array: ${cities2}`);
          //now, I can refer to the remaining cities by their new variables (ie city6Name).

          //next, I must execute the counting votes code, but using variables that I am about to establish (ie city6Count).
          //-------------------------------------------------------
          //-------------------------------------------------------
          //this is where I am about to try to do what I described above. The double dashed lines are a breadcrumb for me in case I become lost.


          console.log("running the function countFirstPlaceVotesTake2()");
          //now I will essentially rewrite the code from countFirstPlaceVotes(), but I will use the new city names and new city counts (6-9).

          //check if those new city names exist (in case multiple cities were eliminated in the last vote/round) before establishing new city#Count variables.
          // if (city6Name) {
          let city6Count = 0;
          // }
          // if (city7Name) {
          let city7Count = 0;
          // }
          // if (city8Name) {
          let city8Count = 0;
          // }
          // if (city9Name) {
          let city9Count = 0;
          // }


          for (i = 0; i < groupMembers.length; i++) {
            if (city6Name) {
              if (groupMembers[i].memberPrefs[0] === city6Name) {
                city6Count++;
                // console.log(`new city6Count: ${city6Count}`);
              }
            }
            if (city7Name) {
              if (groupMembers[i].memberPrefs[0] === city7Name) {
                city7Count++;
                // console.log(`new city7Count: ${city7Count}`);
              }
            }
            if (city8Name) {
              if (groupMembers[i].memberPrefs[0] === city8Name) {
                city8Count++;
                // console.log(`new city8Count: ${city8Count}`);
              }
            }
            if (city9Name) {
              if (groupMembers[i].memberPrefs[0] === city9Name) {
                city9Count++;
                // console.log(`new city9Count: ${city9Count}`);
              }
            }
          }
          console.log(`new city6Count: ${city6Count}`);
          console.log(`new city7Count: ${city7Count}`);
          console.log(`new city8Count: ${city8Count}`);
          console.log(`new city9Count: ${city9Count}`);

          //now I need to go through the process of findingHighestAndLowest() with the new city#Counts and city#Names
          cityCountArr2.push(city6Count);
          cityCountArr2.push(city7Count);
          cityCountArr2.push(city8Count);
          cityCountArr2.push(city9Count);
          console.log(`cityCountArr2: ${cityCountArr2}`);
          //I need to go back and randomly choose 1 vacation item to be eliminated using math.random bc otherwise, I may be pushing a city#Count with a value of 0 that only has a value of 0 bc it wasn't actually in the running.
          //ACTUALLY, I don't need to randomly pick one though. I can just remove the item in the loser array at index 0 when choosing who to remove! May as well be random, anyway :P
          //edit: I went up in the code and applied this fix. It worked!
          let votedHighest2 = Math.max(...cityCountArr2);
          console.log(`votedHighest2: Most votes recieved by any one option was ${votedHighest2}`);

          let votedLowest2 = Math.min(...cityCountArr2);
          console.log(`votedLowest2: Fewest votes recieved by any one option was ${votedLowest2}`);

          //now I have to go thru the declarWinner functionality, but with the new city#Count and city#Name variables
          function declareWinnerTake2() {
            if (city6Count > (groupMembers.length) / 2) {
              winner = city6Name;
              console.log(`winner = ${winner}`);
            }
            if (city7Count > (groupMembers.length) / 2) {
              winner = city7Name;
              console.log(`winner = ${winner}`);
            }
            if (city8Count > (groupMembers.length) / 2) {
              winner = city8Name;
              console.log(`winner = ${winner}`);
            }
            if (city9Count > (groupMembers.length) / 2) {
              winner = city9Name;
              console.log(`winner = ${winner}`);
            } else {
              console.log("No option recieved majority of first place votes yet. I will now run the function removeLosers2()");
              //call it here
              removeLosers2();
            }
          }
          declareWinnerTake2();

          function removeLosers2() {
            console.log("Running removeLosers2");
            //declare losers for the second iteration of votes
            if (votedLowest2 === city6Count) {
              loser2.push(city6Name);
            }
            if (votedLowest2 === city7Count) {
              loser2.push(city7Name);
            }
            if (votedLowest2 === city8Count) {
              loser2.push(city8Name);
            }
            if (votedLowest2 === city9Count) {
              loser2.push(city9Name);
            }
            console.log(`Loser(s) established: ${loser2}`);

            //loop thru all group members
            for (i = 0; i < groupMembers.length; i++) {
              //loop thru all of the preferences of any given member
              //WHY ISNT THE i IN GROUPMEMBERS[i].MEMBERPREFS.LENGTH BELOW SURROUNDED BY DIFF COLOR SQUARE BRACKETS YET?!?
              for (j = 0; j < groupMembers[i].memberPrefs.length; j++) {
                //check for where those preferences equal the loser2 array at [0] and remove it
                if (groupMembers[i].memberPrefs[j] === loser2[0]) {
                  groupMembers[i].memberPrefs.splice(j, 1);
                }
              }
              console.log(`Group member preferences updated to reflect deletion of loser.`);
              console.log(`${groupMembers[i].name}'s new memberPrefs: ${groupMembers[i].memberPrefs}`);
            }

            //call for the next iteration of rerunning the election
            rerunElectionAgain();
          }

          function rerunElectionAgain() {
            console.log("We are inside of rerunElectionAgain()");
            // establish the new set of city#Name variables
            let city10Name = groupMembers[0].memberPrefs[0];
            console.log(`city10Name: ${city10Name}`);
            let city11Name = groupMembers[0].memberPrefs[1];
            console.log(`city11Name: ${city11Name}`);
            let city12Name = groupMembers[0].memberPrefs[2];
            console.log(`city12Name: ${city12Name}`);

            // push these new city#Names to the cities3 array
            if (city10Name) {
              cities3.push(city10Name);
            }
            if (city11Name) {
              cities3.push(city11Name);
            }
            if (city12Name) {
              cities3.push(city12Name);
            }

            console.log(`cities3 array: ${cities3}`);

            console.log("basically running the function countFirstPlaceVotesTake3()");

            let city10Count = 0;
            let city11Count = 0;
            let city12Count = 0;

            for (i = 0; i < groupMembers.length; i++) {
              if (city10Name) {
                if (groupMembers[i].memberPrefs[0] === city10Name) {
                  city10Count++;
                }
              }
              if (city11Name) {
                if (groupMembers[i].memberPrefs[0] === city11Name) {
                  city11Count++;
                }
              }
              if (city12Name) {
                if (groupMembers[i].memberPrefs[0] === city12Name) {
                  city12Count++;
                }
              }
            }
            console.log(`new city10Count: ${city10Count}`);
            console.log(`new city11Count: ${city11Count}`);
            console.log(`new city12Count: ${city12Count}`);

            cityCountArr3.push(city10Count);
            cityCountArr3.push(city11Count);
            cityCountArr3.push(city12Count);
            console.log(`cityCountArr3: ${cityCountArr3}`);

            let votedHighest3 = Math.max(...cityCountArr3);
            console.log(`votedHighest3: Most votes recieved by any one option was ${votedHighest3}`);

            let votedLowest3 = Math.min(...cityCountArr3);
            console.log(`votedLowest3: Fewest votes recieved by any one option was ${votedLowest3}`);

            function declareWinnerTake3() {
              if (city10Count > (groupMembers.length) / 2) {
                winner = city10Name;
                console.log(`winner = ${winner}`);
              }
              if (city11Count > (groupMembers.length) / 2) {
                winner = city11Name;
                console.log(`winner = ${winner}`);
              }
              if (city12Count > (groupMembers.length) / 2) {
                winner = city12Name;
                console.log(`winner = ${winner}`);
              } else {
                console.log("No option recieved majority of first place votes yet. I will now run the function removeLosers3()");
                removeLosers3();
              }
            }
            declareWinnerTake3();

            function removeLosers3() {
              console.log("Running removeLosers3");
              // declare losers for the third iteration of votes
              if (votedLowest3 === city10Count) {
                loser3.push(city10Name);
              }
              if (votedLowest3 === city11Count) {
                loser3.push(city11Name);
              }
              if (votedLowest3 === city12Count) {
                loser3.push(city12Name);
              }
              console.log(`Loser(s) established: ${loser3}`);

              //loop thru all group members
              for (i = 0; i < groupMembers.length; i++) {
                //loop thru all preferences of a given member
                for (j = 0; j < groupMembers[i].memberPrefs.length; j++) {
                  //check for where those preferences equal the loser3 array at [0] and remove it
                  if (groupMembers[i].memberPrefs[j] === loser3[0]) {
                    groupMembers[i].memberPrefs.splice(j, 1);
                  }
                }
                console.log(`Group member preferences updated to reflect deletion of loser.`);
                console.log(`${groupMembers[i].name}'s new memberPrefs: ${groupMembers[i].memberPrefs}`);
              }

              //call for the next iteration of rerunning the election (the final iteration since there is a maximum of 5 vacation options allowed for by our app!)
              rerunElectionAgainAgain();
            }

            function rerunElectionAgainAgain() {
              console.log("We are inside of rerunElectionAgainAgain()");
              //establish the new set of city#Name variables
              let city13Name = groupMembers[0].memberPrefs[0];
              console.log(`city13Name: ${city13Name}`);
              let city14Name = groupMembers[0].memberPrefs[1];
              console.log(`city14Name: ${city14Name}`);

              //push these new city#Names to the cities4 array
              if (city13Name) {
                cities4.push(city13Name);
              }
              if (city14Name) {
                cities4.push(city14Name);
              }
              console.log(`cities4 array: ${cities4}`);

              console.log("basically running the function countFirstPlaceVotesTake4()");

              let city13Count = 0;
              let city14Count = 0;

              for (i = 0; i < groupMembers.length; i++) {
                if (city13Name) {
                  if (groupMembers[i].memberPrefs[0] === city13Name) {
                    city13Count++;
                  }
                }
                if (city14Name) {
                  if (groupMembers[i].memberPrefs[0] === city14Name) {
                    city14Count++;
                  }
                }
              }
              console.log(`new city13Count: ${city13Count}`);
              console.log(`new city14Count: ${city14Count}`);

              cityCountArr4.push(city13Count);
              cityCountArr4.push(city14Count);
              console.log(`cityCountArr4: ${cityCountArr4}`);

              let votedHighest4 = Math.max(...cityCountArr4);
              console.log(`votedHighest4: Most votes recieved by any one option was ${votedHighest4}`);

              let votedLowest4 = Math.min(...cityCountArr4);
              console.log(`votedLowest4: Fewest votes recieved by any one option was ${votedLowest4}`);

              // Coder's note: I came so very, very close to naming this function "declareWinnerTake4ElectricBoogaloo".
              function declareWinnerTake4() {
                if (city13Count > (groupMembers.length) / 2) {
                  winner = city13Name;
                  console.log(`winner = ${winner}`);
                }
                if (city14Count > (groupMembers.length) / 2) {
                  winner = city14Name;
                  console.log(`winner = ${winner}`);
                }
                // at this point, the else statement means it came down to a perfect tie, so I am just gonna pick the one at index [0]
                else if (city13Count <= (groupMembers.length) / 2 && city14Count <= (groupMembers.length) / 2) {
                  winner = groupMembers[0].memberPrefs[0]
                  console.log(`winner = ${winner}`);
                }
              }
              declareWinnerTake4();

            }

          }

        }

      }

      findHighestAndLowest();


      // *****************************
      // The axios call will need to use the winner variable generated by this code for the results page!

      // Here, we call a function to POST/PUT the winner variable to the DB so that a winner is associated with the group. The results page will perform a GET request to view the winner of the group and then to provide info about the winning city.






    });


    // -=-=-=-=--=-==-++++++++=-=-=-=-=-=-++++++++++-=-=-=-=-=-=--=+++++++++++-=-=-=-=-=-=++++++++++

  });



  // check if the user is groupLeader = true, if they are the leader, show the tally votes button.






});