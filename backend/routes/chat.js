const express = require("express");
const router = express.Router();

const { detectService } = require("../chatRouter");

const { getEvents } = require("../mcp/eventsServer");
const { getLibrary } = require("../mcp/libraryServer");
const { getPlacements } = require("../mcp/placementsServer");
const { getCafeteria } = require("../mcp/cafeteriaServer");
const { getNotices } = require("../mcp/noticesServer");
const { getAcademics } = require("../mcp/academicsServer");
const { generateResponse } = require("../gemini");

router.post("/", async (req, res) => {
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

const prompt = `
User Question:
${message}

Campus Data:
${JSON.stringify(data, null, 2)}

Answer naturally.
Do not use markdown symbols like ** or *.
Use plain text only.
`;

const aiReply = await generateResponse(prompt);

res.json({
  routedTo: service,
  answer: aiReply,
});
});

module.exports = router;