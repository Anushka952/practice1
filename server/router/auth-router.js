const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).send("WELCOME");
});

router.get("/register", (req, res) => {
  res.status(200).send("WELCOME TO REGISTER");
});

module.exports = router;
