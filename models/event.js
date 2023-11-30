const { Schema, model } = require("mongoose");

const eventSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },

  //organizer: { type: Schema.Types.ObjectId, ref: "User" },
  // attendees: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

const Event = model("Event", eventSchema);

module.exports = Event;
