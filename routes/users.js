// Import the 'express' module.
const express = require("express");

// Import specific controller functions for users.
const {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");

// Create a router instance using the express.Router() method.
const usersRouter = express.Router();

// Define routes for handling HTTP GET and POST requests on the "/users" endpoint.
usersRouter.route("/").get(getUsers).post(createUser);

// Define routes for handling HTTP GET, PUT, and DELETE requests on the "/users/:id" endpoint.
usersRouter.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

// Export the usersRouter so it can be used in other parts of the application.
module.exports = usersRouter;
