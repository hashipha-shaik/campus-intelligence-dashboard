const express = require("express");
const router = express.Router();

const { detectService } = require("../chatRouter");

const { getEvents } = require("../mcp/eventsServer");
const { getLibrary } = require("../mcp/libraryServer");
const { getPlacements } = require("../mcp/placementsServer");
const { getCafeteria } = require("../mcp/cafeteriaServer");
const { getNotices } = require("../mcp/noticesServer");
const { getAcademics } = require("../mcp/academicsServer");

router.post("/", (req, res) => {
  const { message } = req.body;

  const service = detectService(message);

  let data;

  switch (service) {
    case "events":
      data = getEvents();
      break;

    case "library":
      data = getLibrary();
      break;

    case "placements":
      data = getPlacements();
      break;

    case "cafeteria":
      data = getCafeteria();
      break;

    case "notices":
      data = getNotices();
      break;

    case "academics":
      data = getAcademics();
      break;

    default:
      data = {
        message: "No matching MCP server found."
      };
  }

  res.json({
    routedTo: service,
    data,
  });
});

module.exports = router;