Bug #1 auth/login route returns token whether or not the username and password is in database, even if there is no password or username.
Bug #2 The model for User.get was not providing 404 error if not found, needed to add 'throw' keyword
Bug #3 The users/ route was returning more than basic info.
Bug #4 middleware auth.js simply decoded token instead of verifying it. 
Bug #5 Additional module.export = app in app.js(not sure if this qualifies as bug)