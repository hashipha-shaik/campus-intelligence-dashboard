const express = require("express");
const router = express.Router();

const library = require("../data/library.json");

router.get("/", (req, res) => {
  res.json(library);
});

module.exports = router;