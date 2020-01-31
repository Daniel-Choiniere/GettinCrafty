const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("hello from node bro!");
});

module.exports = router;
