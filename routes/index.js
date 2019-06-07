var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", {
    title: "Express",
    arrayOfDevices: [
      { id: 1, status: false },
      { id: 2, status: true },
      { id: 3, status: false },
      { id: 4, status: true }
    ]
  });
});

module.exports = router;
