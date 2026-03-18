const express = require("express");
const router = express.Router();
const adsBrain = require("../logic/adsBrain");

router.post("/generate", (req, res) => {
  const data = req.body;
  const result = adsBrain(data);
  res.json(result);
});

module.exports = router;
