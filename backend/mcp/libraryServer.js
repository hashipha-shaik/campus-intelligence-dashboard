const library = require("../data/library.json");

function getLibrary() {
  return library;
}

module.exports = { getLibrary };