# burger-sequelize
Full-stack application that lets users create and eat their own burgers. Uses Node-Express server implementing a MVC architecture, and uses Sequelize ORM for handling MySQL database queries for data storage. Implements a RESTful API scheme to communicate from the client web-page to the server.

See it in action (NOTE: Heroku may require some time to start the server if sleeping):

`https://burger-sequelize-app-mpp.herokuapp.com/`


## Webpage

Upon navigating to the home page, users will see two lists of burgers. The first list will be unconsumed burgers, and the second will be already-devoured burgers. There will also be a form to submit a new burger.

The lists of burgers are populated from entries stored in the database, which holds records of each burger and whether or not they have been devoured. Entries in the list that are not devoured will have a "Devour" button next to them. When clicked, the status of the burger will be updated in the database and the burger will be moved to the list of devoured burgers.

The form provides the ability for users to enter their own burgers. When a user fills out the name of a burger and clicks "Add Burger", a new burger is added to the database with an 'undevoured' status. The burger will then be added to the list of undevoured burgers on the page as well. The "Burger Name" field must contain valid content or it will not be submitted. The current validation requires only that the name field is non-empty and does not contain only white-space characters (spaces, tabs, etc.).


## API Routes

The back-end functionality of the application can also be accessed through API routes

### GET: /api/burgers

Responds with a JSON object containing an array of all burger objects. Burger objects have the following properties:

* id: a unique identifier
* burger_name: the name of the burger
* devoured: a status flag indicating if a burger has been eaten. A '1' means devoured, '0' means undevoured.

### POST: /api/burgers

A sucessful request adds a new burger to the database. The body of the request must contain a key called "name" with a value that will be the name of the burger. The name must be a string that is non-empty and does not contain only white-space characters (spaces, tabs, etc.), otherwise the request will fail.

Responds with a JSON object containing the ID of the new burger if successful.

### PUT: /api/burgers/devour/[id]

A successful request will change the status of the burger with the 'id' provided to devoured. The response will show success if the id was found as status was successfully changed. Trying to devour a non-existant burger or one that is already devoured will result in an error.
