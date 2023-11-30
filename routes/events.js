const express = require("express");

const { getEvents, createEvent, getEvent } = require("../controllers/events");

const eventsRouter = express.Router();

eventsRouter.route("/").get(getEvents).post(createEvent);

eventsRouter.route("/:id").get(getEvent);

module.exports = eventsRouter;
