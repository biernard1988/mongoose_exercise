// Import the Event model.
const Event = require("../models/result");

// Function to get all events
const getEvents = async (req, res) => {
  try {
    // Retrieve all events from the database
    const events = await Event.find({});

    // Respond with the list of events in JSON format
    res.json(events);
  } catch (error) {
    // Log the error and send a 500 Internal Server Error response
    console.log(error);
    res.status(500).send("Ops... Something Went Wrong");
  }
};

// Function to create a new event
const createEvent = async (req, res) => {
  try {
    // Extract event data from the request body
    const { name, description, location, organizer } = req.body;

    // Create a new event in the database
    const result = await Event.create({
      name,
      description,
      location,
      organizer,
    });

    // Respond with the created event in JSON format
    res.status(201).json(result);
  } catch (error) {
    // Log the error and send a 500 Internal Server Error response
    console.log(error);
    res.status(500).send("Ops... Something Went Wrong");
  }
};

// Function to get a specific event by ID
const getEvent = async (req, res) => {
  try {
    // Extract the event ID from the request parameters
    const { id } = req.params;

    // Find the event in the database by ID and populate the "organizer" field
    const result = await Event.findById(id).populate("organizer");

    // Respond with the found event in JSON format
    res.json(result);
  } catch (error) {
    // Log the error and send a 500 Internal Server Error response
    console.log(error);
    res.status(500).send("Ops... Something Went Wrong");
  }
};

// Function to join an event by adding a user ID to the "attendees" array
const joinEvent = async (req, res) => {
  try {
    // Extract the event ID and user ID from the request parameters and body
    const { id } = req.params;
    const { userId } = req.body;

    // Update the event by pushing the user ID to the "attendees" array
    const result = await Event.updateOne(
      { _id: id },
      { $push: { attendees: userId } }
    );

    // Respond with the update result in JSON format
    res.json(result);
  } catch (error) {
    // Log the error and send a 500 Internal Server Error response
    console.log(error);
    res.status(500).send("Ops... Something Went Wrong");
  }
};

// Export all functions to be used in the eventsRouter
module.exports = {
  getEvents,
  createEvent,
  getEvent,
  joinEvent,
};
