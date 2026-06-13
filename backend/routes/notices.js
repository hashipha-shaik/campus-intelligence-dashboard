const express = require("express");
const router = express.Router();

const notices = require("../data/notices.json");

router.get("/", (req, res) => {
  res.json(notices);
});

module.exports = router;