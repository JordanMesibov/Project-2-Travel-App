# API ROUTES REFERENCE

## /api/users
### /api/users GET route - 
Gets info on all users
### /api/users POST route -
Registers new user, using req.body
### /api/users/status GET route - 
Returns user information if user is logged in, or returns error if not.
### /api/users/login POST route - 
Passport authenticated login
### /api/users/logout GET route -
Logs out.
### /api/users/:username GET route - 
gets user info for username entered as parameter, only displays basic information from within table
### /api/users/:username PUT route - 
Updates user info for user with username in parameter :username, using req.body key value pairs.
### /api/users/:username DELETE route - 
Deletes a user where username is parameter :username.
### /api/users/id/:id Get route -
gets user info user id entered as a parameter, displaying full information, including associated groups, and through them, vacation options.
### /api/users/id/:id PUT route -
Updates user information for user with id in :id parameter, uses key value pairs sent in req.body to add/change data in fields.

## /api/groups - to be completed later
### /api/groups GET route - 
Gets info for all of the groups
### /api/groups POST route - 
Posts new group, with new name in req.body
### /api/groups/:id GET route -
Gets information on a specific group with an id passed as a parameter, including associated users and vacationoptions.
### /api/groups/:id DELETE route - 
Deletes group with id passed in parameter

## /api/vacations - to be completed later

## /api/usergroup - to be completed later