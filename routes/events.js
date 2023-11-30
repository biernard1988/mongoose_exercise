// Import the express module.
const express = require("express");

// Import specific controller functions for events.
const {
  getEvents,
  createEvent,
  getEvent,
  joinEvent,
} = require("../controllers/events");

// Create a router instance using the express.Router() method.
const eventsRouter = express.Router();

// Define routes for handling HTTP GET and POST requests on the "/events" endpoint.
eventsRouter.route("/").get(getEvents).post(createEvent);

// Define a route for handling HTTP GET requests on the "/events/:id" endpoint.
eventsRouter.route("/:id").get(getEvent);

// Define a route for handling HTTP PATCH requests on the "/events/:id/join" endpoint.
eventsRouter.route("/:id/join").patch(joinEvent);

// Export the eventsRouter so it can be used in other parts of the application.
module.exports = eventsRouter;
