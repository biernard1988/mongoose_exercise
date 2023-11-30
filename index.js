// Import the 'express' module to create a web application.
const express = require("express");

// Load environment variables from the .env file.
require("dotenv/config");

// Connect to the database through the './db' file.
require("./db");

// Import routers for users and events.
const usersRouter = require("./routes/users");
const eventsRouter = require("./routes/events");

// Create an instance of the express application.
const app = express();

// Define the port on which the application will run.
const port = 3333;

// Middleware to parse request bodies as JSON.
app.use(express.json());

// Set up routers to handle specific routes.
app.use("/users", usersRouter);
app.use("/events", eventsRouter);

// Start the server on the specified port.
app.listen(port, () => {
  // Print a message to the console when the server is ready to receive requests.
  console.log(`Example app listening on port ${port}`);
});
