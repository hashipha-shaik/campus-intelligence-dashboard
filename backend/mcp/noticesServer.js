const notices = require("../data/notices.json");

function getNotices() {
  return notices;
}

module.exports = { getNotices };