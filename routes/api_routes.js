const express = require("express");
const router = express.Router();
const fs = require("fs");

// get test
// /api

router.get("/api", (req, res) => {
  res.json({ msg: "success" });
});

//api/all

//route/get

//use fs read json files

//convert

//send the enitre array in res.json

router.get("/api/all", (req, res) => {
  // res.json({ msg: "success" });
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) throw err;
    data = JSON.parse(data);
    res.send(data);
  });
});

// post new pokemon
router.post("/api/new", (req, res) => {
  res.json(req.body);
});

module.exports = router;
