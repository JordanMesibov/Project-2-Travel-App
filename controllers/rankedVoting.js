//----------------------------------------------------------------------

//Key/legend for this document:

//!!!!!!!!!! -note- = I will have to go back and actually pull this data from the DB, but for now I will use dummy data

//-------------------------------------------------------------------------


//!!!!!!!!!!grab city names for a group
//dummy data for city names:

let city1Name = "Paris";
let city2Name = "London";
let city3Name = "Orlando";
let city4Name = "Shanghai";
let city5Name = "Tokyo";

//create an empty array that will hold all of the cities for the group from the DB
cities = [];
cities.push(city1Name);
cities.push(city2Name);
cities.push(city3Name);
cities.push(city4Name);
cities.push(city5Name);
console.log("The array of cities competing in the election: " + cities);


//!!!!!!!!! get array of group members from DB instead of using the dummy data below
//make an empty array of group members
groupMembers = [];
//push all group members into the array by grabbing them from the database below
//--------------------------------------------------------
//******************************************************/
//example array/dummy data for testing the data:
groupMembers.push({
  name: "Jimmy",
  firstPref: "",
  secondPref: "",
  thirdPref: "",
  fourthPref: "",
  fifthPref: ""
});
groupMembers.push({
  name: "Hassan",
  firstPref: "",
  secondPref: "",
  thirdPref: "",
  fourthPref: "",
  fifthPref: ""
});
groupMembers.push({
  name: "Kelsey",
  firstPref: "",
  secondPref: "",
  thirdPref: "",
  fourthPref: "",
  fifthPref: ""
});
groupMembers.push({
  name: "Jared",
  firstPref: "",
  secondPref: "",
  thirdPref: "",
  fourthPref: "",
  fifthPref: ""
});
groupMembers.push({
  name: "Akofa",
  firstPref: "",
  secondPref: "",
  thirdPref: "",
  fourthPref: "",
  fifthPref: ""
});
console.log("The group members are: "); 

function consoleLogMembers() {
  for (i=0; i < groupMembers.length; i++) {
   console.log(groupMembers[i].name);
  }
};
consoleLogMembers();



//******************************************************/
//--------------------------------------------------------


function grabMemberPrefs() {

  //make for loop to store city preferences(1-5) for each member
  for (i = 0; groupMembers[i] < groupMembers.length; i++) {

    groupMembers[i] = {

      //if user has chosen a first preference, assign that city to groupMember[i].firstPref
      //I will have to grab this data from the database, but for now I will use dummy data
      firstPref: "(GRAB THEIR 1st PREFERENCE FROM THE DB, which depends on how Charity/Jason set up the tables in the DB)--this will be a vacation option name (ie Tokyo)",
      //if user has chosen a second preference/if city2Name has a value in the database for this group, assign that city to groupMember[i].secondPref
      if (city2Name) {
        groupMembers[i].secondPref = "(GRAB THEIR 2nd PREFERENCE FROM THE DB)";
      },
      //if user has chosen a 3rd preference, assign that city to groupMember[i].thirdPref
      if (city3Name) {
        groupMembers[i].thirdPref = "(GRAB THEIR 3rd PREFERENCE FROM THE DB)";
      },
      //if user has chosen a 4th preference, assign that city to groupMember[i].fourthPref
      if (city4Name) {
        groupMembers[i].fourthPref = "(GRAB THEIR 4th PREFERENCE FROM THE DB)";
      },
      //if user has chosen a 5th preference, assign that city to groupMember[i].fifthPref
      if (city5Name) {
        groupMembers[i].fifthPref = "(GRAB THEIR 5th PREFERENCE FROM THE DB)";
      }

    };

  };

};

//I don't call the above code here because I am going to insert dummy data below instead of reading from the DB, just for while I am creating the code for performing an instant runoff election.
//grabMemberPrefs();

//inserting dummy data to assign each member of the dummy group dummy preferences.
//give Jimmy preferences
// .ATTR ISN'T WORKING HOW I THOUGHT IT WOULD ATM SO FIGURE THAT OUT FIRST JORDAN
groupMembers[0].firstPref += city1Name;
groupMembers[0].secondPref += city2Name;
groupMembers[0].thirdPref += city3Name;
groupMembers[0].fourthPref += city4Name;
groupMembers[0].fifthPref += city5Name;
console.log("------------------");
console.log(groupMembers[0].name + "'s");
console.log(`first pref: ${groupMembers[0].firstPref}, second pref: ${groupMembers[0].secondPref}, third pref: ${groupMembers[0].thirdPref}, fourth pref: ${groupMembers[0].fourthPref}, and fifth pref: ${groupMembers[0].fifthPref}`);

groupMembers[1].firstPref += city2Name;
groupMembers[1].secondPref += city3Name;
groupMembers[1].thirdPref += city1Name;
groupMembers[1].fourthPref += city5Name;
groupMembers[1].fifthPref += city4Name;
console.log("------------------");
console.log(groupMembers[1].name + "'s");
console.log(`first pref: ${groupMembers[1].firstPref}, second pref: ${groupMembers[1].secondPref}, third pref: ${groupMembers[1].thirdPref}, fourth pref: ${groupMembers[1].fourthPref}, and fifth pref: ${groupMembers[1].fifthPref}`);

