var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send("display product");
});

router.get("/add", function (req, res, next) {
  res.send("Add product");
});

module.exports = router;
