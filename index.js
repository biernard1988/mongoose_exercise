const express = require("express");
require("dotenv/config");
require("./db");

const usersRouter = require("./routes/users");
const eventsRouter = require("./routes/events");

const app = express();
const port = 3333;

app.use(express.json());

app.use("/users", usersRouter);
app.use("/events", eventsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
