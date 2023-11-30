// Import necessary components from the mongoose library
const { Schema, model } = require("mongoose");

// Define a mongoose schema for the Event model
const eventSchema = new Schema({
  // Define the name property with type String and required constraint
  name: { type: String, required: true },

  // Define the description property with type String and required constraint
  description: { type: String, required: true },

  // Define the location property with type String and required constraint
  location: { type: String, required: true },

  // Define the organizer property as a reference to the User model using ObjectId
  organizer: { type: Schema.Types.ObjectId, ref: "User" },

  // Define the attendees property as an array of references to the User model using ObjectId
  attendees: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

// Create a mongoose model named "Event" based on the defined schema
const Event = model("Event", eventSchema);

// Export the Event model to be used in other parts of the application
module.exports = Event;
