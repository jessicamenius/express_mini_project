const express = require("express");
const router = express.Router();
const fs = require("fs");
const util = require("util");

const readFileSync = util.promisify(fs.readFile);
const writeFileSync = util.promisify(fs.writeFIle);

router.get("/api", (req, res) => {
  res.json({ msg: "success" });
});

//api/all

//route/get

//use fs read json files

//convert

//send the enitre array in res.json

router.get("/api/all", async (req, res) => {
  res.json({ msg: "success" });
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

module.exports = router;
