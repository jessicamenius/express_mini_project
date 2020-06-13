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
  let pokemonData = await readFileSync("data.json");
  pokemonData = JSON.parse(pokemonData);
  res.send(pokemonData);
});

module.exports = router;
