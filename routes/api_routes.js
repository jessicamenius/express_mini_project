const express = require("express");
const router = express.Router();
const fs = require("fs");

// get test
// /api

router.get("/api", (req, res) => {
  res.json({ msg: "success" });
});

// get all pokemon
// /api/all

// route/get

// use fs read json files

// convert

// send the enitre array in res.json

router.get("/api/all", (req, res) => {
  // res.json({ msg: "success" });
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) throw err;
    data = JSON.parse(data);
    res.send(data);
  });
});

// // post new pokemon
// router.post("/api/new", (req, res) => {
//   let pokemonData = req.body;
//   let data = fs.readFileSync("data.json", "utf8");
//   data = JSON.parse(data);
//   data.pokemon.push(pokemonData);
//   fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
//   res.json({ msg: "success" });
// });

// thomas's code

router.post("/api/new", (req, res) => {
  let data = fs.readFileSync("data.json", "utf8");
  data = JSON.parse(data);

  // let id = data.pokemon[data.pokemon.length - 1].id + 1;

  let id = data.pokemon.length + 1;

  const { name, type, moves } = req.body;

  data.pokemon.push({ name, id, type, moves });

  fs.writeFileSync("data.json", JSON.stringify(data, null, 2));

  res.send({ msg: "success" });
});

module.exports = router;
