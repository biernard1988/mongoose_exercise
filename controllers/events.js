const Event = require("../models/event");

const getEvents = async (req, res) => {
  try {
    const events = await Event.find({});
    res.json(events);
  } catch (error) {
    console.log(error);
    res.status(500).send("Ops... Something Went Wrong");
  }
};
const createEvent = async (req, res) => {
  try {
    const { name, description, location } = req.body;
    const event = await Event.create({
      name,
      description,
      location,
    });
    res.status(201).json(event);
  } catch (error) {
    console.log(error);
    res.status(500).send("Ops... Something Went Wrong");
  }
};
const getEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findById(id); /* .populate("organizer"); */
    res.json(event);
  } catch (error) {
    console.log(error);
    res.status(500).send("Ops... Something Went Wrong");
  }
};

module.exports = {
  getEvents,
  createEvent,
  getEvent,
};
