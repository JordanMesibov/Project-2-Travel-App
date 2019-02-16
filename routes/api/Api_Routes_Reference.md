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
gets user info for username entered as parameter
### /api/users/:username PUT route - 
Updates user info for user with username in parameter :username, using req.body key value pairs.
### /api/users/:username DELETE route - 
Deletes a user where username is parameter :username.
### /api/users/id/:id Get route -
gets user info user id entered as a parameter
### /api/users/id/:id PUT route -
Updates user information for user with id in :id parameter, uses key value pairs sent in req.body to add/change data in fields.

## /api/groups - to be completed later

## /api/vacations - to be completed later

## /api/usergroup - to be completed later