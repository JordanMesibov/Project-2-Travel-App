# API ROUTES REFERENCE

## /api/users
* /api/users **GET** route - 
  * Gets info on all users
* /api/users **POST** route -
  * Registers new user, using req.body
* /api/users/status **GET** route - 
  * Returns user information if user is logged in, or returns error if not.
* /api/users/login **POST** route - 
  * Passport authenticated login
* /api/users/logout **GET** route -
  * Logs out.
* /api/users/:username **GET** route - 
  * Gets user info for username entered as parameter, only displays basic information from within table
* /api/users/:username **PUT** route - 
  * Updates user info for user with username in parameter :username, using req.body key value pairs.
* /api/users/:username **DELETE** route - 
  * Deletes a user where username is parameter :username.
* /api/users/id/:id **GET** route -
  * Gets user info user id entered as a parameter, displaying full information, including associated groups, and through them, vacation options.
* /api/users/id/:id **PUT** route -
  * Updates user information for user with id in :id parameter, uses key value pairs sent in req.body to add/change data in fields.
 ----------
 
## /api/groups -
* /api/groups **GET** route - 
  * Gets info for all of the groups
* /api/groups **POST** route - 
  * Posts new group, with new name in req.body
* /api/groups/:id **GET** route -
  * Gets information on a specific group with an id passed as a parameter, including associated users and vacationoptions.
* /api/groups/:id PUT route -
  * Updates group information for group with id passed in :id parameter, uses key value pairs sent in req.body to add/change data (This far this will only be used to add winner).
* /api/groups/name/:name **GET** route -
  * Gets information on a specific group with the name of the group passed as a parameter, including associated users and vacationoptions.
* /api/groups/:id **DELETE** route - 
  * Deletes group with id passed in parameter
 ----------
 
## /api/vacations -
* /api/vacations **GET** route -
  * Gets all vacation options
* /api/vacations **POST** -
  * Posts new vacation options with contents or req.body
* /api/vacations/:id **GET** route - 
  * Gets vacation options info for id passed as parameter :id
* /api/vacations/:id **DELETE** route -
  * Deletes vacation options with id passed in parameter :id
* /api/vacations/group/:groupid **GET** route-
  * Gets vacation options associated with a group with id passed as parameter :groupid
 ----------
 
## /api/usergroup -
* /api/usergroup **GET** route - 
  * Gets all usergroup associations between users table and groups table.
* /api/usergroup **POST** route -
  * Creates new association between a user and a group by sending GroupId and UserId key value pairs in req.body.  User whose id is sent will be made a member of Group whose id is sent.
   ----------

## /api/vacationratings - 
* /api/vacationratings **GET** route -
  * Gets all vacationratings
* /api/vacationratings **POST** route - 
  * posts a new set of vacation ratings, where city1ranking and city1rating are required and the others optional
* /api/vacationratings/:id **GET** route - 
  * Get vacationratings where UserId is id passed in :id parameter
* /api/vacationratings/vacations/:id **GET** route -
  * Gets vacationratings where VacationOptionId is id passed in :id parameter
 
## /api/vote -
* /api/vote **POST** route -
  * Runs ranked voting with given group id number passed as parameter :groupId, feeds city names taken from that group's vacationOptions into rankedVoting.js and returns results.  As of now, function only takes in only cities, not votes.  Using dummy vote data, but seems to be actually using input cities.  If no cities selected, sends error string.
