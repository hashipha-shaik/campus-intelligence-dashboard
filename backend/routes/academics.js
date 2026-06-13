const express = require("express");
const router = express.Router();

const academics = require("../data/academics.json");

router.get("/", (req, res) => {
  res.json(academics);
});

module.exports = router;