groupMembers[2].firstPref += city5Name;
groupMembers[2].secondPref += city4Name;
groupMembers[2].thirdPref += city3Name;
groupMembers[2].fourthPref += city2Name;
groupMembers[2].fifthPref += city1Name;
console.log("------------------");
console.log(groupMembers[2].name + "'s");
console.log(`first pref: ${groupMembers[2].firstPref}, second pref: ${groupMembers[2].secondPref}, third pref: ${groupMembers[2].thirdPref}, fourth pref: ${groupMembers[2].fourthPref}, and fifth pref: ${groupMembers[2].fifthPref}`);

groupMembers[3].firstPref += city3Name;
groupMembers[3].secondPref += city2Name;
groupMembers[3].thirdPref += city1Name;
groupMembers[3].fourthPref += city5Name;
groupMembers[3].fifthPref += city4Name;
console.log("------------------");
console.log(groupMembers[3].name + "'s");
console.log(`first pref: ${groupMembers[3].firstPref}, second pref: ${groupMembers[3].secondPref}, third pref: ${groupMembers[3].thirdPref}, fourth pref: ${groupMembers[3].fourthPref}, and fifth pref: ${groupMembers[3].fifthPref}`);

groupMembers[4].firstPref += city1Name;
groupMembers[4].secondPref += city2Name;
groupMembers[4].thirdPref += city3Name;
groupMembers[4].fourthPref += city4Name;
groupMembers[4].fifthPref += city5Name;
console.log("------------------");
console.log(groupMembers[4].name + "'s");
console.log(`first pref: ${groupMembers[4].firstPref}, second pref: ${groupMembers[4].secondPref}, third pref: ${groupMembers[4].thirdPref}, fourth pref: ${groupMembers[4].fourthPref}, and fifth pref: ${groupMembers[4].fifthPref}`);



// import dependencies (routes I will need)
// const axios = require("axios");

// 

// Step one: grab all of the city choices/vacaction options for a group. Assign them each a variable.
//route: vacations/group/:groupID


// Step two: grab all of the users that are in a group, push them into an array.

// Step three: grab all of their preferences and assign those preferences as keys/properties of each member.

// Loop through the array of the group members at [i] for their first preference and increase the count for each city at that preference (if three people in the group put tokyo as number 1, tokyo should be assigned a count/value of 3).

//to do that, first establish variables that will hold a count (votes of firstPref) for each city
city1Count = 0;
city2Count = 0;
if (city3Name) {
  city3Count = 0;
};
if (city4Name) {
  city4Count = 0;
};
if (city5Name) {
  city5count = 0;
}

//now i can make the for loop
for (i=0; i < groupMembers.length; i++) {
  if (groupMembers[i].firstPref === city1Name) {
    city1Count++;
  } else if (groupMembers[i].firstPref === city2Name) {
    city2Count++;
  } else if (groupMembers[i].firstPref === city3Name) {
    city3Count++;
  } else if (groupMembers[i].firstPref === city4Name) {
    city4Count++;
  } else if (groupMembers[i].firstPref === city5Name) {
    city5Count++;
  }
};
console.log(`city1Count: ${city1Count}`);
console.log(`city2Count: ${city2Count}`);
console.log(`city3Count: ${city3Count}`);
console.log(`city4Count: ${city4Count}`);
console.log(`city5Count: ${city5Count}`);
// loop thru/compare the counts of each city/vacation option to see which one has the highest amount, AND which one has the lowest amount!

// take the one with the highest count and compare it to the length of the groupMembers array divided by 2 (to check if it recieved greater than 50% of the votes). If it got more than half of the votes, then return it as the recommended winner/ store it as a new variable to push to the DB! (we will have to join this recommended pick with the group id).

// if no city/vacation option recieved more than 50% of the votes, then loop thru the array of groupMembers at [i] and inside of that, loop thru all of the first, second, third, 4th, and 5th prefs for each member and set that value to be equal to "eliminated".

// loop thru the preferences and find all prefs where the value is equal to "eliminated". Then, check if the preference below that one exists/is not null (so check for a secondPref if firstPref = "eliminated", check for thirdPref if secondPref is equal to "eliminated", etc.) Set the "eliminated" pref equal to the value of the pref one lower than it (for example, set the eliminated first pref equal to the value of the secondPref assuming it has value).

// if the pref below the one that is eliminated is null, then do not change the value, leave the newly eliminated pref as "eliminated".

// run the check again, comparing to see if any city/vacation option recieved over 50% of the votes. If no city/vacation does, then run thru the whole loop again until one of them does. 




// if no city recieves over 50% of the votes or more:

//OPTION ONE: show them the average rating of each vacation option so they can choose based on that.

//OPTION TWO: show them just the highest rated vacation option(s)