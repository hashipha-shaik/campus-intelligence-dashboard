const placements = require("../data/placements.json");

function getPlacements() {
  return placements;
}

module.exports = { getPlacements };