const express = require("express");
const router = express.Router();

const cafeteria = require("../data/cafeteria.json");

router.get("/", (req, res) => {
  res.json(cafeteria);
});

module.exports = router;