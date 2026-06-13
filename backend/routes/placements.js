const express = require("express");
const router = express.Router();

const placements = require("../data/placements.json");

router.get("/", (req, res) => {
  res.json(placements);
});

module.exports = router;