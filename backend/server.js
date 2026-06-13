const express = require("express");
const cors = require("cors");

const eventsRoute = require("./routes/events");
const libraryRoute = require("./routes/library");
const placementsRoute = require("./routes/placements");
const cafeteriaRoute = require("./routes/cafeteria");
const noticesRoute = require("./routes/notices");
const academicsRoute = require("./routes/academics");
const chatRoute = require("./routes/chat");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/events", eventsRoute);
app.use("/library", libraryRoute);
app.use("/placements", placementsRoute);
app.use("/cafeteria", cafeteriaRoute);
app.use("/notices", noticesRoute);
app.use("/academics", academicsRoute);
app.use("/chat", chatRoute);

app.get("/", (req, res) => {
  res.send("Campus Dashboard API Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});